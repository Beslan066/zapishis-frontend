import { Link } from "react-router-dom";
import "./styles.css";
import UpcomingAppointments from "../../components/UpcomingAppointments";
import AppointmentsHistory from "../../components/AppointmentsHistory";
const mockAppointments = [
  {
    id: 1,
    businessName: "BarberShop №1",
    serviceName: "Мужская стрижка",
    date: "15.08.2026 14:00",
    employeeName: "Алексей Иванов",
    statusLabel: "Подтверждено",
    statusClass: "status-confirmed",
    canBeCancelled: true,
  },
  {
    id: 2,
    businessName: "Beauty Studio",
    serviceName: "Маникюр + гель-лак",
    date: "18.08.2026 11:30",
    employeeName: "Мария Петрова",
    statusLabel: "Ожидает",
    statusClass: "status-pending",
    canBeCancelled: true,
  },
  {
    id: 3,
    businessName: "Dentist Pro",
    serviceName: "Консультация ортодонта",
    date: "20.08.2026 17:00",
    employeeName: "Дмитрий Смирнов",
    statusLabel: "Завершено",
    statusClass: "status-completed",
    canBeCancelled: false,
  },
  {
    id: 4,
    businessName: "FitLife Gym",
    serviceName: "Персональная тренировка",
    date: "22.08.2026 09:00",
    employeeName: "Елена Козлова",
    statusLabel: "Новая",
    statusClass: "status-default",
    canBeCancelled: false,
  },
];
const mockHistory = [
  {
    id: 101,
    businessName: "Стоматология Дент",
    serviceName: "Осмотр и чистка",
    date: "10.07.2026 12:00",
    statusLabel: "Выполнено",
  },
  {
    id: 102,
    businessName: "Салон Элегия",
    serviceName: "Окрашивание волос",
    date: "25.06.2026 15:30",
    statusLabel: "Отменено",
  },
];
export default function ClientDashboard() {
  const user = {
    name: "Test",
  };

  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="clientDashboard-space-y">
        {/* Приветствие */}
        <div className="clientDashboard-card">
          <div className="welcome-row">
            <div>
              <h1 className="welcome-title">
                <span>👋</span> Добро пожаловать, {user.name}
              </h1>
              <p className="welcome-subtitle">
                Вот ваши последние записи и активность
              </p>
            </div>

            <Link to="/companies" className="welcome-action-btn">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Найти компанию
            </Link>
          </div>
        </div>
        {/* Статистика */}
        <div className="stats-grid">
          {/* Всего записей */}
          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-label">Всего записей</p>
                <p className="stats-value">0</p>
              </div>
              <div className="stats-icon-wrapper icon-indigo">
                <svg
                  className="stats-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Предстоящие */}
          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-label">Предстоящие</p>
                <p className="stats-value">0</p>
              </div>
              <div className="stats-icon-wrapper icon-emerald">
                <svg
                  className="stats-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Завершенные */}
          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-label">Завершенные</p>
                <p className="stats-value">0</p>
              </div>
              <div className="stats-icon-wrapper icon-blue">
                <svg
                  className="stats-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Компании */}
          <div className="stats-card">
            <div className="stats-card-content">
              <div>
                <p className="stats-label">Компании</p>
                <p className="stats-value">0</p>
              </div>
              <div className="stats-icon-wrapper icon-purple">
                <svg
                  className="stats-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <UpcomingAppointments appointments={mockAppointments} />
        <AppointmentsHistory history={mockHistory} />
      </div>
    </>
  );
}
