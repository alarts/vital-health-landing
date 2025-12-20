import { Target, Eye, Award } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Proporcionar serviços de gestão em saúde de excelência, contribuindo para a melhoria da qualidade de vida da população através de parcerias éticas e transparentes.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser referência nacional em gestão de saúde, reconhecida pela qualidade dos serviços prestados e pelo compromisso com a ética e responsabilidade social.",
    },
    {
      icon: Award,
      title: "Valores",
      description:
        "Ética, transparência, qualidade, compromisso social, respeito aos profissionais de saúde e dedicação ao bem-estar da população atendida.",
    },
  ];

  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-medium text-sm tracking-widest uppercase mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Comprometidos com a saúde do Brasil
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Hayuta Saúde é uma empresa especializada em gestão de serviços de saúde, 
            atuando com excelência no setor público e privado. Nossa experiência nos 
            permite oferecer soluções personalizadas que atendem às necessidades 
            específicas de cada parceiro.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-8 bg-background rounded-xl shadow-soft hover:shadow-card transition-all duration-500 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 p-8 md:p-12 bg-primary rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">15+</p>
              <p className="text-primary-foreground/70 font-medium">Anos de Atuação</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">50+</p>
              <p className="text-primary-foreground/70 font-medium">Municípios Atendidos</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">500+</p>
              <p className="text-primary-foreground/70 font-medium">Profissionais</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">1M+</p>
              <p className="text-primary-foreground/70 font-medium">Vidas Impactadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
