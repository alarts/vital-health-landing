import { CheckCircle2, ShieldCheck, TrendingUp, Handshake } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: ShieldCheck,
      title: "Transparência Total",
      description:
        "Prestação de contas detalhada e processos auditáveis em todos os níveis de operação.",
    },
    {
      icon: TrendingUp,
      title: "Gestão por Resultados",
      description:
        "Foco em indicadores de desempenho e melhoria contínua dos serviços prestados.",
    },
    {
      icon: Handshake,
      title: "Valorização Profissional",
      description:
        "Remuneração justa e ambiente de trabalho que atrai os melhores profissionais do mercado.",
    },
  ];

  const benefits = [
    "Pagamento pontual garantido",
    "Benefícios competitivos",
    "Capacitação contínua",
    "Suporte administrativo completo",
    "Flexibilidade de horários",
    "Plano de carreira estruturado",
  ];

  return (
    <section id="diferenciais" className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-secondary font-medium text-sm tracking-widest uppercase mb-4">
              Nossos Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Por que escolher a Hayuta Saúde?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Combinamos experiência, ética e inovação para oferecer serviços de 
              gestão em saúde que fazem a diferença. Para médicos e profissionais 
              de saúde, oferecemos:
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            {differentials.map((differential, index) => (
              <div
                key={differential.title}
                className="flex gap-6 p-6 bg-background rounded-xl shadow-soft border border-border/50 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <differential.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {differential.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Government Trust Section */}
        <div className="mt-20 p-8 md:p-12 bg-primary/5 rounded-2xl border border-primary/10">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Parceiro de Confiança do Poder Público
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Hayuta Saúde atua em conformidade com todas as normativas legais e 
              regulatórias, garantindo transparência na prestação de contas e 
              compromisso com a eficiência na aplicação dos recursos públicos. 
              Nossa experiência em parcerias com órgãos governamentais nos permite 
              entregar resultados mensuráveis e de alto impacto social.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
