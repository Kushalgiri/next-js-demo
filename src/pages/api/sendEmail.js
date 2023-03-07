import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Get form data from request body
  const { name, email, message } = req.body;

  // Create transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "kush.giri.457@gmail.com",
      pass: "PredatorHelios_@457",
    },
  });

  // Configure email options
  const mailOptions = {
    from: "kushalgiri381@gmail.com",
    to: "kush.giri.457@gmail.com",
    subject: `test email`,
    html: `test mail maila`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    // Return error response
    res.status(500).json({ message: "Error sending email", error });
  }
}
