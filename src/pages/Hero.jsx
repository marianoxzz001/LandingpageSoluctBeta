import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Hero({ whatsappLink }) {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center border-b border-gray-200 py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center w-full">
        <div className="space-y-6">
          <span className="inline-block bg-gray-100 text-gray-700 text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-gray-300 font-semibold">
            Fábrica de Software em Chapecó-SC
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            [ HEADLINE: Desenvolvemos sites de alta performance para empresas locais ]
          </h1>
          <p className="text-lg text-gray-600">
            [ SUBHEADLINE: Soluções digitais sob medida para restaurantes, escritórios, consultórios e profissionais liberais de Chapecó. ]
          </p>
          <div className="pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-green-700 transition shadow-md w-full sm:w-auto"
            >
              <MessageCircle size={22} />
              <span>Solicitar Orçamento</span>
            </a>
          </div>
        </div>

        {/* PLACEHOLDER EFEITO WOW / THREE.JS */}
        <div className="w-full h-80 md:h-[420px] bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-gray-400 p-6 text-center">
          <span className="font-semibold text-lg text-gray-600">[ PLACEHOLDER: Canvas 3D / Three.js / Efeito WoW ]</span>
          <p className="text-xs max-w-xs mt-2 text-gray-500">
            Reservado para animação 3D interativa na próxima etapa.
          </p>
        </div>
      </div>
    </section>
  );
}