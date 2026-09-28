## Whaiora Connect - Project Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        WHAIORA CONNECT                              │
│                   React + Vite + React Router                       │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                       ROUTING LAYER                                  │
│                   src/config/routes.config.ts                        │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │ Centralized Routes Configuration                           │   │
│  │ - All route paths defined in one place                     │   │
│  │ - Helper functions (getDashboardRoute, isPublicRoute)      │   │
│  │ - Type-safe route references                              │   │
│  └─────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                       PAGE STRUCTURE                                 │
│                                                                      │
│  PUBLIC PAGES (Main Layout)                                         │
│  ├─ HomePage (/)                                                    │
│  ├─ AboutPage (/about)                                             │
│  ├─ ServicesPage (/services)                                       │
│  ├─ WellnessTipsPage (/wellness-tips)                              │
│  ├─ PlansPage (/plans) ✨ NEW ROUTE                                │
│  ├─ ContactPage (/contact)                                         │
│  ├─ HelpCenterPage (/help) ✨ NEW PAGE                             │
│  ├─ PrivacyPage (/privacy)                                         │
│  ├─ TermsPage (/terms)                                             │
│  ├─ CookiePolicyPage (/cookie-policy)                              │
│  └─ ArticlePages (/articles/*)                                     │
│                                                                      │
│  AUTH PAGES                                                         │
│  ├─ LoginPage (/login)                                             │
│  ├─ RegisterPage (/register)                                       │
│  ├─ AuthCallback (/auth/callback)                                  │
│  └─ VerifyEmailPage (/verify-email)                                │
│                                                                      │
│  PROTECTED PAGES (Dashboard Layout)                                 │
│  ├─ SeekerDashboard (/dashboard) [seeker role]                     │
│  ├─ ProviderDashboard (/dashboard/provider) [provider role]        │
│  └─ AdminDashboard (/dashboard/admin) [admin role]                 │
│                                                                      │
│  UTILITY PAGES                                                      │
│  ├─ ProviderApplicationPage (/provider-application)                │
│  └─ NotFound (404 handler)                                         │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                      COMPONENT HIERARCHY                             │
│                                                                      │
│  src/components/                                                    │
│  ├─ common/                                                         │
│  │  ├─ Header.tsx                                                   │
│  │  ├─ Footer.tsx                                                   │
│  │  ├─ PageHead.tsx ✨ NEW - Reusable SEO metadata                  │
│  │  ├─ LoadingSpinner.tsx                                           │
│  │  └─ index.ts (exports)                                           │
│  ├─ ui/                          [Button, Card, Badge, etc.]        │
│  ├─ Article/                     [ArticleCard, ArticleLayout]      │
│  ├─ features/                    [Feature-specific components]     │
│  ├─ AuthGuard.tsx               [Authentication wrapper]           │
│  └─ RequireAuth.tsx             [Protected component wrapper]      │
│                                                                      │
│  LAYOUTS (src/layouts/)                                             │
│  ├─ MainLayout.tsx              [Public pages: Header + Footer]    │
│  └─ DashboardLayout.tsx         [Protected: Sidebar + Content]     │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                    NEW FEATURES OVERVIEW                             │
│                                                                      │
│  HelpCenterPage (/help)                                             │
│  ├─ Search functionality (filter by query)                          │
│  ├─ 8 Help Categories:                                              │
│  │  ├─ Getting Started                                              │
│  │  ├─ Finding Providers                                            │
│  │  ├─ Bookings & Appointments                                      │
│  │  ├─ Account & Settings                                           │
│  │  ├─ For Healthcare Providers                                     │
│  │  ├─ Billing & Payments                                           │
│  │  ├─ Privacy & Security                                           │
│  │  └─ Technical Support                                            │
│  └─ Contact support integration                                     │
│                                                                      │
│  PageHead Component                                                 │
│  ├─ Centralizes SEO metadata                                        │
│  ├─ Open Graph support                                              │
│  ├─ Twitter card support                                            │
│  ├─ Canonical URL support                                           │
│  └─ Eliminates repetitive Helmet code                               │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                      DATA FLOW PATTERN                               │
│                                                                      │
│  User Action                                                         │
│     ↓                                                               │
│  routes.config.ts (Get route path)                                 │
│     ↓                                                               │
│  navigate(route) via React Router                                  │
│     ↓                                                               │
│  Matching Route Handler in index.tsx                               │
│     ↓                                                               │
│  PageComponent                                                     │
│     ├─ PageHead (SEO metadata)                                     │
│     ├─ Content                                                     │
│     └─ Footer                                                      │
│     ↓                                                               │
│  User sees page with proper title, meta tags, content              │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                     FILE ORGANIZATION                               │
│                                                                      │
│  src/                                                               │
│  ├─ config/             ✨ NEW - Configuration files                │
│  │  └─ routes.config.ts                                            │
│  ├─ pages/              All page components                        │
│  │  ├─ HelpCenterPage.tsx ✨ NEW                                   │
│  │  ├─ PlansPage.tsx ✨ FIXED                                      │
│  │  ├─ HomePage.tsx                                                │
│  │  ├─ AboutPage.tsx                                               │
│  │  └─ ... [other pages]                                           │
│  ├─ components/         Reusable components                        │
│  │  ├─ common/                                                     │
│  │  │  ├─ PageHead.tsx ✨ NEW                                      │
│  │  │  └─ Header.tsx, Footer.tsx, etc.                             │
│  │  ├─ ui/                                                         │
│  │  ├─ Article/                                                    │
│  │  └─ features/                                                   │
│  ├─ layouts/            Layout components                          │
│  ├─ contexts/           Context providers                          │
│  ├─ hooks/              Custom hooks                               │
│  ├─ services/           API services                               │
│  ├─ types/              TypeScript types                           │
│  ├─ data/               Static data                                │
│  ├─ lib/                Utility functions                          │
│  └─ index.tsx           App entry point                            │
│                                                                      │
│  Documentation Files (ROOT)                                         │
│  ├─ SUMMARY.md ✨ NEW - Quick overview                             │
│  ├─ IMPROVEMENTS.md ✨ NEW - Detailed structure guide              │
│  ├─ CHANGES.md ✨ NEW - Detailed changelog                         │
│  └─ README.md - Project README                                     │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                      USAGE EXAMPLES                                 │
│                                                                      │
│  1. Navigate Using Routes Config                                   │
│     ────────────────────────────────────────────────────────────    │
│     import { routes } from '@config/routes.config'                │
│     navigate(routes.plans)                                        │
│     navigate(routes.dashboards.provider)                          │
│                                                                      │
│  2. Add SEO Metadata to a Page                                     │
│     ────────────────────────────────────────────────────────────    │
│     import { PageHead } from '@components/common'                 │
│     <PageHead title="My Page" description="..." />               │
│                                                                      │
│  3. Check if Route Requires Auth                                   │
│     ────────────────────────────────────────────────────────────    │
│     import { isPublicRoute } from '@config/routes.config'        │
│     if (!isPublicRoute(pathname)) {                               │
│       // Route requires authentication                             │
│     }                                                              │
│                                                                      │
│  4. Get Dashboard Route for User Role                              │
│     ────────────────────────────────────────────────────────────    │
│     import { getDashboardRoute } from '@config/routes.config'    │
│     const url = getDashboardRoute(userRole)                      │
└──────────────────────────────────────────────────────────────────────┘

════════════════════════════════════════════════════════════════════════

IMPROVEMENTS SUMMARY:

✅ Routing        - Centralized route config with helper functions
✅ Organization   - New config directory, consistent file naming
✅ SEO            - PageHead component reduces duplicate code
✅ Navigation     - Help center with search functionality
✅ Code Quality   - Removed Next.js directives, added Helmet metadata
✅ Documentation  - Added SUMMARY.md, IMPROVEMENTS.md, CHANGES.md

NO BREAKING CHANGES - All improvements are backward compatible!

════════════════════════════════════════════════════════════════════════
