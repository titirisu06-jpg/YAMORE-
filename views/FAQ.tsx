
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "¿Cómo realizo una compra?", a: "Navega por nuestro catálogo, elige tus productos y haz clic en 'Comprar por WhatsApp'. Coordinaremos el talle, el pago y el envío de forma personalizada." },
    { q: "¿Hacen envíos?", a: "Sí, realizamos envíos a todo el país a través de Correo Argentino. En Bahía Blanca contamos con envíos por cadetería o retiro en nuestro local." },
    { q: "¿Tienen local físico?", a: "Sí, estamos ubicados en el centro de Bahía Blanca. Puedes ver la ubicación exacta en la sección correspondiente." },
    { q: "¿Cuáles son los métodos de pago?", a: "Aceptamos efectivo, transferencias bancarias y todas las tarjetas de crédito/débito a través de link de pago." },
    { q: "¿Se pueden realizar cambios?", a: "Sí, los cambios se realizan dentro de los 15 días posteriores a la compra, siempre que la prenda esté en condiciones originales." },
  ];

  return (
    <div className="pt-24 px-4 min-h-screen max-w-3xl mx-auto">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-12">Preguntas Frecuentes</h1>
      <div className="space-y-8">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-zinc-900 pb-6">
            <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
            <p className="text-zinc-400 font-light leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
