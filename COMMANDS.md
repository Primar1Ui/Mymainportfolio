# Commands to Run

## Initial Setup

```bash
# Install all dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

## Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Git Commands (Optional)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio setup"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/your-repo.git

# Push to GitHub
git push -u origin main
```

## Supabase Setup

1. Go to https://supabase.com and create a project
2. In SQL Editor, run:

```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);
```

3. Get your URL and anon key from Settings > API
4. Create `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

## Profile Picture

1. Add your profile picture to: `public/images/profile.jpg`
2. Recommended: Square image, 512x512px or larger
3. Formats supported: JPG, PNG, WebP

