# DineOS — Restaurant Operations Platform

A premium SaaS website showcasing DineOS, a Restaurant Operations Platform that helps restaurants, hotels, cafes, lounges, food courts, resorts, and fine-dining establishments manage ordering, operations, billing, kitchen workflows, table management, and customer experience.

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- react-router-dom
- react-helmet-async
- lucide-react

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### TypeScript Check

```bash
npx tsc --noEmit
```

## Project Structure

```
src/
├── App.tsx              # App router configuration
├── main.tsx             # Entry point
├── index.css            # Global Tailwind styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   # Navigation bar
│   │   └── Footer.tsx   # Site footer
│   └── ui/
│       ├── Button.tsx   # Reusable button component
│       ├── SectionHeader.tsx  # Section heading component
│       ├── SEO.tsx      # SEO meta tags component
│       ├── LeadForm.tsx # Lead capture form
│       └── CustomSelect.tsx   # Accessible custom dropdown
├── pages/
│   ├── Home.tsx         # Homepage
│   ├── Product.tsx      # Product overview
│   ├── Features.tsx     # Platform features
│   ├── Solutions.tsx    # Industry solutions
│   ├── Pricing.tsx      # Pricing plans (Standard & Multi-Outlet)
│   ├── Demo.tsx         # Interactive demo
│   ├── About.tsx        # About DineOS
│   ├── Contact.tsx      # Contact & lead form
│   └── Blog.tsx         # SEO blog hub
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npx tsc --noEmit` | TypeScript type check |

## Brand Colors

- **Primary:** `#6366f1` (Indigo-500)
- **Gradient:** `#6366f1` → `#8b5cf6` → `#ec4899`
- **Background:** `#020617` (Slate-950)
- **Cards:** `rgba(255,255,255,0.05)` with `border-white/10`

## License

MIT