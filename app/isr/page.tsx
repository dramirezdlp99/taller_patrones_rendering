import { EcoService } from '@/services/EcoService';
import Link from 'next/link';

export const revalidate = 60; // Regenerates in background every 60 seconds

export default async function ISRPage() {
  const ecoService = EcoService.getInstance();
  const inventory = await ecoService.getIncrementalInventory();

  return (
    <main className="w-full min-h-screen bg-[#f6f9ff] text-[#151c22] font-sans p-6 lg:p-12">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-teal-700 font-semibold text-sm hover:underline flex items-center gap-1 mb-6">
          &larr; Volver al Menú Principal
        </Link>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mb-8 flex justify-between items-center flex-wrap gap-4">
          <div>
            <span className="bg-teal-100 text-teal-800 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
              ISR • Incremental Static Regeneration
            </span>
            <h1 className="text-3xl font-bold text-[#151c22] mt-3 mb-2">Inventario de Semillas Urbanas</h1>
            <p className="text-gray-600">
              Páginas estáticas actualizadas automáticamente en background cada 60 segundos (Stale-While-Revalidate).
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-mono text-xs font-semibold border border-teal-200">
            ● Background Sync Active
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-mono tracking-wider">
                <th className="p-4">Variedad</th>
                <th className="p-4">Especie</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Lote</th>
                <th className="p-4">Viabilidad</th>
                <th className="p-4">Hub</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {inventory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="p-4 font-bold text-[#151c22]">{item.name}</td>
                  <td className="p-4 italic text-gray-500">{item.species}</td>
                  <td className="p-4"><span className="bg-gray-100 px-2.5 py-1 rounded-md font-mono text-emerald-800 font-bold">{item.stock}</span></td>
                  <td className="p-4 font-mono text-xs text-gray-500">{item.batch}</td>
                  <td className="p-4"><span className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-semibold">{item.viability}</span></td>
                  <td className="p-4 text-gray-700">{item.hub}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}