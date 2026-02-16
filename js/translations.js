const translations = {
  pt: {
    nav_home:"Home",
    nav_about:"Sobre",
    nav_projects:"Projetos",
    nav_contact:"Contato",

    gestag_title:"Sistema Inteligente de Monitoramento de Água",
    gestag_desc:"Dispositivo IoT para monitoramento de consumo de água via pulsos de hidrômetro.",
    gestag_arch:"Arquitetura",
    gestag_func:"Funcionalidades",
    gestag_chal:"Desafios Técnicos",

    hori_title:"Sistema Inteligente de Horímetro Industrial",
    hori_desc:"Monitoramento de máquinas com envio de dados via NB-IoT para relatórios de manutenção.",
    hori_arch:"Arquitetura",
    hori_func:"Funcionalidades",
    hori_chal:"Desafios Técnicos",

    contact_title:"Vamos Conversar",
    contact_desc:"Estou disponível para novos projetos, oportunidades e desafios tecnológicos.",

    about_title:"Sobre Mim",
    about_desc:"Desenvolvedor Full Stack com 5 anos de experiência em Web, Mobile e Sistemas Embarcados.",
    about_education:"Formação",
    about_experience:"Experiência",
    about_skills:"Principais Competências",

    webtech_title:"Aplicativo para Mercados – WebTech",
    webtech_desc:"Desenvolvimento do front-end completo de um aplicativo para visualização de mercados da franquia próximos ao usuário.",
    webtech_arch:"Arquitetura",
    webtech_func:"Funcionalidades",
    webtech_chal:"Desafios Técnicos",

    agropet_title:"Landing Page – Agropet Faciolli",
    agropet_desc:"Desenvolvimento completo da landing page institucional da loja, incluindo configuração total do servidor e deploy em produção.",
    agropet_arch:"Arquitetura",
    agropet_func:"Funcionalidades",
    agropet_chal:"Desafios Técnicos",

    alert_title:"Sistema de Botão de Alerta – EPI Inteligente",
    alert_desc:"Dispositivo IoT utilizado como EPI, capaz de enviar alertas em tempo real para aplicativo mobile e painel web central ao ser acionado.",
    alert_arch:"Arquitetura",
    alert_func:"Funcionalidades",
    alert_chal:"Desafios Técnicos"

  },

  en: {
    nav_home:"Home",
    nav_about:"About",
    nav_projects:"Projects",
    nav_contact:"Contact",

    gestag_title:"Smart Water Monitoring System",
    gestag_desc:"IoT device for monitoring water consumption through meter pulses.",
    gestag_arch:"Architecture",
    gestag_func:"Features",
    gestag_chal:"Technical Challenges",

    hori_title:"Smart Industrial Hour Meter System",
    hori_desc:"Machine monitoring with NB-IoT data transmission for maintenance reports.",
    hori_arch:"Architecture",
    hori_func:"Features",
    hori_chal:"Technical Challenges",

    contact_title:"Let's Talk",
    contact_desc:"I'm available for new projects, opportunities and technology challenges.",

    about_title:"About Me",
    about_desc:"Full Stack Developer with 5 years of experience in Web, Mobile and Embedded Systems.",
    about_education:"Education",
    about_experience:"Experience",
    about_skills:"Core Skills",

    webtech_title:"Market Application – WebTech",
    webtech_desc:"Complete front-end development of a franchise market app with nearby store visualization.",
    webtech_arch:"Architecture",
    webtech_func:"Features",
    webtech_chal:"Technical Challenges",

    agropet_title:"Landing Page – Agropet Faciolli",
    agropet_desc:"Complete development of the institutional landing page, including full server configuration and production deployment.",
    agropet_arch:"Architecture",
    agropet_func:"Features",
    agropet_chal:"Technical Challenges",

    alert_title:"Alert Button System – Smart PPE",
    alert_desc:"IoT device used as PPE capable of sending real-time alerts to a mobile app and central web dashboard when activated.",
    alert_arch:"Architecture",
    alert_func:"Features",
    alert_chal:"Technical Challenges"

  }
};

function setLanguage(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(translations[lang][key]){
      el.innerText = translations[lang][key];
    }
  });
}
