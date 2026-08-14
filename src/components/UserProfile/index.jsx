import "./styles.css";
export const UserProfile = ({ isBusiness }) => {
  return (
    <div className="user-profile">
      {/* Кнопка открытия (триггер ховера) */}
      <button className="user-profile__trigger">
        <div className="user-profile__avatar">И</div>
        <span className="user-profile__trigger-name">Иван Иванов</span>
        <svg
          className="user-profile__trigger-arrow"
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

      {/* Выпадающее меню */}
      <div className="user-profile__dropdown">
        <div className="user-profile__dropdown-container">
          {/* Информация о пользователе (Хедер меню) */}
          <div className="user-profile__user-info">
            <p className="user-profile__name">Иван Иванов</p>
            <p className="user-profile__email">user@example.com</p>
            <p className="user-profile__role-wrapper">
              {isBusiness ? (
                <span className="user-profile__role-badge user-profile__role-badge--business">
                  Бизнес
                </span>
              ) : (
                <span className="user-profile__role-badge user-profile__role-badge--client">
                  Клиент
                </span>
              )}
            </p>
          </div>

          {/* Ссылки управления */}
          <a href="/my-business" className="user-profile__link">
            <svg
              className="user-profile__link-icon"
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
            Мой бизнес
          </a>

          <a href="/profile/edit" className="user-profile__link">
            <svg
              className="user-profile__link-icon"
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
            Профиль
          </a>

          {/* Кнопка выхода */}
          <form className="user-profile__logout-form">
            <button
              type="submit"
              className="user-profile__link user-profile__link--logout"
            >
              <svg
                className="user-profile__link-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Выйти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
