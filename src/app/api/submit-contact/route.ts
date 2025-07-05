export async function POST(request: Request) {
  // extract form data
  const formData = await request.json();

  // contruct "send email" body
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': process.env.BREVO_API_KEY || '',
    },
    body: JSON.stringify({
      sender: {
        name: 'Adrian',
        email: 'angkajaya98@gmail.com',
      },
      to: [
        {
          email: 'angkajaya98@gmail.com', // admin email
        },
      ],
      subject: formData?.subject || 'Contact Form',
      htmlContent: `
        <html>
          <head></head>
          <body>
            <p>Hello,</p>
            <p/>Someone would like to work with you!</p>
            <p/>Name: ${formData?.fullName}</p>
            <p/>Email: ${formData?.email}</p>
            <p/>Msg: ${formData?.msg}</p>
          </body>
        </html>
      `,
    }),
  };

  // send email
  const response = await fetch('https://api.brevo.com/v3/smtp/email', options);

  // read API response
  if (!response.ok) {
    const errorData = await response.json();
    return Response.json({ error: 'Failed to send email', details: errorData }, { status: response.status });
  }
  const result = await response.json();

  return Response.json({
    message: 'Email sent successfully',
    data: result,
  });
}
