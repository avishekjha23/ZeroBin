# ZeroBin <img src="/frontend/src/assets/trash-bin.png" width="48" height="48"> – Smart Waste Complaint Management System

ZeroBin is a full-stack web application designed to streamline waste management by allowing users to register complaints with geolocation, waste type, and image uploads. It features separate dashboards for users and admins, offering real-time complaint tracking and efficient resolution workflows.

---

## 🚀 Key Features

- 🔐 **Secure Authentication**
  - JWT and bcrypt-based login/signup system
  - Role-based access control for users and administrators

- 📝 **Complaint Submission**
  - Users can report complaints with waste category, location, and images using **Multer**

- 📊 **Interactive Dashboards**
  - **Users**: Create, view, edit, and delete their complaints
  - **Admins**: Manage, resolve, and track all complaints with a centralized dashboard

- ⚡ **Performance Optimization**
  - Admin response efficiency improved by **30%**
  - API response time reduced by **20%**

- 📱 **Responsive UI**
  - Built with Bootstrap React for a clean, mobile-first design
  - Cross-platform compatibility ensured with modular CSS and optimized routing

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- Bootstrap React
- CSS Modules

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (Image Uploads)
- JWT & bcrypt (Authentication)
- CORS
- Postman (API Testing)

---


🌆 Design

<a href="#" target="_blank"><img src="/frontend/src/assets/screenshots/1_HomePage.jpg" style="max-width: 100%;"></a>
<a href="#" target="_blank"><img src="/frontend/src/assets/screenshots/2_SignUp.jpg" style="max-width: 100%;"></a>
<a href="#" target="_blank"><img src="/frontend/src/assets/screenshots/3_UserLogin.jpg" style="max-width: 100%;"></a>
<a href="#" target="_blank"><img src="/frontend/src/assets/screenshots/4_ComplainRegister.jpg" style="max-width: 100%;"></a>
<a href="#" target="_blank"><img src="/frontend/src/assets/screenshots/5_PreviewComplain.jpg" style="max-width: 100%;"></a>
<a href="#" target="_blank"><img src="/frontend/src/assets/screenshots/6_UpdateComplain.jpg" style="max-width: 100%;"></a>
<a href="#" target="_blank"><img src="/frontend/src/assets/screenshots/7_AdminLogin.jpg" style="max-width: 100%;"></a>
<a href="#" target="_blank"><img src="/frontend/src/assets/screenshots/8_AllComplains.jpg" style="max-width: 100%;"></a>
<a href="#" target="_blank"><img src="/frontend/src/assets/screenshots/9_forgotpassword.jpeg" style="max-width: 100%;"></a>


## 📦 Installation Guide

```bash
# 1. Clone the repository
git clone https://github.com/your-username/zerobin.git
cd zerobin

# 2. Install backend dependencies
cd server
npm install

# 3. Install frontend dependencies
cd ../client
npm install

# 4. Start the MongoDB server (in a new terminal)
mongod

# 5. Start the backend server
cd ../server
npm start

# 6. Start the frontend React app
cd ../client
npm run dev
