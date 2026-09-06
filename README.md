# The Shinebox

Website for a car detailing business. Built with React and Webpack.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The dev server supports hot reload — React component and CSS changes update in the browser without a full page refresh.

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |

## Project structure

```
public/
└── index.html
src/
├── components/
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   └── Page.jsx
├── config/
│   └── nav.js
├── pages/
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── SchedulingPage.jsx
│   ├── ServicesPage.jsx
│   └── SignupPage.jsx
├── App.jsx
├── App.css
├── index.css
└── index.jsx
```

## Sitemap

| Route | Page |
| ----- | ---- |
| `/` | Landing |
| `/services` | Services |
| `/about` | About |
| `/scheduling` | Scheduling |
| `/contact` | Contact |
| `/login` | Login |
| `/signup` | Signup |

All navigation links are accessible via the hamburger menu in the header.
