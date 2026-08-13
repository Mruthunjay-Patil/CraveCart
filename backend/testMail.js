import "dotenv/config";
import transporter from "./config/mailConfig.js";

const sendTestMail = async () => {
  try {
    const info = await transporter.sendMail({
      from: `"CraveCart" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Sends the email to yourself
      subject: "🍔 Welcome to CraveCart!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border:1px solid #ddd; border-radius:10px;">
          <h1 style="color:#FF6B35;">🍔 CraveCart</h1>
          <h2>Email Configuration Successful 🎉</h2>

          <p>Hello,</p>

          <p>Your <strong>Nodemailer</strong> configuration is working successfully.</p>

          <p>You are now ready to send:</p>

          <ul>
            <li>✅ Order Confirmation Emails</li>
            <li>💳 Payment Successful Emails</li>
            <li>🚚 Delivery Status Updates</li>
            <li>🔑 Password Reset Emails</li>
          </ul>

          <hr>

          <p><b>Craving Delivered.</b></p>

          <p style="color:gray;font-size:12px">
            This is an automated email from CraveCart.
          </p>
        </div>
      `,
    });

    console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.error("❌ Email failed:");
    console.error(error);
  }
};

sendTestMail();