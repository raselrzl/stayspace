"use client"
import FooterCard from "../components/FooterCard";

export default function FooterCardData() {
  const services = [
    {
      heading: "Legal Information",
      details: `
        <strong>Company Name:</strong> Centralis Group Invest AB<br/>
        <strong>Registered Office:</strong> NORRKÖPING<br/>
        <strong>Contact Information:</strong> contact@staysafe.se<br/>
        +46103333536<br/>
        <strong>Organization Number:</strong> 559138-9597<br/>
        <strong>VAT Registration Number:</strong> SE559138959701
      `,
      image: "/legal.jpg",
    },
    {
      heading: "Privacy Policy",
      details: `
        <strong>1. What information do we collect?</strong><br/>
        We collect personal information that you voluntarily provide to us, for example when you fill out contact forms, register for our services or communicate with us. This may include name, email address, phone number and company information.<br/><br/>

        <strong>2. How do we use your information?</strong><br/>
        We use your personal information to:<br/>
        - Provide and improve our services<br/>
        - Communicate with you and respond to your inquiries<br/>
        - Send relevant information, such as offers and updates (you can always opt out of marketing messages)<br/>
        - Ensure a smooth user experience on our website<br/><br/>

        <strong>3. Sharing of data</strong><br/>
        We do not share your personal data with third parties, except if necessary to complete our services (e.g. payment providers or technical services) or if required by law.<br/><br/>

        <strong>4. Cookies and Tracking Technologies</strong><br/>
        We use cookies and similar technologies to improve the user experience on our website. These help us collect information about how you navigate our site and customize content based on your preferences. You can choose to disable cookies in your browser, but some features of the website may be affected.<br/><br/>

        <strong>5. Security</strong><br/>
        We take appropriate technical and organizational measures to protect your personal data against unauthorized access, loss or misuse.<br/><br/>

        <strong>6. Your rights</strong><br/>
        You have the right to request information about what personal data we have about you, as well as the right to correct, erase or request that we restrict the processing of your data. If you wish to exercise these rights or have any questions about our handling of your personal data, please contact us.<br/><br/>

        <strong>7. Changes to the Privacy Policy</strong><br/>
        We may update this Privacy Policy. In the event of major changes, we will inform you by publishing an updated version on our website.<br/><br/>

        <strong>Contact</strong><br/>
        If you have any questions about our privacy policy or how we handle your personal data, please contact us at kontakt@stayspace.se
      `,
      image: "/privacy.jpg",
    },
  ];

  return (
    <div className="flex flex-col mt-8 mb-24 pb-10">
      <div className="md:w-[60%] mx-auto h-auto mt-[100px] px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FooterCard
              key={index}
              heading={service.heading}
              details={service.details}
              image={service.image} // Passing the image path for each service
            />
          ))}
        </div>
      </div>
    </div>
  );
}
