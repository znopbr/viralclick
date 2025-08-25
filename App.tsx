
import React from 'react';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ExamplesSection } from './components/ExamplesSection';
import { AudienceSection } from './components/AudienceSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ComparisonSection } from './components/ComparisonSection';
import { SocialProofPopup } from './components/SocialProofPopup';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white selection:bg-[#AFFF00] selection:text-black">
      <main className="container mx-auto px-4 py-8 md:py-16">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ExamplesSection />
        <AudienceSection />
        <ComparisonSection />
        <PricingSection />
        <FaqSection />
      </main>
      <footer className="text-center py-8 text-gray-600 text-sm tracking-wider">
        <p>Desenvolvido com Google Gemini & Imagen. Projetado para criadores de conteúdo modernos.</p>
        <p className="mt-2 flex items-center justify-center gap-2">
            <span>Contato para instalação:</span>
            <a 
                href="https://api.whatsapp.com/send?phone=351922293455&text=Ol%C3%A1,%20tenho%20interesse%20em%20agendar%20uma%20instala%C3%A7%C3%A3o%20do%20Viral%20Click" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-[#AFFF00] hover:bg-white/20 font-semibold px-3 py-1 rounded-md text-xs transition-colors"
            >
                Clique aqui
            </a>
        </p>
      </footer>
      <SocialProofPopup />
    </div>
  );
};

export default App;