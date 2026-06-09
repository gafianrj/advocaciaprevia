export default function About() {
  const stats = [
    { value: "32+", label: "Anos de atuação" },
    { value: "1.200+", label: "Casos conduzidos" },
    { value: "98%", label: "Clientes satisfeitos" }
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#111111] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem com moldura dourada deslocada */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 pt-5 pl-5 sm:pt-6 sm:pl-6">
            <div
              className="absolute top-0 left-0 w-[calc(100%-1.25rem)] h-[calc(100%-1.25rem)] sm:w-[calc(100%-1.5rem)] sm:h-[calc(100%-1.5rem)] border border-gold-500/70 rounded-sm pointer-events-none"
              aria-hidden="true"
            />
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80"
              alt="Advogados"
              className="relative z-10 w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[480px] object-cover rounded-sm shadow-2xl grayscale-[20%]"
            />
          </div>

          <div className="lg:pl-8">
            <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Sobre o Escritório</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6 md:mb-8 leading-tight">
              Mais de <span className="text-gold-500">três décadas</span> defendendo o que é seu.
            </h2>

            <div className="space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed mb-10 md:mb-12">
              <p>
                A Previa Advocacia é um escritório reconhecido pela atuação técnica e dedicada em diversas áreas do direito — civil, empresarial, tributário e sucessório.
              </p>
              <p>
                Nossa equipe é formada por profissionais qualificados e em constante atualização, prontos para oferecer a melhor orientação jurídica de forma acessível e transparente.
              </p>
              <p>
                Acreditamos que cada cliente merece atenção total. Por isso, construímos soluções sob medida, com agilidade e a seriedade que o seu caso exige, independentemente da complexidade.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-500 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-bold tracking-wider uppercase leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
