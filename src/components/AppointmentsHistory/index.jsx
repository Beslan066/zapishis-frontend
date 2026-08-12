import "./styles.css";

const AppointmentsHistory = ({ history = [] }) => {
  return (
    <div className="history-card">
      <div className="history-header">
        <h3 className="history-title">История записей</h3>
        <a href="#" className="history-view-all">
          Вся история →
        </a>
      </div>

      {history.length > 0 ? (
        <div className="history-list">
          {history.map((appointment) => {
            const firstLetter = appointment.businessName
              ? appointment.businessName.charAt(0).toUpperCase()
              : "";

            return (
              <div key={appointment.id} className="history-item">
                <div className="history-main-info">
                  <div className="history-avatar">
                    <span>{firstLetter}</span>
                  </div>
                  <div>
                    <p className="history-service-name">
                      {appointment.serviceName || "Услуга"}
                    </p>
                    <p className="history-date">{appointment.date}</p>
                  </div>
                </div>
                <span className="history-status-badge">
                  {appointment.statusLabel}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="history-empty-text">История записей пуста</p>
      )}
    </div>
  );
};

export default AppointmentsHistory;
