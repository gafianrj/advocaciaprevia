import { Briefcase, Users, Building2, Calculator } from 'lucide-react';

export default function PracticeAreas() {
  const areas = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Direito Civil e Contratos",
      description: "Negociação, redação e revisão de contratos, com proteção integral dos seus interesses e resolução de conflitos."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Direito de Família e Sucessões",
      description: "Inventários, divórcios, pensão alimentícia e planejamento sucessório com acolhimento e estratégia."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Direito Empresarial",
      description: "Estruturação societária e assessoria jurídica completa para o dia a dia e segurança da sua empresa."
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Direito Tributário",
      description: "Planejamento tributário, orientação fiscal e defesas administrativas e judiciais para pessoas e empresas."
    }
  ];

  return (
    <section id="areas" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Áreas de Atuação</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
            Especialistas prontos para{' '}
            <span className="text-gold-500">resolver o seu problema.</span>
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-[#111111] p-6 sm:p-8 md:p-10 rounded-sm border border-white/5 hover:border-gold-500/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 border border-gold-500/30 text-gold-500 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-[#0a0a0a] transition-all duration-300">
                {area.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-3">{area.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
