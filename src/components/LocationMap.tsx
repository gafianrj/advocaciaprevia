import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { MAP_EMBED_URL, MAP_LINK_URL, OFFICE_ADDRESS, OFFICE_ADDRESS_FULL } from '../constants/location';

export default function LocationMap() {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Localização</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
            Estamos em <span className="text-gold-500">Passo Fundo</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-2 bg-[#111111] border border-white/5 rounded-sm p-6 sm:p-8 flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 border border-gold-500/30 rounded-sm shrink-0">
                <MapPin className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Endereço do escritório</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{OFFICE_ADDRESS_FULL}</p>
                <p className="text-gray-500 text-xs mt-3 italic">Endereço fictício — conteúdo ilustrativo</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 border border-gold-500/30 rounded-sm shrink-0">
                <Clock className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Horário de atendimento</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Segunda a sexta, das 9h às 18h
                  <br />
                  Atendimentos com hora marcada
                </p>
              </div>
            </div>

            <a
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-[#0a0a0a] px-6 py-3 rounded-sm text-xs font-bold tracking-wider uppercase transition-all"
            >
              Abrir no Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-3 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] rounded-sm overflow-hidden border border-gold-500/20">
            <iframe
              title={`Mapa — Previa Advocacia, ${OFFICE_ADDRESS.city}`}
              src={MAP_EMBED_URL}
              className="absolute inset-0 w-full h-full border-0 grayscale-[30%] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
