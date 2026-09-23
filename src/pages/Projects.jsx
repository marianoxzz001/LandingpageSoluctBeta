import React from 'react';
import { Smartphone, Layout, Cpu, MousePointerClick } from 'lucide-react';

export default function Projects() {
  const specs = [
    { icon: <Smartphone size={18} />, label: "100% Responsivo & Mobile First" },
    { icon: <Layout size={18} />, label: "UI Otimizada para Experiência do Usuário" },
    { icon: <Cpu size={18} />, label: "Desenvolvido em React + Tailwind CSS" },
    { icon: <MousePointerClick size={18} />, label: "CTAs Estratégicos para Conversão Direct" },
  ];

  return (
    <section id="projetos" className="py-20 border-b border-gray-200 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
            Showcase de Interface
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Padrão de Qualidade em Cada Pixel
          </h2>
          <p className="text-gray-400 text-base">
            Interfaces construídas com rigor técnico, arquitetura limpa e estética moderna.
          </p>
        </div>

        {/* AREA SHOWCASE COM MOCKUP EM DESTAQUE */}
        <div className="bg-gray-800/80 border border-gray-700/80 rounded-3xl p-6 md:p-8 space-y-8 shadow-2xl">
          
          {/* PLACEHOLDER PARA A SCREENSHOT PRINCIPAL */}
          <div className="w-full h-80 md:h-[450px] bg-gray-900 rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-gray-500 text-center p-6 relative overflow-hidden">
            <span className="font-semibold text-lg text-gray-300">
              [ SCREENSHOT DE ALTA RESOLUÇÃO DA UI ]
            </span>
            <p className="text-xs max-w-md mt-2 text-gray-400">
              Interface completa exibindo topo, chamada de impacto e elementos gráficos modernos.
            </p>
          </div>

          {/* ESPECIFICAÇÕES TÉCNICAS DA INTERFACE */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {specs.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-gray-300 bg-gray-900/60 p-3 rounded-xl border border-gray-700/50">
                <span className="text-blue-400">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}