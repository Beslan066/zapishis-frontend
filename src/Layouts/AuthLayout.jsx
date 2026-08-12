import { Outlet } from "react-router-dom";
import "../styles/layouts/auth-layout.css";

export default function AuthLayout() {
  return (
    <>
      {/* 1. Общий декоративный анимированный фон */}
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>

      {/* 2. Общий контейнер-центровщик */}
      <div className="auth-container">
        <div className="auth-card">
          <Outlet />
        </div>
      </div>
    </>
  );
}
