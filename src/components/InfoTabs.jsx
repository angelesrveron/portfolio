import React, { useState } from 'react';

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState('educacion');

  return (
    <div className="max-w-2xl mx-auto border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden font-sans">
      
      {/* --- BOTONES DE PESTAÑAS --- */}
      <div className="flex border-b bg-gray-50">
        <button
          onClick={() => setActiveTab('educacion')}
          className={`flex-1 py-4 text-center font-bold transition-all duration-300 ${
            activeTab === 'educacion' 
              ? 'text-pink-600 border-b-2 border-pink-600 bg-white' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
        >
          Educación
        </button>
        
        <button
          onClick={() => setActiveTab('cursos')}
          className={`flex-1 py-4 text-center font-bold transition-all duration-300 ${
            activeTab === 'cursos' 
              ? 'text-pink-600 border-b-2 border-pink-600 bg-white' 
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
        >
          Cursos
        </button>
      </div>

      {/* --- CONTENIDO --- */}
      <div className="p-8 min-h-[150px]">
        
        {/* pestaña: educacion */}
        {activeTab === 'educacion' && (
          <div className="animate-fade-in space-y-6">
            
            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="font-bold text-lg text-gray-800">Licenciatura en Tecnología Multimedial</h3>
              <p className="text-gray-600 text-sm">Universidad Maimónides</p>
              <span className="inline-block bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full mt-1 font-semibold">
                En curso (2022 - Presente)
              </span>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-bold text-lg text-gray-800">Tecnicatura en Comunicación Interactiva y Diseño Multimedial</h3>
              <p className="text-gray-600 text-sm">Universidad Maimónides</p>
              <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full mt-1 font-semibold">
                Finalizado (2024)
              </span>
            </div>

          </div>
        )}

        {/* pestaña: cursos */}
        {activeTab === 'cursos' && (
          <div className="animate-fade-in">
            <h3 className="font-bold text-gray-800 mb-4">Certificaciones</h3>
            <ul className="space-y-3">
              
              {/* ITEM CON BOTON DE CERTIFICADO */}
              <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100">
                
                {/* nombre del curso */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 font-medium">Curso de Photoshop</span>
                </div>

                {/* boton link */}
                <a 
                  href="https://drive.google.com/file/d/1jGM7SQQ3_3ZQ4VQVTcsOOBbvp3L7YC_a/view?usp=sharing"  
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-pink-500 border border-pink-200 bg-white px-1 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition-colors text-center shadow-sm"
                >
                  Ver certificado 
                </a>
              </li>

            </ul>
          </div>
        )}

      </div>
    </div>
  );
}