# 🌿 VerdeUrban: Taller de Patrones Clásicos de Rendering

Plataforma académica e innovadora de agricultura urbana y sostenibilidad que demuestra de forma práctica y real la implementación de los **4 patrones clásicos de renderizado web** utilizando **Next.js (App Router)** y TypeScript con arquitectura orientada a objetos (POO).

---

## 🏛️ Descripción del Caso de Estudio

**VerdeUrban** es un caso de estudio diseñado para simular un centro de telemetría, control IoT y gestión de recursos para huertos urbanos inteligentes. La aplicación resuelve necesidades reales de la agricultura moderna:
* **Eficiencia Energética:** Monitoreo del ahorro derivado de paneles solares y sistemas de riego automatizados.
* **Optimización de Recursos Hídricos:** Control en tiempo real de la recolección de agua de lluvia y humedad del sustrato.
* **Trazabilidad de Inventarios:** Gestión precisa de lotes de semillas y viabilidad botánica en múltiples centros de distribución (Hubs).

---

## ⚙️ ¿Cómo se implementan los Patrones de Renderizado?

Cada patrón ha sido seleccionado estratégicamente para resolver una necesidad técnica específica dentro de la plataforma:

### 1. SSG (Static Site Generation) - Guías Botánicas (`/ssg`)
* **Qué es:** Generación estática de páginas durante el tiempo de compilación (*Build Time*).
* **Cómo se implementa:** Las guías y fichas técnicas se obtienen a través de la clase orientada a objetos `EcoService` y se congelan en archivos HTML estáticos.
* **Propósito en el caso:** Servir manuales de cultivo inmutables de forma instantánea a través de redes de distribución de contenido global (CDN) con un TTFB (*Time to First Byte*) menor a 15ms y un costo de servidor nulo.

### 2. ISR (Incremental Static Regeneration) - Inventario de Semillas (`/isr`)
* **Qué es:** Páginas estáticas que se actualizan de forma autónoma en segundo plano bajo demanda (*Stale-While-Revalidate*).
* **Cómo se implementa:** Configurado mediante la directiva nativa de Next.js `export const revalidate = 60;`.
* **Propósito en el caso:** Permitir que el stock y los lotes de semillas se mantengan actualizados periódicamente cada 60 segundos sin necesidad de recompilar o re-desplegar toda la aplicación web.

### 3. SSR (Server-Side Rendering) - Métricas en Tiempo Real (`/ssr`)
* **Qué es:** Renderizado dinámico ejecutado por el servidor en el preciso instante en que llega cada solicitud HTTP.
* **Cómo se implementa:** Forzado mediante `export const dynamic = 'force-dynamic';`, procesando peticiones síncronas en el runtime del servidor Node.js/Edge.
* **Propósito en el caso:** Calcular timestamps auditables y métricas de telemetría ambiental sin desfasajes de caché, ideal para paneles de control que exigen veracidad absoluta del dato.

### 4. CSR (Client-Side Rendering) + API Backend - Simulador de Riego (`/csr`)
* **Qué es:** Interactividad dinámica y gestión de estado ejecutadas directamente en el navegador del usuario conectadas a un backend.
* **Cómo se implementa:** Componentes de cliente marcados con `'use client'` que interactúan de forma asíncrona mediante peticiones HTTP (`fetch`) con nuestra API Route de Next.js (`/api/irrigation`).
* **Propósito en el caso:** Simular comandos IoT de activación de bombas de agua y lectura de sensores en vivo, demostrando el ciclo clásico de interacción cliente-servidor mediante una API REST.

---

## 🏗️ Arquitectura del Código (POO)

El proyecto implementa principios de diseño limpio (*Clean Architecture*) y Programación Orientada a Objetos (POO):
* **`services/EcoService.ts`**: Clase estructurada bajo el patrón de diseño **Singleton**, encapsulando la lógica de negocio y la fuente de datos en inglés.
* **`app/api/`**: Endpoints de backend integrados para manejar el protocolo REST y la mutación de estados del sistema.
* **Frontend en Español / Código en Inglés**: Estándar profesional de desarrollo de software.

---

## 🚀 Despliegue en la Nube

La aplicación se encuentra desplegada y optimizada para la nube moderna utilizando **Vercel**, aprovechando el soporte nativo para funciones Edge, caché global y Serverless Functions.

---

## 👥 Créditos y Autoria

* **Desarrollado por:** David Ramírez de la Parra
* **Institución:** Universidad Cooperativa de Colombia
* **Facultad:** Ingeniería - Ingeniería de Software
* **Profesor:** Jhonatan Andrés Mideros Narváez