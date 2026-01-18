# Three Space Shine - Deployment Guide

## 🚀 Quick Deploy (Manual - Easiest Method)

### Step 1: Build the Application

Run the deployment script:
```bash
DEPLOY.bat
```

This will create a production build in `client/build` folder.

### Step 2: Deploy Frontend to Netlify

1. **Go to Netlify**: https://app.netlify.com
2. **Sign in** with your account (GitHub, GitLab, or Email)
3. **Click "Add new site"** → **"Deploy manually"**
4. **Drag and drop** the entire `client/build` folder
5. **Wait 30 seconds** - Your site is live!

**Your Frontend URL**: `https://[random-name].netlify.app`

### Step 3: Update Backend Configuration

After getting your Netlify URL, update the backend:

1. Go to your existing Render backend: https://haywood.onrender.com
2. Go to **Environment** settings
3. Add/Update this variable:
   - `CLIENT_URL` = `https://your-netlify-url.netlify.app`

### Step 4: Update Frontend API URL (if needed)

If you're not using `https://haywood.onrender.com`, update:

**File**: `client/src/config.js`
```javascript
const API_URL = process.env.REACT_APP_API_URL || 'https://YOUR-BACKEND-URL.onrender.com/api';
```

Then rebuild and redeploy.

---

## 🔧 Alternative: Deploy with Git (Automatic Updates)

### Frontend (Netlify)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy ThreeSpaceShine"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings:
     - **Base directory**: `client`
     - **Build command**: `npm run build`
     - **Publish directory**: `client/build`
   - Add environment variable:
     - `REACT_APP_API_URL` = `https://haywood.onrender.com/api`
   - Click "Deploy site"

### Backend (Render)

1. **Go to Render**: https://dashboard.render.com
2. **Click "New +"** → **"Web Service"**
3. **Connect GitHub repository**
4. **Configure**:
   - **Name**: `threespacshine-api`
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
   - **Environment Variables** (from `.env.example`):
     ```
     NODE_ENV=production
     PORT=10000
     JWT_SECRET=[generate random string]
     ADMIN_EMAIL=haywoodlatrice4@gmail.com
     ADMIN_PASSWORD=Admin123!
     CLIENT_URL=https://your-netlify-url.netlify.app
     DATABASE_URL=[your database connection string]
     ```
5. **Click "Create Web Service"**

---

## 🗄️ Database Setup (Required)

You need a PostgreSQL database. **Free options**:

### Option 1: Supabase (Recommended)
1. Go to https://supabase.com
2. Create new project (free tier)
3. Go to **Settings** → **Database**
4. Copy **Connection String** (URI format)
5. Add to Render environment variables as `DATABASE_URL`

### Option 2: Render PostgreSQL
1. In Render dashboard, click "New +" → "PostgreSQL"
2. Create free database
3. Copy **Internal Database URL**
4. Add to your web service environment variables

### Initialize Database
Once deployed, run the setup script:
```bash
node server/config/setup-db.js
```

Or manually create tables using the SQL in `server/config/setup-db.js`.

---

## ✅ Verify Deployment

### Check Frontend
1. Visit your Netlify URL
2. Should see Three Space Shine homepage
3. Try navigating to different pages

### Check Backend
1. Visit `https://your-backend-url.onrender.com/api/health`
2. Should return: `{"status":"ok","message":"Three Space Shine API is running"}`

### Test Admin Login
1. Go to `https://your-netlify-url.netlify.app/admin`
2. Login with:
   - Email: `haywoodlatrice4@gmail.com`
   - Password: `Admin123!`

---

## 🔐 Post-Deployment Security

1. **Change Admin Password**:
   - Login to admin panel
   - Update credentials in database
   - Update `ADMIN_PASSWORD` in Render environment

2. **Secure Environment Variables**:
   - Never commit `.env` files
   - Use strong JWT_SECRET (32+ characters)
   - Rotate secrets regularly

3. **Enable HTTPS** (Automatic on Netlify/Render):
   - Both platforms provide free SSL certificates
   - Force HTTPS in production

---

## 📊 Monitor Your Application

### Netlify Dashboard
- View deployment logs
- Check build status
- Monitor bandwidth usage
- View analytics

### Render Dashboard
- View application logs
- Monitor CPU/Memory usage
- Check deployment status
- View metrics

---

## 🐛 Troubleshooting

### Frontend shows "Network Error"
- Check if backend URL is correct in `config.js`
- Verify backend is running (visit `/api/health`)
- Check CORS settings in backend

### Backend crashes on startup
- Check environment variables are set
- Verify DATABASE_URL is correct
- Check logs in Render dashboard

### Database connection fails
- Verify DATABASE_URL format
- Check database is running
- Ensure IP whitelist allows Render (if applicable)

### Admin login fails
- Verify ADMIN_EMAIL and ADMIN_PASSWORD in backend env
- Check database has admin user
- Run database setup script

---

## 📱 Custom Domain (Optional)

### Netlify
1. Go to **Domain settings**
2. Click **Add custom domain**
3. Follow DNS configuration steps

### Render
1. Go to **Settings** → **Custom Domain**
2. Add your domain
3. Update DNS records

---

## 🎯 Your Deployment Checklist

- [ ] Build frontend (`DEPLOY.bat`)
- [ ] Deploy to Netlify (drag & drop `client/build`)
- [ ] Setup PostgreSQL database (Supabase/Render)
- [ ] Configure backend environment variables
- [ ] Deploy backend to Render (if not already done)
- [ ] Update CLIENT_URL in backend
- [ ] Test frontend loads
- [ ] Test API health endpoint
- [ ] Test admin login
- [ ] Change default admin password
- [ ] Add custom domain (optional)

---

## 🌐 Your Live URLs

After deployment, you'll have:

- **Frontend**: `https://threespacshine.netlify.app`
- **Backend**: `https://haywood.onrender.com`
- **Admin Panel**: `https://threespacshine.netlify.app/admin`

**Admin Credentials**:
- Email: `haywoodlatrice4@gmail.com`
- Password: `Admin123!`

---

**Need Help?** Check the logs in Netlify/Render dashboards or review `TROUBLESHOOT.md`
