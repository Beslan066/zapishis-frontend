import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import AppLayout from "./Layouts/AppLayout";

// Страницы
import Home from "./public/Home";
import Dashboard from "./frontend/Dashboard";
import Register from "./public/Register";
import Login from "./public/Login";
import AuthLayout from "./Layouts/AuthLayout";
import PrivateLayout from "./Layouts/PrivateLayout";
import ClientDashboard from "./private/Dashboard";
import Search from "./private/Search";
import Companies from "./private/Companies";
import Appointments from "./private/Appointments";
import AppointmentHistory from "./private/History";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Публичная часть (доступна всем) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Приватная часть (защищена ProtectedRoute) */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Регистрация */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/client/search" element={<Search />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/client/appointments" element={<Appointments />} />
          <Route path="/client/history" element={<AppointmentHistory />} />
        </Route>
        {/* 404 Страница */}
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
