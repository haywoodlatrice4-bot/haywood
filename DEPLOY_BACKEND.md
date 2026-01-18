# Deploy Three Space Shine Backend to Render

## Quick Deploy (5 Minutes)

### Step 1: Push to GitHub (if not already)

```bash
cd c:\Users\USER\CascadeProjects\ThreeSpaceShine
git init
git add .
git commit -m "Three Space Shine - Complete detailing app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/threespacshine.git
git push -u origin main
```

### Step 2: Deploy to Render

1. Go to https://render.com
2. Sign in with GitHub
3. Click **"New +"** > **"Web Service"**
4. Connect your `threespacshine` repository
5. Settings:
   - **Name:** `threespacshine-api`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server/index.js`
   - **Instance Type:** Free

6. Add Environment Variables:
   ```
   DATABASE_URL = (Get from Supabase - see below)
   JWT_SECRET = threespace_shine_secret_2026
   NODE_ENV = production
   ADMIN_EMAIL = haywoodlatrice4@gmail.com
   ADMIN_PASSWORD = Admin123!
   CLIENT_URL = https://your-netlify-site.netlify.app
   ```

7. Click **"Create Web Service"**

### Step 3: Get Database URL from Supabase

1. Go to https://supabase.com
2. Sign in
3. Create new project or use existing
4. Go to **Settings > Database**
5. Copy **Connection String (URI)**
6. Add to Render environment variables as `DATABASE_URL`

### Step 4: Update Frontend

Once backend is deployed, you'll get a URL like:
`https://threespacshine-api.onrender.com`

Update `client/.env`:
```
REACT_APP_API_URL=https://threespacshine-api.onrender.com/api
```

### Step 5: Rebuild and Redeploy Frontend

```bash
cd client
npm run build
```

Then drag the `build` folder to Netlify again.

---

## Alternative: Use Existing Supabase from GuardBulldog

If you want to use the same database:

```
DATABASE_URL=postgresql://postgres:Steve2025%40%23%24%24@db.qbwvgznwpkvxltjmqnvu.supabase.co:5432/postgres
```

Then run the database setup on Render after deployment.

---

## Your Netlify Site URL

What's your Netlify URL? (e.g., `https://something.netlify.app`)

I'll help you configure everything to work together!
