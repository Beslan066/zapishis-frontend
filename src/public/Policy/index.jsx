import "./styles.css";

export default function Policy() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="consent">
        <h1 className="consent__title">
          СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
        </h1>

        <div className="consent__meta">
          <span className="consent__meta-item">ООО «Запишись»</span>
          <span className="consent__meta-item">
            Дата публикации: 01.08.2026. Версия: 2.0
          </span>
        </div>

        <div className="consent__content">
          <div className="consent__intro">
            <p className="consent__intro-text">
              Я, нижеподписавшийся, при регистрации на Платформе «Запишись»
              (далее — Платформа), даю согласие ООО «Запишись» (ИНН 0000000000)
              на обработку моих персональных данных.
            </p>
            <p className="consent__intro-note">
              Настоящее согласие действует в соответствии с Федеральным законом
              от 27.07.2006 № 152-ФЗ «О персональных данных».
            </p>
          </div>

          <h2 className="consent__section-title">
            1. ПЕРЕЧЕНЬ ПЕРСОНАЛЬНЫХ ДАННЫХ
          </h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">
                1.1. Обязательные данные
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Номер мобильного телефона.
                </li>
                <li className="consent__list-item">Имя и фамилия.</li>
                <li className="consent__list-item">
                  Адрес электронной почты (при наличии).
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                1.2. Дополнительные данные (для Бизнеса)
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">Название компании.</li>
                <li className="consent__list-item">Юридический адрес.</li>
                <li className="consent__list-item">ИНН/ОГРН (при указании).</li>
                <li className="consent__list-item">График работы.</li>
                <li className="consent__list-item">Описание услуг.</li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                1.3. Технические данные
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">IP-адрес.</li>
                <li className="consent__list-item">
                  Тип устройства и версия ОС.
                </li>
                <li className="consent__list-item">
                  Данные геолокации (с разрешения).
                </li>
                <li className="consent__list-item">Cookie-файлы.</li>
                <li className="consent__list-item">История посещений.</li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">2. ЦЕЛИ ОБРАБОТКИ ДАННЫХ</h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">2.1. Основные цели</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Регистрация и идентификация Пользователя на Платформе.
                </li>
                <li className="consent__list-item">
                  Предоставление услуг онлайн-записи.
                </li>
                <li className="consent__list-item">
                  Отправка уведомлений о статусе записей.
                </li>
                <li className="consent__list-item">
                  Восстановление доступа к аккаунту.
                </li>
                <li className="consent__list-item">
                  Обеспечение безопасности и предотвращение мошенничества.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                2.2. Аналитические цели
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Улучшение качества сервиса.
                </li>
                <li className="consent__list-item">
                  Анализ поведения пользователей.
                </li>
                <li className="consent__list-item">
                  Формирование статистических отчетов.
                </li>
                <li className="consent__list-item">
                  Разработка новых функций.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                2.3. Маркетинговые цели
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Информирование о новых услугах и акциях.
                </li>
                <li className="consent__list-item">
                  Персонализация предложений.
                </li>
                <li className="consent__list-item">
                  Проведение опросов и исследований.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">
            3. СПОСОБЫ ОБРАБОТКИ ДАННЫХ
          </h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">
                3.1. Способы обработки
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Автоматизированная обработка с использованием средств
                  вычислительной техники.
                </li>
                <li className="consent__list-item">
                  Хранение в электронных базах данных.
                </li>
                <li className="consent__list-item">Резервное копирование.</li>
                <li className="consent__list-item">
                  Шифрование данных при передаче и хранении.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                3.2. Передача третьим лицам
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  <strong className="consent__strong">SMS-провайдеры</strong> —
                  для отправки кодов подтверждения.
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">
                    WhatsApp (Green API)
                  </strong>{" "}
                  — для отправки уведомлений.
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Облачные сервисы</strong>{" "}
                  — для хранения данных (Яндекс.Облако).
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">
                    Аналитические системы
                  </strong>{" "}
                  — для сбора анонимной статистики.
                </li>
                <li className="consent__list-item">
                  Передача данных осуществляется только с соблюдением требований
                  152-ФЗ.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">
            4. СРОК ОБРАБОТКИ И ХРАНЕНИЯ
          </h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">
                4.1. Срок действия согласия
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Согласие действует с момента регистрации на Платформе.
                </li>
                <li className="consent__list-item">
                  Срок действия согласия — до момента удаления аккаунта
                  Пользователем.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">4.2. Хранение данных</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Данные хранятся в течение всего срока использования Платформы.
                </li>
                <li className="consent__list-item">
                  После удаления аккаунта данные хранятся в резервных копиях 30
                  дней.
                </li>
                <li className="consent__list-item">
                  По истечении 30 дней данные уничтожаются.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">5. ПРАВА СУБЪЕКТА ДАННЫХ</h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">
                5.1. Права Пользователя
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  <strong className="consent__strong">
                    Право на информацию
                  </strong>{" "}
                  — запросить копию своих данных (срок ответа — 30 дней).
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">
                    Право на исправление
                  </strong>{" "}
                  — изменить неактуальные данные в профиле.
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Право на удаление</strong>{" "}
                  — удалить аккаунт и все данные.
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">
                    Право на ограничение
                  </strong>{" "}
                  — ограничить обработку данных.
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">
                    Право на отзыв согласия
                  </strong>{" "}
                  — отозвать согласие в любой момент.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">5.2. Реализация прав</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Для реализации прав необходимо отправить запрос на email:
                  privacy@zapishis.ru.
                </li>
                <li className="consent__list-item">
                  Запрос должен содержать: ФИО, номер телефона, описание
                  действия.
                </li>
                <li className="consent__list-item">
                  Срок рассмотрения запроса — 10 рабочих дней.
                </li>
                <li className="consent__list-item">
                  Ответ направляется на указанный email.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">6. ОТЗЫВ СОГЛАСИЯ</h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">6.1. Порядок отзыва</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Согласие может быть отозвано в любое время.
                </li>
                <li className="consent__list-item">
                  Для отзыва необходимо направить письменное заявление по
                  адресу: г. Назрань, ул. Московская, д. 1.
                </li>
                <li className="consent__list-item">
                  Либо направить запрос по email: privacy@zapishis.ru.
                </li>
                <li className="consent__list-item">
                  В заявлении необходимо указать: ФИО, номер телефона, дату
                  регистрации.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                6.2. Последствия отзыва
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  После отзыва согласия обработка данных прекращается.
                </li>
                <li className="consent__list-item">
                  Доступ к Платформе блокируется.
                </li>
                <li className="consent__list-item">
                  Данные удаляются в течение 30 дней.
                </li>
                <li className="consent__list-item">
                  Отзыв согласия не является основанием для возврата оплаченных
                  средств.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">
            7. ДОПОЛНИТЕЛЬНО ДЛЯ МОБИЛЬНОГО ПРИЛОЖЕНИЯ
          </h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">
                7.1. Разрешения приложения
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  <strong className="consent__strong">Камера</strong> — для
                  сканирования QR-кодов (опционально).
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Уведомления</strong> — для
                  Push-уведомлений о записях.
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Геолокация</strong> — для
                  поиска ближайших компаний (с разрешения).
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Контакты</strong> — для
                  быстрого добавления (опционально).
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                7.2. Обработка в приложении
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Данные синхронизируются с сервером.
                </li>
                <li className="consent__list-item">
                  Локальное хранение данных ограничено.
                </li>
                <li className="consent__list-item">
                  Push-уведомления обрабатываются через Firebase Cloud
                  Messaging.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">
            8. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ
          </h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">
                8.1. Действие согласия
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Согласие вступает в силу с момента регистрации.
                </li>
                <li className="consent__list-item">
                  Согласие действительно на всей территории Российской
                  Федерации.
                </li>
                <li className="consent__list-item">
                  Согласие распространяется на все виды обработки данных.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">8.2. Изменения</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Компания оставляет право изменять условия согласия.
                </li>
                <li className="consent__list-item">
                  Об изменениях уведомляем за 7 дней до вступления.
                </li>
                <li className="consent__list-item">
                  Уведомление публикуется на сайте и отправляется по email.
                </li>
              </ul>
            </div>

            <div className="consent__block consent__block--last">
              <span className="consent__block-title">8.3. Контакты</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  По вопросам обработки данных: privacy@zapishis.ru.
                </li>
                <li className="consent__list-item">
                  Телефон: +7 (999) 123-45-67.
                </li>
                <li className="consent__list-item">
                  Юридический адрес: г. Назрань, ул. Московская, д. 1.
                </li>
              </ul>
            </div>
          </div>

          <div className="consent__signature">
            <div className="consent__signature-item">
              <span className="consent__signature-label">Дата:</span>
              <span className="consent__signature-value">_______________</span>
            </div>
            <div className="consent__signature-item">
              <span className="consent__signature-label">Подпись:</span>
              <span className="consent__signature-value">_______________</span>
            </div>
            <div className="consent__signature-item">
              <span className="consent__signature-label">Расшифровка:</span>
              <span className="consent__signature-value">_______________</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
