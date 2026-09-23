import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Header({ whatsappLink }) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight text-gray-900">
          [ LOGO / NOME ]
        </div>
        
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#hero" className="hover:text-blue-600 transition">Início</a>
          <a href="#sobre" className="hover:text-blue-600 transition">Sobre Nós</a>
          <a href="#projetos" className="hover:text-blue-600 transition">Projetos</a>
          <a href="#contato" className="hover:text-blue-600 transition">Contato</a>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
        >
          <MessageCircle size={18} />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </header>
  );
}