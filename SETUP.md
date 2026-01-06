# Portfolio Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

Run this command in your terminal:

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Supabase Setup

1. Go to [Supabase](https://supabase.com) and create a new project
2. In the SQL Editor, run this query to create the contacts table:

```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);
```

3. Copy your project URL and anon key from Settings > API
4. Add them to your `.env.local` file

### 4. Add Your Profile Picture

1. Create a folder: `public/images/`
2. Add your profile picture as `profile.jpg` (or update the path in `components/Hero.tsx`)
3. Recommended size: 512x512px or larger (square image works best)

### 5. Update Social Links

Edit `components/Footer.tsx` and replace the placeholder GitHub and LinkedIn URLs with your actual profiles.

### 6. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📁 Project Structure

```
/app
  /layout.tsx          # Root layout with SEO metadata
  /page.tsx            # Main page
  /globals.css         # Global styles
  /api/contact/route.ts # Contact form API

/components
  Navbar.tsx           # Navigation bar
  Hero.tsx             # Hero section with profile picture
  About.tsx            # About section
  Skills.tsx           # Skills showcase
  Projects.tsx         # Projects grid
  Services.tsx         # Services list
  Contact.tsx          # Contact form
  Footer.tsx           # Footer

/lib
  data.ts              # Skills, projects, services data
  supabaseClient.ts    # Supabase client configuration

/public
  /favicon.svg         # Favicon
  /images              # Your images (create this folder)
    /profile.jpg       # Your profile picture
```

## 🎨 Customization

### Update Content

Edit `/lib/data.ts` to customize:
- Skills
- Projects
- Services

### Update Colors

Edit `tailwind.config.ts` to change the color scheme.

### Update SEO

Edit `app/layout.tsx` to update metadata, title, and description.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables in Vercel

Make sure to add:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## ✅ Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Set up Supabase project and create contacts table
- [ ] Add environment variables to `.env.local`
- [ ] Add profile picture to `public/images/profile.jpg`
- [ ] Update social links in Footer
- [ ] Customize content in `lib/data.ts`
- [ ] Test contact form
- [ ] Deploy to Vercel

## 🐛 Troubleshooting

### Contact form not working?
- Check Supabase table is created correctly
- Verify environment variables are set
- Check browser console for errors

### Profile picture not showing?
- Ensure image is in `public/images/profile.jpg`
- Check file name matches exactly (case-sensitive)
- Try a different image format (JPG, PNG, WebP)

### Build errors?
- Run `npm install` again
- Delete `.next` folder and rebuild
- Check TypeScript errors with `npm run build`

