
// Notice from where NextResponse is imported:
import type { NextApiRequest, NextApiResponse } from 'next';

import { sendEmail } from '@/utils/ses-utils';
import {getEmailTemplate} from '@/templates/email-template';
import {getEmailContent} from '@/templates/email-content-template'

interface FormData {
  nome: string;
  email: string;
  telefono: string;
  messaggio: string;
}

const processContactForm = (formData: FormData) => {
  const { nome, email, telefono, messaggio } = formData
  const subject =
    "Conferma ricezione messaggio - MF Digital Garden"
  const date = new Date().toLocaleDateString()
  const content = getEmailContent()
  const title = "Conferma ricezione messaggio"
  const from= 'info@growave.it'
  const emailContent = getEmailTemplate(date, content, title, nome, email, telefono, messaggio)
  const emailPersonale = "focacciomario@gmail.com"
  const emailList = [email, emailPersonale]
  
  const params = {
    Source: from,
    Destination: {
      ToAddresses: emailList
    },
    Message: {
      Subject: { Data: subject },
      Body: { Html: { Data: emailContent } }
    }
  }

  return sendEmail(params)
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const formData: FormData = JSON.parse(req.body);
      await processContactForm(formData);
      res.status(200).json({ message: 'Email invata correttamente!' });
    } catch (error) {
        console.error('Error processing contact form:', (error as Error).message);
      console.error('Stack trace:', (error as Error).stack);
        console.error('Error processing contact form:', error);
      res.status(500).json({ message: 'Error processing contact form.' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}