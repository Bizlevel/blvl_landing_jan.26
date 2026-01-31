export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold text-white">
          Политика конфиденциальности
        </h1>
        <p className="text-sm text-slate-300">
          Это пример текста. Замените на финальную политику конфиденциальности
          вашего продукта.
        </p>
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            Мы бережно относимся к персональным данным и используем их только
            для работы сервиса: персонализации обучения и улучшения качества
            рекомендаций.
          </p>
          <p>
            Данные не передаются третьим лицам без согласия пользователя, кроме
            случаев, предусмотренных законом.
          </p>
          <p>
            По вопросам обработки данных пишите на support@bizlevel.kz.
          </p>
        </div>
      </div>
    </main>
  );
}
