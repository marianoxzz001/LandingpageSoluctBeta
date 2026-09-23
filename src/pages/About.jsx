import React from 'react';

export default function About() {
  const founders = [
    { id: 1, name: "[ Nome do Fundador 1 ]", role: "Co-fundador & CEO", desc: "[ Descrição curta sobre foco em produto e gestão de projetos. ]" },
    { id: 2, name: "[ Nome do Fundador 2 ]", role: "Co-fundador & CTO", desc: "[ Descrição curta sobre arquitetura de software e engenharia. ]" },
    { id: 3, name: "[ Nome do Fundador 3 ]", role: "Co-fundador & CPO", desc: "[ Descrição curta sobre experiência do usuário e design de interface. ]" },
  ];

  return (
    <section id="sobre" className="py-24 border-b border-gray-200 px-4 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* CORRIGIDO: flex flex-col items-center gap-3 */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Nossa Equipe
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 pt-1">
            Conheça os Fundadores
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base pt-1">
            Estudantes de Ciência da Computação em Chapecó. Sem intermediários: você conversa e alinha seu projeto diretamente com quem escreve o código.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 pt-4">
          {founders.map((founder) => (
            <div key={founder.id} className="text-center space-y-3">
              <div className="w-28 h-28 bg-gray-100 rounded-full mx-auto border border-gray-300 flex items-center justify-center text-gray-400 text-xs font-medium shadow-inner">
                [ Foto CEO {founder.id} ]
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">{founder.name}</h3>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{founder.role}</p>
              </div>
              <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                {founder.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}