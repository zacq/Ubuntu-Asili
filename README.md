<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Ubuntu Asili Africa - AI-Powered Travel Gateway

> *"Connecting the diaspora to authentic African experiences"*

## Overview

Ubuntu Asili Africa is an innovative AI-powered travel platform designed specifically for the African diaspora. It leverages Google's Gemini AI to provide personalized travel guidance, property assistance, and cultural consultation for those seeking to relocate or invest in Africa.

### Key Features

- 🤖 **AI Chatbot Assistant** - Powered by Google Gemini API for instant travel advice
- 🌍 **Diaspora-Focused** - Tailored solutions for African diaspora communities
- 🏠 **Relocation Services** - Property and relocation guidance
- 🛡️ **Trust & Safety** - Built with security and cultural integrity at its core
- ⚡ **Fast & Responsive** - Modern React app with optimized performance
- 🎨 **Beautiful UI** - Elegant design with smooth animations

## Quick Start

### Prerequisites
- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- Google Gemini API key ([get one here](https://aistudio.google.com/apikey))

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zacq/Ubuntu-Asili.git
   cd ubuntu-asili-africa
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local and add your Gemini API key
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview  # Preview the production build locally
```

## Deployment

### Netlify Deployment

This project is configured for seamless deployment on Netlify. See [NETLIFY_DEPLOY.md](NETLIFY_DEPLOY.md) for detailed deployment instructions.

**Quick Deploy:**
1. Push to GitHub
2. Connect repository to Netlify
3. Set `GEMINI_API_KEY` environment variable
4. Deploy!

## Project Structure

```
ubuntu-asili-africa/
├── components/          # Reusable React components
│   ├── Assistant.tsx   # AI chatbot component
│   └── Navbar.tsx      # Navigation component
├── pages/              # Page components
│   └── Home.tsx        # Home page
├── services/           # API services
│   └── geminiService.ts # Gemini AI integration
├── App.tsx             # Main app component
├── index.tsx           # React entry point
├── constants.tsx       # App constants
├── netlify.toml        # Netlify configuration
├── vite.config.ts      # Vite build config
└── tsconfig.json       # TypeScript configuration
```

## Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Routing:** React Router v7
- **UI Components:** Lucide React
- **Animations:** Framer Motion
- **AI:** Google Gemini API
- **Styling:** Tailwind CSS

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

## Environment Variables

Create a `.env.local` file with the following:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

**Note:** Never commit `.env.local` to version control. See `.env.example` for the template.

## Contributing

We welcome contributions! Please feel free to open issues and pull requests.

## License

MIT License - see LICENSE file for details

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**View the live app:** Coming soon!  
**Follow us:** Ubuntu Asili Africa
