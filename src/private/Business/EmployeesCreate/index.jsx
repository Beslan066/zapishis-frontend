import "./styles.css";

export default function EmployeesCreate() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="employee-form-container">
        <div className="employee-card">
          <div className="employee-card__header">
            <div className="employee-card__icon-wrapper">
              <svg
                className="employee-card__icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h1 className="employee-card__title">Добавить сотрудника</h1>
          </div>

          <form className="employee-form">
            <div className="employee-form__fieldset">
              <div className="employee-form__field">
                <label htmlFor="name" className="employee-form__label">
                  ФИО *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="employee-form__input"
                  placeholder="Иванов Иван Иванович"
                />
              </div>

              <div className="employee-form__row">
                <div className="employee-form__field">
                  <label htmlFor="phone" className="employee-form__label">
                    Телефон
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="employee-form__input"
                    placeholder="+7 999 123 45 67"
                  />
                </div>

                <div className="employee-form__field">
                  <label htmlFor="email" className="employee-form__label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="employee-form__input"
                    placeholder="example@mail.com"
                  />
                </div>
              </div>

              <div className="employee-form__field">
                <label htmlFor="position" className="employee-form__label">
                  Должность
                </label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  className="employee-form__input"
                  placeholder="Парикмахер"
                />
              </div>

              <div className="employee-form__field">
                <label
                  htmlFor="commission_percent"
                  className="employee-form__label"
                >
                  Комиссия (%)
                </label>
                <input
                  type="number"
                  name="commission_percent"
                  id="commission_percent"
                  defaultValue="0"
                  step="0.01"
                  className="employee-form__input"
                  placeholder="40"
                />
              </div>

              <div className="employee-form__field">
                <label className="employee-form__checkbox-label">
                  <input
                    type="checkbox"
                    name="is_active"
                    defaultChecked
                    className="employee-form__checkbox"
                  />
                  <span className="employee-form__checkbox-text">Активен</span>
                </label>
              </div>
            </div>

            <div className="employee-form__actions">
              <a
                href="/employees"
                className="employee-form__btn employee-form__btn--cancel"
              >
                Отмена
              </a>
              <button
                type="submit"
                className="employee-form__btn employee-form__btn--submit"
              >
                Добавить
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
