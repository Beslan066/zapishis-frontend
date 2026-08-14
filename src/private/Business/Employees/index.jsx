import "./styles.css";
export default function EmployeesPage() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="employees-page__wrapper">
        <div className="employees-page">
          {/* Заголовок */}
          <div className="employees-page__top-panel">
            <div className="employees-page__layout">
              <div className="employees-page__info">
                <h1 className="employees-page__title">
                  <span className="employees-page__title-emoji">👥</span>
                  Сотрудники
                </h1>
                <p className="employees-page__subtitle">
                  Управляйте сотрудниками вашего бизнеса
                </p>
              </div>
              <a
                href="#"
                className="employees-page__btn employees-page__btn--create"
              >
                <svg
                  className="employees-page__btn-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Добавить сотрудника
              </a>
            </div>
          </div>
          {/* Список сотрудников  */}
          <div className="employees-list">
            <div className="employees-list__grid">
              {/* Карточка сотрудника */}
              <div className="employees-list__card">
                <div className="employees-list__card-header">
                  {/* Аватар */}
                  <div className="employees-list__avatar">
                    <span className="employees-list__avatar-text">А</span>
                  </div>

                  <div className="employees-list__meta">
                    <div className="employees-list__profile">
                      <div>
                        <h3 className="employees-list__name">
                          Александр Иванов
                        </h3>
                        <p className="employees-list__position">Топ-стилист</p>
                      </div>
                      <span className="employees-list__status employees-list__status--active">
                        Активен
                      </span>
                    </div>

                    {/* Контакты */}
                    <div className="employees-list__contacts">
                      <span className="employees-list__contact-item">
                        <svg
                          className="employees-list__contact-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        +7 (999) 123-45-67
                      </span>
                      <span className="employees-list__contact-item">
                        <svg
                          className="employees-list__contact-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        alex@example.com
                      </span>
                    </div>

                    {/* Теги / Показатели */}
                    <div className="employees-list__badges">
                      <span className="employees-list__badge employees-list__badge--indigo">
                        Комиссия: 10%
                      </span>
                      <span className="employees-list__badge employees-list__badge--gray">
                        24 записей
                      </span>
                    </div>
                  </div>
                </div>

                {/* Действия */}
                <div className="employees-list__actions">
                  <a
                    href="#"
                    className="employees-list__action-btn"
                    title="Расписание"
                  >
                    <svg
                      className="employees-list__action-icon"
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
                  </a>
                  <a
                    href="#"
                    className="employees-list__action-btn"
                    title="Просмотр"
                  >
                    <svg
                      className="employees-list__action-icon"
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
                  <a
                    href="#"
                    className="employees-list__action-btn"
                    title="Редактировать"
                  >
                    <svg
                      className="employees-list__action-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </a>
                  <button
                    type="button"
                    className="employees-list__action-btn employees-list__action-btn--delete"
                    title="Удалить"
                  >
                    <svg
                      className="employees-list__action-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Пагинация */}
            <div className="employees-list__pagination">{/* Пагинация */}</div>

            {/* Пример пустого состояния (раскомментировать при отсутствии данных) */}
            {/* 
      <div className="employees-list__empty">
        <div className="employees-list__empty-icon-box">
          <svg className="employees-list__empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="employees-list__empty-title">Нет сотрудников</h3>
        <p className="employees-list__empty-description">Добавьте первого сотрудника в ваш бизнес</p>
        <a href="#" className="employees-list__empty-btn">
          <svg className="employees-list__empty-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Добавить сотрудника
        </a>
      </div>
      */}
          </div>
        </div>
      </div>
    </>
  );
}
