import { MapPin, Phone, Mail } from 'lucide-react';
import { OFFICE_ADDRESS_FULL } from '../constants/location';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="sm:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-wider">
                <span className="text-gold-500">Previa</span>{' '}
                <span className="text-white font-light">Advocacia</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Sociedade de Advogados — Atuação dedicada em Direito Civil, Empresarial, Tributário e de Família.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 md:mb-6 tracking-wider uppercase text-xs">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>{OFFICE_ADDRESS_FULL}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span>+55 (00) 0000-0000</span>
              </li>
              <li className="flex items-center gap-3 break-all">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <span>contato@exemplo.adv.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 md:mb-6 tracking-wider uppercase text-xs">Institucional</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Código de Ética OAB</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center md:text-left">
          <p>© 2026 Previa Advocacia. Todos os direitos reservados.</p>
          <p>Conteúdo ilustrativo.</p>
        </div>
      </div>
    </footer>
  );
}
