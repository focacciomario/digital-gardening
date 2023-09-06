import AWS from 'aws-sdk';
import { SES, SESClient } from "@aws-sdk/client-ses";
require('dotenv').config();
// Set the AWS region
/*
const awsConfig = {
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  apiVersion: "2010-12-01",
}

const ses = new AWS.SES(awsConfig);
*/

// Set the AWS region
AWS.config.update({
  region: `${process.env.AWS_REGION}`,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

const ses = new SES({ apiVersion: 'latest' });

interface EmailParams {
  Source: string;
  Destination: {
    ToAddresses: string[];
  };
  Message: {
    Subject: { Data: string };
    Body: { Html: { Data: string } };
  };
}

const sendEmail = async (params: EmailParams): Promise<void> => {
  return new Promise((resolve, reject) => {
    ses.sendEmail(params, (err:any, data:any) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export {sendEmail};