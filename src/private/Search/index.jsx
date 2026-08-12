import "./styles.css";
const mockCategories = ["Красота", "Здоровье", "Спорт", "Авто", "Обучение"];
const mockRegions = [
  "Москва",
  "Санкт-Петербург",
  "Краснодарский край",
  "Новосибирская обл.",
];

const mockServices = [
  {
    id: 1,
    name: "Комплексная мойка кузова",
    businessName: "AutoSpa Clean",
    city: "Москва",
    region: "Москва",
    price: 1500,
    durationMinutes: 45,
    category: "Авто",
  },
  {
    id: 2,
    name: "Консультация терапевта",
    businessName: "Клиника Здоровья",
    city: "Сочи",
    region: "Краснодарский край",
    price: 2000,
    durationMinutes: 30,
    category: "Здоровье",
  },
  {
    id: 3,
    name: "Стрижка + оформление бороды",
    businessName: "Chop-Chop",
    city: "Санкт-Петербург",
    region: "Санкт-Петербург",
    price: 1800,
    durationMinutes: 60,
    category: "Красота",
  },
];
export default function Search() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="search-page-container">
        {/* Заголовок */}
        <div className="search-header-card">
          <h1 className="search-main-title">
            <span className="title-emoji">🔍</span>
            Поиск услуг
          </h1>
          <p className="search-subtitle">Найдите нужную услугу и запишитесь</p>
        </div>

        {/* Поисковая форма */}
        <div className="search-form-card">
          <form
            className="search-grid-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-col-double">
              <label className="input-label">Поиск</label>
              <input
                type="text"
                name="q"
                className="form-input"
                placeholder="Название услуги или компании"
              />
            </div>

            <div>
              <label className="input-label">Категория</label>
              <select name="category" className="form-select">
                <option value="">Все категории</option>
                {mockCategories.map((cat, idx) => (
                  <option key={idx} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="input-label">Регион</label>
              <select name="region" className="form-select">
                <option value="">Все регионы</option>
                {mockRegions.map((reg, idx) => (
                  <option key={idx} value={reg}>
                    {reg}
                  </option>
                ))}
              </select>
            </div>

            <div className="btn-align-end">
              <button type="submit" className="search-submit-btn">
                Найти
              </button>
            </div>
          </form>
        </div>

        {/* Результаты */}
        <div className="results-card">
          {mockServices.length > 0 ? (
            <>
              <div className="services-results-grid">
                {mockServices.map((service) => (
                  <a
                    key={service.id}
                    href="#"
                    className="service-result-item-group"
                  >
                    <div className="service-item-header">
                      <div>
                        <h3 className="service-item-title">{service.name}</h3>
                        <p className="service-item-business">
                          {service.businessName}
                        </p>
                        <p className="service-item-location">
                          {service.city}, {service.region}
                        </p>
                      </div>
                      <span className="service-item-price">
                        {service.price?.toLocaleString("ru-RU")} ₽
                      </span>
                    </div>

                    <div className="service-item-meta">
                      <span>⏱ {service.durationMinutes} мин</span>
                      {service.category && <span>📂 {service.category}</span>}
                    </div>

                    <div className="service-item-footer">
                      <span className="service-item-link-text">
                        Записаться →
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Имитация пагинации */}
              <div className="pagination-wrapper">
                <div className="pagination-mock">
                  <button className="page-btn disabled">←</button>
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <button className="page-btn">→</button>
                </div>
              </div>
            </>
          ) : (
            <div className="search-empty-state">
              <div className="empty-state-icon-wrapper">
                <svg
                  className="empty-state-svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="empty-state-title">Ничего не найдено</h3>
              <p className="empty-state-subtitle">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
