import { MessageCircle, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/whatsapp';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
        aria-hidden="true"
      />

      {/* Overlay: escuro à esquerda (texto), mais transparente à direita (foto visível) */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/60 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-10 bg-black/15" aria-hidden="true" />

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-10 sm:w-12 h-[1px] bg-gold-500"></div>
            <span className="text-[11px] sm:text-xs font-bold text-gold-500 tracking-[0.2em] uppercase">Advocacia Especializada</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
            <span className="text-gold-500 block mb-2">Defesa Jurídica</span>
            <span className="text-white">Sólida e Eficiente</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 md:mb-8 font-serif italic leading-snug">
            para proteger os seus direitos e o seu patrimônio.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-10 md:mb-12 max-w-2xl leading-relaxed">
            Atuamos com ética, agilidade e foco na resolução do seu problema. Soluções jurídicas acessíveis e sob medida para você e sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-[#0a0a0a] px-6 sm:px-8 py-4 rounded-sm text-xs sm:text-sm font-bold tracking-wider uppercase transition-all text-center"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              Falar com um Advogado Agora
            </a>
            <a
              href="#areas"
              className="inline-flex items-center justify-center sm:justify-start gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors group py-2"
            >
              Conheça nossas áreas de atuação
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
