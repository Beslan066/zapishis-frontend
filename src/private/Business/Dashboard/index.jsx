import "./styles.css";

export default function Dashboard() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="dashboard">
        {/* Приветствие */}
        <div className="dashboard__greeting">
          <div className="dashboard__layout">
            <div className="dashboard__info">
              <h1 className="dashboard__title">
                Добро пожаловать, Уважаемый Пользователь! 👋
              </h1>
              <p className="dashboard__subtitle">
                Вот что происходит в вашем бизнесе сегодня
              </p>
            </div>
            <a href="#" className="dashboard__btn dashboard__btn--create">
              <svg
                className="dashboard__icon"
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
              Новая запись
            </a>
          </div>
        </div>
        {/* Статистика */}
        <div className="stats-grid">
          {/* Всего записей */}
          <div className="stats-card stats-card--appointments">
            <div className="stats-card__body">
              <div className="stats-card__info">
                <p className="stats-card__label">Всего записей</p>
                <p className="stats-card__value">0</p>
              </div>
              <div className="stats-card__icon-wrapper stats-card__icon-wrapper--appointments">
                <svg
                  className="stats-card__icon"
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

          {/* Выручка */}
          <div className="stats-card stats-card--revenue">
            <div className="stats-card__body">
              <div className="stats-card__info">
                <p className="stats-card__label">Выручка</p>
                <p className="stats-card__value">0 ₽</p>
              </div>
              <div className="stats-card__icon-wrapper stats-card__icon-wrapper--revenue">
                <svg
                  className="stats-card__icon"
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
              </div>
            </div>
          </div>

          {/* Клиенты */}
          <div className="stats-card stats-card--clients">
            <div className="stats-card__body">
              <div className="stats-card__info">
                <p className="stats-card__label">Клиенты</p>
                <p className="stats-card__value">0</p>
              </div>
              <div className="stats-card__icon-wrapper stats-card__icon-wrapper--clients">
                <svg
                  className="stats-card__icon"
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
              </div>
            </div>
          </div>

          {/* Сотрудники */}
          <div className="stats-card stats-card--employees">
            <div className="stats-card__body">
              <div className="stats-card__info">
                <p className="stats-card__label">Сотрудники</p>
                <p className="stats-card__value">0</p>
              </div>
              <div className="stats-card__icon-wrapper stats-card__icon-wrapper--employees">
                <svg
                  className="stats-card__icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Список записей */}
        <div className="appointments-table">
          <div className="appointments-table__header">
            <h3 className="appointments-table__title">📅 Записи на сегодня</h3>
            <a href="#" className="appointments-table__link">
              Все записи →
            </a>
          </div>
          <div className="appointments-table__responsive-wrapper">
            <table className="appointments-table__main">
              <thead>
                <tr className="appointments-table__row appointments-table__row--head">
                  <th className="appointments-table__cell appointments-table__cell--head">
                    Время
                  </th>
                  <th className="appointments-table__cell appointments-table__cell--head">
                    Клиент
                  </th>
                  <th className="appointments-table__cell appointments-table__cell--head">
                    Услуга
                  </th>
                  <th className="appointments-table__cell appointments-table__cell--head">
                    Сотрудник
                  </th>
                  <th className="appointments-table__cell appointments-table__cell--head">
                    Статус
                  </th>
                </tr>
              </thead>
              <tbody className="appointments-table__body">
                {/* Пример строки с подтвержденным статусом */}
                <tr className="appointments-table__row">
                  <td className="appointments-table__cell appointments-table__cell--time">
                    10:00
                  </td>
                  <td className="appointments-table__cell">
                    <div className="appointments-table__client">
                      <div className="appointments-table__avatar">ИИ</div>
                      <span className="appointments-table__client-name">
                        Иван Иванов
                      </span>
                    </div>
                  </td>
                  <td className="appointments-table__cell appointments-table__cell--service">
                    Стрижка
                  </td>
                  <td className="appointments-table__cell appointments-table__cell--employee">
                    Алексей
                  </td>
                  <td className="appointments-table__cell">
                    <span className="appointments-table__status appointments-table__status--confirmed">
                      Confirmed
                    </span>
                  </td>
                </tr>

                {/* Пример строки с ожидающим статусом */}
                <tr className="appointments-table__row">
                  <td className="appointments-table__cell appointments-table__cell--time">
                    11:30
                  </td>
                  <td className="appointments-table__cell">
                    <div className="appointments-table__client">
                      <div className="appointments-table__avatar">ПП</div>
                      <span className="appointments-table__client-name">
                        Петр Петров
                      </span>
                    </div>
                  </td>
                  <td className="appointments-table__cell appointments-table__cell--service">
                    Окрашивание
                  </td>
                  <td className="appointments-table__cell appointments-table__cell--employee">
                    Мария
                  </td>
                  <td className="appointments-table__cell">
                    <span className="appointments-table__status appointments-table__status--pending">
                      Pending
                    </span>
                  </td>
                </tr>

                {/* Пример пустой таблицы (раскомментировать при необходимости) */}
                {/* 
            <tr>
              <td colSpan="5" className="appointments-table__cell appointments-table__cell--empty">
                Нет записей на сегодня 🎉
              </td>
            </tr> 
            */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="empty-state">
          <div className="empty-state__icon-box">
            <svg
              className="empty-state__icon"
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
          <h3 className="empty-state__title">У вас пока нет бизнеса</h3>
          <p className="empty-state__description">
            Создайте свой первый бизнес и начните принимать записи
          </p>
          <a href="#" className="empty-state__btn">
            <svg
              className="empty-state__btn-icon"
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
            Создать бизнес
          </a>
        </div>
      </div>
    </>
  );
}
