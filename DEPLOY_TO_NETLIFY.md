# Deploy Three Space Shine to Netlify

Your app is built and ready to deploy! Follow these simple steps:

## ✅ What's Ready

- ✅ Frontend built successfully in `client/build` folder
- ✅ Backend running with SQLite database
- ✅ All services and admin account created

## 🚀 Deploy Frontend to Netlify (2 Minutes)

### Option 1: Drag & Drop (Easiest)

1. Go to https://app.netlify.com
2. Sign in (or create free account)
3. Click **"Add new site"** > **"Deploy manually"**
4. **Drag and drop** the `client/build` folder onto the page
5. Done! Your site is live!

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to client folder
cd c:\Users\USER\CascadeProjects\ThreeSpaceShine\client

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=build
```

## 🔧 After Deployment

Your frontend will be live at: `https://your-site-name.netlify.app`

### Important: Update API URL

Since your backend is running locally, you have two options:

### Option A: Keep Backend Local (Testing)
- Your deployed frontend will try to connect to `http://localhost:5000/api`
- This only works when you're running the backend locally
- Good for testing the frontend design

### Option B: Deploy Backend (Production)

Deploy your backend to Render.com (free):

1. Go to https://render.com
2. Sign up/Sign in
3. Click **"New +"** > **"Web Service"**
4. Connect your GitHub (push your code first)
5. Or use **"Deploy from Git URL"**
6. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `node server/index.js`
   - **Environment Variables:**
     ```
     DATABASE_URL=your-supabase-or-render-postgres-url
     JWT_SECRET=threespace_shine_secret_2026
     NODE_ENV=production
     ADMIN_EMAIL=admin@threespacshine.com
     ADMIN_PASSWORD=Admin123!
     CLIENT_URL=https://your-netlify-site.netlify.app
     ```
7. Deploy!

Then update `client/.env`:
```
REACT_APP_API_URL=https://your-backend.onrender.com/api
```

Rebuild and redeploy frontend.

## 📱 Test Your Deployed App

1. Visit your Netlify URL
2. Click "Get Started" to register
3. Browse services
4. Book an appointment
5. Login as admin:
   - Email: admin@threespacshine.com
   - Password: Admin123!

## 🎯 Current Status

**Frontend:** Ready to deploy (built in `client/build`)
**Backend:** Running locally on http://localhost:5000
**Database:** SQLite (local file `threespacshine.db`)

## 📝 Next Steps

1. Deploy frontend to Netlify (drag & drop `client/build` folder)
2. Test the deployed frontend
3. If you want full production:
   - Push code to GitHub
   - Deploy backend to Render
   - Update frontend API URL
   - Redeploy frontend

---

**Need help?** Just ask!
