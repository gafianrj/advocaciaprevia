import { MessageCircle, Shield, Clock } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/whatsapp';

export default function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-[#111111] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] rounded-sm p-6 sm:p-8 md:p-16 text-center border border-gold-500/20 shadow-2xl">
          <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Fale Conosco</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6 leading-tight">
            Proteja seus direitos com quem entende do assunto.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende uma consulta. Nossa equipe está pronta para ouvir você e analisar a sua situação com toda a atenção e seriedade necessárias.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-[#0a0a0a] px-6 sm:px-8 py-4 rounded-sm font-bold tracking-wider uppercase transition-all text-xs sm:text-sm mb-8 md:mb-10"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            Iniciar Atendimento via WhatsApp
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs text-gray-500 font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold-500" />
              Sigilo absoluto
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-500" />
              Atendimento Ágil
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
