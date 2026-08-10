import { Outlet, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import '../index.css';

export default function PublicLayout() {
  const headerRef = useRef(null);
  const burgerMenuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('font-sans', 'antialiased', 'bg-gray-50');

    const header = headerRef.current;
    const burgerMenu = burgerMenuRef.current;
    const overlay = overlayRef.current;
    const burgerIcon = document.querySelector('.header__burger-icon');
    const burgerClose = document.querySelector('.header-burger__close');

    if (burgerIcon && burgerMenu && burgerClose && overlay && header) {
      const openMenu = () => {
        burgerMenu.style.transform = 'translateX(0)';
        overlay.style.display = 'block';
        header.classList.add('is-menu-open');
        document.body.style.overflow = 'hidden';
      };

      const closeMenu = () => {
        burgerMenu.style.transform = 'translateX(100%)';
        overlay.style.display = 'none';
        header.classList.remove('is-menu-open');
        document.body.style.overflow = '';
      };

      burgerIcon.addEventListener('click', openMenu);
      burgerClose.addEventListener('click', closeMenu);
      overlay.addEventListener('click', closeMenu);
    }

    return () => {
      document.body.classList.remove('font-sans', 'antialiased', 'bg-gray-50');
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>Запишись - Сервис онлайн-записи клиентов</title>
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800,900&display=swap" rel="stylesheet" />
      </Helmet>

      {/* ФОН */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* HEADER */}
      <header
        ref={headerRef}
        className="header"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0,0,0,0.04)'
        }}
      >
        <div className="container" style={{ padding: '0 32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '68px' }}>
            <button className="header__burger-icon" style={{ display: 'none', background: 'none', border: 'none', padding: '8px' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
            </button>

            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(79,70,229,0.3)'
              }}>
                <span style={{ color: 'white', fontWeight: 900, fontSize: '18px' }}>З</span>
              </div>
              <span style={{
                fontSize: '20px',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Запишись
              </span>
            </Link>

            <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <a href="#" className="nav-link" style={{ fontSize: '14px' }}>Возможности</a>
                <a href="#" className="nav-link" style={{ fontSize: '14px' }}>Для кого</a>
                <a href="#" className="nav-link" style={{ fontSize: '14px' }}>Цены</a>
                <a href="#" className="nav-link" style={{ fontSize: '14px' }}>Блог</a>
              </nav>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Link to="/login" style={{ color: '#374151', fontWeight: 500, fontSize: '14px', padding: '8px 14px', transition: 'color 0.3s', textDecoration: 'none' }}>
                  Войти
                </Link>
                <Link to="/register" className="btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
                  Начать
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div ref={overlayRef} className="header__overlay"></div>

        <div ref={burgerMenuRef} className="header-burger">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
            <span style={{
              fontSize: '18px',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Запишись
            </span>
            <button className="header-burger__close" style={{ background: 'none', border: 'none', fontSize: '26px', cursor: 'pointer', color: '#6b7280' }}>✕</button>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="#" style={{ color: '#1f2937', fontWeight: 500, fontSize: '16px', textDecoration: 'none' }}>Возможности</a>
            <a href="#" style={{ color: '#1f2937', fontWeight: 500, fontSize: '16px', textDecoration: 'none' }}>Для кого</a>
            <a href="#" style={{ color: '#1f2937', fontWeight: 500, fontSize: '16px', textDecoration: 'none' }}>Цены</a>
            <a href="#" style={{ color: '#1f2937', fontWeight: 500, fontSize: '16px', textDecoration: 'none' }}>Блог</a>
            <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '16px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/login" style={{ color: '#374151', fontWeight: 500, textDecoration: 'none' }}>Войти</Link>
              <Link to="/register" className="btn-primary" style={{ justifyContent: 'center', textAlign: 'center' }}>Регистрация</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* MAIN - используем только класс container, без дополнительных padding */}
      <main className="container">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '34px',
                height: '34px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontWeight: 900, fontSize: '15px' }}>З</span>
              </div>
              <span style={{
                fontSize: '17px',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Запишись
              </span>
              <span style={{ color: '#9ca3af', fontSize: '12px' }}>© 2026</span>
            </div>

            <div className="footer-links">
              <a href="#">Политика конфиденциальности</a>
              <a href="#">Пользовательское соглашение</a>
              <a href="#">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}