# KPortfolio

KPortfolio is a personal portfolio website built with React. It presents an interactive single-page experience with animated sections for the hero area, skills, experience, education, projects, achievements, and contact details.

The site combines modern UI libraries and motion effects to create a polished presentation for personal branding, project showcases, and professional contact information.

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
2. Start the development server with `npm start`.
3. Build the production version with `npm run build` when you are ready to deploy.

## Deployment

The repository includes a `render.yaml` file for deployment on Render. The production build output is generated in the `build` directory.
