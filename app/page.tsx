"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckCircle, ChevronRight, Globe, Smartphone, Calendar, ArrowRight } from "lucide-react";

export default function SolvtekLandingPage() {
  // Configuração do WhatsApp
  const whatsappNumber = "5549999999999";
  const whatsappMessage = encodeURIComponent("Olá! Vi o site da Solvtek e gostaria de saber mais sobre as soluções de tecnologia para o meu negócio.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Variáveis de animação
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </a>

      {/* Hero Section (Parallax Sutil) */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-50 to-slate-50">
        <motion.div
          className="absolute inset-0 z-0 opacity-30"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Blobs de fundo para dar textura visual */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </motion.div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial="hidden" animate="visible" variants={fadeInUp}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide">
            Solvtek | Tecnologia para Chapecó e Região
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Transforme seu comércio com uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">presença digital profissional</span>.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Aumente as vendas e simplifique o atendimento do seu negócio local com um site rápido, moderno e sob medida para a sua realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
              Solicitar diagnóstico gratuito
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Dores / Problemas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-16">
            Seu comércio enfrenta algum destes desafios hoje?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Invisibilidade no Google", desc: "Clientes procuram pelo seu produto, mas só encontram os concorrentes." },
              { title: "Dependência de Redes Sociais", desc: "Sua loja fica refém de algoritmos e mensagens soltas sem organização." },
              { title: "Atendimento Manual Lento", desc: "Tempo perdido respondendo dúvidas repetitivas sobre preços e horários." }
            ].map((dor, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{dor.title}</h3>
                <p className="text-slate-600">{dor.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Soluções */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Soluções práticas para o seu negócio crescer na internet</h2>
            <p className="text-slate-400 text-lg">Criamos sistemas simples e rápidos para posicionar sua empresa no digital sem complicações.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Globe className="text-blue-400 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Sites Institucionais e Vendas</h3>
              <p className="text-slate-400">Páginas modernas e otimizadas para celulares, prontas para destacar seus serviços no Google.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Smartphone className="text-blue-400 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Catálogos e Pedidos Digitais</h3>
              <p className="text-slate-400">Apresente seus produtos de forma organizada e receba pedidos prontos direto no WhatsApp.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Calendar className="text-blue-400 mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4">Sistemas de Agendamento</h3>
              <p className="text-slate-400">Permita que seus clientes agendem horários 24h por dia, ideal para salões, clínicas e serviços.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Showcase / Projeto Destaque */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja na prática nossa entrega</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Navegue por nossas demonstrações de sistemas e layouts desenvolvidos para diferentes segmentos.</p>
          </div>

          <div className="relative mx-auto max-w-5xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden bg-white">
            {/* PLACEHOLDER PARA AS SCREENSHOTS DO PROJETO DE VOCÊS */}
            <div className="w-full h-8 bg-slate-200 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="aspect-[16/9] w-full bg-slate-300 flex items-center justify-center relative">
              {/* Quando tiver a imagem, troque a tag abaixo por um componente <Image /> do Next.js */}
              <span className="text-slate-500 font-medium">Screenshot do Projeto / Mockup Aqui</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quem Somos / Equipe */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologia acessível, atendimento local</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Desenvolvedores focados em criar soluções digitais simples e eficientes para o comércio de Chapecó e região.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {/* Membro 1: Bruno Rocha */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-slate-200 mb-4 overflow-hidden flex items-center justify-center text-4xl">
                👨‍💻
              </div>
              <h3 className="text-xl font-bold">Bruno Rocha</h3>
              <p className="text-blue-600 font-medium mb-3">Frontend & Gambiarras High Tech</p>
              <p className="text-slate-500 text-sm px-4">Manjador profissional de código. Se funciona de primeira, desconfia que tem algo muito errado.</p>
            </motion.div>

            {/* Membro 2: Eduardo Mariano */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-slate-200 mb-4 overflow-hidden flex items-center justify-center text-4xl">
                🐸
              </div>
              <h3 className="text-xl font-bold">Eduardo Mariano</h3>
              <p className="text-blue-600 font-medium mb-3">Backend & Sapo Cego</p>
              <p className="text-slate-500 text-sm px-4">Olha pro código do banco de dados igual um sapo cego olhando pro sol, mas no fim sempre faz a mágica acontecer.</p>
            </motion.div>

            {/* Membro 3: Ryan Rios */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-slate-200 mb-4 overflow-hidden flex items-center justify-center text-4xl">
                ☕
              </div>
              <h3 className="text-xl font-bold">Ryan Rios</h3>
              <p className="text-blue-600 font-medium mb-3">Design & Sommelier de Café</p>
              <p className="text-slate-500 text-sm px-4">Especialista em mover pixel 1 milímetro para a esquerda e reclamar do café da faculdade enquanto cria layouts incríveis.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center mb-10">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Quanto tempo leva para o site ficar pronto?", a: "Em média de 7 a 15 dias úteis, dependendo da complexidade do projeto e do envio das informações por parte do seu negócio." },
              { q: "Preciso entender de tecnologia para gerenciar o sistema?", a: "Não. Entregamos soluções intuitivas e oferecemos suporte direto para você utilizar sem complicações." },
              { q: "O site funciona bem em celulares?", a: "Sim! Mais de 80% dos acessos de clientes são por celular. Todos os nossos projetos são desenvolvidos com prioridade para mobile." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white p-6 rounded-xl shadow-sm border border-slate-100 cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-lg list-none">
                  {faq.q}
                  <ChevronRight className="transform group-open:rotate-90 transition-transform text-blue-600" size={20} />
                </summary>
                <p className="mt-4 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Rodapé Estático */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Solvtek</h3>
            <p className="mb-4 max-w-sm">Tecnologia sob medida para impulsionar pequenos e médios negócios locais. Chega de soluções difíceis.</p>
            <p className="text-sm">📍 Chapecó, Santa Catarina</p>
          </div>
          <div className="md:text-right flex flex-col md:items-end justify-center">
            <h4 className="text-white font-bold mb-4">Contatos</h4>
            <a href="mailto:contato@solvtek.com.br" className="hover:text-white transition-colors mb-2">contato@solvtek.com.br</a>
            <p className="mb-4">Instagram: @solvtek</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-block border border-slate-700 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}