import "./styles.css";

export default function Clients() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="clients-page__wrapper">
        <div className="clients-page">
          {/* Заголовок */}
          <div className="clients-page__top-panel">
            <div className="clients-page__layout">
              <div className="clients-page__info">
                <h1 className="clients-page__title">
                  <span className="clients-page__title-emoji">👤</span>
                  Клиенты
                </h1>
                <p className="clients-page__subtitle">
                  Управляйте клиентами вашего бизнеса
                </p>
              </div>
              <div className="clients-page__actions">
                <a
                  href="#"
                  className="clients-page__btn clients-page__btn--export"
                >
                  📥 Экспорт
                </a>
                <a
                  href="#"
                  className="clients-page__btn clients-page__btn--create"
                >
                  <svg
                    className="clients-page__btn-icon"
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
                  Добавить клиента
                </a>
              </div>
            </div>
          </div>
          {/* Статистика */}
          <div className="clients-stats">
            {/* Всего клиентов */}
            <div className="clients-stats__card">
              <div className="clients-stats__body">
                <div className="clients-stats__info">
                  <p className="clients-stats__label">Всего клиентов</p>
                  <p className="clients-stats__value">0</p>
                </div>
                <div className="clients-stats__icon-wrapper clients-stats__icon-wrapper--indigo">
                  <svg
                    className="clients-stats__icon"
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

            {/* Новые */}
            <div className="clients-stats__card">
              <div className="clients-stats__body">
                <div className="clients-stats__info">
                  <p className="clients-stats__label">Новые (за месяц)</p>
                  <p className="clients-stats__value">0</p>
                </div>
                <div className="clients-stats__icon-wrapper clients-stats__icon-wrapper--emerald">
                  <svg
                    className="clients-stats__icon"
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
                </div>
              </div>
            </div>

            {/* Постоянные */}
            <div className="clients-stats__card">
              <div className="clients-stats__body">
                <div className="clients-stats__info">
                  <p className="clients-stats__label">Постоянные</p>
                  <p className="clients-stats__value">0</p>
                </div>
                <div className="clients-stats__icon-wrapper clients-stats__icon-wrapper--blue">
                  <svg
                    className="clients-stats__icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Средний чек */}
            <div className="clients-stats__card">
              <div className="clients-stats__body">
                <div className="clients-stats__info">
                  <p className="clients-stats__label">Средний чек</p>
                  <p className="clients-stats__value">0 ₽</p>
                </div>
                <div className="clients-stats__icon-wrapper clients-stats__icon-wrapper--purple">
                  <svg
                    className="clients-stats__icon"
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
          </div>
          {/* Топ клиентов */}
          <div className="clients-top">
            {/* По записям */}
            <div className="clients-top__section">
              <h3 className="clients-top__title">🏆 Топ клиентов по записям</h3>
              <div className="clients-top__list">
                <div className="clients-top__item">
                  <div className="clients-top__user">
                    <div className="clients-top__rank clients-top__rank--visits">
                      1
                    </div>
                    <div>
                      <p className="clients-top__name">Иван Иванов</p>
                      <p className="clients-top__phone">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <span className="clients-top__stat clients-top__stat--visits">
                    15 записей
                  </span>
                </div>

                {/* Пример пустого состояния */}
                {/* <p className="clients-top__empty">Нет данных</p> */}
              </div>
            </div>

            {/* По тратам */}
            <div className="clients-top__section">
              <h3 className="clients-top__title">💰 Топ клиентов по тратам</h3>
              <div className="clients-top__list">
                <div className="clients-top__item">
                  <div className="clients-top__user">
                    <div className="clients-top__rank clients-top__rank--spent">
                      1
                    </div>
                    <div>
                      <p className="clients-top__name">Петр Петров</p>
                      <p className="clients-top__phone">+7 (999) 765-43-21</p>
                    </div>
                  </div>
                  <span className="clients-top__stat clients-top__stat--spent">
                    45 000 ₽
                  </span>
                </div>

                {/* Пример пустого состояния */}
                {/* <p className="clients-top__empty">Нет данных</p> */}
              </div>
            </div>
          </div>
          {/* Список клиентов */}
          <div className="clients-list">
            {/* Шапка списка */}
            <div className="clients-list__header">
              <h3 className="clients-list__title">Все клиенты</h3>
              <div className="clients-list__search-wrapper">
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="clients-list__search-input"
                />
              </div>
            </div>

            {/* Таблица */}
            <div className="clients-list__responsive-wrapper">
              <table className="clients-list__table">
                <thead>
                  <tr className="clients-list__row clients-list__row--head">
                    <th className="clients-list__cell clients-list__cell--head">
                      Клиент
                    </th>
                    <th className="clients-list__cell clients-list__cell--head">
                      Контакты
                    </th>
                    <th className="clients-list__cell clients-list__cell--head clients-list__cell--center">
                      Записи
                    </th>
                    <th className="clients-list__cell clients-list__cell--head clients-list__cell--right">
                      Траты
                    </th>
                    <th className="clients-list__cell clients-list__cell--head clients-list__cell--right">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className="clients-list__body">
                  {/* Пример строки клиента */}
                  <tr className="clients-list__row">
                    <td className="clients-list__cell">
                      <div className="clients-list__meta">
                        <div className="clients-list__avatar">ИИ</div>
                        <div>
                          <p className="clients-list__name">Иван Ivanov</p>
                          <p className="clients-list__last-visit">
                            Последний визит: 14.08.2026
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="clients-list__cell">
                      <div className="clients-list__contacts">
                        <p className="clients-list__phone">
                          +7 (999) 123-45-67
                        </p>
                        <p className="clients-list__email">ivan@example.com</p>
                      </div>
                    </td>
                    <td className="clients-list__cell clients-list__cell--center">
                      <span className="clients-list__count">5</span>
                    </td>
                    <td className="clients-list__cell clients-list__cell--right">
                      <span className="clients-list__spent">15 000 ₽</span>
                    </td>
                    <td className="clients-list__cell clients-list__cell--right">
                      <div className="clients-list__actions">
                        <a
                          href="#"
                          className="clients-list__action-btn"
                          title="История"
                        >
                          <svg
                            className="clients-list__icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="clients-list__action-btn"
                          title="Редактировать"
                        >
                          <svg
                            className="clients-list__icon"
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
                          className="clients-list__action-btn clients-list__action-btn--delete"
                          title="Удалить"
                        >
                          <svg
                            className="clients-list__icon"
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
                    </td>
                  </tr>

                  {/* Пример пустого состояния таблицы */}
                  {/* 
            <tr>
              <td colSpan="5" className="clients-list__cell clients-list__cell--empty">
                Нет клиентов
              </td>
            </tr> 
            */}
                </tbody>
              </table>
            </div>

            {/* Пагинация */}
            <div className="clients-list__pagination">
              {/* Компонент пагинации */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
