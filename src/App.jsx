import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import AuthLayout from "./Layouts/AuthLayout";
import PrivateLayout from "./Layouts/PrivateLayout";
import Home from "./public/Home";
import Register from "./public/Register";
import Login from "./public/Login";
import ClientDashboard from "./private/Client/Dashboard";
import Search from "./private/Client/Search";
import Companies from "./private/Client/Companies";
import CompanyDetail from "./private/Client/CompanyDetail";
import AppointmentsClient from "./private/Client/Appointments";
import AppointmentHistory from "./private/Client/History";
import ProfilePage from "./private/Client/Profile";
import BusinessDashboard from "./private/Business/Dashboard";
import Appointments from "./private/Business/Appointments";
import Services from "./private/Business/Services";
import EmployeesPage from "./private/Business/Employees";
import EmployeesCreate from "./private/Business/EmployeesCreate";
import Clients from "./private/Business/Clients";
import Policy from "./public/Policy";
import Offer from "./public/Offer";
// import AppLayout from "./Layouts/AppLayout";

// Страницы

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Публичная часть (доступна всем) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/offer" element={<Offer />} />
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
          <Route path="/dashboard" element={<BusinessDashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/services" element={<Services />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/employees/create" element={<EmployeesCreate />} />
          <Route path="/clients" element={<Clients />} />
        </Route>
        {/* 404 Страница */}
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
