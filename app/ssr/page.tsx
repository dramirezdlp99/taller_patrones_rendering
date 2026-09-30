import { EcoService } from '@/services/EcoService';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; // Forces SSR computation on each request

export default async function SSRPage() {
  const ecoService = EcoService.getInstance();
  const metrics = await ecoService.getServerMetrics();

  return (
    <main className="w-full min-h-screen bg-[#f6f9ff] text-[#151c22] font-sans p-6 lg:p-12">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-cyan-800 font-semibold text-sm hover:underline flex items-center gap-1 mb-6">
          &larr; Volver al Menú Principal
        </Link>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mb-8">
          <span className="bg-cyan-100 text-cyan-900 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
            SSR • Server-Side Rendering (On Request)
          </span>
          <h1 className="text-3xl font-bold text-[#151c22] mt-3 mb-2">Panel de Métricas en Tiempo Real</h1>
          <p className="text-gray-600">
            Cada recarga de página ejecuta un cálculo síncrono en el servidor Node.js/Edge, garantizando datos totalmente frescos sin caché en cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <span className="text-xs uppercase font-mono text-gray-400">Timestamp del Servidor</span>
            <div className="text-3xl font-extrabold font-mono text-cyan-800 my-4">{metrics.serverTimestamp}</div>
            <span className="text-xs text-gray-500">Generado de forma síncrona al procesar la solicitud HTTP.</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <span className="text-xs uppercase font-mono text-gray-400">Energía Solar Ahorrada</span>
            <div className="text-3xl font-extrabold text-cyan-800 my-4">{metrics.energySaved}</div>
            <span className="text-xs text-gray-500">Suministro para bombeo fotovoltaico y micro-aspersores.</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <span className="text-xs uppercase font-mono text-gray-400">Agua Pluvial Recolectada</span>
            <div className="text-3xl font-extrabold text-cyan-800 my-4">{metrics.waterCollected}</div>
            <span className="text-xs text-gray-500">Capacidad actual de cisternas del invernadero.</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <span className="text-xs uppercase font-mono text-gray-400">Latencia de Servidor</span>
            <div className="text-3xl font-extrabold font-mono text-cyan-800 my-4">{metrics.latency} ms</div>
            <span className="text-xs text-gray-500">Tiempo de cómputo en el runtime V8 del servidor.</span>
          </div>
        </div>
      </div>
    </main>
  );
}