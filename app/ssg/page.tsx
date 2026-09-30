import { EcoService } from '@/services/EcoService';
import Link from 'next/link';

export default async function SSGPage() {
  const ecoService = EcoService.getInstance();
  const guides = await ecoService.getStaticGuides();

  return (
    <main className="w-full min-h-screen bg-[#f6f9ff] text-[#151c22] font-sans p-6 lg:p-12">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-emerald-700 font-semibold text-sm hover:underline flex items-center gap-1 mb-6">
          &larr; Volver al Menú Principal
        </Link>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mb-8">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
            SSG • Static Site Generation (Build Time)
          </span>
          <h1 className="text-3xl font-bold text-[#151c22] mt-3 mb-2">Guías Estáticas de Cultivo Urbano</h1>
          <p className="text-gray-600">
            Estas guías se generan una sola vez en tiempo de compilación. Se sirven desde una CDN con latencia TTFB casi instantánea (~12ms).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-gray-400 font-semibold">{guide.subtitle}</span>
                <h3 className="text-lg font-bold text-[#151c22] mt-1 mb-2">{guide.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{guide.desc}</p>
              </div>
              <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
                <span className="text-gray-500">Cosecha: <strong className="text-[#151c22]">{guide.time}</strong></span>
                <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-md text-xs font-semibold">{guide.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}