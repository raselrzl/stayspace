import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  business: string;
  email: string;
  phone: string;
  streetName: string;
  zipCode: string;
  city: string;
  bedroom: number;
  beds: number;
  livingRoom: number;
  kitchen: number;
  toilets: number;
  showers: number;
  desiredPrice: number; // Ensure this is a number type
  accommodationType: string;
  startingDate: string;
  otherInformation: string;
  consent: boolean;
}

export async function POST(req: Request) {
  try {
    const data: FormData = await req.json(); // Parse the incoming JSON body

    // Ensure desiredPrice is a number
    const desiredPrice = parseFloat(data.desiredPrice.toString()); // Convert to number if it's not already

    if (isNaN(desiredPrice)) {
      throw new Error('Invalid desiredPrice value'); // Handle case where desiredPrice is not a valid number
    }

    // Create a Nodemailer transporter using your Hostinger SMTP configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contact@zirrah.online',
        pass: '100%Rasel',
      },
    });

    // Define the email content
    const mailOptions = {
      from: 'contact@zirrah.online',
      to: 'contact@zirrah.online',
      subject: 'For Business Inquiry',
      text: `
        Name: ${data.name}
        Business: ${data.business}
        Email: ${data.email}
        Phone: ${data.phone}
        Street: ${data.streetName}
        Zip Code: ${data.zipCode}
        City: ${data.city}
        Bedroom Count: ${data.bedroom}
        Beds: ${data.beds}
        Living Room: ${data.livingRoom}
        Kitchen: ${data.kitchen}
        Toilets: ${data.toilets}
        Showers: ${data.showers}
        Desired Price: ${desiredPrice.toFixed(2)}
        Type of Accommodation: ${data.accommodationType}
        Starting Date: ${data.startingDate}
        Additional Information: ${data.otherInformation}
        Consent Given: ${data.consent ? 'Yes' : 'No'}
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
