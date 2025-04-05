import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const data: FormData = await req.json(); // Parse the incoming JSON body

    // Create a Nodemailer transporter using your Hostinger SMTP configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465, // Port for secure email sending
      secure: true,
      auth: {
        user: 'contact@zirrah.online', // Your Hostinger email
        pass: '100%Rasel', // Your email password or SMTP password
      },
    });

    // Define the email content
    const mailOptions = {
      from: 'contact@zirrah.online', // Sender email address
      to: 'contact@zirrah.online', // Recipient email address
      subject: 'For Bussiness',
      text: `
        Name: ${data.name}
        Business: ${data.business}
        Email: ${data.email}
        Phone: ${data.phone}
        Message: ${data.message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Form data sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to send the email.' }),
      { status: 500 }
    );
  }
}
