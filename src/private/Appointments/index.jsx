import "./styles.css";
export default function Appointments() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="appointments-container">
        {/* Шапка */}
        <div className="appointments-card header-card">
          <div className="header-flex">
            <div>
              <h1 className="header-title">
                <span className="header-emoji">📅</span>
                Мои записи
              </h1>
              <p className="header-subtitle">Все ваши записи в одном месте</p>
            </div>
            <div className="header-actions">
              <a href="/dashboard" className="btn-back">
                ← Назад
              </a>
              <a href="/companies" className="btn-primary">
                <svg
                  className="btn-icon"
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
                Новая запись
              </a>
            </div>
          </div>
        </div>

        {/* Фильтры по статусам */}
        <div className="filter-badges-row">
          <a href="/appointments" className="badge-link badge-all active">
            Все
          </a>
          <a
            href="/appointments?status=pending"
            className="badge-link badge-pending"
          >
            Ожидают
          </a>
          <a
            href="/appointments?status=confirmed"
            className="badge-link badge-confirmed"
          >
            Подтверждены
          </a>
          <a
            href="/appointments?status=completed"
            className="badge-link badge-completed"
          >
            Завершены
          </a>
          <a
            href="/appointments?status=cancelled"
            className="badge-link badge-cancelled"
          >
            Отменены
          </a>
        </div>

        {/* Список записей */}
        <div className="appointments-card list-card">
          <div className="appointments-list">
            {/* Пример карточки: Подтверждено */}
            <div className="appointment-item">
              <div className="appointment-main-info">
                <div className="company-avatar-box">
                  <span className="company-avatar-text">Б</span>
                </div>
                <div>
                  <p className="service-name">Стрижка и укладка</p>
                  <p className="company-name">Барбершоп Борз</p>
                  <div className="meta-info-row">
                    <span className="meta-item">
                      <svg
                        className="meta-icon"
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
                      24.08.2026 14:00
                    </span>
                    <span className="meta-item">
                      <svg
                        className="meta-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Ахмед Алиев
                    </span>
                    <span className="meta-item">
                      <svg
                        className="meta-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0-1V5m0 5v1"
                        />
                      </svg>
                      1 500 ₽
                    </span>
                  </div>
                </div>
              </div>
              <div className="appointment-actions-block">
                <span className="status-label label-confirmed">
                  Подтверждено
                </span>
                <a
                  href="/appointments/1"
                  className="action-btn-circle view-btn"
                >
                  <svg
                    className="action-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </a>
                <button
                  type="button"
                  className="action-btn-circle cancel-btn"
                  title="Отменить"
                >
                  <svg
                    className="action-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Пример карточки: В ожидании */}
            <div className="appointment-item">
              <div className="appointment-main-info">
                <div className="company-avatar-box">
                  <span className="company-avatar-text">М</span>
                </div>
                <div>
                  <p className="service-name">Консультация врача</p>
                  <p className="company-name">Медицинский центр</p>
                  <div className="meta-info-row">
                    <span className="meta-item">
                      <svg
                        className="meta-icon"
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
                      25.08.2026 10:00
                    </span>
                    <span className="meta-item">
                      <svg
                        className="meta-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Мадина Исаева
                    </span>
                    <span className="meta-item">
                      <svg
                        className="meta-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0-1V5m0 5v1"
                        />
                      </svg>
                      2 000 ₽
                    </span>
                  </div>
                </div>
              </div>
              <div className="appointment-actions-block">
                <span className="status-label label-pending">Ожидает</span>
                <a
                  href="/appointments/2"
                  className="action-btn-circle view-btn"
                >
                  <svg
                    className="action-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </a>
                <button
                  type="button"
                  className="action-btn-circle cancel-btn"
                  title="Отменить"
                >
                  <svg
                    className="action-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
