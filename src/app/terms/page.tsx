export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold text-white">
          Условия использования
        </h1>
        <p className="text-sm text-slate-300">
          Это пример текста. Замените на финальные условия использования вашего
          продукта.
        </p>
        <div className="space-y-4 text-sm text-slate-300">
          <p>
            Используя приложение, вы соглашаетесь с правилами сервиса и
            подтверждаете, что предоставляете достоверные данные.
          </p>
          <p>
            БизЛевел предоставляет образовательный контент и инструменты для
            самостоятельного применения. Результаты зависят от ваших действий.
          </p>
          <p>
            По вопросам поддержки пишите на support@bizlevel.kz.
          </p>
        </div>
      </div>
    </main>
  );
}
