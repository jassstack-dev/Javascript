# Expense Tracker

A simple **React-based Expense Tracker** built to practice React fundamentals, form handling, state management, browser storage, and dynamic data handling.

🔗 **Live Demo:** https://expense-tracker-ten-phi-69.vercel.app/

---

## 🚀 Features

* 🔐 Login page with basic authentication
* 💾 Session Storage for maintaining login session
* 📝 Add new products/transactions
* 💽 Local Storage for persistent data
* 📋 Display saved data dynamically
* 🔄 React state management with `useState`
* 🧾 Form handling and validation using React Hook Form
* 📱 Responsive UI
* ⚡ Built with React

---

## 🔐 Login Credentials

For testing the application, use:

```text
Name: vimal
Password: 12345
```

> This login system is created for learning and demonstration purposes and is not intended for production authentication.

---

## 🛠️ Technologies Used

* React.js
* JavaScript
* React Hook Form
* Tailwind CSS
* HTML
* Local Storage
* Session Storage
* Vercel

---

## 🧠 React Concepts Practiced

### useState

Used for managing application state such as:

* Login state
* Product/transaction data
* UI toggles

### React Hook Form

Used for:

* Form handling
* Input registration
* Form validation
* Form submission
* Resetting forms

### Session Storage

Used to maintain the user's login session during the browser session.

### Local Storage

Used to store product/transaction data so that the data remains available after refreshing the page.

---

## 📌 How It Works

### 1. Login

The user first sees a login page.

```text
Name: vimal
Password: 12345
```

After successful login, the login status is stored using **Session Storage**.

### 2. Add Data

Users can add new products through the form.

The form is handled using **React Hook Form**, and the submitted data is stored in React state.

### 3. Display Data

The saved products are displayed dynamically using React's `map()` method.

### 4. Persistent Storage

The application uses **Local Storage** to keep the saved data available even after a page refresh.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Login.jsx
│   ├── Form.jsx
│   ├── Users.jsx
│   └── Navbar.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 💻 Run Locally

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go inside the project:

```bash
cd expense-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 🌐 Live Demo

Try the project here:

https://expense-tracker-ten-phi-69.vercel.app/

### Demo Login

```text
Name: vimal
Password: 12345
```

---

## 🎯 Purpose of This Project

This project was built as a **React mini project for learning and practice**.

The main goal was to understand how React state, forms, browser storage, and component communication work together in a real application.

> **Course 30% → Khud Coding 70%**

---

## 📚 What I Learned

While building this project, I practiced:

* React component structure
* Props
* State management
* State lifting
* `useState`
* Conditional rendering
* Array methods like `map()`
* Unique IDs
* Form validation
* React Hook Form
* Local Storage
* Session Storage
* Passing data between components
* Dynamic rendering
* Deploying a React application with Vercel

---

## 👨‍💻 Author

**Jass**

Built with React while learning and practicing full-stack development.
