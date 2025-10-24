# 🏃‍♂️ Athletics Hub: Event Management System

**Athletics Hub** is a dynamic, full-stack web application designed to be the central platform for managing and participating in various athletic events like running, swimming, and long jump. Users can explore featured events, book training sessions, interact with professional trainers, and even create and manage their own events.

## ✨ Key Features

This platform is built with a focus on user experience, event organization, and community engagement.

### 🌐 Public & Navigation Features (Landing Page)

1.  **Crausal Banner:** An engaging, smoothly animated carousel banner on the homepage highlights featured events and key offerings.
2.  **Smooth Scroll Navigation:** A dedicated button at the bottom of the page allows users to smoothly scroll back to the top of the landing page for easy navigation.
3.  **Event Listing (Read):** Browse and view details of all available athletic events.
4.  **Trainer Profiles:** Dedicated section showcasing professional trainer profiles and their specializations.
5.  **Training Sessions:** Information and schedules for various training programs available.
6.  **Testimonials:** User feedback and success stories to build trust and community.
7.  **Contact (EmailJS):** Direct communication channel allowing users to contact the admin/support via an integrated email form.
8.  **Event Calendar:** A visual calendar displaying upcoming event dates and schedules.
9.  **Statistics:** Display of key metrics like **Total Members** and **Total Trainers** to highlight community size.

---

### 🔑 Authenticated User Features

After logging in via **Firebase Authentication**, users gain access to powerful event management capabilities:

10. **Booking Event:** Users can seamlessly book slots for any available athletic event.
11. **My Booking & Cancellation:** A personalized dashboard to view all booked events and the ability to **Cancel** any existing booking.
12. **Create New Event:** Users can create and list their own athletic events on the platform.
13. **Manage User Events (Update & Delete):** Full CRUD (Create, Read, Update, Delete) functionality allowing users to **Update** details or **Delete** their self-created events.
14. **Event Details:** Detailed page for each event, showing comprehensive information required for informed decision-making.

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | **React** | Core JavaScript library for building the user interface. |
| **Styling** | **Tailwind CSS** | Utility-first CSS framework for rapid and responsive UI development. |
| **UI Components** | **DaisyUI** | Tailwind CSS component library for ready-made components. |
| **Animation** | **Lottie (lottie-react)** | For rendering high-quality, scalable animations (e.g., in the Contact Section). |
| **State Management** | **Context API** | Efficient global state management across the React application. |
| **Authentication** | **Firebase** | Secure user registration, login, and session management. |
| **Backend** | **Node.js** | Runtime environment for the server-side logic. |
| **Database** | **MongoDB** | NoSQL database for flexible and scalable data storage (events, users, bookings). |

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

* Node.js (LTS version recommended)
* MongoDB Atlas Account (or local MongoDB setup)
* Firebase Project Setup (for authentication keys)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [Your-Repo-URL]
    cd athletics-hub
    ```
2.  **Install dependencies (Client & Server):**
    ```bash
    # Frontend
    cd client
    npm install
    # Backend
    cd ../server
    npm install
    ```
3.  **Configure Environment Variables:**
    Create a `.env` file in the **server** directory and add your credentials:
    ```
    PORT=5000
    DATABASE_URL=your_mongodb_connection_string
    # Add any Firebase Admin SDK keys if required for server-side auth checks
    ```
    Create a `.env` file in the **client** directory and add your Firebase and EmailJS credentials:
    ```
    VITE_FIREBASE_API_KEY=...
    VITE_EMAILJS_SERVICE_ID=...
    # ... other Firebase/EmailJS keys
    ```
4.  **Run the application:**
    ```bash
    # Start the backend server
    cd server
    npm run start 

    # Start the frontend development server
    cd ../client
    npm run dev 
    ```

The application will be accessible at `http://localhost:5173` (default Vite port).

## 🤝 Contribution

Contributions are welcome! Feel free to open issues or submit pull requests to improve the platform.

