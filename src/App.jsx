import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './Layouts/PublicLayout';
import AppLayout from './Layouts/AppLayout';

// Страницы
import Home from './public/Home';
import Dashboard from './frontend/Dashboard';

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

        {/* 404 Страница */}
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
    </BrowserRouter>
  );
}