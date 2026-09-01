import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContactEmail = async (contact) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `New Contact Enquiry - ${contact.name}`,

    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Contact Enquiry</h2>

        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${contact.subject || "N/A"}</p>
        <p><strong>Message:</strong></p>

        <div style="
          padding: 15px;
          background: #f5f5f5;
          border-radius: 8px;
        ">
          ${contact.message || "N/A"}
        </div>

        <hr />

        <p>
          <strong>Contact ID:</strong> ${contact.id}
        </p>

        <p style="color: #666;">
          This enquiry was submitted from the website.
        </p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};