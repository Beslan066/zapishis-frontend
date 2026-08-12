import { Link } from "react-router-dom";
import "./styles.css";

const mockBusiness = {
  name: "Barbershop Boroda & Co",
  address: "ул. Пушкина, д. 10, офис 4",
  phone: "+7 (999) 123-45-67",
  email: "info@boroda.ru",
  slug: "boroda-and-co",
  description:
    "Мы создаем стиль и уверенность. Профессиональные стрижки, бритье опасной бритвой, уход за бородой и премиальная мужская косметика. Бесплатный кофе и отличная атмосфера гарантированы каждому гостю.",
  services: [
    { id: 1, name: "Мужская стрижка", price: 1500, duration_minutes: 45 },
    { id: 2, name: "Стрижка бороды и усов", price: 1000, duration_minutes: 30 },
    {
      id: 3,
      name: "Комплекс (Стрижка + Борода)",
      price: 2200,
      duration_minutes: 75,
    },
    { id: 4, name: "Королевское бритье", price: 1800, duration_minutes: 50 },
  ],
  employees: [
    { id: 1, name: "Александр Иванов", position: "Топ-Барбер" },
    { id: 2, name: "Дмитрий Петров", position: "Старший мастер" },
    { id: 3, name: "Артем Сидоров", position: "Барбер" },
  ],
};

export default function CompanyDetail() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="company-detail">
        {/* Информация о компании */}
        <div className="company-section">
          <div className="company-info">
            <div className="company-info__main">
              <div className="company-info__logo">
                <span className="company-info__logo-letter">
                  {mockBusiness.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <h1 className="company-info__title">{mockBusiness.name}</h1>
                <p className="company-info__meta">{mockBusiness.address}</p>
                <p className="company-info__meta">📞 {mockBusiness.phone}</p>
                <p className="company-info__meta">✉️ {mockBusiness.email}</p>
              </div>
            </div>
            <Link
              to={`/booking/${mockBusiness.slug}`}
              className="company-info__button"
            >
              Записаться →
            </Link>
          </div>
        </div>

        {/* Описание */}
        <div className="company-section">
          <h3 className="company-section__title">О компании</h3>
          <p className="company-description__text">
            {mockBusiness.description}
          </p>
        </div>

        {/* Услуги */}
        <div className="company-section">
          <h3 className="company-section__title">Услуги</h3>
          <div className="company-grid">
            {mockBusiness.services.map((service) => (
              <div key={service.id} className="company-card service-item">
                <div className="service-item__header">
                  <span className="service-item__icon">💇</span>
                  <span className="service-item__price">
                    {new Intl.NumberFormat("ru-RU").format(service.price)} ₽
                  </span>
                </div>
                <p className="service-item__name">{service.name}</p>
                <p className="service-item__duration">
                  ⏱ {service.duration_minutes} мин
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Сотрудники */}
        <div className="company-section company-section--last">
          <h3 className="company-section__title">Специалисты</h3>
          <div className="company-grid">
            {mockBusiness.employees.map((employee) => (
              <div key={employee.id} className="company-card employee-item">
                <div className="employee-item__avatar">
                  <span className="employee-item__avatar-letter">
                    {employee.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="employee-item__name">{employee.name}</p>
                  <p className="employee-item__position">{employee.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Кнопка Назад */}
        <div className="company-detail__back-wrapper">
          <Link to="/companies" className="company-detail__back-link">
            ← Назад к компаниям
          </Link>
        </div>
      </div>
    </>
  );
}
