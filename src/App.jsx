import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
// import AppLayout from "./Layouts/AppLayout";

// Страницы
import Home from "./public/Home";
import Register from "./public/Register";
import Login from "./public/Login";
import AuthLayout from "./Layouts/AuthLayout";
import PrivateLayout from "./Layouts/PrivateLayout";
import ClientDashboard from "./private/Client/Dashboard";
import Search from "./private/Client/Search";
import Companies from "./private/Client/Companies";
import AppointmentsClient from "./private/Client/Appointments";
import AppointmentHistory from "./private/Client/History";
import ProfilePage from "./private/Client/Profile";
import CompanyDetail from "./private/Client/CompanyDetail";
import Dashboard from "./private/Dashboard";
import Appointments from "./private/Appointments";
import Services from "./private/Services";
import EmployeesPage from "./private/Employees";
import Clients from "./private/Clients";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Публичная часть (доступна всем) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Приватная часть (защищена ProtectedRoute) */}
        {/* <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}

        {/* Регистрация */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/client/search" element={<Search />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:id" element={<CompanyDetail />} />
          <Route path="/client/appointments" element={<AppointmentsClient />} />
          <Route path="/client/history" element={<AppointmentHistory />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/services" element={<Services />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/clients" element={<Clients />} />
        </Route>
        {/* 404 Страница */}
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
