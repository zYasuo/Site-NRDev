import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.nrtelecom.com.br',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.ZIMBRA_USER,
    pass: process.env.ZIMBRA_PASS,
  },
});

export default transporter;
