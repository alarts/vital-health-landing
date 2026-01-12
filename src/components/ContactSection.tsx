import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Curitiba, PR - Brasil",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@hayutasaude.com.br",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg - Sex: 8h às 18h",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-medium text-sm tracking-widest uppercase mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Vamos conversar
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Entre em contato conosco para saber mais sobre nossos serviços ou 
            para fazer parte da nossa equipe de profissionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-soft border border-border/50">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
              Envie sua mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300"
                  >
                    <option value="">Selecione</option>
                    <option value="parceria">Parceria Institucional</option>
                    <option value="trabalho">Trabalhe Conosco</option>
                    <option value="servicos">Informações sobre Serviços</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <Button variant="heroPrimary" size="xl" className="w-full">
                Enviar Mensagem
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA for Professionals */}
            <div className="p-8 bg-primary rounded-2xl text-center">
              <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-4">
                É profissional de saúde?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Faça parte da nossa equipe e tenha acesso a oportunidades 
                exclusivas com remuneração justa e benefícios competitivos.
              </p>
              <Button variant="heroOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Cadastre seu Currículo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
