import React from 'react';
import { Smartphone, Layout, Cpu, MousePointerClick } from 'lucide-react';

export default function Projects() {
  const specs = [
    { icon: <Smartphone size={18} />, label: "100% Responsivo & Mobile First" },
    { icon: <Layout size={18} />, label: "UI Otimizada para UX/UI" },
    { icon: <Cpu size={18} />, label: "Desenvolvido em React + Tailwind" },
    { icon: <MousePointerClick size={18} />, label: "CTAs de Alta Conversão" },
  ];

  return (
    <section id="projetos" className="py-24 border-b border-gray-800 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* CORRIGIDO: flex flex-col items-center gap-3 */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3.5 py-1.5 rounded-full border border-blue-800/80">
            Showcase de Interface
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white pt-1">
            Padrão de Qualidade em Cada Pixel
          </h2>
          <p className="text-gray-400 text-base leading-relaxed pt-1">
            Interfaces construídas com rigor técnico, arquitetura limpa e estética moderna.
          </p>
        </div>

        <div className="bg-gray-800/60 border border-gray-700/60 rounded-3xl p-6 md:p-8 space-y-8 shadow-2xl">
          <div className="w-full h-80 md:h-[450px] bg-gray-900 rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-gray-500 text-center p-6 relative overflow-hidden">
            <span className="font-semibold text-lg text-gray-300">
              [ SCREENSHOT DE ALTA RESOLUÇÃO DA UI ]
            </span>
            <p className="text-xs max-w-md mt-2 text-gray-400">
              Interface completa exibindo topo, chamada de impacto e elementos gráficos modernos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specs.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-gray-300 bg-gray-900/80 p-3.5 rounded-xl border border-gray-700/60">
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