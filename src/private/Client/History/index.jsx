import "./styles.css";

export default function AppointmentHistory() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="history-container">
        {/* Шапка */}
        <div className="history-card header-card">
          <div className="header-flex">
            <div>
              <h1 className="header-title">История записей</h1>
              <p className="header-subtitle">
                Все ваши завершенные и отмененные записи
              </p>
            </div>
            <a href="/dashboard" className="btn-back">
              ← Назад
            </a>
          </div>
        </div>

        {/* Основной контент */}
        <div className="history-card content-card">
          <div className="history-list">
            {/* Пример: Завершенная запись */}
            <div className="history-item">
              <div className="item-main-info">
                <div className="company-avatar-box">
                  <span className="company-avatar-text">С</span>
                </div>
                <div>
                  <p className="service-name">Массаж спины</p>
                  <p className="company-name">Спа-салон Силуэт</p>
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
                      12.08.2026 18:00
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
                      Елена Петрова
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
                      2 500 ₽
                    </span>
                  </div>
                </div>
              </div>
              <span className="status-badge label-completed">Завершено</span>
            </div>

            {/* Пример: Отмененная запись */}
            <div className="history-item">
              <div className="item-main-info">
                <div className="company-avatar-box">
                  <span className="company-avatar-text">Д</span>
                </div>
                <div>
                  <p className="service-name">Консультация юриста</p>
                  <p className="company-name">Дело и Право</p>
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
                      10.08.2026 12:30
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
                      Иван Иванов
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
                      3 000 ₽
                    </span>
                  </div>
                </div>
              </div>
              <span className="status-badge label-cancelled">Отменено</span>
            </div>
          </div>

          {/* Пагинация */}
          <div className="pagination-wrapper">
            {/* Контейнер для вывода ссылок страниц */}
          </div>

          {/* Пример пустого состояния (раскомментировать при необходимости) */}
          {/* 
        <div className="empty-state">
          <div className="empty-icon-box">
            <svg className="empty-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 className="empty-title">История пуста</h3>
          <p className="empty-subtitle">У вас пока нет завершенных записей</p>
        </div> 
        */}
        </div>
      </div>
    </>
  );
}
