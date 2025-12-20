import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hayuta Saúde | Gestão de Excelência em Saúde</title>
        <meta 
          name="description" 
          content="Hayuta Saúde - Especialistas em gestão de serviços de saúde. Soluções inovadoras e éticas para o setor público e privado. Conheça nossos serviços." 
        />
        <meta name="keywords" content="gestão em saúde, saúde pública, gestão hospitalar, parceria público privada, contratação médicos" />
        <link rel="canonical" href="https://hayutasaude.com.br" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <DifferentialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
