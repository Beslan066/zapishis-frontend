import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const viewportRef = useRef(null);

  useEffect(() => {
    // === Слайдер в герое ===
    const slides = document.querySelectorAll('.hero-slider .slide');
    const dots = document.querySelectorAll('.hero-slider .dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      currentSlide = index;
    }

    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }

    // Устанавливаем первый слайд активным
    showSlide(0);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(index);
        slideInterval = setInterval(nextSlide, 5000);
      });
    });

    slideInterval = setInterval(nextSlide, 5000);

    // === Карусель отзывов ===
    const viewport = viewportRef.current;
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    if (viewport && leftArrow && rightArrow) {
      const scrollAmount = 320;

      leftArrow.addEventListener('click', () => {
        viewport.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });

      rightArrow.addEventListener('click', () => {
        viewport.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });

      let isDown = false;
      let startX;
      let scrollLeft;

      viewport.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - viewport.offsetLeft;
        scrollLeft = viewport.scrollLeft;
        viewport.style.cursor = 'grabbing';
      });

      viewport.addEventListener('mouseleave', () => {
        isDown = false;
        viewport.style.cursor = 'grab';
      });

      viewport.addEventListener('mouseup', () => {
        isDown = false;
        viewport.style.cursor = 'grab';
      });

      viewport.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - viewport.offsetLeft;
        const walk = (x - startX) * 1.5;
        viewport.scrollLeft = scrollLeft - walk;
      });
    }

    // === Табы тарифов ===
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <>
      {/* ========================================================= */}
      {/* ГЕРОЙ СО СЛАЙДЕРОМ                                        */}
      {/* ========================================================= */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>

          <div className="hero-content">
            <h1>
              Записывайте клиентов<br />
              <span>легко и быстро</span>
            </h1>
            <p>
              Сервис онлайн-записи для салонов красоты, барбершопов, стоматологий
              и других сфер услуг на Кавказе
            </p>
            <div className="hero-buttons">
              <Link to="/register" className="btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
                Попробовать бесплатно
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a href="#pricing" className="btn-secondary" style={{ background: 'rgba(255,255,255,0.06)', color: 'white', borderColor: 'rgba(255,255,255,0.1)', padding: '14px 32px', fontSize: '15px' }}>
                Смотреть тарифы
              </a>
            </div>
          </div>

          {/* Слайдер */}
          <div className="hero-slider">
            <div className="slide-container">
              <div className="slide active" data-slide="0">
                <div className="slide-icon">📱</div>
                <div className="slide-label">Мобильное приложение</div>
                <div className="slide-desc">Управляйте бизнесом с телефона</div>
              </div>
              <div className="slide" data-slide="1">
                <div className="slide-icon">💻</div>
                <div className="slide-label">Веб-версия</div>
                <div className="slide-desc">Работайте с компьютера</div>
              </div>
              <div className="slide" data-slide="2">
                <div className="slide-icon">📊</div>
                <div className="slide-label">Аналитика в реальном времени</div>
                <div className="slide-desc">Все показатели на одном экране</div>
              </div>
            </div>
            <div className="slider-dots">
              <span className="dot active" data-slide="0"></span>
              <span className="dot" data-slide="1"></span>
              <span className="dot" data-slide="2"></span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ПРЕИМУЩЕСТВА                                              */}
      {/* ========================================================= */}
      <section style={{ padding: '20px 0 40px' }}>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3>Удобная запись</h3>
            <p>Клиенты записываются онлайн 24/7</p>
          </div>

          <div className="feature-card">
            <div className="icon green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Учёт клиентов</h3>
            <p>База и история посещений</p>
          </div>

          <div className="feature-card">
            <div className="icon blue">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3>Автонапоминания</h3>
            <p>SMS и Telegram уведомления</p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* "СОТНИ ЗАДАЧ. ОДНА ЭКОСИСТЕМА"                            */}
      {/* ========================================================= */}
      <section style={{ padding: '40px 0 30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#1f2937' }}>Сотни задач. Одна экосистема</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {/* Колонка 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="service-card">
              <div className="service-icon gradient">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <span className="service-label">Онлайн-запись</span>
              <span className="service-badge">популярно</span>
            </div>
            <div className="service-card">
              <div className="service-icon light">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <span className="service-label">Уведомления</span>
              <span className="service-badge">авто</span>
            </div>
            <div className="service-card">
              <div className="service-icon green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <span className="service-label">Финансовый учет</span>
            </div>
            <div className="service-card">
              <div className="service-icon amber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v2"/>
                  <circle cx="12" cy="16" r="5"/>
                  <path d="M12 11v5"/>
                </svg>
              </div>
              <span className="service-label">Статистика</span>
            </div>
            <div className="service-card">
              <div className="service-icon rose">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span className="service-label">Клиентская база</span>
            </div>
          </div>

          {/* Колонка 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="service-card">
              <div className="service-icon gradient">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              </div>
              <span className="service-label">Расчет зарплат</span>
            </div>
            <div className="service-card">
              <div className="service-icon light">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="service-label">Программы лояльности</span>
            </div>
            <div className="service-card">
              <div className="service-icon green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <span className="service-label">Бренд-приложение</span>
            </div>
            <div className="service-card">
              <div className="service-icon amber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>
                </svg>
              </div>
              <span className="service-label">Электронный журнал</span>
            </div>
            <div className="service-card">
              <div className="service-icon rose">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <span className="service-label">Телефония</span>
            </div>
          </div>

          {/* Колонка 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="service-card">
              <div className="service-icon gradient">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </div>
              <span className="service-label">Складской учет</span>
            </div>
            <div className="service-card">
              <div className="service-icon light">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              </div>
              <span className="service-label">Управление сетью</span>
            </div>
            <div className="service-card">
              <div className="service-icon green">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <span className="service-label">Мобильный доступ</span>
            </div>
            <div className="service-card">
              <div className="service-icon amber">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <span className="service-label">Интеграции</span>
              <span className="service-badge">100+</span>
            </div>
            <div className="service-card" style={{ opacity: 0.5, cursor: 'default' }}>
              <div className="service-icon" style={{ background: 'var(--gray-100)', color: 'var(--gray-400)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="16"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
              </div>
              <span style={{ fontWeight: 400, color: 'var(--gray-400)', fontSize: '14px' }}>и многое другое</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* НАШИ КЛИЕНТЫ                                              */}
      {/* ========================================================= */}
      <section style={{ padding: '40px 0 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px' }}>Наши клиенты</h2>
            <p style={{ color: '#64748B', fontSize: '16px', marginTop: '4px' }}>Более 55 000 компаний доверяют нам</p>
          </div>
          <Link to="/login" style={{ color: '#4F46E5', fontWeight: 600, textDecoration: 'none', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 0', borderBottom: '2px solid transparent', transition: 'border-color 0.3s' }}>
            Все компании
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {/* Карточка компании 1 */}
          <div style={{ display: 'block', background: 'white', borderRadius: '20px', padding: '24px 24px 20px', border: '1px solid #F1F5F9', textDecoration: 'none', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)';
              e.currentTarget.style.borderColor = '#4F46E5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#F1F5F9';
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #EEF2FF, #EDE9FE)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 700, color: '#4F46E5', flexShrink: 0 }}>С</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 12px', borderRadius: '100px', background: '#ECFDF5', color: '#059669', fontSize: '13px', fontWeight: 600 }}><span>★</span> 4.8</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '17px', color: '#0F172A', marginBottom: '2px' }}>Салон красоты</div>
            <div style={{ color: '#64748B', fontSize: '14px' }}>Махачкала, Дагестан</div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '14px', fontSize: '13px', color: '#94A3B8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>👤 156 клиентов</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>📅 342 записи</span>
            </div>
            <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#4F46E5', fontWeight: 600, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px', transition: 'gap 0.3s' }}>
                Записаться
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span style={{ fontSize: '12px', color: '#94A3B8' }}>свободно</span>
            </div>
          </div>

          {/* Карточка компании 2 */}
          <div style={{ display: 'block', background: 'white', borderRadius: '20px', padding: '24px 24px 20px', border: '1px solid #F1F5F9', textDecoration: 'none', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)';
              e.currentTarget.style.borderColor = '#4F46E5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#F1F5F9';
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #EEF2FF, #EDE9FE)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 700, color: '#4F46E5', flexShrink: 0 }}>Б</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 12px', borderRadius: '100px', background: '#ECFDF5', color: '#059669', fontSize: '13px', fontWeight: 600 }}><span>★</span> 4.9</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '17px', color: '#0F172A', marginBottom: '2px' }}>Барбершоп</div>
            <div style={{ color: '#64748B', fontSize: '14px' }}>Грозный, Чечня</div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '14px', fontSize: '13px', color: '#94A3B8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>👤 89 клиентов</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>📅 215 записей</span>
            </div>
            <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#4F46E5', fontWeight: 600, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px', transition: 'gap 0.3s' }}>
                Записаться
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span style={{ fontSize: '12px', color: '#94A3B8' }}>свободно</span>
            </div>
          </div>

          {/* Карточка компании 3 */}
          <div style={{ display: 'block', background: 'white', borderRadius: '20px', padding: '24px 24px 20px', border: '1px solid #F1F5F9', textDecoration: 'none', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)';
              e.currentTarget.style.borderColor = '#4F46E5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#F1F5F9';
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #EEF2FF, #EDE9FE)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 700, color: '#4F46E5', flexShrink: 0 }}>Д</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 12px', borderRadius: '100px', background: '#ECFDF5', color: '#059669', fontSize: '13px', fontWeight: 600 }}><span>★</span> 4.7</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '17px', color: '#0F172A', marginBottom: '2px' }}>Дентал клиник</div>
            <div style={{ color: '#64748B', fontSize: '14px' }}>Назрань, Ингушетия</div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '14px', fontSize: '13px', color: '#94A3B8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>👤 234 клиента</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>📅 567 записей</span>
            </div>
            <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#4F46E5', fontWeight: 600, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px', transition: 'gap 0.3s' }}>
                Записаться
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span style={{ fontSize: '12px', color: '#94A3B8' }}>свободно</span>
            </div>
          </div>

          {/* Карточка компании 4 */}
          <div style={{ display: 'block', background: 'white', borderRadius: '20px', padding: '24px 24px 20px', border: '1px solid #F1F5F9', textDecoration: 'none', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)';
              e.currentTarget.style.borderColor = '#4F46E5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#F1F5F9';
            }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #EEF2FF, #EDE9FE)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 700, color: '#4F46E5', flexShrink: 0 }}>Ф</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 12px', borderRadius: '100px', background: '#ECFDF5', color: '#059669', fontSize: '13px', fontWeight: 600 }}><span>★</span> 4.6</div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '17px', color: '#0F172A', marginBottom: '2px' }}>Фитнес клуб</div>
            <div style={{ color: '#64748B', fontSize: '14px' }}>Нальчик, Кабардино-Балкария</div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '14px', fontSize: '13px', color: '#94A3B8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>👤 312 клиентов</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>📅 789 записей</span>
            </div>
            <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#4F46E5', fontWeight: 600, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px', transition: 'gap 0.3s' }}>
                Записаться
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <span style={{ fontSize: '12px', color: '#94A3B8' }}>свободно</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* БЛОК: ЗАПИШИСЬ ПОМОЖЕТ ДОСТИЧЬ ЛЮБЫХ БИЗНЕС-ЦЕЛЕЙ        */}
      {/* ========================================================= */}
      <section style={{ padding: '80px 0 60px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '44px', fontWeight: 700, color: '#0F172A', letterSpacing: '-0.02em' }}>
              Запишись поможет достичь <span style={{ background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>любых бизнес-целей</span>
            </h2>
          </div>

          {/* Верхний ряд: 3 карточки */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '30px' }}>
            {/* Карточка 1 */}
            <div style={{ background: '#F7F7F9', borderRadius: '30px', padding: '36px 32px 0', display: 'flex', flexDirection: 'column', minHeight: '320px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: '64px', height: '64px', background: '#EEF2FF', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px', flexShrink: 0 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 6.5L12 13 2 6.5M22 6.5v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-10M12 13v8"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0F172A', marginBottom: '12px', lineHeight: 1.3 }}>
                Привлекайте клиентов бесплатно 24/7
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#475569', flex: 1, marginBottom: '24px' }}>
                Разместите онлайн-запись на сайте и на 15 партнерских площадках. Получайте больше посетителей через популярные соцсети.
              </p>
            </div>

            {/* Карточка 2 */}
            <div style={{ background: '#F7F7F9', borderRadius: '30px', padding: '36px 32px 0', display: 'flex', flexDirection: 'column', minHeight: '320px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: '64px', height: '64px', background: '#ECFDF5', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px', flexShrink: 0 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0F172A', marginBottom: '12px', lineHeight: 1.3 }}>
                Не тратьте время на рутину
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#475569', flex: 1, marginBottom: '24px' }}>
                Все рутинные задачи автоматизированы. Складской учет, расчет зарплат, аналитика — всё в одном месте.
              </p>
            </div>

            {/* Карточка 3 (темная) */}
            <div style={{ background: '#1E293B', borderRadius: '30px', padding: '36px 32px 0', display: 'flex', flexDirection: 'column', minHeight: '320px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.08)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px', flexShrink: 0 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.3 }}>
                Управляйте бизнесом откуда угодно
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', flex: 1, marginBottom: '24px' }}>
                Отслеживайте прибыль, управляйте расписанием и настраивайте права доступа через мобильное приложение.
              </p>
              
            </div>
          </div>

          {/* Нижний ряд: 3 карточки */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {/* Карточка 4 */}
            <div style={{ background: '#F7F7F9', borderRadius: '30px', padding: '36px 32px 0', display: 'flex', flexDirection: 'column', minHeight: '320px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: '64px', height: '64px', background: '#EFF6FF', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px', flexShrink: 0 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0F172A', marginBottom: '12px', lineHeight: 1.3 }}>
                Автоматические уведомления
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#475569', flex: 1, marginBottom: '24px' }}>
                Используйте бесплатные уведомления в YPLACES и ВКонтакте, выберите подходящую интеграцию среди 40+ чат-ботов и смс-провайдеров.
              </p>
            </div>

            {/* Карточка 5 */}
            <div style={{ background: '#F7F7F9', borderRadius: '30px', padding: '36px 32px 0', display: 'flex', flexDirection: 'column', minHeight: '320px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: '64px', height: '64px', background: '#FFFBEB', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px', flexShrink: 0 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0F172A', marginBottom: '12px', lineHeight: 1.3 }}>
                Финансовый учет и аналитика
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#475569', flex: 1, marginBottom: '24px' }}>
                Отслеживайте финансовые показатели, анализируйте прибыль и управляйте бюджетом в реальном времени.
              </p>
            </div>

            {/* Карточка 6 (темная) */}
            <div style={{ background: '#1E293B', borderRadius: '30px', padding: '36px 32px 0', display: 'flex', flexDirection: 'column', minHeight: '320px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.08)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px', flexShrink: 0 }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.3 }}>
                Клиентская база и лояльность
              </h3>
              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', flex: 1, marginBottom: '24px' }}>
                Ведите полную историю клиентов, создавайте программы лояльности и увеличивайте возвращаемость.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* "ПОДХОДИТ ДЛЯ ЛЮБОГО БИЗНЕСА"                             */}
      {/* ========================================================= */}
      <section style={{ padding: '40px 0', background: '#f8fafc', borderRadius: '32px', margin: '10px 0' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 32px' }}>
          <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#1f2937' }}>
            Работаем с малым, средним и крупным бизнесом<br />
            <span className="gradient-text">в любой сфере</span>
          </h2>
        </div>

        <div className="category-grid">
          <div className="category-grid-inner">
            <div className="category-item">
              <span className="emoji">💄</span> Красота
            </div>
            <div className="category-item">
              <span className="emoji">🏥</span> Медицина
            </div>
            <div className="category-item">
              <span className="emoji">🏋️</span> Спорт
            </div>
            <div className="category-item">
              <span className="emoji">🎭</span> Досуг и отдых
            </div>
            <div className="category-item">
              <span className="emoji">📚</span> Образование
            </div>
            <div className="category-item">
              <span className="emoji">🚗</span> Авто
            </div>
            <div className="category-item">
              <span className="emoji">🏪</span> Бытовые услуги
            </div>
            <div className="category-item">
              <span className="emoji">🛍️</span> Розница
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '20px', padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', border: '1px solid var(--gray-100)' }}>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#1f2937' }}>Подходит для любого бизнеса</h4>
            <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '6px', maxWidth: '260px' }}>
              Автоматизируйте работу, привлекайте клиентов и управляйте бизнесом эффективно
            </p>
            <a href="#" style={{ marginTop: '16px', padding: '10px 28px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', color: 'white', borderRadius: '12px', fontWeight: 600, textDecoration: 'none', transition: 'all 0.3s' }}>
              Все типы бизнеса →
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ОТЗЫВЫ                                                    */}
      {/* ========================================================= */}
      <section style={{ padding: '40px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#1f2937' }}>Более 55 000 компаний доверяют нам</h2>
          <p style={{ color: '#6b7280', fontSize: '17px', marginTop: '4px' }}>Реальные результаты наших клиентов</p>
        </div>

        <div ref={viewportRef} className="scrollbooster-viewport" style={{ overflow: 'auto', cursor: 'grab', padding: '8px 4px 16px' }}>
          <div className="scrollbooster-content" style={{ display: 'flex', gap: '20px' }}>
            <div className="review-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div className="review-avatar" style={{ background: 'linear-gradient(135deg, #EEF2FF, #EDE9FE)', color: '#4F46E5' }}>ТШ</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1f2937', fontSize: '15px' }}>Татьяна Шутова</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>Основатель сети 4hands</div>
                </div>
              </div>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: 1.6 }}>
                "Управляем 200+ салонами. За год увеличили выручку в 10 раз, средний чек в 3 раза."
              </p>
              <div style={{ marginTop: '10px', color: '#f59e0b', fontSize: '13px', letterSpacing: '2px' }}>★★★★★</div>
            </div>

            <div className="review-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div className="review-avatar" style={{ background: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)', color: '#059669' }}>АБ</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1f2937', fontSize: '15px' }}>Армен Багдасарян</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>Предприниматель</div>
                </div>
              </div>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: 1.6 }}>
                "Масштабировали клинику. Экономим от 100 000 ₽ по платежам через СБП."
              </p>
              <div style={{ marginTop: '10px', color: '#f59e0b', fontSize: '13px', letterSpacing: '2px' }}>★★★★★</div>
            </div>

            <div className="review-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div className="review-avatar" style={{ background: 'linear-gradient(135deg, #FFFBEB, #FEF3C7)', color: '#D97706' }}>АЯ</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1f2937', fontSize: '15px' }}>Анастасия Якушева</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>Сооснователь Lay Back</div>
                </div>
              </div>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: 1.6 }}>
                "Освободили 3+ часов в неделю. Сократили издержки на 15%."
              </p>
              <div style={{ marginTop: '10px', color: '#f59e0b', fontSize: '13px', letterSpacing: '2px' }}>★★★★★</div>
            </div>

            <div className="review-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div className="review-avatar" style={{ background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)', color: '#2563EB' }}>ДР</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#1f2937', fontSize: '15px' }}>Данил Рындевич</div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>Сооснователь «Блэкгрумер»</div>
                </div>
              </div>
              <p style={{ color: '#374151', fontSize: '14px', lineHeight: 1.6 }}>
                "Выросли до 20 точек. Экономим от 13 000 ₽ на СМС в каждом филиале."
              </p>
              <div style={{ marginTop: '10px', color: '#f59e0b', fontSize: '13px', letterSpacing: '2px' }}>★★★★★</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '12px' }}>
          <button className="arrow-left">←</button>
          <button className="arrow-right">→</button>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA                                                       */}
      {/* ========================================================= */}
      <section style={{ padding: '30px 0 40px' }}>
        <div className="cta-card">
          <div className="cta-blob cta-blob-1"></div>
          <div className="cta-blob cta-blob-2"></div>

          <div className="cta-content">
            <h2>Увеличьте доход уже сейчас</h2>
            <p>Освободите свое время от рутины, сотрудников — от дополнительных задач, а бизнес — от ошибок</p>
            <Link to="/register" className="btn-cta">
              Попробовать 7 дней бесплатно
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ТАРИФЫ                                                    */}
      {/* ========================================================= */}
      <section id="pricing" style={{ padding: '20px 0 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#1f2937' }}>Выберите тариф</h2>
          <p style={{ color: '#6b7280', fontSize: '17px', marginTop: '6px' }}>Подберите оптимальный план для вашего бизнеса</p>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1f2937' }}>Количество сотрудников</h3>
            <p style={{ color: '#6b7280', fontSize: '13px' }}>Увеличить число сотрудников можно в любой момент</p>
          </div>
          <div className="tabs-container">
            <button className="tab-btn active" data-employees="3">До 3</button>
            <button className="tab-btn" data-employees="4">4</button>
            <button className="tab-btn" data-employees="5">5</button>
            <button className="tab-btn" data-employees="6">6</button>
            <button className="tab-btn" data-employees="7">7</button>
            <button className="tab-btn" data-employees="8">8</button>
            <button className="tab-btn" data-employees="9">9</button>
            <button className="tab-btn" data-employees="10">10</button>
            <button className="tab-btn" data-employees="11">11</button>
            <button className="tab-btn" data-employees="12">12</button>
            <button className="tab-btn" data-employees="13">13</button>
            <button className="tab-btn" data-employees="14">14</button>
            <button className="tab-btn" data-employees="15">15</button>
            <button className="tab-btn" data-employees="16">16 и более</button>
          </div>
        </div>

        <div className="pricing-grid">
          {/* Тариф 1 */}
          <div className="pricing-card popular">
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: 500, color: '#6b7280', fontSize: '13px' }}>1 год</p>
              <div style={{ marginTop: '10px' }}>
                <span className="pricing-price">890</span>
                <span style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937' }}>₽</span>
              </div>
              <p style={{ color: '#6b7280', fontSize: '13px' }}>в месяц</p>
              <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '2px' }}>от 10 680 ₽ за 1 год</p>
            </div>

            <ul style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
              <li className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Все функции платформы
              </li>
              <li className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Безлимитные записи
              </li>
              <li className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                SMS уведомления
              </li>
              <li className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Поддержка 24/7
              </li>
            </ul>

            <div style={{ marginTop: '24px' }}>
              <Link to="/register" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14px' }}>
                Попробовать бесплатно
              </Link>
            </div>
          </div>

          {/* Тариф 2 */}
          <div className="pricing-card">
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: 500, color: '#6b7280', fontSize: '13px' }}>8 месяцев</p>
              <div style={{ marginTop: '10px' }}>
                <span className="pricing-price">1 190</span>
                <span style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937' }}>₽</span>
              </div>
              <p style={{ color: '#6b7280', fontSize: '13px' }}>в месяц</p>
              <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '2px' }}>от 9 520 ₽ за 8 мес.</p>
            </div>

            <ul style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
              <li className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Все функции платформы
              </li>
              <li className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Безлимитные записи
              </li>
              <li className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                SMS уведомления
              </li>
            </ul>

            <div style={{ marginTop: '24px' }}>
              <Link to="/register" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14px' }}>
                Попробовать бесплатно
              </Link>
            </div>
          </div>

          {/* Тариф 3 */}
          <div className="pricing-card">
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontWeight: 500, color: '#6b7280', fontSize: '13px' }}>4 месяца</p>
              <div style={{ marginTop: '10px' }}>
                <span className="pricing-price">1 590</span>
                <span style={{ fontSize: '18px', fontWeight: 600, color: '#1f2937' }}>₽</span>
              </div>
              <p style={{ color: '#6b7280', fontSize: '13px' }}>в месяц</p>
              <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '2px' }}>от 6 360 ₽ за 4 мес.</p>
            </div>

            <ul style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0 }}>
              <li className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Все функции платформы
              </li>
              <li className="pricing-feature">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Безлимитные записи
              </li>
            </ul>

            <div style={{ marginTop: '24px' }}>
              <Link to="/register" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14px' }}>
                Попробовать бесплатно
              </Link>
            </div>
          </div>
        </div>

        {/* Для компаний */}
        <div className="glass-card" style={{ borderRadius: '20px', padding: '28px', textAlign: 'center', marginTop: '28px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1f2937' }}>Оставьте заявку для персонального расчета</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', maxWidth: '540px', margin: '6px auto 0' }}>
            Для компаний на 16+ сотрудников и сетей стоимость рассчитывается персонально.
          </p>
          <button style={{ marginTop: '14px', padding: '10px 28px', borderRadius: '12px', background: 'var(--primary-light)', color: 'var(--primary-start)', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}>
            Получить расчет
          </button>
        </div>

        {/* Баннер для сетей */}
        <div style={{ marginTop: '14px', padding: '20px 28px', borderRadius: '20px', background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <p style={{ fontWeight: 600, color: 'white', fontSize: '15px' }}>Для сетей действуют специальные условия.</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>Свяжитесь с нами для консультации</p>
          </div>
          <button style={{ padding: '10px 24px', borderRadius: '12px', background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontWeight: 500, cursor: 'pointer', transition: 'all 0.3s' }}>
            Оставить заявку →
          </button>
        </div>
      </section>
    </>
  );
}