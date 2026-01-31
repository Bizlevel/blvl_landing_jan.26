export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] px-6 py-24 text-slate-100">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold text-white">Поддержка</h1>
        <p className="text-sm text-slate-300">
          Напишите нам, если нужна помощь с приложением или вопрос по оплате.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
          Email: support@bizlevel.kz
        </div>
      </div>
    </main>
  );
}
