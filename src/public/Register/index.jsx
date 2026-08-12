import { useState } from "react";
import "./styles.css";

export default function Register() {
  const [step, setStep] = useState("role");
  const [selectedRole, setSelectedRole] = useState(null);
  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setStep("register");
  };

  return (
    <>
      <div className="logo-wrapper">
        <a href="/" className="logo-link">
          <div className="logo-icon">
            <span className="logo-text-letter">З</span>
          </div>
          <span className="logo-text-main">Запишись</span>
        </a>
        <p className="logo-subtitle">Создайте аккаунт</p>
      </div>
      {/* Шаг 0: Выбор роли */}
      {step === "role" && (
        <div id="stepRole" className="step-card">
          <h2 className="step-title">Выберите тип аккаунта</h2>

          <div className="role-grid">
            {/* Клиент */}
            <button
              type="button"
              id="selectClient"
              className="role-button"
              onClick={() => handleRoleSelection("client")}
            >
              <div className="role-icon">👤</div>
              <h3 className="role-name">Клиент</h3>
              <p className="role-description">Искать услуги и записываться</p>
            </button>

            {/* Бизнес */}
            <button
              type="button"
              id="selectBusiness"
              className="role-button"
              onClick={() => handleRoleSelection("business")}
            >
              <div className="role-icon">🏢</div>
              <h3 className="role-name">Бизнес</h3>
              <p className="role-description">Принимать записи и управлять</p>
            </button>
          </div>
        </div>
      )}

      {/* Шаг 1: Форма регистрации (По умолчанию скрыт) */}
      {step === "register" && (
        <div id="stepRegister" className="step-card">
          <div className="form-header">
            <button
              type="button"
              id="backToRole"
              className="back-button"
              onClick={() => setStep("role")}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
            <div>
              <h2 className="form-title">Заполните данные</h2>
              <p className="form-subtitle" id="roleLabel">
                Регистрация как{" "}
                <span className="role-highlight">
                  {selectedRole === "client" ? "Клиент" : "Бизнес"}
                </span>
              </p>
            </div>
          </div>

          <form id="registerForm" className="form-space">
            {/* Поле имени */}
            <div>
              <label htmlFor="name" className="input-label">
                Как к вам обращаться? *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="form-input"
                placeholder="Иван Иванов"
              />
              <div id="nameError" className="input-error hidden"></div>
            </div>

            {/* Поле телефона */}
            <div>
              <label htmlFor="phone" className="input-label">
                Номер телефона *
              </label>
              <div className="input-relative">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  className="form-input"
                  placeholder="+7 999 123 45 67"
                />
                <span className="input-badge">SMS</span>
              </div>
              <div id="phoneError" className="input-error hidden"></div>
            </div>

            {/* Поле Email */}
            <div>
              <label htmlFor="email" className="input-label">
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="form-input"
                placeholder="beslan@example.com"
              />
              <div id="emailError" className="input-error hidden"></div>
            </div>

            {/* Поле пароля */}
            <div>
              <label htmlFor="password" className="input-label">
                Пароль *
              </label>
              <div className="input-relative">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  className="form-input"
                  placeholder="Минимум 8 символов"
                />
                <button
                  type="button"
                  id="togglePassword"
                  className="toggle-password-btn"
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>
              <div id="passwordError" className="input-error hidden"></div>
              <p className="input-hint">
                Пароль должен содержать минимум 8 символов
              </p>
            </div>

            {/* Подтверждение пароля */}
            <div>
              <label htmlFor="password_confirmation" className="input-label">
                Подтвердите пароль *
              </label>
              <input
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                required
                className="form-input"
                placeholder="Повторите пароль"
              />
              <div
                id="passwordConfirmationError"
                className="input-error hidden"
              ></div>
            </div>

            {/* Согласие с условиями */}
            <div className="terms-container">
              <input
                id="terms"
                type="checkbox"
                required
                className="terms-checkbox"
              />
              <label htmlFor="terms" className="terms-text">
                Я соглашаюсь с{" "}
                <a href="#" className="terms-link">
                  условиями использования
                </a>{" "}
                и{" "}
                <a href="#" className="terms-link">
                  политикой конфиденциальности
                </a>
              </label>
            </div>

            {/* Кнопка отправки */}
            <button
              type="button"
              id="registerBtn"
              className="submit-btn"
              onClick={() => setStep("verify")}
            >
              Зарегистрироваться
            </button>

            {/* Ссылка на вход */}
            <div className="footer-text">
              <p>
                Уже есть аккаунт?{" "}
                <a href="/login" className="terms-link">
                  Войти
                </a>
              </p>
            </div>
          </form>
        </div>
      )}

      {/* Шаг 2: Подтверждение SMS (По умолчанию скрыт) */}
      {step === "verify" && (
        <div id="stepVerify" className="step-card">
          <div className="verify-text-center">
            <div className="verify-icon-box">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="form-title">Подтвердите номер телефона</h3>
            <p className="form-subtitle">
              Мы отправили SMS с кодом на номер <br />
              <strong id="verifyPhoneDisplay" style={{ color: "#111827" }}>
                +7 999 123 45 67
              </strong>
            </p>
          </div>

          <form id="verifyForm" className="form-space">
            <div>
              <label htmlFor="sms_code" className="input-label">
                Введите код из SMS
              </label>
              <div className="sms-row">
                <div className="flex-1">
                  <input
                    id="sms_code"
                    type="text"
                    maxLength="6"
                    required
                    className="form-input sms-input"
                    placeholder="••••••"
                  />
                </div>
                <button type="button" id="resendCodeBtn" className="resend-btn">
                  Отправить повторно
                </button>
              </div>
              <div id="smsError" className="input-error hidden">
                Неверный код
              </div>
              <div id="smsSuccess" className="input-success hidden">
                Код успешно отправлен!
              </div>
            </div>

            <button type="button" id="verifyBtn" className="verify-submit-btn">
              Подтвердить и войти
            </button>

            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                id="backToRegister"
                className="text-button-back"
                onClick={() => setStep("register")}
              >
                ← Вернуться к регистрации
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
