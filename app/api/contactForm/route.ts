import nodemailer from "nodemailer";

interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const data: FormData = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    console.log("SMTP config:", {
      host: process.env.SMTP_HOST,
      user: process.env.SMTP_USER,
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: "Contact",
      text: `
        Name: ${data.name}
        Business: ${data.business}
        Email: ${data.email}
        Phone: ${data.phone}
        Message: ${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Your message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send the email." }),
      { status: 500 }
    );
  }
}
