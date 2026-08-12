import "./styles.css"; // Подключаем только специфичные стили для иконок

export default function Login() {
  return (
    <>
      <div className="logo-wrapper">
        <a href="/" className="logo-link">
          <div className="logo-icon">
            <span className="logo-text-letter">З</span>
          </div>
          <span className="logo-text-main">Запишись</span>
        </a>
        <p className="logo-subtitle">Вход по номеру телефона</p>
      </div>
      <div className="step-card">
        {/* Шаг 1: Ввод номера */}
        <div id="stepPhone">
          <form id="loginPhoneForm" className="form-space">
            <div>
              <label htmlFor="login_phone" className="input-label">
                Номер телефона
              </label>
              <div className="input-relative">
                <div className="login-phone-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <input
                  id="login_phone"
                  type="tel"
                  name="phone"
                  required
                  className="form-input login-input-with-icon"
                  placeholder="+7 999 123 45 67"
                />
              </div>
              <div id="loginError" className="input-error hidden">
                Неверный формат номера
              </div>
            </div>

            <button type="submit" id="sendCodeBtn" className="submit-btn">
              Получить код
            </button>

            <div className="footer-text">
              <p>
                Нет аккаунта?{" "}
                <a href="/register" className="terms-link">
                  Зарегистрироваться
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Шаг 2: Ввод кода (Для теста переключения уберите класс hidden) */}
        <div id="stepCode" className="hidden">
          <div className="lock-header-wrapper">
            <div className="lock-icon-box">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="form-title">Введите код из SMS</h3>
            <p className="form-subtitle">
              Код отправлен на номер <br />
              <strong id="verifyPhoneDisplay" style={{ color: "#111827" }}>
                +7 999 123 45 67
              </strong>
            </p>
          </div>

          <form id="loginCodeForm" className="form-space">
            <div>
              <label htmlFor="login_code" className="input-label">
                Код из SMS
              </label>
              <div className="sms-row">
                <div className="flex-1">
                  <input
                    id="login_code"
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
              <div id="codeError" className="input-error hidden">
                Неверный код
              </div>
              <div
                id="codeSuccess"
                style={{
                  color: "#10b981",
                  marginTop: "0.25rem",
                  fontSize: "0.875rem",
                }}
                className="hidden"
              >
                Новый код отправлен
              </div>
            </div>

            <button
              type="submit"
              id="verifyCodeBtn"
              className="verify-submit-btn"
            >
              Войти
            </button>

            <div style={{ textAlign: "center" }}>
              <button
                type="button"
                id="backToPhone"
                className="text-button-back"
              >
                ← Изменить номер
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
