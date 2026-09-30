import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#f6f9ff] text-[#151c22] font-sans antialiased">
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-[1320px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl text-[#0f5238]">VerdeUrban</span>
            <span className="hidden sm:inline-block px-3 py-0.5 rounded-full bg-gray-100 text-[#0f5238] text-xs font-semibold uppercase tracking-wide">
              Caso de Estudio Web Architecture
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-blue-50 text-emerald-700 text-xs font-mono border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>HYBRID-BENCHMARK ACTIVE</span>
          </div>
        </div>
      </header>

      <div className="pt-24 max-w-[1320px] mx-auto px-6 py-10">
        <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 pb-8 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-[#0f5238] text-xs uppercase font-mono tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              Arquitectura Web • Next.js & React Core
            </div>
            <h1 className="text-4xl font-extrabold text-[#151c22] tracking-tight">
              Portal de Agricultura Urbana
            </h1>
            <p className="text-gray-600 text-lg mt-2 max-w-2xl">
              Explora y experimenta con los 4 patrones fundamentales de renderizado web aplicados a la gestión de huertos sostenibles.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-[#0f5238] font-bold">🌱</div>
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wider block font-semibold">Motor de Evaluación</span>
              <span className="text-xs font-mono text-emerald-800 font-medium">Hybrid V8 Runtime • Eco-Node</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          <article className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-[#0f5238] font-bold">SSG</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">BUILD TIME</span>
              </div>
              <h2 className="text-lg font-bold text-[#151c22] mb-2">Guías de Cultivo Estáticas</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Contenido pre-renderizado en build-time ideal para documentación y guías botánicas de acceso ultra rápido.
              </p>
            </div>
            <Link href="/ssg" className="w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-[#0f5238] hover:text-white text-[#0f5238] text-sm font-semibold transition flex justify-between items-center">
              <span>Ver Guías SSG</span>
              <span>&rarr;</span>
            </Link>
          </article>

          <article className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-teal-700 font-bold">ISR</span>
                <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold">REVALIDATE: 60S</span>
              </div>
              <h2 className="text-lg font-bold text-[#151c22] mb-2">Inventario de Semillas</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Páginas estáticas regeneradas en background periódicamente sin necesidad de re-desplegar la aplicación.
              </p>
            </div>
            <Link href="/isr" className="w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-teal-700 hover:text-white text-teal-700 text-sm font-semibold transition flex justify-between items-center">
              <span>Explorar ISR</span>
              <span>&rarr;</span>
            </Link>
          </article>

          <article className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-cyan-800 font-bold">SSR</span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-800 text-xs font-semibold">ON REQUEST</span>
              </div>
              <h2 className="text-lg font-bold text-[#151c22] mb-2">Métricas de Telemetría</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Cálculos y datos frescos computados en el servidor en cada solicitud HTTP en tiempo real.
              </p>
            </div>
            <Link href="/ssr" className="w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-cyan-800 hover:text-white text-cyan-800 text-sm font-semibold transition flex justify-between items-center">
              <span>Consultar SSR</span>
              <span>&rarr;</span>
            </Link>
          </article>

          <article className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono text-indigo-700 font-bold">CSR</span>
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">BROWSER STATE</span>
              </div>
              <h2 className="text-lg font-bold text-[#151c22] mb-2">Simulador de Riego Interactivo</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Interactividad dinámica ejecutada directamente en el navegador del cliente con estado en vivo.
              </p>
            </div>
            <Link href="/csr" className="w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-indigo-700 hover:text-white text-indigo-700 text-sm font-semibold transition flex justify-between items-center">
              <span>Abrir Simulador CSR</span>
              <span>&rarr;</span>
            </Link>
          </article>
        </section>
      </div>
    </main>
  );
}