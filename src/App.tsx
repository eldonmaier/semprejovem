import React, { useState } from 'react';
import { CheckCircle2, Heart, Sun, Brain, ChevronDown, ChevronUp, Star, ShieldCheck, ArrowRight } from 'lucide-react';

function App() {
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-emerald-200">
      {/* Header / Hero */}
      <header className="pt-12 pb-20 px-6 lg:pt-20 lg:pb-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm">
            <Star className="w-4 h-4 fill-emerald-800" />
            <span>Mais de 10.000 leitores satisfeitos</span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-stone-900 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Descubra o Segredo para uma Vida Longa, Saudável e Cheia de Energia
          </h1>
          <p className="text-lg lg:text-xl text-stone-600 leading-relaxed">
            O guia definitivo e prático para transformar sua saúde e recuperar a vitalidade depois dos 60 anos, sem dietas malucas ou exercícios exaustivos.
          </p>
          <div className="pt-4">
            <a 
              href="#oferta" 
              onClick={scrollToOffer}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold rounded-2xl shadow-lg shadow-emerald-600/30 transition-all transform hover:-translate-y-1"
            >
              Quero ter mais vitalidade agora
              <ArrowRight className="w-6 h-6" />
            </a>
            <p className="mt-4 text-sm text-stone-500 flex items-center justify-center lg:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Pagamento 100% seguro e acesso imediato
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center py-8">
          <BookMockup />
        </div>
      </header>

      {/* PUV & Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Por que este livro é diferente de tudo que você já viu?
            </h2>
            <p className="text-lg text-stone-600">
              Esqueça as recomendações genéricas. O "Sempre Jovem" foi criado especificamente para as necessidades do corpo após os 60 anos, focando no que é simples, prático e realmente funciona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Sun className="w-10 h-10 text-amber-500" />}
              title="Mais Energia no Dia a Dia"
              description="Acorde com disposição para aproveitar a vida, brincar com os netos e fazer suas atividades favoritas sem aquele cansaço extremo."
            />
            <FeatureCard 
              icon={<Heart className="w-10 h-10 text-rose-500" />}
              title="Corpo Forte e Protegido"
              description="Aprenda a fortalecer seus ossos e músculos de forma segura, prevenindo dores nas articulações e melhorando sua imunidade."
            />
            <FeatureCard 
              icon={<Brain className="w-10 h-10 text-blue-500" />}
              title="Mente Afiada e Serena"
              description="Descubra os alimentos e hábitos simples que protegem sua memória e trazem muito mais clareza mental e tranquilidade."
            />
          </div>
          
          <div className="mt-16 text-center">
             <a 
              href="#oferta" 
              onClick={scrollToOffer}
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1"
            >
              Sim, eu quero esses benefícios para mim
            </a>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="./healthy.jpg" 
              alt="Casal de idosos felizes e saudáveis" 
              className="rounded-3xl shadow-2xl border-4 border-emerald-800"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              O que você vai descobrir nas páginas deste guia:
            </h2>
            <ul className="space-y-6">
              {[
                "Os 5 alimentos 'vilões' que roubam sua energia (e você provavelmente come todos os dias).",
                "Uma rotina matinal de apenas 10 minutos para destravar as articulações e começar bem o dia.",
                "O segredo natural para um sono profundo e reparador, sem depender de remédios fortes.",
                "Como adaptar sua alimentação de forma barata, com ingredientes que você já tem em casa.",
                "Exercícios simples e seguros que podem ser feitos até mesmo na cadeira da sua sala."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-emerald-800/50 p-4 rounded-2xl">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                  <span className="text-lg text-emerald-50 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-stone-900 mb-16" style={{ fontFamily: 'Georgia, serif' }}>
            Quem leu, recomenda.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              image="./elder 1.jpg"
              name="Maria Helena, 64 anos"
              text="Eu achava que as dores nas costas e o cansaço eram 'coisa da idade'. Depois que apliquei as dicas simples do livro, me sinto 10 anos mais jovem. Recomendo para todas as minhas amigas!"
              gender="female"
            />
            <TestimonialCard 
              image="./elder 2.jpg"
              name="Antônio Carlos, 71 anos"
              text="Leitura muito fácil e direta, com letras boas de ler. Comecei a fazer a rotina matinal e minha disposição mudou completamente. Até voltei a cuidar do meu jardim com alegria."
              gender="male"
            />
            <TestimonialCard 
              image="./elder 3.jpg"
              name="Sônia Regina, 68 anos"
              text="O melhor investimento que fiz na minha saúde este ano. Por esse preço, achei que seria algo muito simples, mas o conteúdo é riquíssimo, prático e mudou minha rotina."
              gender="female"
            />
          </div>
        </div>
      </section>

      {/* Offer / Anchoring */}
      <section id="oferta" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-stone-900 mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            Comece sua transformação hoje mesmo
          </h2>
          
          <div className="bg-stone-50 rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-emerald-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-rose-500 text-white text-sm font-bold px-6 py-2 rounded-bl-2xl uppercase tracking-wider shadow-md">
              Oferta Especial Limitada
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 mt-4">
              <div className="hidden md:block">
                <BookMockupSmall />
              </div>
              
              <div className="text-center md:text-left space-y-6 flex-1">
                <div>
                  <p className="text-xl text-stone-500 line-through mb-1">De R$ 47,00 por apenas:</p>
                  <div className="flex items-baseline justify-center md:justify-start gap-2 text-emerald-700">
                    <span className="text-4xl font-bold">R$</span>
                    <span className="text-8xl font-black tracking-tighter">9,00</span>
                  </div>
                  <p className="text-base text-stone-600 mt-2 font-medium bg-emerald-100 inline-block px-3 py-1 rounded-full">
                    Pagamento único. Acesso vitalício.
                  </p>
                </div>

                <ul className="space-y-4 text-left bg-white p-6 rounded-2xl border border-stone-100">
                  <li className="flex items-center gap-3 text-stone-800 font-medium text-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" /> 
                    <span>E-book Completo "Sempre Jovem"</span>
                  </li>
                  <li className="flex items-center gap-3 text-stone-800 font-medium text-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" /> 
                    <span>Fácil de ler no Celular, Tablet ou Computador</span>
                  </li>
                  <li className="flex items-center gap-3 text-stone-800 font-medium text-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" /> 
                    <span>Garantia incondicional de 7 dias</span>
                  </li>
                </ul>

                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); alert('Redirecionando para o checkout seguro...'); }}
                  className="block w-full py-6 bg-rose-600 hover:bg-rose-700 text-white text-2xl font-bold rounded-2xl shadow-xl shadow-rose-600/30 transition-all transform hover:-translate-y-1 text-center"
                >
                  COMPRAR AGORA POR R$ 9,00
                </a>
                <div className="flex items-center justify-center gap-4 text-stone-500">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  <span className="text-sm font-medium">Ambiente 100% Seguro e Criptografado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-stone-900 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            <FaqItem 
              question="Como vou receber o livro?" 
              answer="Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o livro digital (e-book) diretamente no seu celular, tablet ou computador. É muito simples e rápido!" 
            />
            <FaqItem 
              question="E se eu não souber baixar ou tiver dificuldades?" 
              answer="Não se preocupe! Junto com o e-mail de acesso, enviamos um passo a passo bem detalhado e fácil de entender. E se ainda tiver dúvidas, nossa equipe de suporte estará pronta para ajudar você por e-mail ou WhatsApp." 
            />
            <FaqItem 
              question="O pagamento é seguro?" 
              answer="Sim, 100% seguro. Utilizamos uma das maiores plataformas de pagamento do Brasil. Seus dados estão totalmente protegidos e não temos acesso às informações do seu cartão." 
            />
            <FaqItem 
              question="Tem garantia? E se eu não gostar?" 
              answer="Sim! Você tem 7 dias de garantia incondicional. Se você ler e achar que o conteúdo não ajudou em nada, basta enviar um único e-mail para nós e devolveremos seus R$ 9,00 integralmente. Sem perguntas e sem burocracia." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-4 text-lg">© {new Date().getFullYear()} Sempre Jovem. Todos os direitos reservados.</p>
          <p className="text-sm max-w-3xl mx-auto opacity-60 leading-relaxed">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc. Os resultados podem variar de pessoa para pessoa. As informações contidas neste guia não substituem o aconselhamento médico profissional.
          </p>
        </div>
      </footer>
    </div>
  );
}

const BookMockup = () => (
  <div className="relative w-64 h-96 sm:w-80 sm:h-[480px] mx-auto transform transition-transform hover:scale-105 duration-700">
    {/* Shadow */}
    <div className="absolute inset-0 bg-black/40 rounded-r-2xl rounded-l-sm blur-2xl transform translate-y-8 translate-x-8"></div>
    
    {/* Cover */}
    <div className="relative w-full h-full bg-stone-200 rounded-r-2xl rounded-l-sm shadow-2xl overflow-hidden border-l-[12px] border-stone-800 flex flex-col items-center text-center z-10">
      {/* Background Image - The actual cover */}
      <img 
        src="./capa.png" 
        alt="Capa do Livro Sempre Jovem" 
        className="absolute inset-0 w-full h-full object-cover z-10"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1558522195-e1201b090344?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        }}
      />
      
      {/* Book Spine Highlight */}
      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white/30 to-transparent z-20 pointer-events-none"></div>
      
      {/* Book Page Edges (Right side) */}
      <div className="absolute right-0 top-3 bottom-3 w-1.5 bg-gradient-to-l from-white/50 to-transparent rounded-r-sm z-20 pointer-events-none"></div>
    </div>
  </div>
);

const BookMockupSmall = () => (
  <div className="relative w-40 h-60 mx-auto transform -rotate-6 hover:rotate-0 transition-transform duration-500">
    <div className="absolute inset-0 bg-black/20 rounded-r-xl rounded-l-sm blur-lg transform translate-y-4 translate-x-4"></div>
    <div className="relative w-full h-full bg-stone-200 rounded-r-xl rounded-l-sm shadow-xl overflow-hidden border-l-8 border-stone-800 flex flex-col items-center text-center z-10">
      <img 
        src="./capa.png" 
        alt="Capa do Livro Sempre Jovem" 
        className="absolute inset-0 w-full h-full object-cover z-10"
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1558522195-e1201b090344?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/30 to-transparent z-20 pointer-events-none"></div>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-stone-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-stone-200 transform hover:-translate-y-2">
    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-md mb-8 border border-stone-100">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-stone-900 mb-4">{title}</h3>
    <p className="text-lg text-stone-600 leading-relaxed">{description}</p>
  </div>
);

const TestimonialCard = ({ image, name, text, gender = "female" }: { image: string, name: string, text: string, gender?: "male" | "female" }) => (
  <div className="bg-white rounded-3xl p-8 shadow-md border border-stone-200 flex flex-col h-full hover:shadow-xl transition-shadow">
    <div className="flex gap-1 mb-6">
      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
    </div>
    <p className="text-stone-700 text-xl italic mb-8 flex-grow leading-relaxed">"{text}"</p>
    <div className="flex items-center gap-5 mt-auto pt-6 border-t border-stone-100">
      <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100" referrerPolicy="no-referrer" />
      <div>
        <p className="font-bold text-lg text-stone-900">{name}</p>
        <p className="text-sm text-emerald-700 font-medium flex items-center gap-1.5 mt-1">
          <CheckCircle2 className="w-4 h-4" /> {gender === "male" ? "Leitor Verificado" : "Leitora Verificada"}
        </p>
      </div>
    </div>
  </div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
      >
        <span className="font-bold text-xl text-stone-900 pr-4">{question}</span>
        <div className={`p-2 rounded-full bg-stone-100 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-6 h-6 text-stone-600" />
        </div>
      </button>
      <div 
        className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-lg text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default App;
