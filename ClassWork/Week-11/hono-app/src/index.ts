import { Hono } from 'hono';

const app = new Hono();

// Define a route for the landing page with HTML and CSS
app.get('/', (c) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          text-align: center;
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          font-size: 3em;
          color: #333;
        }
        p {
          font-size: 1.2em;
          color: #666;
        }
        .btn {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          text-decoration: none;
          font-size: 1em;
        }
        .btn:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hello, World!</h1>
        <p>Welcome to my Hono-powered landing page on Cloudflare Workers.</p>
        <a href="#" class="btn">Learn More</a>
      </div>
    </body>
    </html>
  `;

  return c.html(htmlContent);
});

// Export the app for Cloudflare Worker
export default app;
