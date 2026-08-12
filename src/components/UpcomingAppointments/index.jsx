import "./UpcomingAppointments.css";

export const UpcomingAppointments = ({ appointments = [] }) => {
  return (
    <div className="appointments-card">
      <div className="appointments-header">
        <h3 className="appointments-title">📅 Предстоящие записи</h3>
        <a href="#" className="appointments-view-all">
          Все записи →
        </a>
      </div>

      {appointments.length > 0 ? (
        <div className="appointments-list">
          {appointments.map((appointment) => {
            const firstLetter = appointment.businessName
              ? appointment.businessName.charAt(0).toUpperCase()
              : "";

            return (
              <div key={appointment.id} className="appointment-item">
                <div className="appointment-main-info">
                  <div className="appointment-avatar">
                    <span>{firstLetter}</span>
                  </div>
                  <div>
                    <p className="appointment-service-name">
                      {appointment.serviceName || "Услуга"}
                    </p>
                    <p className="appointment-business-name">
                      {appointment.businessName || ""}
                    </p>
                    <div className="appointment-meta-grid">
                      <span className="appointment-meta-item">
                        <svg
                          className="meta-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {appointment.date}
                      </span>
                      <span className="appointment-meta-item">
                        <svg
                          className="meta-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        {appointment.employeeName || ""}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="appointment-actions">
                  <span className={`status-badge ${appointment.statusClass}`}>
                    {appointment.statusLabel}
                  </span>

                  {appointment.canBeCancelled && (
                    <button
                      type="button"
                      className="cancel-button"
                      title="Отменить"
                    >
                      <svg
                        className="cancel-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-state">
          <p className="empty-state-text">У вас нет предстоящих записей</p>
          <a href="#" className="empty-state-link">
            Найти компанию →
          </a>
        </div>
      )}
    </div>
  );
};

export default UpcomingAppointments;
