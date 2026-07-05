# SvaraVerse AI 🎵
### India's First AI-Powered Music Creator Platform

A premium, full-stack web app for Indian singers, playback aspirants, music creators, YouTubers, and Instagram artists.

---

## ✨ Core Features (MVP v1.0)

| Feature | Description |
|---|---|
| 🏠 **Landing Page** | Premium hero, features, pricing, testimonials, FAQ |
| 🔐 **Authentication** | Firebase Auth — Email/Password + Google OAuth |
| 📊 **Dashboard** | Streak, stats, AI insights, weekly chart, tasks |
| 🎵 **Song Library** | Upload, filter, tag, manage songs with Indian metadata |
| 🤖 **AI Music Coach** | GPT-4 powered chat for career, hashtags, song ideas |
| 📈 **Analytics** | Practice heatmap, genre breakdown, goal tracking |
| 📅 **Daily Planner** | Task management with music-specific task types |
| ⚙️ **Settings** | Profile, notifications, account management |

---

## 🚀 Quick Start

### 1. Clone and Install
```bash
cd svaraverse
npm install
```

### 2. Setup Environment Variables
```bash
cp .env.example .env.local
# Fill in your actual keys in .env.local
```

### 3. Run Development Server
```bash
npm run dev
# Open http://localhost:3000
```

> **Demo Mode**: The app works WITHOUT any API keys using mock data. Add your real keys to unlock full functionality.

---

## 🔑 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | ✅ | Firebase API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | ✅ | Firebase auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | ✅ | Firebase project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | ✅ | Firebase storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | ✅ | Firebase messaging sender |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | ✅ | Firebase app ID |
| `OPENAI_API_KEY` | 🔧 | OpenAI API key (for real AI responses) |
| `NEXT_PUBLIC_SUPABASE_URL` | 🔧 | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | 🔧 | Supabase anon key |

---

## 🔥 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project → Enable **Authentication**
3. Enable **Email/Password** and **Google** sign-in methods
4. Copy your config to `.env.local`
5. (Optional) Enable **Storage** for audio file uploads

---

## 🤖 OpenAI Setup

1. Get your key at [platform.openai.com](https://platform.openai.com)
2. Add to `.env.local`: `OPENAI_API_KEY=sk-your-key`
3. The AI Coach uses **gpt-4o-mini** by default (fast + affordable)
4. Without a key, demo responses are shown automatically

---

## 🗄️ Supabase Setup (Database)

1. Create project at [supabase.com](https://supabase.com)
2. Copy URL and anon key to `.env.local`
3. Run the SQL schema (in `/docs/schema.sql` when available)

---

## 📦 Deploy to Vercel

```bash
npm install -g vercel
vercel
# Follow prompts, add env vars in Vercel dashboard
```

Or connect your GitHub repo to Vercel for automatic deployments.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Custom Design Tokens |
| Auth | Firebase Authentication |
| Storage | Firebase Storage |
| Database | Supabase (PostgreSQL) |
| AI | OpenAI GPT-4o-mini |
| Charts | Recharts |
| Icons | Lucide React |
| Notifications | React Hot Toast |

---

## 🎨 Design System

**Color Palette** (Indian Premium Theme):
- Cream: `#FAF6F0`
- Sand: `#E8D5B7`  
- Gold: `#D4AF37`
- Coffee: `#6B4A2A`
- Dark Walnut: `#3D2B1F`
- Deep Brown: `#2A1810`

**Fonts**:
- Body: Inter
- Display: Playfair Display

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout
│   ├── not-found.tsx         # 404 page
│   ├── login/page.tsx        # Login
│   ├── signup/page.tsx       # Signup
│   ├── forgot-password/      # Password reset
│   ├── dashboard/page.tsx    # Main dashboard
│   ├── songs/page.tsx        # Song library
│   ├── ai-coach/page.tsx     # AI Music Coach
│   ├── analytics/page.tsx    # Analytics
│   ├── planner/page.tsx      # Daily planner
│   ├── settings/page.tsx     # Settings
│   └── api/ai/chat/route.ts  # OpenAI API route
├── components/
│   ├── layout/               # Navbar, Sidebar, DashboardLayout
│   └── ui/                   # Button, Input, LoadingScreen
├── context/
│   └── AuthContext.tsx       # Firebase auth state
├── lib/
│   ├── firebase.ts           # Firebase init
│   ├── supabase.ts           # Supabase client
│   └── utils.ts              # Utilities & constants
└── types/
    └── index.ts              # TypeScript interfaces
```

---

## 🗺️ Roadmap

- [ ] Song audio upload (Firebase Storage)
- [ ] Real YouTube API integration
- [ ] Instagram Basic Display API
- [ ] AI Poster Generator (DALL-E)
- [ ] Community & messaging
- [ ] Milestone celebrations
- [ ] Razorpay payment integration
- [ ] Mobile app (React Native)

---

## 📄 License

MIT License — Free to use and modify.

---

*Made with ♪ in India by the SvaraVerse Team*
