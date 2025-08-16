
```js
import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task Manager",
      link: "https://taskmanagelink.com",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);

  const emailHtml = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: "mail.taskmanager@example.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error(
      "Email service failed siliently. Make sure that you have provided your MAILTRAP credentials in the .env file",
    );
    console.error("Error: ", error);
  }
};

const emailVerificationMailgenContent = (username, verficationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to our App! we'are excited to have you on board.",
      action: {
        instructions:
          "To verify your email please click on the following button",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verficationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We got a request to reset the password of your account",
      action: {
        instructions:
          "To reset your password click on the following button or link",
        button: {
          color: "#22BC66",
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};

```


# Email Utility with Mailgen and Nodemailer

This code provides utility functions for sending emails in a Node.js application, using **Mailgen** for generating email content and **Nodemailer** for sending emails.

## Explanation

### 1. Dependencies

- **Mailgen:** Generates beautiful HTML and plain text email templates.
- **Nodemailer:** Sends emails via SMTP.

### 2. sendEmail Function

- Creates a Mailgen instance with a theme and product info.
- Generates both plain text and HTML email content from the provided `mailgenContent`.
- Sets up a Nodemailer transporter using SMTP credentials from environment variables.
- Defines the email details (from, to, subject, text, html).
- Sends the email and handles errors gracefully.

### 3. emailVerificationMailgenContent Function

- Returns a Mailgen content object for email verification.
- Includes a welcome message, a verification button, and support info.

### 4. forgotPasswordMailgenContent Function

- Returns a Mailgen content object for password reset.
- Includes instructions, a reset button, and support info.

### 5. Exports

- Exports the content generators and the sendEmail function for use elsewhere in the application.

## Usage

- Use `emailVerificationMailgenContent` to generate content for verification emails.
- Use `forgotPasswordMailgenContent` for password reset emails.
- Use `sendEmail` to send emails with the generated content.

## Benefits

- Centralizes email logic and templates.
- Makes it easy to send consistent, professional emails.
- Handles both HTML and plain text formats for better email client compatibility.

---

This utility helps automate and standardize email notifications for user verification and password resets in your