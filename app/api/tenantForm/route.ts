import nodemailer from 'nodemailer';

interface TenantFormData {
  fullName: string;
  email: string;
  companyName?: string; // Company Name is optional
  numberOfPeople: string;
  leaseStartPeriod: string;
  endPeriodForRental: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const data: TenantFormData = await req.json(); // Parse the incoming JSON body

    // Create a Nodemailer transporter using your Hostinger SMTP configuration
   const transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: Number(process.env.SMTP_PORT),
         secure: true,
         auth: {
           user: process.env.SMTP_USER,
           pass: process.env.SMTP_PASS,
         },
       });

    // Define the email content with the updated fields
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: 'Tenant Application Form Submission',
      text: `
        Full Name: ${data.fullName}
        Email: ${data.email}
        Company Name: ${data.companyName || 'N/A'}
        Number of People: ${data.numberOfPeople}
        Lease Start Period: ${data.leaseStartPeriod}
        End Period for Rental: ${data.endPeriodForRental}
        Message: ${data.message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success message
    return new Response(
      JSON.stringify({ message: 'Your tenant application has been submitted successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to submit the tenant application.' }),
      { status: 500 }
    );
  }
}
