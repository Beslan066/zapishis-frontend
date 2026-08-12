import { NavLink, Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  // Для тестирования верстки измените на false (чтобы увидеть клиентское меню)
  const isBusiness = false;

  const user = {
    name: "Test",
    email: "test@example.com",
  };

  return (
    <nav className="main-navbar">
      <div className="navbar-container">
        <div className="navbar-row">
          <div className="navbar-left-group">
            {/* Логотип */}
            <Link to="/" className="nav-logo-link">
              <div className="nav-logo-icon">
                <span className="nav-logo-letter">З</span>
              </div>
              <span className="nav-logo-text">Запишись</span>
            </Link>

            {/* БИЗНЕС-НАВИГАЦИЯ */}
            {isBusiness ? (
              <div className="nav-menu-links">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  Дашборд
                </NavLink>
                <NavLink
                  to="/appointments"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  Записи
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  Услуги
                </NavLink>
                <NavLink
                  to="/employees"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  Сотрудники
                </NavLink>
                <NavLink
                  to="/clients"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  Клиенты
                </NavLink>
              </div>
            ) : (
              /* КЛИЕНТСКАЯ НАВИГАЦИЯ */
              <div className="nav-menu-links">
                <NavLink
                  to="/client/dashboard"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  🏠 Главная
                </NavLink>
                <NavLink
                  to="/client/search"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  🔍 Поиск
                </NavLink>
                <NavLink
                  to="/companies"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  🏢 Компании
                </NavLink>
                <NavLink
                  to="/client/appointments"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  📅 Мои записи
                </NavLink>
                <NavLink
                  to="/client/history"
                  className={({ isActive }) =>
                    `nav-item ${isActive ? "active" : ""}`
                  }
                >
                  📋 История
                </NavLink>
              </div>
            )}
          </div>

          {/* Правая часть панели */}
          <div className="navbar-right-group">
            {/* Уведомления */}
            <button className="nav-notif-btn">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="nav-notif-dot"></span>
            </button>

            {/* Профиль с выпадающим списком */}
            <div className="nav-profile-wrapper">
              <button className="nav-profile-trigger">
                <div className="nav-avatar">
                  {user.name.substring(0, 1).toUpperCase()}
                </div>
                <span className="nav-username">{user.name}</span>
                <svg
                  className="nav-arrow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className="nav-dropdown">
                <div className="nav-dropdown-info">
                  <p className="nav-dropdown-name">{user.name}</p>
                  <p className="nav-dropdown-email">{user.email}</p>
                  <div className="nav-dropdown-badge-row">
                    {isBusiness ? (
                      <span className="nav-badge-business">Бизнес</span>
                    ) : (
                      <span className="nav-badge-client">Клиент</span>
                    )}
                  </div>
                </div>

                {isBusiness && (
                  <Link to="/businesses/create" className="nav-dropdown-link">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Создать компанию
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
