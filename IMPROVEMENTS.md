# Whaiora Connect - Project Structure & Improvements

## Overview
Whaiora Connect is a holistic digital wellness platform built with React, Vite, and Tailwind CSS.

## Recent Improvements

### 1. ✅ Routing Management
- **Added PlansPage to routing** (`/plans` route)
- **Created centralized route configuration** at `src/config/routes.config.ts`
- **Consistent route definitions** for easier maintenance and refactoring
- **Helper functions** for dashboard routes and public route checking

### 2. ✅ Page Naming Consistency
- **Standardized to PascalCase** for all page files
- Created `HelpCenterPage.tsx` to replace `help_center_page.tsx`
- All pages now follow consistent naming pattern: `[Name]Page.tsx`

### 3. ✅ Removed Next.js Directives
- Removed `'use client'` directives from:
  - `NotFound.tsx`
  - `WellnessTipsPage.tsx`
  - `PlansPage.tsx`
- These are React Router pages, not Next.js App Router pages

### 4. ✅ SEO & Metadata
- **Added Helmet metadata** to `PlansPage.tsx`
- **Created reusable `PageHead` component** for consistent SEO metadata management
- All pages now have proper meta descriptions for better search engine visibility

### 5. ✅ Code Organization
- **Created `src/config/` directory** for configuration files
- **Created `src/components/common/PageHead.tsx`** for shared metadata component
- Better separation of concerns and easier maintenance

## Project Structure

```
src/
├── config/
│   └── routes.config.ts          # Centralized route definitions
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PageHead.tsx           # ✨ NEW: Reusable SEO metadata
│   │   ├── LoadingSpinner.tsx
│   │   └── index.ts
│   ├── ui/                        # UI primitives
│   ├── Article/                   # Article components
│   ├── features/                  # Feature-specific components
│   └── ...
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── PlansPage.tsx              # ✨ FIXED: Added routing + Helmet
│   ├── WellnessTipsPage.tsx        # ✨ FIXED: Removed 'use client'
│   ├── HelpCenterPage.tsx          # ✨ NEW: Help center with search
│   ├── ContactPage.tsx
│   ├── PrivacyPage.tsx
│   ├── TermsPage.tsx
│   ├── CookiePolicyPage.tsx
│   ├── NotFound.tsx               # ✨ FIXED: Removed 'use client'
│   ├── AuthCallback.tsx
│   ├── VerifyEmailPage.tsx
│   ├── auth/
│   ├── dashboard/
│   ├── articles/
│   ├── provider-application/
│   └── ...
├── layouts/
│   ├── MainLayout.tsx             # Main layout with Header + Footer
│   └── DashboardLayout.tsx         # Protected dashboard layout
├── contexts/
├── hooks/
├── services/
├── types/
├── data/
├── lib/
└── index.tsx                      # Main entry point

```

## Available Routes

### Public Routes
- `/` - Home page
- `/about` - About page
- `/services` - Services
- `/wellness-tips` - Wellness articles
- `/plans` - Pricing plans ✨ NEW
- `/contact` - Contact form
- `/help` - Help center ✨ NEW
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/cookie-policy` - Cookie policy
- `/articles/*` - Article pages

### Auth Routes
- `/login` - Login page
- `/register` - Registration page
- `/auth/callback` - OAuth callback
- `/verify-email` - Email verification

### Protected Dashboard Routes
- `/dashboard` - Seeker dashboard
- `/dashboard/provider` - Provider dashboard
- `/dashboard/admin` - Admin dashboard

## Using the Routes Configuration

```typescript
import { routes, getDashboardRoute, isPublicRoute } from '@config/routes.config'

// Navigate to a route
navigate(routes.plans)

// Get dashboard route for a role
const dashboardUrl = getDashboardRoute('provider')

// Check if route is public
if (isPublicRoute(location.pathname)) {
  // Route doesn't require authentication
}
```

## Using the PageHead Component

```typescript
import { PageHead } from '@components/common'

export default function MyPage() {
  return (
    <>
      <PageHead
        title="My Page"
        description="This is my page description"
      />
      <div>{/* Page content */}</div>
    </>
  )
}
```

## Naming Conventions

### Files
- **Pages**: `[Name]Page.tsx`
- **Components**: `[Name].tsx`
- **Hooks**: `use[Name].ts`
- **Config**: `[name].config.ts`
- **Types**: `[name].ts` in `types/` directory

### Variables & Functions
- **Constants**: `CONSTANT_CASE`
- **Functions**: `camelCase`
- **React Components**: `PascalCase`
- **CSS Classes**: `kebab-case` (via Tailwind)

## Best Practices

1. **Always use Helmet for page metadata** - Use the `PageHead` component for consistency
2. **Remove Next.js directives** - This is a React Router app, not Next.js
3. **Use centralized route config** - Import from `routes.config.ts` instead of hardcoding paths
4. **Consistent naming** - Follow PascalCase for page files
5. **Organize components** - Group related components in feature directories
6. **Lazy load routes** - Use React.lazy() for code splitting on large pages

## Common Tasks

### Add a New Public Page
1. Create `src/pages/[Name]Page.tsx`
2. Add route to `src/config/routes.config.ts`
3. Import in `src/index.tsx` and add route definition
4. Use `PageHead` component for SEO metadata

### Add a New Dashboard Route
1. Create component in appropriate dashboard subdirectory
2. Add route to `DashboardLayout` navigation items
3. Add route definition in `index.tsx` under dashboard routes

### Update Route Path
1. Update in `src/config/routes.config.ts`
2. Find all imports and update references
3. Test navigation in the app

## Performance Optimizations

- ✅ Code splitting via route-based lazy loading
- ✅ Image optimization with ResponsiveImage component
- ✅ CSS-in-JS via Tailwind (no runtime overhead)
- ✅ Memoization in complex components
- ✅ SEO optimization with Helmet

## Future Improvements

- [ ] Extract all inline styles to external CSS files
- [ ] Add accessibility (a11y) improvements
- [ ] Implement error boundary components
- [ ] Add loading states to more routes
- [ ] Create more reusable layout components
- [ ] Add breadcrumb navigation
- [ ] Implement breadcrumb schema for SEO
