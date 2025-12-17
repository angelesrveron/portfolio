import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "¿Trabajas de forma freelance?",
    answer: "¡Sí! Actualmente tengo disponibilidad para tomar nuevos proyectos."
  },
  {
    id: 2,
    question: "¿Qué servicios ofreces?",
    answer: "Me especializo en Diseño, Diseño UI/UX, Branding para marcas, Social Media Design y Motion Graphics"
  },
  {
    id: 3,
    question: "¿Cómo es tu proceso de trabajo?",
    answer: "Primero analizo tus necesidades, luego paso a la etapa de wireframing/diseño y finalmente al desarrollo e implementación."
  },
  {
    id: 4,
    question: "¿Cómo te contacto?",
    answer: "Podés usar el formulario de contacto de esta página o escribirme por LinkedIn."
  }
];

export default function FaqAccordion() {
  // estado para saber cual pregunta está abierta (null = ninguna)
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    // si la que toco ya esta abierta, la cierro (null), si no, la abro
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-2xl mx-auto my-12 px-4">
      <h3 className="text-3xl font-bold text-center mb-8 ">
        Preguntas Frecuentes
      </h3>

      <div className="flex flex-col gap-4">
        {faqData.map((item) => (
          <div 
            key={item.id} 
            className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden transition-all hover:shadow-md"
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="font-semibold text-lg">
                {item.question}
              </span>
              {/* icono que rota si esta abierto */}
              <span 
                className={`text-pink-500 font-bold text-2xl transform transition-transform duration-300 ${openId === item.id ? 'rotate-45' : 'rotate-0'}`}
              >
                +
              </span>
            </button>

            {/* contenido desplegable */}
            <div 
              className={`
                px-6 bg-gray-50 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out
                ${openId === item.id ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}
              `}
            >
              <p className="leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}