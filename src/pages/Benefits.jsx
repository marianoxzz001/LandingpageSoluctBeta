import React from 'react';
import { Target, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const valueProps = [
    {
      icon: <Target className="text-blue-600 shrink-0" size={26} />,
      title: "Design Desenhado para Converter",
      desc: "Estruturamos cada seção estrategicamente para guiar o visitante até a tomada de decisão no seu WhatsApp."
    },
    {
      icon: <Zap className="text-blue-600 shrink-0" size={26} />,
      title: "Alta Performance & SEO Otimizado",
      desc: "Carregamento instantâneo para não perder clientes, preparado para posicionar sua empresa nos buscadores."
    },
    {
      icon: <TrendingUp className="text-blue-600 shrink-0" size={26} />,
      title: "Autoridade Imediata de Marca",
      desc: "Transmita o mesmo padrão visual das grandes empresas do mercado e passe confiança no primeiro clique."
    },
    {
      icon: <ShieldCheck className="text-blue-600 shrink-0" size={26} />,
      title: "Código Próprio e Sob Medida",
      desc: "Desenvolvimento sem plataformas pesadas, garantindo uma estrutura leve, rápida e totalmente segura."
    }
  ];

  return (
    <section className="py-24 border-b border-gray-200 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* CORRIGIDO: gap-3 e items-center para afastar a pílula do título */}
        <div className="max-w-3xl flex flex-col items-start gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/80 px-3.5 py-1.5 rounded-full">
            Engenharia & Estratégia
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight pt-1">
            Seu site não deve ser apenas um cartão de visitas. Ele precisa gerar negócios.
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed pt-1">
            Unimos design de alta fidelidade e desenvolvimento moderno para criar plataformas que destacam seu negócio e aceleram sua captação de clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-2">
          {valueProps.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="p-3 bg-blue-50 rounded-xl h-fit border border-blue-100">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}