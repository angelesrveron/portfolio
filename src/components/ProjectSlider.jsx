import React, { useState } from 'react';

export default function ProjectSlider({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const currentProject = projects[currentIndex];

  return (
    <div className="w-full mx-auto px-4 py-8 relative group mt-5">
      <h3 className="text-3xl font-bold text-center mb-6 md:mb-10">Proyectos destacados</h3>

      <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 bg-gray-900">
        
        <div 
          style={{ backgroundImage: `url(${currentProject.imageUrl})` }} 
          className="w-full h-full bg-center bg-cover duration-500 ease-in-out transform hover:scale-105 transition opacity-80 group-hover:opacity-100"
        ></div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-4 md:p-8 text-white">
          
          <p className="text-xs md:text-sm font-light text-white font-normal uppercase tracking-widest mb-1 text-outline">
            {currentProject.category || "Diseño & Desarrollo"} 
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-outline-white">{currentProject.title}</h2>
          
          <a 
            href={`/${currentProject.slug}`} 
            className="inline-block bg-white text-black px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base rounded-full font-bold hover:bg-pink-500 hover:text-white transition-colors"
          >
            Ver Proyecto
          </a>
        </div>
      </div>

      <button 
        onClick={prevSlide}
        aria-label="Anterior"
        className="block md:hidden lg:group-hover:block absolute top-[calc(50%+20px)] sm:top-[calc(50%+10px)] -translate-y-1/2 left-4 md:left-5 text-2xl rounded-full p-2 bg-black/50 text-white hover:bg-pink-500 transition z-10"
      >
        ❮
      </button>

      <button 
        onClick={nextSlide}
        aria-label="Siguiente"
        className="block md:hidden lg:group-hover:block absolute top-[calc(50%+20px)] sm:top-[calc(50%+10px)] -translate-y-1/2 right-4 md:right-5 text-2xl rounded-full p-2 bg-black/50 text-white hover:bg-pink-500 transition z-10"
      >
        ❯
      </button>

      <div className="flex justify-center py-2 gap-2 mt-4">
        {projects.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`cursor-pointer transition-all h-2 w-2 md:h-3 md:w-3 rounded-full ${
                currentIndex === slideIndex ? 'bg-pink-500 scale-125' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
      
      <style jsx>{`
        .text-outline {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
        }
        .text-outline-white {
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
}