import sendOrderConfirmation from "../services/emailService.js";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Place Order
const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5173";

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    // Send Order Confirmation Email
    await sendOrderConfirmation(
      `${req.body.address.firstName} ${req.body.address.lastName}`,
      req.body.address.email,
      newOrder._id,
      req.body.amount,
      req.body.items
    );

    // Clear Cart
    await userModel.findByIdAndUpdate(req.body.userId, {
      cartData: {},
    });

    // Stripe Checkout Items
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    // Delivery Charge
    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 200,
      },
      quantity: 1,
    });

    // Create Stripe Session
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({
      success: true,
      session_url: session.url,
    });

  } catch (error) {
    console.error("========== PLACE ORDER ERROR ==========");
    console.error(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Verify Order
const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;

  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, {
        payment: true,
      });

      res.json({
        success: true,
        message: "Paid",
      });
    } else {
      await orderModel.findByIdAndDelete(orderId);

      res.json({
        success: false,
        message: "Not Paid",
      });
    }
  } catch (error) {
    console.error(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// User Orders
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({
      userId: req.body.userId,
    });

    res.json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.error(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Admin Order List
const listOrders = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);

    if (userData && userData.role === "admin") {
      const orders = await orderModel.find({});

      res.json({
        success: true,
        data: orders,
      });
    } else {
      res.json({
        success: false,
        message: "You are not admin",
      });
    }
  } catch (error) {
    console.error(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Update Order Status
const updateStatus = async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);

    if (userData && userData.role === "admin") {
      await orderModel.findByIdAndUpdate(req.body.orderId, {
        status: req.body.status,
      });

      res.json({
        success: true,
        message: "Status Updated Successfully",
      });
    } else {
      res.json({
        success: false,
        message: "You are not an admin",
      });
    }
  } catch (error) {
    console.error(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

export {
  placeOrder,
  verifyOrder,
  userOrders,
  listOrders,
  updateStatus,
};