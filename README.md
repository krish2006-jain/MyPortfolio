# KPortfolio

KPortfolio is the personal portfolio of Krish Jain, built with React. It presents an interactive single-page experience that includes everything important about Krish, such as a hero section, skills, experience, education, projects, achievements, and contact details.

The site combines modern UI libraries and motion effects to create a polished presentation for personal branding, project showcases, and professional contact information.
## Deployment

This portfolio is deployed on Render and is live at: https://krishverse-portfolio.onrender.com
## Features

- Responsive layout for desktop and mobile screens
- Animated hero background and smooth section transitions
- Project, experience, and education cards for structured content
- Contact form powered by EmailJS
- 3D and visual effects using React Three Fiber and Three.js

## Tech Stack

- React 19
- React Router
- Framer Motion
- Styled Components
- Material UI
- React Three Fiber and Drei
- EmailJS

## Project Structure

- `src/components` contains reusable UI pieces such as the navbar, cards, canvas elements, and page sections
- `src/data` stores the site content and constants
- `src/utils` contains shared helpers, motion settings, and theme definitions
- `public` includes the static HTML shell and deployable assets

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production into the `build` folder.

### `npm test`

Launches the test runner in watch mode.

### `npm run eject`

Removes the Create React App abstraction and copies the build configuration into the project. This cannot be undone.

## Getting Started

1. Install dependencies with `npm install`.
2. Create a `.env` file in the project root with:

	```env
	REACT_APP_EMAILJS_SERVICE_ID=your_service_id
	REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
	REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
	REACT_APP_CONTACT_RECEIVER_EMAIL=krishkjai90@gmail.com
	```

3. In your EmailJS template, include these variables in the message body: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`, and `{{to_email}}`.
4. Start the development server with `npm start`.
5. Build the production version with `npm run build` when you are ready to deploy.



The repository includes a `render.yaml` file for deployment on Render. The production build output is generated in the `build` directory.
