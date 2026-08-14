import "./styles.css";
export default function ProfilePage() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="profile-page">
        {/* ================= ЗАГОЛОВОК ================= */}
        <div className="profile-page__card profile-page__card--header">
          <div className="profile-page__header-flex">
            <div className="profile-page__header-text">
              <h1 className="profile-page__title">
                <span className="profile-page__title-emoji">👤</span>
                Профиль
              </h1>
              <p className="profile-page__subtitle">
                Управление личными данными и безопасность
              </p>
            </div>
            <div className="profile-page__badges">
              <span className="profile-page__badge profile-page__badge--verified">
                ✓ Email подтвержден
              </span>
              <span className="profile-page__badge profile-page__badge--verified">
                ✓ Телефон подтвержден
              </span>
            </div>
          </div>
        </div>

        {/* ================= СТАТУС ВЕРИФИКАЦИИ ================= */}
        <div className="profile-page__warning-card">
          <div className="profile-page__warning-flex">
            <div className="profile-page__warning-icon-box">
              <svg
                className="profile-page__warning-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="profile-page__warning-content">
              <h3 className="profile-page__warning-title">
                Завершите регистрацию
              </h3>
              <p className="profile-page__warning-subtitle">
                Для полного доступа к платформе необходимо:
              </p>
              <ul className="profile-page__warning-list">
                <li className="profile-page__warning-item">
                  <svg
                    className="profile-page__warning-item-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Подтвердите email
                  <a
                    href="/verification-notice"
                    className="profile-page__warning-link"
                  >
                    Отправить ссылку
                  </a>
                </li>
                <li className="profile-page__warning-item">
                  <svg
                    className="profile-page__warning-item-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  Подтвердите номер телефона (через SMS код ниже)
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ================= КОНТЕНТНАЯ СЕТКА ПРОФИЛЯ ================= */}
        <div className="profile-page__grid">
          {/* Колонка 1: Информация о пользователе */}
          <div className="profile-page__card profile-page__card--padding-large">
            <h3 className="profile-page__card-title">
              <svg
                className="profile-page__card-title-icon"
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
              Личные данные
            </h3>

            <form className="profile-page__form">
              <div className="profile-page__form-group">
                <label htmlFor="name" className="profile-page__form-label">
                  Имя *
                </label>
                <input
                  id="name"
                  type="text"
                  defaultValue="Иван Иванов"
                  className="profile-page__form-input"
                  required
                />
              </div>

              <div className="profile-page__form-group">
                <label htmlFor="email" className="profile-page__form-label">
                  Email
                </label>
                <div className="profile-page__input-wrapper">
                  <input
                    id="email"
                    type="email"
                    defaultValue="user@example.com"
                    className="profile-page__form-input profile-page__form-input--right-space"
                    required
                  />
                  <span className="profile-page__input-badge-success">✓</span>
                </div>
              </div>

              <div className="profile-page__form-group">
                <label htmlFor="phone" className="profile-page__form-label">
                  Телефон
                </label>
                <div className="profile-page__input-wrapper">
                  <input
                    id="phone"
                    type="tel"
                    defaultValue="+7 (999) 123-45-67"
                    className="profile-page__form-input profile-page__form-input--right-space"
                  />
                  <span className="profile-page__input-badge-success">✓</span>
                </div>
              </div>

              <button
                type="submit"
                className="profile-page__btn-submit profile-page__btn-submit--auto-width"
              >
                Сохранить изменения
              </button>
            </form>
          </div>

          {/* Колонка 2: Безопасность */}
          <div className="profile-page__sidebar-space">
            {/* Блок: Смена пароля */}
            <div className="profile-page__card profile-page__card--padding-large">
              <h3 className="profile-page__card-title">
                <svg
                  className="profile-page__card-title-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Смена пароля
              </h3>

              <form className="profile-page__form">
                <div className="profile-page__form-group">
                  <label
                    htmlFor="current_password"
                    className="profile-page__form-label"
                  >
                    Текущий пароль
                  </label>
                  <input
                    id="current_password"
                    type="password"
                    className="profile-page__form-input"
                    required
                  />
                </div>

                <div className="profile-page__form-group">
                  <label
                    htmlFor="password"
                    className="profile-page__form-label"
                  >
                    Новый пароль
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="profile-page__form-input"
                    required
                  />
                </div>

                <div className="profile-page__form-group">
                  <label
                    htmlFor="password_confirmation"
                    className="profile-page__form-label"
                  >
                    Подтвердите пароль
                  </label>
                  <input
                    id="password_confirmation"
                    type="password"
                    className="profile-page__form-input"
                    required
                  />
                </div>

                <button type="submit" className="profile-page__btn-submit">
                  Сменить пароль
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Блок: Удаление аккаунта */}
        <div className="profile-page__card profile-page__card--padding-large profile-page__card--danger-border">
          <div className="profile-page__delete-row">
            <div>
              <h3 className="profile-page__card-title profile-page__card-title--danger">
                <svg
                  className="profile-page__card-title-icon"
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
                Удаление аккаунта
              </h3>
              <p className="profile-page__delete-text">
                После удаления аккаунта все данные будут потеряны безвозвратно
              </p>
            </div>
            <form className="profile-page__delete-form">
              <button type="submit" className="profile-page__btn-danger">
                Удалить аккаунт
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
