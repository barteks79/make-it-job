'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type SendVerificationEmailT = {
  userEmail: string;
  url: string;
};

export const sendVerificationEmail = async ({ userEmail, url }: SendVerificationEmailT) => {
  console.log('sending email');

  const { data, error } = await resend.emails.send({
    from: 'Make IT Job <onboarding@resend.dev>',
    to: process.env.MY_EMAIL!,
    subject: 'Verify your email address',
    text: `Click the link to verify your email: ${url}`
  });

  if (error) {
    console.error(error);
  }
};
