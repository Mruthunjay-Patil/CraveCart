import transporter from "../config/mailConfig.js";
import orderTemplate from "../templates/orderTemplate.js";

const sendOrderConfirmation = async (
  customerName,
  customerEmail,
  orderId,
  amount,
  items
) => {
  try {
    console.log("==================================");
    console.log("Sending email to:", customerEmail);

    const info = await transporter.sendMail({
      from: `"🍔 CraveCart" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: "🎉 Your CraveCart Order is Confirmed!",
      html: orderTemplate(customerName, orderId, amount, items),
    });

    console.log("✅ Order confirmation email sent");
    console.log("Accepted:", info.accepted);
    console.log("Rejected:", info.rejected);
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
    console.log("==================================");
  } catch (error) {
    console.error("❌ Email Error:");
    console.error(error);
  }
};

export default sendOrderConfirmation;