import "./styles.css";
export default function Companies({
  businesses = [],
  regions = [],
  currentFilters = {},
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get("search");
    const region = formData.get("region");
    console.log("Фильтрация:", { search, region });
  };
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="companies-container">
        {/* Заголовок */}
        <div className="companies-card header-card">
          <div className="header-flex">
            <div>
              <h1 className="header-title">
                <span className="header-emoji">🏢</span>
                Компании
              </h1>
              <p className="header-subtitle">
                Найдите и запишитесь в лучшие компании на Кавказе
              </p>
            </div>
          </div>
        </div>

        {/* Фильтры */}
        <div className="companies-card filters-card">
          <form onSubmit={handleSubmit} className="filters-grid">
            <div className="form-group">
              <label className="form-label">Поиск</label>
              <input
                type="text"
                name="search"
                defaultValue={currentFilters.search || ""}
                className="form-input"
                placeholder="Название или город"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Регион</label>
              <div className="select-wrapper">
                <select
                  name="region"
                  defaultValue={currentFilters.region || ""}
                  className="form-select"
                >
                  <option value="">Все регионы</option>
                  {regions.map((region, index) => (
                    <option key={index} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group button-group">
              <button type="submit" className="submit-button">
                Найти
              </button>
            </div>
          </form>
        </div>

        {/* Список компаний */}
        <div className="companies-card list-card">
          {businesses.length > 0 ? (
            <>
              <div className="companies-grid">
                {businesses.map((business) => (
                  <a
                    key={business.id || business.slug}
                    href={`/company/${business.slug}`}
                    className="company-item-card"
                  >
                    <div className="company-item-flex">
                      <div className="company-logo-box">
                        <span className="company-logo-text">
                          {business.name
                            ? business.name.charAt(0).toUpperCase()
                            : ""}
                        </span>
                      </div>
                      <div className="company-info">
                        <h3 className="company-name">{business.name}</h3>
                        <p className="company-location">
                          {business.city && `${business.city}, `}
                          {business.region && business.region}
                        </p>
                        <div className="company-stats">
                          <span className="stat-item">
                            👤 {business.clients_count || 0}
                          </span>
                          <span className="stat-item">
                            📅 {business.appointments_count || 0}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="company-action-footer">
                      <span className="action-text">Записаться →</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Пагинация (Заглушка — замените на ваш React-компонент пагинации) */}
              <div className="pagination-container">
                {/* Здесь может быть ваш <Pagination /> компонент */}
              </div>
            </>
          ) : (
            /* Пустое состояние (Ничего не найдено) */
            <div className="empty-state">
              <div className="empty-icon-box">
                <svg
                  className="empty-svg"
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
              <h3 className="empty-title">Компании не найдены</h3>
              <p className="empty-subtitle">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
