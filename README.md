# 🛍️ E-Commerce Admin Dashboard

This is a fully responsive, modern **eCommerce admin dashboard** developed using **React** and **Tailwind CSS**, and deployed with **Cloudflare Pages**. The dashboard simulates real-world analytics and product management for an online shopping platform, making it perfect for learning full-stack deployment.

> ✅ Live Demo: [https://ecommerce-dashboard-52f.pages.dev](https://ecommerce-dashboard-52f.pages.dev)

---

## 📌 Project Description

This project was built as part of a hands-on learning experience in full-stack development and cloud deployment. It serves as a visual admin interface where an e-commerce site owner can view key performance indicators (KPIs), track sales trends, and view product inventories.

---

## ✨ Key Features

- 📊 **Dashboard Page**
  - Total sales, customer count, and orders overview
  - Sales analytics with line charts
- 📦 **Products Table**
  - Simple product list showing name, stock, and price
- 🧭 **Sidebar Navigation**
  - Easy navigation for future expansion (orders, settings, reports)
- 🌐 **Cloudflare Pages Deployment**
  - Hosted and live with continuous GitHub integration
- 💡 **Future-ready**
  - Firebase Auth and Firestore integration planned

---

## 🧰 Tech Stack Used

| Frontend       | Tools/Libs                |
|----------------|---------------------------|
| 💻 Framework   | React.js                  |
| 🎨 Styling     | Tailwind CSS              |
| 📊 Charts      | Recharts (LineChart)      |
| 🧩 Routing     | React Router (optional)   |

| Backend (optional) | Purpose                |
|--------------------|------------------------|
| ☁️ Firebase        | Authentication, Data   |

| Deployment         | Tool                   |
|--------------------|------------------------|
| 🌩️ Cloudflare Pages| Static site hosting    |
| 🐙 GitHub           | Source code & CI/CD    |

---

## 🧱 Folder Structure

ecommerce-dashboard/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Sidebar.jsx
│ │ ├── StatCard.jsx
│ │ ├── ChartSection.jsx
│ │ └── ProductsTable.jsx
│ ├── pages/
│ │ └── Dashboard.jsx
│ ├── App.js
│ ├── index.css
│ └── index.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md

## ⚙️ How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/ecommerce-dashboard.git
cd ecommerce-dashboard

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

☁️ Deployment with Cloudflare Pages
The project is deployed on Cloudflare Pages directly from GitHub.

Build Settings:
Framework preset: None

Build command: npm run build

Output folder: build

Visit the live app:
👉 https://ecommerce-dashboard-52f.pages.dev

