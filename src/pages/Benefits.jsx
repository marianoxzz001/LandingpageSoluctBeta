import React from 'react';
import { Target, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const valueProps = [
    {
      icon: <Target className="text-blue-600 shrink-0" size={28} />,
      title: "Design Desenhado para Converter",
      desc: "Não criamos apenas sites bonitos. Estruturamos cada seção para guiar o visitante diretamente para a tomada de decisão no seu WhatsApp."
    },
    {
      icon: <Zap className="text-blue-600 shrink-0" size={28} />,
      title: "Alta Performance & SEO Otimizado",
      desc: "Carregamento instantâneo para não perder clientes por lentidão, com estrutura pronta para posicionar seu negócio nos buscadores."
    },
    {
      icon: <TrendingUp className="text-blue-600 shrink-0" size={28} />,
      title: "Autoridade Imediata no Seu Mercado",
      desc: "Sua empresa com o mesmo padrão visual das maiores marcas. Transmita confiança e profissionalismo desde o primeiro clique."
    },
    {
      icon: <ShieldCheck className="text-blue-600 shrink-0" size={28} />,
      title: "Código Próprio e Sob Medida",
      desc: "Sem plataformas pesadas ou travamentos. Desenvolvemos soluções leves, seguras e com controle total da sua infraestrutura."
    }
  ];

  return (
    <section className="py-20 border-b border-gray-200 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            Engenharia & Estratégia
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Seu site não deve ser apenas um cartão de visitas. Ele precisa gerar negócios.
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Unimos design de alta fidelidade e desenvolvimento moderno para criar plataformas que destacam seu negócio e aceleram sua captação de clientes.
          </p>
        </div>

        {/* LISTA ASSIMÉTRICA EM GRID LIMPO */}
        <div className="grid md:grid-cols-2 gap-8 pt-4">
          {valueProps.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="p-3 bg-white rounded-xl shadow-sm h-fit">
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