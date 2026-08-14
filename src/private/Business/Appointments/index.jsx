import "./styles.css";

export default function AppointmentsPage() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="appointments-page_wrapper">
        <div className="appointments-page">
          <div className="appointments-page__body">
            <div className="appointments-page__header">
              <h2 className="appointments-page__title">Appointments</h2>
              <div className="appointments-page__actions">
                <a
                  href="#"
                  className="appointments-page__btn appointments-page__btn--secondary"
                >
                  Calendar View
                </a>
                <a
                  href="#"
                  className="appointments-page__btn appointments-page__btn--primary"
                >
                  + New Appointment
                </a>
              </div>
            </div>
            <div className="appointments-page__filters">
              {/* Фильтр Статуса */}
              <div className="appointments-page__filter-group">
                <label className="appointments-page__label">Status</label>
                <select
                  className="appointments-page__select"
                  defaultValue="all"
                >
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>

              {/* Фильтр Даты */}
              <div className="appointments-page__filter-group">
                <label className="appointments-page__label">Date</label>
                <input type="date" className="appointments-page__input-date" />
              </div>
            </div>
            <div className="appointments-list">
              <table className="appointments-list__table">
                <thead className="appointments-list__thead">
                  <tr>
                    <th className="appointments-list__th">Date & Time</th>
                    <th className="appointments-list__th appointments-list__th--narrow">
                      № заявки
                    </th>
                    <th className="appointments-list__th">Client</th>
                    <th className="appointments-list__th">Service</th>
                    <th className="appointments-list__th">Employee</th>
                    <th className="appointments-list__th">Price</th>
                    <th className="appointments-list__th">Status</th>
                    <th className="appointments-list__th">Actions</th>
                  </tr>
                </thead>
                <tbody className="appointments-list__tbody">
                  {/* Пример строки с подтвержденным статусом */}
                  <tr className="appointments-list__row">
                    <td className="appointments-list__cell appointments-list__cell--whitespace-nowrap">
                      <div className="appointments-list__date">14.08.2026</div>
                      <div className="appointments-list__time">
                        10:00 - 11:00
                      </div>
                    </td>
                    <td className="appointments-list__cell">
                      <span className="appointments-list__booking-number">
                        A-4829
                      </span>
                    </td>
                    <td className="appointments-list__cell appointments-list__cell--whitespace-nowrap">
                      <div className="appointments-list__client">
                        <div className="appointments-list__avatar">
                          <span className="appointments-list__avatar-text">
                            ИИ
                          </span>
                        </div>
                        <div className="appointments-list__client-info">
                          <div className="appointments-list__client-name">
                            Иван Иванов
                          </div>
                          <div className="appointments-list__client-phone">
                            +7 (999) 123-45-67
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="appointments-list__cell appointments-list__cell--whitespace-nowrap">
                      <span className="appointments-list__service-name">
                        Стрижка
                      </span>
                      <div className="appointments-list__service-duration">
                        45 min
                      </div>
                    </td>
                    <td className="appointments-list__cell appointments-list__cell--whitespace-nowrap">
                      Алексей
                    </td>
                    <td className="appointments-list__cell appointments-list__cell--whitespace-nowrap">
                      1 500.00 ₽
                    </td>
                    <td className="appointments-list__cell appointments-list__cell--whitespace-nowrap">
                      <span className="appointments-list__status appointments-list__status--confirmed">
                        Confirmed
                      </span>
                    </td>
                    <td className="appointments-list__cell appointments-list__cell--whitespace-nowrap">
                      <div className="appointments-list__actions">
                        <a
                          href="#"
                          className="appointments-list__link appointments-list__link--view"
                        >
                          View
                        </a>
                        <button
                          type="button"
                          className="appointments-list__action-btn appointments-list__action-btn--confirm"
                        >
                          Confirm
                        </button>
                        <button
                          type="button"
                          className="appointments-list__action-btn appointments-list__action-btn--cancel"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Пример пустой строки (применяется при отсутствии данных) */}
                  {/* 
          <tr>
            <td colSpan="8" className="appointments-list__cell appointments-list__cell--empty">
              No appointments found
            </td>
          </tr> 
          */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
