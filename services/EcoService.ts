// services/EcoService.ts

export interface EcoItem {
  id: string;
  name: string;
  species: string;
  stock: number;
  batch: string;
  viability: string;
  hub: string;
}

export class EcoService {
  private static instance: EcoService;

  private constructor() {}

  public static getInstance(): EcoService {
    if (!EcoService.instance) {
      EcoService.instance = new EcoService();
    }
    return EcoService.instance;
  }

  // Patrón SSG: Guías estáticas pre-compiladas
  public async getStaticGuides(): Promise<{ title: string; subtitle: string; time: string; level: string; desc: string }[]> {
    return [
      { title: "Tomate Cherry en Maceta", subtitle: "GUÍA #01 · BOTÁNICA URBANA", time: "65 días", level: "Principiante", desc: "Planta de tomate cherry madurando en maceta de arcilla blanca sobre terraza soleada." },
      { title: "Albahaca Genovesa Hidropónica", subtitle: "GUÍA #02 · HIDROPONÍA AVANZADA", time: "30 días", level: "Intermedio", desc: "Hojas exuberantes creciendo en canal hidropónico NFT con agua recirculante." },
      { title: "Espinaca Baby en Huerto Vertical", subtitle: "GUÍA #03 · SISTEMAS VERTICALES", time: "40 días", level: "Principiante", desc: "Bolsillos de pared vegetal vertical llenos de espinacas tiernas de verde esmeralda." },
      { title: "Fresas Urbanas Colgantes", subtitle: "GUÍA #04 · CULTIVOS SUSPENDIDOS", time: "90 días", level: "Avanzado", desc: "Cestas colgantes en balcón con plantas repletas de bayas rojas y flores blancas." }
    ];
  }

  // Patrón ISR: Inventario con actualización en background
  public async getIncrementalInventory(): Promise<EcoItem[]> {
    return [
      { id: "1", name: "Rúcula Selvática", species: "Eruca vesicaria", stock: 450, batch: "#LOT-2024-A", viability: "98% Óptima", hub: "Hub Norte" },
      { id: "2", name: "Zanahoria París Market", species: "Daucus carota", stock: 280, batch: "#LOT-2024-C", viability: "94% Óptima", hub: "Hub Centro" },
      { id: "3", name: "Lechuga Hoja de Roble", species: "Lactuca sativa", stock: 620, batch: "#LOT-2024-E", viability: "96% Óptima", hub: "Hub Este" },
      { id: "4", name: "Pimiento Padrón Mini", species: "Capsicum annuum", stock: 115, batch: "#LOT-2024-F", viability: "91% Reposición", hub: "Hub Sur" },
      { id: "5", name: "Cilantro Aromático", species: "Coriandrum sativum", stock: 510, batch: "#LOT-2024-B", viability: "99% Óptima", hub: "Hub Norte" }
    ];
  }

  // Patrón SSR: Métricas computadas en servidor por cada petición
  public async getServerMetrics(): Promise<{ serverTimestamp: string; energySaved: string; waterCollected: string; co2Saved: string; latency: number }> {
    const now = new Date();
    return {
      serverTimestamp: `${String(now.getUTCHours()).padStart(2, '0')}:${String(now.getUTCMinutes()).padStart(2, '0')}:${String(now.getUTCSeconds()).padStart(2, '0')} UTC`,
      energySaved: "1,428.6 kWh",
      waterCollected: "3,850 Litros",
      co2Saved: "312.4 kg CO2e",
      latency: Math.floor(Math.random() * 8) + 11
    };
  }
}