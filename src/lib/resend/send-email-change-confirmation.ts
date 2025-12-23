'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type SendEmailChangeConfirmationT = {
  newEmail: string;
  url: string;
};

export const sendEmailChangeConfirmation = async ({
  newEmail,
  url
}: SendEmailChangeConfirmationT) => {
  const { error } = await resend.emails.send({
    from: 'Make IT Job <onboarding@resend.dev>',
    to: process.env.MY_EMAIL!,
    subject: 'Update your email address',
    text: `Click the link to update your email address: ${url}`
  });

  if (error) {
    console.error(error);
  }
};
