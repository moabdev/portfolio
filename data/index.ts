export const navItems = [
  { name: "Sobre", link: "#sobre" },
  { name: "Projetos", link: "#projetos" },
  { name: "Avaliações", link: "#avaliacoes" },
  { name: "Contato", link: "#contato" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizo uma boa comunicação com o cliente para compreender e resolver a sua dor.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Disponível em qualquer região",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "tecnologias!",
    description: "Estou sempre me atualizando em novas",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Apaixonado por tecnologia e desenvolvimento",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Atualmente Desenvolvendo uma plataforma de ensino EAD",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Deseja iniciar um novo projeto?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Tive o prazer de trabalhar com Moab e posso dizer que ele é um talento excepcional no desenvolvimento full stack. Ele domina tanto front-end quanto back-end, resolvendo problemas de forma criativa e eficiente. Além de suas habilidades técnicas, Moab é colaborativo, comunicativo e sempre comprometido com a qualidade. Recomendo Moab sem medo para qualquer equipe ou projeto.",
    name: "Leonardo Cintra",
    title: "Product Owner na Elastic Code",
  },
  {
    quote:
      "O Moab é um profissional da área de tecnologia focado e dedicado na resolução de problemas, buscando sempre entender a fundo as regras de negócios, as tecnologias a serem utilizadas no projeto e, além disso, sua experiência como designer agrega valor quando o assunto é frontend, pois ele utiliza seu conhecimento para elaborar telas elegantes e funcionais que atendem aos padrões de UX/UI.",
    name: "Fernando Stadler",
    title: "Desenvolvedor de Software Back-End",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desenvolvedor Web Full-Stack ",
    desc: "Atuei como Desenvolvedor Web Full Stack na Elastic Code, utilizando Docker, NestJS, Node.js, Prisma, React e TailwindCSS. Durante minha experiência, modelei bancos de dados para garantir a integridade e eficiência dos sistemas. Liderei a equipe de desenvolvedores, conduzindo e pontuando sprints com metodologias ágeis, assegurando a entrega contínua e de alta qualidade. Promovi um ambiente colaborativo e orientado a resultados. Fui responsável por liderar apresentações técnicas e de projetos, comunicando claramente as soluções e progressos para as partes interessadas. Resolvi problemas complexos com criatividade e eficiência.",
    className: "md:col-span-4",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Analista de teste/QA",
    desc: "Planejar, criar e executar testes manuais e automáticos.Trabalhar lado a lado com desenvolvedores e designers para identificar e corrigir bugs. Contribuir para a melhoria contínua dos processos de desenvolvimento e QA.",
    className: "md:col-span-4",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/moabdev",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/moabmacena/",
  },
];