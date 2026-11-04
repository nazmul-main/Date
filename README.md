# Olive and e-Mart

A Next.js starter for the Olive and e-Mart online store and showroom operations platform.

## Included in this starter
- Responsive storefront with category filters, search, demo products and cart count
- Admin dashboard preview with sales KPIs, recent orders and quick actions
- PostgreSQL Prisma schema for users/roles, category tree, products, customers, suppliers, orders, order items and expenses
- COD-first order model

## Requirements
- Node.js 20+
- PostgreSQL database
- GitHub repository and Vercel account

## Run locally
```bash
npm install
cp .env.example .env
# Add your PostgreSQL connection string to DATABASE_URL
npx prisma generate
npx prisma db push
npm run dev
```
Open http://localhost:3000. Admin preview: http://localhost:3000/admin

## Deploy
1. Push this project to your GitHub repository.
2. Import the repository into Vercel.
3. Add `DATABASE_URL` and `NEXTAUTH_SECRET` in Vercel Environment Variables.
4. Deploy. Run `npx prisma db push` against the production database before using live data.

## Important
This is the initial UI + data-model scaffold. Demo dashboard numbers and product catalog are sample data. Authentication, checkout/order APIs, stock movements, purchase workflows, invoice printing, POS barcode scanning, reporting queries and role-based authorization still need implementation before production use. Do not use it for real customer orders or financial records until those modules are completed and tested.
