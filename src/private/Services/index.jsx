import "./styles.css";

export default function Services() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="services-page">
        {/* Заголовок */}
        <div className="services-page__top-panel">
          <div className="services-page__layout">
            <div className="services-page__info">
              <h1 className="services-page__title">
                <span className="services-page__title-emoji">💇</span>
                Услуги
              </h1>
              <p className="services-page__subtitle">
                Управляйте услугами вашего бизнеса
              </p>
            </div>
            <a
              href="#"
              className="services-page__btn services-page__btn--create"
            >
              <svg
                className="services-page__btn-icon"
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
              Добавить услугу
            </a>
          </div>
        </div>
        <div className="services-list">
          <div className="services-list__responsive-wrapper">
            <table className="services-list__table">
              <thead>
                <tr className="services-list__row services-list__row--head">
                  <th className="services-list__cell services-list__cell--head">
                    Название
                  </th>
                  <th className="services-list__cell services-list__cell--head">
                    Длительность
                  </th>
                  <th className="services-list__cell services-list__cell--head">
                    Цена
                  </th>
                  <th className="services-list__cell services-list__cell--head">
                    Статус
                  </th>
                  <th className="services-list__cell services-list__cell--head services-list__cell--right">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="services-list__body">
                {/* Пример активной услуги */}
                <tr className="services-list__row">
                  <td className="services-list__cell">
                    <div className="services-list__meta">
                      <div
                        className="services-list__color-marker"
                        style={{ backgroundColor: "#818cf8" }}
                      ></div>
                      <span className="services-list__name">
                        Мужская стрижка
                      </span>
                    </div>
                    <p className="services-list__description">
                      Классическая мужская стрижка с мытьем головы
                    </p>
                  </td>
                  <td className="services-list__cell services-list__cell--text-sm">
                    45 мин
                  </td>
                  <td className="services-list__cell">
                    <span className="services-list__price">1 500 ₽</span>
                    <span className="services-list__price-discount">
                      1 800 ₽
                    </span>
                  </td>
                  <td className="services-list__cell">
                    <span className="services-list__status services-list__status--active">
                      Активна
                    </span>
                  </td>
                  <td className="services-list__cell services-list__cell--right">
                    <div className="services-list__actions">
                      <a href="#" className="services-list__action-btn">
                        <svg
                          className="services-list__icon"
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
                      <a href="#" className="services-list__action-btn">
                        <svg
                          className="services-list__icon"
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
                        className="services-list__action-btn services-list__action-btn--delete"
                      >
                        <svg
                          className="services-list__icon"
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
              </tbody>
            </table>
          </div>

          {/* Пагинация */}
          <div className="services-list__pagination">
            {/* Компонент пагинации */}
          </div>

          {/* Пример пустого состояния (раскомментировать при отсутствии данных) */}
          {/* 
      <div className="services-list__empty">
        <div className="services-list__empty-icon-box">
          <svg className="services-list__empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
        </div>
        <h3 className="services-list__empty-title">Нет услуг</h3>
        <p className="services-list__empty-description">Добавьте первую услугу для вашего бизнеса</p>
        <a href="#" className="services-list__empty-btn">
          <svg className="services-list__empty-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
          Добавить услугу
        </a>
      </div>
      */}
        </div>
      </div>
    </>
  );
}
