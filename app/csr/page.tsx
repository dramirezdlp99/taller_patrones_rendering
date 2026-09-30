'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CSRPage() {
  const [moisture, setMoisture] = useState<number>(38);
  const [isWatering, setIsWatering] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([
    "[00:00.12] Componente hidratado en el navegador (CSR Client-Side Rendering)"
  ]);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString();
    setLogs(prev => [`[${time}] ${msg}`, ...prev]);
  };

  useEffect(() => {
    fetch('/api/irrigation')
      .then(res => res.json())
      .then(data => {
        setMoisture(data.moisture);
        addLog("Sincronización inicial exitosa con la API del servidor backend");
      });
  }, []);

  const handleIrrigate = async () => {
    if (isWatering) return;
    setIsWatering(true);
    addLog("Enviando petición HTTP POST a /api/irrigation (Acción: irigación)...");

    try {
      const res = await fetch('/api/irrigation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'irrigate' })
      });
      const data = await res.json();
      
      setMoisture(data.state.moisture);
      setIsWatering(false);
      addLog(`Respuesta del servidor OK: Humedad ajustada a ${data.state.moisture}% y nivel hídrico actualizado.`);
    } catch (error) {
      addLog("Error de red al conectar con el backend.");
      setIsWatering(false);
    }
  };

  const handleReset = async () => {
    if (isWatering) return;
    const res = await fetch('/api/irrigation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'reset' })
    });
    const data = await res.json();
    setMoisture(data.state.moisture);
    addLog("Sistema restablecido a valores críticos mediante la API.");
  };

  return (
    <main className="w-full min-h-screen bg-[#f6f9ff] text-[#151c22] font-sans p-6 lg:p-12">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-indigo-700 font-semibold text-sm hover:underline flex items-center gap-1 mb-6">
          &larr; Volver al Menú Principal
        </Link>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mb-8">
          <span className="bg-indigo-100 text-indigo-800 text-xs font-mono font-bold px-3 py-1 rounded-full uppercase">
            CSR + API Backend Integration
          </span>
          <h1 className="text-3xl font-bold text-[#151c22] mt-3 mb-2">Simulador de Riego con Conexión Real</h1>
          <p className="text-gray-600">
            Aquí la interfaz del cliente (CSR) se comunica mediante peticiones HTTP asíncronas con una API real integrada en Next.js.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-xs uppercase font-mono text-gray-400">Control IoT Cloud</span>
                  <h3 className="text-xl font-bold text-[#151c22]">Bomba de Riego Automatizada</h3>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${moisture < 45 ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'}`}>
                  {moisture < 45 ? 'Nivel Crítico' : 'Nivel Óptimo'}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-gray-500">Humedad en Servidor:</span>
                  <span className="font-bold text-indigo-700 text-lg">{moisture}%</span>
                </div>
                <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden p-0.5">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${moisture < 45 ? 'bg-red-500' : 'bg-indigo-600'}`} 
                    style={{ width: `${moisture}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
              <button 
                onClick={handleIrrigate}
                disabled={isWatering}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition shadow-sm disabled:opacity-50 cursor-pointer"
              >
                {isWatering ? "Enviando comando HTTP..." : "💧 Ejecutar Riego vía API"}
              </button>
              <button 
                onClick={handleReset}
                disabled={isWatering}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition cursor-pointer"
              >
                Resetear
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                <span className="font-mono text-xs uppercase text-gray-400 font-bold">Network & Event Log</span>
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping"></span>
              </div>
              <div className="space-y-2 font-mono text-xs text-gray-600 max-h-48 overflow-y-auto pr-2">
                {logs.map((log, idx) => (
                  <div key={idx} className="bg-gray-50 p-2.5 rounded-lg border border-gray-200">
                    {log}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-400 flex justify-between">
              <span>API Endpoint: /api/irrigation</span>
              <span className="text-indigo-600 font-mono">REST Protocol</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}