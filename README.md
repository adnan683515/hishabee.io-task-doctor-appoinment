# Doctor Appointment Management App

This is a **full-stack Doctor Appointment Management application** built using **React**, **Node.js**, **Express**, and **MongoDB**. The app allows patients to view doctors, book appointments, and manage their schedules while providing a smooth user experience with authentication, filtering, and real-time feedback.

---

## Features

- **User Authentication**
  - Login & signup
  - Role-based access: `PATIENT` & `DOCTOR`
  - Protected routes with token-based authentication

- **Doctor Management**
  - View list of available doctors
  - Filter doctors by **specialization** and **search by name**
  - Book appointments directly from the dashboard
  - Responsive doctor cards with image fallback

- **Appointment Management**
  - Patients can view appointments with **status filter**: Pending, Completed, Cancelled
  - Pagination support for both doctors and appointments
  - Real-time UI updates using **React Query**
  - Mobile-friendly design with compact cards and buttons

- **Custom Hooks**
  - `AxiosHookInstance` → central axios instance for API calls
  - `AuthHook` → manages authentication & tokens
  - `BookAppointment` → modal component for booking

- **State Management & Context**
  - `React Context` for global state (auth & user info)
  - `useState` and `useEffect` for local component states
  - Search & filter updates via queryKey changes in **React Query**

- **Error Handling**
  - API error handling with proper feedback
  - Authentication errors handled gracefully

- **UI/UX**
  - Fully responsive dashboard & appointment pages
  - Tailwind CSS for fast styling
  - Interactive buttons, hover effects, and modals
  - Small mobile-friendly text, buttons, and spacing

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Query
- **Others:** Axios, React Router, Headless UI, React Hook Form

---

## Setup

1. Clone the repo:

```bash
git clone <your-repo-url>
cd doctor-appointment-app
