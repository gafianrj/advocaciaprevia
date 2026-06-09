import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Conduziram meu caso com muita dedicação e o resultado foi excelente. Profissionais muito atenciosos e competentes.",
      author: "Cliente — Direito Civil"
    },
    {
      quote: "O processo de inventário da nossa família foi resolvido com muita clareza e tranquilidade. Recomendo o escritório.",
      author: "Cliente — Direito de Família"
    },
    {
      quote: "Assessoria jurídica impecável para a minha empresa. Sempre disponíveis para tirar dúvidas e resolver problemas.",
      author: "Cliente — Direito Empresarial"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gold-500 leading-tight">
            Experiência comprovada na defesa dos seus direitos.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-6 leading-relaxed">
            Depoimentos publicados em conformidade com o Código de Ética e Disciplina da OAB, preservando o sigilo dos clientes.
          </p>
          <div className="w-12 h-[1px] bg-gold-500 mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#111111] p-6 sm:p-8 md:p-10 rounded-sm border border-white/5">
              <Quote className="w-7 h-7 text-gold-500/50 mb-5" />
              <p className="text-gray-100 text-base sm:text-[17px] leading-relaxed mb-8 font-sans font-normal">
                {testimonial.quote}
              </p>
              <div className="text-gold-500 text-xs font-bold tracking-wider uppercase border-t border-white/10 pt-5">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
