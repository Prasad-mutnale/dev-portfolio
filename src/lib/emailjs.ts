import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_8efyvei';
const EMAILJS_TEMPLATE_ID = 'template_6n1ed4x';
const EMAILJS_PUBLIC_KEY = '4V-cdPwladI2S7fll';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface EmailData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_name?: string; // Your name
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.from_name,
      from_email: data.from_email,
      subject: data.subject,
      message: data.message,
      to_name: data.to_name || 'Prasad R Mutnale',
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

export default emailjs;
