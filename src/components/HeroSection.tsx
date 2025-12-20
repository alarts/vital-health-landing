import { ArrowRight, Shield, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-healthcare.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Profissional de saúde"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Gestão de Excelência em Saúde</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transformando a{" "}
            <span className="text-secondary">saúde pública</span> com gestão responsável
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Somos especialistas em gestão de serviços de saúde, oferecendo soluções 
            inovadoras e éticas para o setor público e privado. Construímos parcerias 
            sólidas com profissionais de saúde e órgãos governamentais.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="heroPrimary" size="xl">
              Seja um Parceiro
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Conheça Nossos Serviços
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
