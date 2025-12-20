import { Stethoscope, Building2, Users2, ClipboardCheck, HeartPulse, FileCheck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Gestão de Unidades de Saúde",
      description:
        "Administração completa de UPAs, hospitais e unidades básicas de saúde com foco em eficiência e qualidade.",
    },
    {
      icon: Users2,
      title: "Contratação de Profissionais",
      description:
        "Recrutamento e seleção de médicos, enfermeiros e profissionais de saúde qualificados.",
    },
    {
      icon: Building2,
      title: "Parcerias Público-Privadas",
      description:
        "Estruturação e gestão de PPPs na área da saúde com transparência e responsabilidade.",
    },
    {
      icon: ClipboardCheck,
      title: "Consultoria em Saúde",
      description:
        "Assessoria especializada para otimização de processos e melhoria contínua de serviços.",
    },
    {
      icon: HeartPulse,
      title: "Programas de Saúde",
      description:
        "Desenvolvimento e implementação de programas preventivos e de promoção à saúde.",
    },
    {
      icon: FileCheck,
      title: "Gestão Administrativa",
      description:
        "Suporte administrativo completo incluindo folha de pagamento, compliance e prestação de contas.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-medium text-sm tracking-widest uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Soluções completas em gestão de saúde
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos um portfólio diversificado de serviços para atender às 
            necessidades do setor de saúde com excelência e profissionalismo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 bg-card rounded-xl border border-border/50 hover:border-secondary/30 shadow-soft hover:shadow-card transition-all duration-500 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/10 transition-colors duration-500" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
