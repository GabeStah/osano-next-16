# Osano Next.js 15 Test Suite

A test application for verifying Osano cookie consent integration with Next.js 15.

## Purpose

This repo provides a simple Next.js 16 application to test Osano's cookie consent banner behavior across different component types and navigation patterns:

- **Client Components** - React components with `"use client"` directive
- **Server Components** - Server-rendered components with async data fetching
- **Navigation Types** - Compare behavior between Next.js `<Link>` (with various prefetch settings) and traditional `<a>` tags

## Configuration

### Environment Variable

Set the `NEXT_PUBLIC_COOKIE_SCRIPT` environment variable to your Osano script URL.

#### Local Development

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_COOKIE_SCRIPT=https://cmp.osano.com/your-customer-id/your-config-id/osano.js
```

#### Vercel Deployment

Add the environment variable in your Vercel project settings:

1. Go to your project in the Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `NEXT_PUBLIC_COOKIE_SCRIPT`
   - **Value:** Your Osano script URL (e.g., `https://cmp.osano.com/your-customer-id/your-config-id/osano.js`)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up your environment variable (see Configuration above)

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Test Pages

- `/` - Home page with test suite overview
- `/client-component` - Client-side React component example
- `/server-component` - Server-rendered component example

## Navigation Testing

The sidebar provides multiple navigation methods to test Osano behavior:

| Navigation Type     | Description                                   |
| ------------------- | --------------------------------------------- |
| Link (default)      | Next.js Link with default prefetch behavior   |
| Link prefetch=true  | Eagerly prefetches the page on viewport entry |
| Link prefetch=false | No prefetching, client-side navigation only   |
| `<a>` tag           | Full page reload (traditional navigation)     |

Use browser DevTools Network tab to observe prefetching behavior and cookie consent script loading across different navigation types.
