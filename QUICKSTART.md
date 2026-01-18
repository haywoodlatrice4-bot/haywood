# Three Space Shine - Quick Start

Get your detailing app running in 5 minutes!

## 1. Install Dependencies

```bash
cd c:\Users\USER\CascadeProjects\ThreeSpaceShine
npm run install-all
```

## 2. Setup Database

### Get Free Database from Supabase

1. Go to https://supabase.com
2. Sign up (free)
3. Create new project
4. Copy connection string from Settings > Database

## 3. Configure Environment

Create `.env` file:

```env
DATABASE_URL=your-supabase-connection-string
JWT_SECRET=any-random-long-string
PORT=5000
NODE_ENV=development
ADMIN_EMAIL=admin@threespacshine.com
ADMIN_PASSWORD=Admin123!
CLIENT_URL=http://localhost:3000
```

Create `client/.env` file:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

## 4. Initialize Database

```bash
npm run db:setup
```

## 5. Start Application

```bash
npm run dev
```

## 6. Open Browser

Visit: http://localhost:3000

**Admin Login:**
- Email: admin@threespacshine.com
- Password: Admin123!

---

## What's Included?

✅ Car Detailing Services (Basic, Premium, Elite)
✅ House Detailing Services (Basic, Premium, Elite)  
✅ Office Detailing Services (Basic, Premium, Elite)
✅ Online Booking System
✅ Customer Dashboard
✅ Admin Dashboard
✅ Payment Integration Ready
✅ Email Notifications Ready
✅ Mobile Responsive Design

## Next Steps

1. Change admin password
2. Update business info in `README.md`
3. Add your logo
4. Customize service packages
5. Test booking flow
6. Deploy to production

**Need help?** See `SETUP_GUIDE.md` for detailed instructions.
