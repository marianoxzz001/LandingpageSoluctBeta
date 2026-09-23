import React from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export default function FooterContact({ whatsappLink }) {
  return (
    <footer id="contato" className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Pronto para criar o site do seu negócio?</h2>
          <p className="text-gray-600">
            Atendemos presencialmente em Chapecó-SC ou via reunião online. Entre em contato diretamente pelo WhatsApp para conversarmos sem compromisso.
          </p>
          
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-blue-600" size={20} />
              <span>Chapecó - Santa Catarina</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-blue-600" size={20} />
              <span>contato@suaempresa.com.br</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-700 transition"
            >
              <MessageCircle size={20} />
              <span>Iniciar conversa no WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">Canais & Redes Sociais</h3>

          <div className="space-y-4">
            <a href="#" className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
              {/* SVG Instagram */}
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <div>
                <div className="font-semibold text-sm text-gray-900">Instagram</div>
                <div className="text-xs text-gray-500">@suaempresa.chapeco</div>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
              {/* SVG LinkedIn */}
              <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
              </svg>
              <div>
                <div className="font-semibold text-sm text-gray-900">LinkedIn</div>
                <div className="text-xs text-gray-500">linkedin.com/company/suaempresa</div>
              </div>
            </a>

            <div className="p-3 rounded-lg border border-gray-200 bg-gray-50">
              <div className="font-semibold text-sm text-gray-800">Google Meu Negócio</div>
              <div className="text-xs text-gray-500 mt-0.5">Chapecó - SC</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} [ NOME DA EMPRESA ]. Todos os direitos reservados.
      </div>
    </footer>
  );
}