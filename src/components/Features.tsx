import { ShieldCheck, Users, Eye } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
      title: "Soluções Eficientes",
      description: "Estratégias jurídicas assertivas baseadas em sólida experiência técnica."
    },
    {
      icon: <Users className="w-6 h-6 text-gold-500" />,
      title: "Atendimento Humanizado",
      description: "Analisamos cada detalhe do seu caso com atenção, cuidado e sigilo absoluto."
    },
    {
      icon: <Eye className="w-6 h-6 text-gold-500" />,
      title: "Transparência e Clareza",
      description: "Comunicação clara e descomplicada em todas as etapas do seu processo."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#111111] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Por que nos escolher</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
            Um compromisso inegociável{' '}
            <span className="text-gold-500">com a excelência.</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start group">
              <div className="p-4 border border-gold-500/30 rounded-sm mb-6 group-hover:border-gold-500 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
