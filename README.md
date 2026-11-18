# AI for Manufacturing — Transforming the Future of Smart Manufacturing
### Premium Corporate Webinar Landing Page

A production-ready, high-converting corporate webinar landing page built with React, Vite, Tailwind CSS, Framer Motion, and Zod form validation. Faithfully crafted according to the approved visual reference specification for **Manvian**.

---

## 🚀 Live Demo & Preview

- **Event:** AI for Manufacturing — Transforming the Future of Smart Manufacturing
- **Format:** Live Interactive Broadcast
- **Design Identity:** Light corporate palette (Pure White `#FFFFFF`, Soft Lavender `#F8F6FF`, Light Purple `#F2EDFF`, Royal Purple `#6D28D9`, Deep Navy `#0B1230`)

---

## 🛠 Tech Stack

- **Framework:** [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Typography:** Google Fonts — **Manrope** (Headings, CTA, Nav) & **Jost** (Body, Descriptions, Agenda)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Delight & Interactivity:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Calendar Integration:** Custom iCalendar (.ics) generation & Google Calendar instant-schedule link

---

## 🎨 Visual Composition & Sections

1. **Section 1: Premium Header**
   - Sticky navigation with backdrop blur on scroll
   - Manvian geometric brand mark
   - Smooth anchor links (`#overview`, `#learn`, `#speaker`, `#register`) with active indicators
   - Dark Navy CTA button with arrow indicator
   - Mobile responsive slide-down navigation drawer

2. **Section 2: Asymmetric Hero**
   - Left: Live Webinar badge (`✦ Live Webinar`), bold Manrope headline, event metadata (date, time, format), primary CTA button, and interactive Add to Calendar dropdown
   - Right: Layered geometric collage featuring industrial robotic arm with glowing cyan AI HUD interface (`AI` square marker, telemetry readout, cycle metrics) and secondary factory plant skyline

3. **Section 3: Webinar Highlights**
   - Floating lavender glassmorphism container
   - 4 key metrics: Expected Attendees (`1,000+`), Manufacturing Focus, Industry Experts, Live & Interactive Session
   - Smooth hover micro-interactions

4. **Section 4: Webinar Overview**
   - Overlapping visual collage: Plant engineer with digital tablet + robotic welding arm
   - Key operational pillars: Production Optimization, Predictive Maintenance, Quality Intelligence, Data-Driven Decisions

5. **Section 5: What You'll Learn**
   - Marked with signature `//` purple prefix
   - 4 equal-height premium cards: AI Use Cases, Process Optimization, Quality Intelligence, Future Readiness
   - Elevated hover transition with soft lavender glow

6. **Section 6 & 7: Webinar Agenda & Featured Speaker**
   - Two-column layout
   - Left: Vertical timeline with purple nodes connecting 5 structured sessions (04:00 PM to 05:10 PM)
   - Right: Featured Speaker card with Arjun Mehta's portrait surrounded by a purple neon halo glow, bio, and LinkedIn link

7. **Section 8: Large Purple Registration Banner**
   - Deep purple gradient container (`#4C1D95` to `#6D28D9`) with illuminated industrial skyline silhouette
   - White form card with full validation (Full Name, Work Email, Phone Number, Company)
   - Toggle between **Demo Sandbox Mode** and **Live API Mode**
   - Loading spinners, success confirmation ticket state, and confetti celebration

8. **Section 9: Frequently Asked Questions**
   - 2-column accordion grid
   - Smooth height transitions with accessible ARIA expand/collapse controls

9. **Section 10: Dark Navy Footer**
   - `#080F2B` background
   - Manvian logo & mission statement
   - Verified contact email & phone
   - Social channels (LinkedIn, YouTube, X)
   - Privacy & attendance terms

---

## 📂 Project Directory Structure

```text
├── index.html                   # HTML entry point with fonts & SEO meta tags
├── package.json                 # Project dependencies & scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Custom colors, typography, shadows, animations
├── vite.config.js               # Vite bundler configuration
└── src/
    ├── App.jsx                  # Main application orchestrator
    ├── main.jsx                 # React root renderer
    ├── components/
    │   ├── BrandLogo.jsx        # Manvian geometric SVG logo
    │   ├── Header.jsx           # Sticky navigation & mobile drawer
    │   ├── Hero.jsx             # Asymmetric hero with AI HUD overlay
    │   ├── WebinarHighlights.jsx# Floating statistics strip
    │   ├── WebinarOverview.jsx  # 2-column overview with image collage
    │   ├── LearningOutcomes.jsx # 4 benefit cards
    │   ├── AgendaAndSpeaker.jsx # Agenda & Speaker 2-column container
    │   ├── WebinarAgenda.jsx    # Vertical timeline
    │   ├── SpeakerSection.jsx   # Arjun Mehta profile with glowing halo
    │   ├── RegistrationSection.jsx # Form with Zod validation & Demo mode
    │   ├── FAQSection.jsx       # 2-column accordion FAQ
    │   ├── Footer.jsx           # Dark Navy footer with social links
    │   └── animations/
    │       ├── RevealOnScroll.jsx# Scroll-triggered viewport animations
    │       └── StaggerContainer.jsx# Staggered children transitions
    ├── data/
    │   └── webinarData.js       # Centralized editable event content
    ├── lib/
    │   └── calendar.js          # .ics generator & Google Calendar URL builder
    └── styles/
        └── index.css            # Tailwind directives, fluid typography, utilities
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js `v18+` or `v20+` (tested on Node v24)
- npm or pnpm

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port indicated in your terminal).

### 4. Build for Production
```bash
npm run build
```
The optimized bundle will be created in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended)

#### Option A: Using Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run deployment command in the project root:
   ```bash
   vercel
   ```
3. Follow the CLI prompts:
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Deploy to production:
     ```bash
     vercel --prod
     ```

#### Option B: Connecting GitHub to Vercel
1. Push your repository to GitHub (see GitHub instructions below).
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `ai-manufacturing-landing-page` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Vercel will provision an SSL certificate and provide an instant live URL.

---

### Deploy to GitHub Pages / Repository

1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: complete AI for Manufacturing webinar landing page"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Push to remote:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ai-manufacturing-landing-page.git
   git push -u origin main
   ```

---

## 📄 License & Attribution

Designed and developed for **Manvian** webinar campaign. All event dates and guest profiles serve as provisional demonstration content for evaluation.
