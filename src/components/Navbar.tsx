import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg py-3 md:py-4 border-b border-white/5' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-4">
        <a href="#" className="min-w-0 shrink">
          <span className="text-lg sm:text-xl md:text-2xl font-serif font-bold tracking-wide truncate block">
            <span className="text-gold-500">Previa</span>{' '}
            <span className="text-white font-light">Advocacia</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-[#0a0a0a] px-6 py-2.5 rounded-sm text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            Falar com Advogado
          </a>
        </nav>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden text-white p-2 shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-white/10 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-4 text-gray-300 hover:text-gold-500 hover:bg-white/5 transition-colors text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-6 pt-4 pb-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-center border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-[#0a0a0a] px-6 py-4 rounded-sm text-xs font-bold tracking-wider uppercase transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4" />
                Falar com Advogado
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
