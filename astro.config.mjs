// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // ⬅️ 1. Importación de la integración correcta


import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
    // 2. Añadimos la integración a la lista de integraciones
    integrations: [tailwind(), react()], 
    
    // 3. Puedes eliminar cualquier sección 'vite: { plugins: [...] }'
    //    que contenga la configuración antigua de Tailwind.
});