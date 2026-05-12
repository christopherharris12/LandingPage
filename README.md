# IremboGov Landing Page

A modern, responsive landing page for the IremboGov platform—showcasing government services across family, identification, and land registry categories.

## Features

- **Sticky Navigation** - Blue navbar stays visible while scrolling
- **Announcement Bar** - Yellow notification strip at the top
- **Hero Section** - Search interface with welcome message
- **Service Categories** - Organized sections for Family, Identification, and Land services
- **Authentication Modal** - Sign in / Sign up forms with smooth animations
- **Responsive Design** - Tailwind CSS for mobile and desktop layouts
- **Smooth Animations** - Motion/Framer Motion for UI interactions

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite 6** - Fast build tool
- **Tailwind CSS 4** - Utility-first styling
- **Express** - Backend server for development
- **Lucide React** - Icon library
- **Motion** - Animation library

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will run on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── App.tsx          # Main React component with all UI sections
  ├── main.tsx         # React entry point
  ├── index.css        # Global styles and Tailwind config
src/
  ├── App.tsx          # Main component
  ├── main.tsx         # Entry point
  ├── index.css        # Styles
server.ts             # Express dev server
package.json          # Dependencies and scripts
vite.config.ts        # Vite configuration
tsconfig.json         # TypeScript configuration
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Type check with TypeScript |
| `npm run clean` | Remove build artifacts |

## API Endpoints

The Express server provides mock endpoints:

- `GET /api/services` - Returns available government services
- `POST /api/auth/login` - Mock authentication endpoint

## Color Scheme

- **Blue** (#0076D4) - Primary brand color
- **Yellow** (#FFCB05) - Accent and highlights
- **Orange** (#F58220) - Alerts and notifications

## License

Apache 2.0
