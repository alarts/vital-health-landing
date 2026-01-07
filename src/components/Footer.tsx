import { Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-hayuta.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    empresa: [
      { label: "Sobre Nós", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Contato", href: "#contato" },
    ],
    servicos: [
      { label: "Gestão de Unidades", href: "#servicos" },
      { label: "Contratação de Profissionais", href: "#servicos" },
      { label: "Consultoria em Saúde", href: "#servicos" },
      { label: "Parcerias PPP", href: "#servicos" },
    ],
    profissionais: [
      { label: "Trabalhe Conosco", href: "#contato" },
      { label: "Benefícios", href: "#diferenciais" },
      { label: "Cadastre seu Currículo", href: "#contato" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              alt="Hayuta Saúde" 
              className="h-32 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Gestão de excelência em saúde, construindo parcerias sólidas com 
              profissionais e órgãos governamentais.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links - Empresa */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">A Empresa</h4>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Serviços */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {links.servicos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Profissionais */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Para Profissionais</h4>
            <ul className="space-y-3">
              {links.profissionais.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Hayuta Saúde. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
