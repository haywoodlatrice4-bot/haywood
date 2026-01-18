# 🚀 How to Run ThreeSpaceShine

You have 2 options: Run locally on your computer OR deploy online.

---

## 💻 OPTION 1: Run Locally (For Testing)

### Quick Start

Open **Command Prompt** and run:

```cmd
cd c:\Users\USER\CascadeProjects\ThreeSpaceShine
START.bat
```

This will:
1. Install dependencies
2. Start the backend server (port 5000)
3. Start the frontend (port 3000)
4. Open your browser automatically

**Access at**:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Admin Panel: http://localhost:3000/admin

**Admin Login**:
- Email: `haywoodlatrice4@gmail.com`
- Password: `Admin123!`

### Manual Start

If the batch file doesn't work:

**Terminal 1 - Backend**:
```cmd
cd c:\Users\USER\CascadeProjects\ThreeSpaceShine
npm install
npm start
```

**Terminal 2 - Frontend** (open new Command Prompt):
```cmd
cd c:\Users\USER\CascadeProjects\ThreeSpaceShine\client
npm install
npm start
```

Wait for both to start, then visit: http://localhost:3000

---

## 🌐 OPTION 2: Deploy Online (For Production)

### Method A: Vercel CLI (Recommended - 5 minutes)

```cmd
npm install -g vercel
vercel login
cd c:\Users\USER\CascadeProjects\ThreeSpaceShine
vercel --prod
```

**Your site will be live at**: https://threespacshine.vercel.app

### Method B: Vercel Dashboard (No CLI - 10 minutes)

1. **Build the app**:
   ```cmd
   cd c:\Users\USER\CascadeProjects\ThreeSpaceShine\client
   npm install
   npm run build
   ```

2. **Deploy**:
   - Go to: https://vercel.com/new
   - Sign up/Login
   - Upload folder: `c:\Users\USER\CascadeProjects\ThreeSpaceShine`
   - Click Deploy

3. **Configure**:
   - Add environment variables (see below)
   - Create Postgres database
   - Redeploy

### Method C: Netlify (Frontend) + Railway (Backend)

**Frontend to Netlify**:
```cmd
cd c:\Users\USER\CascadeProjects\ThreeSpaceShine\client
npm run build
```
- Go to: https://app.netlify.com/drop
- Drop the `build` folder

**Backend to Railway**:
- Go to: https://railway.app
- Create new project
- Add PostgreSQL database
- Deploy from GitHub or upload files

---

## 🔧 Environment Variables (For Online Deployment)

Add these in your deployment platform:

```
JWT_SECRET=threespacshine-super-secret-jwt-key-2026
ADMIN_EMAIL=haywoodlatrice4@gmail.com
ADMIN_PASSWORD=Admin123!
CLIENT_URL=https://threespacshine.vercel.app
REACT_APP_API_URL=https://threespacshine.vercel.app/api
NODE_ENV=production
DATABASE_URL=your-database-connection-string
```

---

## 🗄️ Database Setup

### For Local Development:
The app uses SQLite by default (no setup needed).

### For Production:
You need PostgreSQL:

**Option 1 - Vercel Postgres**:
- In Vercel: Storage → Create Database → Postgres

**Option 2 - Supabase**:
- Go to: https://supabase.com
- Create project
- Get connection string
- Add as `DATABASE_URL`

**Option 3 - Railway**:
- In Railway: New → Database → PostgreSQL
- Copy connection string

---

## ✅ Verify It's Working

### Local:
- Visit: http://localhost:3000
- Should see homepage
- Go to: http://localhost:3000/admin
- Login with admin credentials

### Online:
- Visit: https://threespacshine.vercel.app
- Check: https://threespacshine.vercel.app/api/health
- Should return: `{"status":"ok","message":"Three Space Shine API is running"}`

---

## 🎯 Recommended Workflow

**For Development/Testing**:
→ Run locally using `START.bat`

**For Production/Live Site**:
→ Deploy to Vercel using CLI: `vercel --prod`

---

## 📋 Quick Reference

| Action | Command |
|--------|---------|
| Run locally | `START.bat` |
| Deploy to Vercel | `vercel --prod` |
| Build for production | `cd client && npm run build` |
| Start backend only | `npm start` |
| Start frontend only | `cd client && npm start` |

---

## 🚨 Troubleshooting

### "npm is not recognized"
- Install Node.js from: https://nodejs.org
- Restart Command Prompt

### Port already in use
- Close other apps using ports 3000 or 5000
- Or change ports in package.json

### Database connection fails
- For local: SQLite works automatically
- For online: Make sure DATABASE_URL is set

### Can't access admin panel
- Make sure backend is running
- Check admin credentials are correct
- Verify database is initialized

---

## 🎉 Choose Your Method

**Want to test locally first?**
→ Run: `START.bat`

**Ready to go live?**
→ Run: `vercel --prod`

**Both work perfectly!** 🚀
