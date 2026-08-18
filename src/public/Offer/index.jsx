export default function Offer() {
  return (
    <>
      <div className="bg-blur-container">
        <div className="glow-circle glow-1"></div>
        <div className="glow-circle glow-2"></div>
        <div className="glow-circle glow-3"></div>
      </div>
      <div className="consent">
        <h1 className="consent__title">ДОГОВОР-ОФЕРТА</h1>

        <div className="consent__meta">
          <span className="consent__meta-item">ООО «Запишись»</span>
          <span className="consent__meta-item">
            Дата публикации: 01.08.2026. Версия: 2.0
          </span>
        </div>

        <div className="consent__content">
          <h2 className="consent__section-title">1. ПРЕДМЕТ ДОГОВОРА</h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">1.1. Услуги</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Исполнитель предоставляет Заказчику доступ к Платформе
                  онлайн-записи «Запишись».
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                1.2. Функциональность:
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Создание и управление профилем Бизнеса.
                </li>
                <li className="consent__list-item">
                  Настройка услуг и расписания.
                </li>
                <li className="consent__list-item">
                  Прием и управление записями.
                </li>
                <li className="consent__list-item">Ведение клиентской базы.</li>
                <li className="consent__list-item">Отчеты и аналитика.</li>
                <li className="consent__list-item">Уведомления клиентов.</li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">
            2. СТОИМОСТЬ И ПОРЯДОК РАСЧЕТОВ
          </h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">2.1. Порядок оплаты</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Оплата производится авансом за месяц.
                </li>
                <li className="consent__list-item">
                  Способы оплаты: банковская карта, СБП, безналичный расчет.
                </li>
                <li className="consent__list-item">
                  Деньги списываются автоматически каждый месяц.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">2.2. Возврат средств</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Возврат осуществляется в течение 10 рабочих дней.
                </li>
                <li className="consent__list-item">
                  Возврат производится на счет, с которого был произведен
                  платеж.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">2.3. Тарифы</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  <strong className="consent__strong">Старт</strong> — до 3
                  сотрудников, 0 ₽/мес (базовые функции, 30 записей/мес).
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Базовый</strong> — до 5
                  сотрудников, 890 ₽/мес (неограниченно записей).
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Профессиональный</strong>{" "}
                  — до 15 сотрудников, 1 590 ₽/мес (расширенная аналитика).
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Бизнес</strong> — 16+
                  сотрудников, индивидуально (персональный менеджер).
                </li>
              </ul>
            </div>
            <div className="consent__block">
              <span className="consent__block-title">
                2.4. Триальный период
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Новые Бизнес-пользователи получают 14 дней бесплатно.
                </li>
                <li className="consent__list-item">
                  По окончании триального периода доступ ограничивается до
                  тарифа «Старт».
                </li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">3. ПРАВА И ОБЯЗАННОСТИ</h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">
                3.1. Исполнитель обязуется
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Обеспечить доступ к Платформе 24/7 (99.9% uptime).
                </li>
                <li className="consent__list-item">
                  Обеспечить техническую поддержку.
                </li>
                <li className="consent__list-item">
                  Сохранять конфиденциальность данных.
                </li>
                <li className="consent__list-item">
                  Уведомлять о плановых работах за 24 часа.
                </li>
                <li className="consent__list-item">
                  Обеспечивать безопасность передачи данных.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                3.2. Заказчик обязуется
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Предоставлять достоверные данные при регистрации.
                </li>
                <li className="consent__list-item">
                  Своевременно оплачивать выбранный тариф.
                </li>
                <li className="consent__list-item">
                  Не нарушать законодательство Российской Федерации.
                </li>
                <li className="consent__list-item">
                  Не использовать Платформу для незаконных целей.
                </li>
                <li className="consent__list-item">
                  Обеспечивать сохранность своих учетных данных.
                </li>
                <li className="consent__list-item">
                  Соблюдать права интеллектуальной собственности Платформы.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                3.3. Права Исполнителя
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Изменять функционал Платформы без предварительного
                  уведомления.
                </li>
                <li className="consent__list-item">
                  Приостанавливать доступ к аккаунту при нарушении условий.
                </li>
                <li className="consent__list-item">
                  Удалять аккаунты, не активные более 12 месяцев.
                </li>
                <li className="consent__list-item">
                  Изменять тарифы с уведомлением за 30 дней.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">3.4. Права Заказчика</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Использовать все функции выбранного тарифа.
                </li>
                <li className="consent__list-item">
                  Изменять тариф в любой момент.
                </li>
                <li className="consent__list-item">
                  Расторгнуть договор в любое время.
                </li>
                <li className="consent__list-item">
                  Требовать возврата средств за неиспользованный период.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">4. ОТВЕТСТВЕННОСТЬ СТОРОН</h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">
                4.1. Ответственность Исполнителя
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  За невыполнение обязательств — неустойка 0.1% от стоимости
                  тарифа за каждый день просрочки.
                </li>
                <li className="consent__list-item">
                  Общая ответственность не превышает стоимость тарифа за 3
                  месяца.
                </li>
                <li className="consent__list-item">
                  Исполнитель не несет ответственности за убытки, вызванные
                  форс-мажорными обстоятельствами.
                </li>
                <li className="consent__list-item">
                  Исполнитель не отвечает за качество услуг, оказываемых
                  Бизнесом.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                4.2. Ответственность Заказчика
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  За нарушение условий — блокировка аккаунта без возврата
                  средств.
                </li>
                <li className="consent__list-item">
                  За незаконные действия — ответственность по законодательству
                  РФ.
                </li>
                <li className="consent__list-item">
                  За распространение недостоверной информации — ответственность
                  в соответствии с законом.
                </li>
                <li className="consent__list-item">
                  За ущерб репутации Платформы — компенсация в размере 100 000
                  ₽.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">4.3. Форс-мажор</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Стороны освобождаются от ответственности при наступлении
                  форс-мажора.
                </li>
                <li className="consent__list-item">
                  К форс-мажору относятся: войны, стихийные бедствия, эпидемии,
                  изменения законодательства.
                </li>
                <li className="consent__list-item">
                  Сторона, ссылающаяся на форс-мажор, обязана уведомить другую
                  сторону в течение 7 дней.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">
            5. КОНФИДЕНЦИАЛЬНОСТЬ И ЗАЩИТА ДАННЫХ
          </h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">
                5.1. Конфиденциальность
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Стороны обязуются сохранять конфиденциальность данных.
                </li>
                <li className="consent__list-item">
                  Данные не передаются третьим лицам без согласия Заказчика.
                </li>
                <li className="consent__list-item">
                  Исключение — передача данных по требованию уполномоченных
                  органов.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">5.2. Защита данных</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Иполнитель обеспечивает защиту данных в соответствии с 152-ФЗ.
                </li>
                <li className="consent__list-item">
                  Данные хранятся в зашифрованном виде на серверах на территории
                  РФ.
                </li>
                <li className="consent__list-item">
                  Резервное копирование выполняется каждые 24 часа.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">5.3. Срок хранения</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Данные хранятся до момента удаления аккаунта.
                </li>
                <li className="consent__list-item">
                  После удаления аккаунта — 30 дней в резервных копиях.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">
            6. ИНТЕЛЛЕКТУАЛЬНАЯ СОБСТВЕННОСТЬ
          </h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">
                6.1. Права на контент
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Все материалы Платформы защищены авторским правом.
                </li>
                <li className="consent__list-item">
                  Бизнес сохраняет права на свой контент (описания, photo).
                </li>
                <li className="consent__list-item">
                  Клиенты не имеют права копировать базы данных компаний.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">6.2. Торговые марки</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Название «Запишись» и логотип являются товарными знаками.
                </li>
                <li className="consent__list-item">
                  Несанкционированное использование запрещено.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="consent__section-title">
            7. ПОРЯДОК РАЗРЕШЕНИЯ СПОРОВ
          </h2>

          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">
                7.1. Досудебный порядок
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Претензии принимаются по email: legal@zapishis.ru.
                </li>
                <li className="consent__list-item">
                  Срок рассмотрения претензии — 10 рабочих дней.
                </li>
                <li className="consent__list-item">
                  Срок ответа на претензию — 5 рабочих дней.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">
                7.2. Судебный порядок
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Споры рассматриваются в Арбитражном суде г. Москвы.
                </li>
                <li className="consent__list-item">
                  Применимое право — законодательство Российской Федерации.
                </li>
                <li className="consent__list-item">
                  Язык судопроизводства — русский.
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
                8.1. Изменение условий
              </span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Платформа оставляет право изменять Соглашение.
                </li>
                <li className="consent__list-item">
                  Об изменениях уведомляем за 7 дней до вступления.
                </li>
                <li className="consent__list-item">
                  Уведомление публикуется на сайте и отправляется по email.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">8.2. Срок действия</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Соглашение действует бессрочно.
                </li>
                <li className="consent__list-item">
                  Пользователь может расторгнуть соглашение в любой момент.
                </li>
                <li className="consent__list-item">
                  Расторжение не освобождает от обязательств по оплате.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">8.3. Дополнительно</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Недействительность одного пункта не влечет недействительность
                  всего договора.
                </li>
                <li className="consent__list-item">
                  Стороны обязуются урегулировать споры путем переговоров.
                </li>
                <li className="consent__list-item">
                  Договор составлен на русском языке в двух экземплярах.
                </li>
              </ul>
            </div>
          </div>
          <h2 className="consent__section-title">9. РЕКВИЗИТЫ</h2>
          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">ООО «Запишись»</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  <strong className="consent__strong">ИНН:</strong> 0000000000
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">КПП:</strong> 000000000
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">ОГРН:</strong>{" "}
                  0000000000000
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">БИК:</strong> 000000000
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Расчетный счет:</strong>{" "}
                  40702810000000000000
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Банк:</strong> АО
                  «Тинькофф Банк»
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Кор. счет:</strong>{" "}
                  30101810100000000000
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">Контакты и адрес</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  <strong className="consent__strong">Юр. адрес:</strong> г.
                  Назрань, ул. Московская, д. 1
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Почта:</strong>{" "}
                  legal@zapishis.ru
                </li>
                <li className="consent__list-item">
                  <strong className="consent__strong">Телефон:</strong> +7 (999)
                  123-45-67
                </li>
              </ul>
            </div>
          </div>
          <h2 className="consent__section-title">10. АКЦЕПТ</h2>
          <div className="consent__section">
            <div className="consent__block">
              <span className="consent__block-title">10.1. Акцепт оферты</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Акцептом оферты является регистрация Бизнеса на Платформе.
                </li>
                <li className="consent__list-item">
                  Моментом заключения Договора считается дата регистрации.
                </li>
                <li className="consent__list-item">
                  Регистрация подтверждает полное согласие с условиями оферты.
                </li>
              </ul>
            </div>

            <div className="consent__block">
              <span className="consent__block-title">10.2. Подтверждение</span>
              <ul className="consent__list">
                <li className="consent__list-item">
                  Заказчик подтверждает, что ознакомлен с условиями.
                </li>
                <li className="consent__list-item">
                  Заказчик принимает все условия в полном объеме.
                </li>
                <li className="consent__list-item">
                  Заказчик несет ответственность за достоверность
                  предоставленных данных.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
