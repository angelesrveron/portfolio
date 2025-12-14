import React, { useState } from 'react';

// Recibimos "projects" como prop desde Astro
export default function ProjectSlider({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Seguridad: Si no hay proyectos, no mostramos nada
  if (!projects || projects.length === 0) return null;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Obtenemos el proyecto actual para no escribir projects[currentIndex] todo el tiempo
  const currentProject = projects[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative group">
      <h3 className="text-2xl font-bold text-center mb-6">Proyectos Destacados</h3>

      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 bg-gray-900">
        
        {/* Imagen de Fondo */}
        <div 
          // Usamos 'imageUrl' que es como suele llamarse en tu JSON
          style={{ backgroundImage: `url(${currentProject.imageUrl})` }} 
          className="w-full h-full bg-center bg-cover duration-500 ease-in-out transform hover:scale-105 transition opacity-80 group-hover:opacity-100"
        ></div>

        {/* Overlay con Información */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-8 text-white">
          {/* Si tu JSON tiene categoría, úsala, si no, pon un texto fijo o quítalo */}
          <p className="text-sm font-light text-pink-400 uppercase tracking-widest mb-2">
            {currentProject.category || "Diseño & Desarrollo"} 
          </p>
          
          <h2 className="text-3xl font-bold mb-4">{currentProject.title}</h2>
          
          {/* Botón que lleva al detalle del proyecto */}
          <a 
            href={`/${currentProject.slug}`} 
            className="inline-block bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-pink-500 hover:text-white transition-colors"
          >
            Ver Proyecto
          </a>
        </div>
      </div>

      {/* Flechas de Navegación */}
      <button 
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/50 text-white hover:bg-pink-500 transition z-10"
      >
        ❮
      </button>

      <button 
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/50 text-white hover:bg-pink-500 transition z-10"
      >
        ❯
      </button>

      {/* Puntos (Dots) */}
      <div className="flex justify-center py-2 gap-2 mt-4">
        {projects.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`cursor-pointer transition-all h-3 w-3 rounded-full ${
                currentIndex === slideIndex ? 'bg-pink-500 scale-125' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}