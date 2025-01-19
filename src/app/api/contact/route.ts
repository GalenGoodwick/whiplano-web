import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body: ContactFormData = await req.json();

    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS, 
      },
    });

    // Compose the email
    const mailOptions = {
      from: "whiplano08@gmail.com", 
      to: "danielvincent1718@gmail.com", 
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a message from the contact form:
      
Name: ${name}
Email: ${email}
Message: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
