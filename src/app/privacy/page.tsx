export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-[980px] px-5 pt-8 pb-20">
        <header>
          <h1 className="text-[28px] font-semibold leading-tight">
            Политика конфиденциальности
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Версия: 1.0 • Дата вступления в силу: 27 августа 2025 г.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            Настоящая Политика описывает, как <strong>ТОО «Tradelab.asia»</strong> (БИН: <strong>190740000705</strong>,
            адрес: <strong>Республика Казахстан, 050008, г. Алматы, улица Мынбаева, д. 43</strong>,
            email:{" "}
            <a href="mailto:info@bizlevel.kz" className="text-sky-500 hover:underline">
              info@bizlevel.kz
            </a>
            , тел.:{" "}
            <a href="tel:+77273231011" className="text-sky-500 hover:underline">
              +7 727 323 10 11
            </a>
            ) обрабатывает персональные данные пользователей веб-сайта{" "}
            <strong>bizlevel.kz</strong> и мобильных приложений <strong>BizLevel</strong> (iOS/Android) (далее совместно — «Сервисы»).
          </p>
          <p className="mt-2 text-base leading-relaxed">
            Используя Сервисы, вы подтверждаете, что прочитали и согласны с этой Политикой.
          </p>
        </header>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">1. Термины и правовые основания</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-base">
            <li>
              <strong>Персональные данные</strong> — сведения о прямо или косвенно определенном физическом лице.
            </li>
            <li>
              Обработка данных регулируется законодательством Республики Казахстан (в т.ч. Законом РК «О персональных данных и их защите»), а также, при
              применимости, нормами GDPR/UK GDPR/CCPA/CPRA для пользователей соответствующих юрисдикций.
            </li>
            <li>
              <strong>Правовые основания</strong>: исполнение договора (предоставление функционала), согласие, законные интересы (улучшение и защита
              Сервисов), выполнение юридических обязанностей.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">2. Какие данные мы собираем</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-base">
            <li>
              <strong>Учетные данные и идентификаторы</strong>: имя/ник, email, телефон (при необходимости), пароль/хэш, ID пользователя, токены сессий.
            </li>
            <li>
              <strong>Профиль и учебный прогресс</strong>: уровень/класс, выбранные курсы/темы, результаты заданий и тестов, достижения, комментарии.
            </li>
            <li>
              <strong>Данные устройства и использование</strong>: модель устройства, версия ОС, язык/регион, IP-адрес, события интерфейса, реферер,
              cookies/SDK-идентификаторы.
            </li>
            <li>
              <strong>Диагностика и журнал ошибок</strong>: краш-логи, технические события, метрики производительности.
            </li>
            <li>
              <strong>Коммуникации</strong>: обращения в поддержку, отзывы.
            </li>
            <li>
              <strong>Платежные данные</strong>: информация о транзакциях через App Store/Google Play (данные банковских карт нам не передаются — их
              обрабатывают магазины приложений).
            </li>
            <li>
              <strong>Push-уведомления</strong>: токен устройства и настройки уведомлений.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">3. Источники данных</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-base">
            <li>Непосредственно от пользователя при регистрации и пользовании Сервисами.</li>
            <li>Автоматически при использовании (cookies/SDK/логирование).</li>
            <li>
              От третьих лиц: магазины приложений (статусы оплат), поставщики аутентификации (при SSO), провайдеры аналитики/диагностики.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">4. Цели обработки</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-base">
            <li>Регистрация, аутентификация и поддержка аккаунта.</li>
            <li>Предоставление и персонализация функционала обучения.</li>
            <li>Аналитика и улучшение качества Сервисов.</li>
            <li>Отправка сервисных сообщений и push-уведомлений.</li>
            <li>Обеспечение безопасности, предупреждение мошенничества, соблюдение закона, ведение отчетности.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">5. Cookies и мобильные SDK</h2>
          <p className="mt-3 text-base leading-relaxed">
            Мы используем cookies/локальное хранилище и SDK для аутентификации, сохранения сессии, аналитики и диагностики. Вы можете управлять cookies в
            браузере, а push/идентификаторами — в настройках устройства и приложения.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">6. Передача и раскрытие данных третьим лицам</h2>
          <p className="mt-3 text-base leading-relaxed">
            Мы привлекаем подрядчиков и сервисы, обрабатывающих данные по нашему поручению в соответствии с договорами и инструкциями:
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">Провайдер</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">Назначение</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">Категории данных</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">Регион хранения</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">Примечание</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">
                    <strong>Supabase</strong>
                  </td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Хостинг БД/бэкенд, аутентификация</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Учетные, профиль, прогресс, токены</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Европа (EU)</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Договор обработки данных</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">
                    <strong>Sentry</strong>
                  </td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Диагностика и журналы ошибок</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Диагностика, сведения об устройстве, трассировки</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Европа (EU)</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Маскирование/обезличивание, где возможно</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">
                    <strong>Firebase / Google Analytics 4</strong>
                  </td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Аналитика использования</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Идентификаторы устройств/сессий, события</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Европа (EU)</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Без сопоставления с ПДн, где возможно</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">
                    <strong>Apple App Store / Google Play</strong>
                  </td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Платежи, подписки</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Статусы транзакций</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Глобально</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">Данные карт нам не передаются</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-base leading-relaxed">
            Данные могут быть раскрыты: (i) по требованиям компетентных органов при наличии правовых оснований; (ii) для защиты прав, безопасности
            пользователей и Оператора; (iii) в рамках корпоративных сделок (слияние/продажа) при соблюдении конфиденциальности.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">7. Международная передача</h2>
          <p className="mt-3 text-base leading-relaxed">
            Данные могут обрабатываться и храниться на серверах за пределами вашей страны. Мы обеспечиваем надлежащие гарантии защиты (договорные
            обязательства с процессорами, стандартные договорные положения и т.п.) согласно применимому праву.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">8. Сроки хранения</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">Категория</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold">Срок хранения (по умолчанию)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">Аккаунт и профиль</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">
                    Пока аккаунт активен + до 24 месяцев после удаления (для разрешения споров/резервного копирования)
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">Учебный прогресс/результаты</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">На срок действия аккаунта (с последующей анонимизацией)</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">Журналы и диагностика</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">90–180 дней</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">Маркетинговые/сервисные сообщения</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">До отзыва согласия или деактивации подписки</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 align-top">Финансовые записи (агрегированные)</td>
                  <td className="border border-slate-200 px-3 py-2 align-top">По требованиям бухгалтерского/налогового учета</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">9. Права пользователей</h2>
          <p className="mt-3 text-base leading-relaxed">
            В зависимости от юрисдикции вы можете запрашивать доступ к своим данным, их копию, исправление, ограничение обработки, возражать против
            обработки, отозвать согласие (не затрагивая законность ранее произведенной обработки), требовать удаления («право на забвение»), переносимость
            данных, а также подать жалобу в уполномоченный орган по защите данных.
          </p>
          <p className="mt-2 text-base leading-relaxed">
            Запросы направляйте на{" "}
            <a href="mailto:info@bizlevel.kz" className="text-sky-500 hover:underline">
              info@bizlevel.kz
            </a>
            . Мы отвечаем в разумный срок (обычно до 30 дней).
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">10. Безопасность</h2>
          <p className="mt-3 text-base leading-relaxed">
            Мы применяем технические и организационные меры: шифрование при передаче, ограничение доступа по принципу «минимально необходимого»,
            журналирование действий администраторов, 2FA для административных панелей, регулярные обновления и резервное копирование. Однако ни один метод
            передачи/хранения не гарантирует абсолютную безопасность.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">11. Дети</h2>
          <p className="mt-3 text-base leading-relaxed">
            Сервисы не предназначены для детей младше 13 лет (или иного возраста по местному праву). Мы сознательно не собираем данные детей без согласия
            законного представителя. Если вам стало известно о таком случае, свяжитесь с нами — мы удалим информацию.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">12. Маркетинговые сообщения и push</h2>
          <p className="mt-3 text-base leading-relaxed">
            Вы можете управлять подписками на рассылки через ссылки «Отписаться» в письмах, а push-уведомлениями — в настройках
            приложения/устройства. Сервисные уведомления об аккаунте и транзакциях являются необходимыми и могут направляться
            независимо от маркетинговых настроек.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">13. Изменения Политики</h2>
          <p className="mt-3 text-base leading-relaxed">
            Мы можем обновлять Политику. Актуальная версия публикуется на <strong>bizlevel.kz</strong> с указанием даты вступления в силу.
            О существенных изменениях можем дополнительно уведомлять в приложении и/или по email.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold leading-snug">14. Контакты</h2>
          <p className="mt-3 text-base leading-relaxed">
            <strong>Оператор/владелец:</strong> ТОО «Tradelab.asia»
            <br />
            <strong>БИН:</strong> 190740000705
            <br />
            <strong>Адрес:</strong> Республика Казахстан, 050008, г. Алматы, улица Мынбаева, д. 43
            <br />
            <strong>Email:</strong>{' '}
            <a href="mailto:info@bizlevel.kz" className="text-sky-500 hover:underline">
              info@bizlevel.kz
            </a>
            <br />
            <strong>Телефон:</strong>{' '}
            <a href="tel:+77273231011" className="text-sky-500 hover:underline">
              +7 727 323 10 11
            </a>
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold leading-snug">
            Приложение A — «Карта категорий для магазинов приложений»
          </h2>
          <h3 className="mt-4 text-lg font-semibold leading-snug">Apple App Store (Privacy Nutrition Labels)</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-base">
            <li>
              <strong>Собираемые данные:</strong> идентификаторы (ID устройства/пуш-токен), контактные данные (email при регистрации), диагностика
              (краш-логи), данные об использовании (события взаимодействия).
            </li>
            <li>
              <strong>Привязка к личности:</strong> укажите в разделе Store Connect, привязаны ли категории к пользователю.
            </li>
            <li>
              <strong>Отслеживание (Tracking):</strong> по умолчанию — нет; если будут рекламные SDK — потребуется ATT-разрешение.
            </li>
          </ul>

          <h3 className="mt-5 text-lg font-semibold leading-snug">Google Play (Data Safety)</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-base">
            <li>
              <strong>Собираемые данные:</strong> личные данные (email), идентификаторы, диагностика, данные об использовании.
            </li>
            <li>
              <strong>Назначение:</strong> функциональность приложения, аналитика, безопасность и предотвращение мошенничества.
            </li>
            <li>
              <strong>Передача третьим лицам:</strong> укажите «да/нет» согласно фактической конфигурации; <strong>Шифрование:</strong> да;
              <strong> Удаление по запросу:</strong> да.
            </li>
          </ul>

          <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm leading-relaxed">
            Уточните и синхронизируйте категории/цели в консолях Apple и Google в строгом соответствии с реально используемыми SDK и событиями.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold leading-snug">Приложение B — Шаблон запроса субъекта данных</h2>
          <p className="mt-3 text-base leading-relaxed">
            <em>Тема:</em> Запрос по персональным данным (BizLevel)
          </p>
          <p className="mt-2 text-base leading-relaxed">
            <em>Сообщение:</em> «Прошу предоставить мне информацию о моих персональных данных, обрабатываемых вашей компанией, и копию данных. Также прошу
            (исправить/удалить/ограничить обработку/предоставить переносимость) в соответствии с применимым законодательством. Мои регистрационные данные:
            [email/ID].»
          </p>
        </section>

        <footer className="mt-10 border-t border-slate-200 pt-4 text-sm text-slate-500">
          © 2025 ТОО «Tradelab.asia». Все права защищены.
        </footer>
      </div>
    </main>
  );
}
