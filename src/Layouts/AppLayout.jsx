import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; // ВАЖНО: импортируйте useEffect

export default function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('font-sans', 'antialiased', 'bg-gray-50');
    return () => document.body.classList.remove('font-sans', 'antialiased', 'bg-gray-50');
  }, []);

  const handleLogout = () => {
    // Логика выхода
    navigate('/');
  };

  return (
    <div className="app-layout" style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ 
        width: '200px', 
        background: '#f0f0f0', 
        padding: '20px 10px',
        borderRight: '1px solid #e0e0e0'
      }}>
        <h3 style={{ marginBottom: '20px' }}>Панель</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link to="/dashboard" style={{ textDecoration: 'none', color: '#333' }}>
            Главная кабинета
          </Link>
          <Link to="/profile" style={{ textDecoration: 'none', color: '#333' }}>
            Профиль
          </Link>
          <button 
            onClick={handleLogout}
            style={{ 
              marginTop: '20px', 
              padding: '8px 16px',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Выйти
          </button>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}