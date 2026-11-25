// ===== Dados =====
// Para adicionar um projeto, copie um bloco abaixo e ajuste os campos.
// cat: geo | java | ts   ·   type: pro (profissional) | study (estudo)
// featured: true = card largo no topo · images: fotos/prints em assets/projetos/
const PROJECTS = [
  {
    name: 'Dia de Plantar — Mapa da Regeneração do DF', type: 'pro', cat: ['geo'], featured: true, icon: '🌱',
    pt: 'Plataforma pública para registrar plantios de árvores no Distrito Federal. O cidadão tira a foto da muda, marca o local no mapa e envia; o ponto aparece na hora e a foto é publicada após a moderação da equipe da SEMA-DF. PWA com funcionamento offline, privacidade desde a concepção (LGPD: remoção de metadados EXIF, minimização de dados, trilha de auditoria, proteção contra força bruta e CSRF) e integração com ArcGIS Enterprise, IDE/DF e SISDIA.',
    en: 'Public platform to record tree plantings in the Federal District. Citizens take a photo of the seedling, mark the spot on the map and submit it; the point shows up instantly and the photo is published after review by SEMA-DF staff. Offline-first PWA, privacy by design (LGPD: EXIF stripping, data minimization, audit trail, brute-force and CSRF protection) and integration with ArcGIS Enterprise, IDE/DF and SISDIA.',
    tags: ['PHP', 'PostgreSQL/PostGIS', 'SIRGAS 2000', 'ArcGIS Enterprise', 'PWA', 'LGPD'],
    images: [
      { src: 'assets/projetos/ddp-mapa.jpg', pt: 'Mapa da Regeneração: registro de muda com foto e localização', en: 'Regeneration Map: seedling record with photo and location' },
      { src: 'assets/projetos/ddp-home.jpg', pt: 'Página inicial do portal', en: 'Portal home page' }
    ],
    demo: 'https://sisdia.df.gov.br/diadeplantar'
  },
  {
    name: 'MZLog — Sistema de Logística', type: 'study', cat: ['java', 'ts'], featured: true, icon: '🚚',
    pt: 'Sistema de uma transportadora de cargas interestaduais em arquitetura de microsserviços. Cada domínio (autenticação, clientes, funcionários, entregas, veículos e rotas) roda como serviço independente com o próprio banco (Database per Service), atrás de um API Gateway. Front-end em Angular com dashboard, gestão de frota e visualização de rotas no mapa. CI no GitHub Actions e orquestração com Docker Compose.',
    en: 'System for an interstate freight carrier built on a microservices architecture. Each domain (auth, customers, employees, deliveries, vehicles and routes) runs as an independent service with its own database (Database per Service) behind an API Gateway. Angular front end with a dashboard, fleet management and route visualization on a map. CI on GitHub Actions and orchestration with Docker Compose.',
    tags: ['Java 17', 'Spring Boot', 'Spring Cloud Gateway', 'Angular 19', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    images: [
      { src: 'assets/projetos/mzlog-capa.jpg', pt: 'MZLog — frota em rota interestadual', en: 'MZLog — fleet on an interstate route' },
      { src: 'assets/projetos/mzlog-telas.jpg', pt: 'Telas: login, dashboard, clientes, funcionários, rotas, veículos, relatórios e rastreamento', en: 'Screens: login, dashboard, customers, employees, routes, vehicles, reports and tracking' },
      { src: 'assets/projetos/mzlog-frota.jpg', pt: 'Categorias da frota: van, caminhão médio e caminhão grande', en: 'Fleet categories: van, medium truck and large truck' },
      { src: 'assets/projetos/mzlog-caminhao.jpg', pt: 'Caminhão da frota MZLog', en: 'MZLog fleet truck' },
      { src: 'assets/projetos/mzlog-equipe.jpg', pt: 'Equipe e operação', en: 'Team and operations' }
    ],
    code: 'https://github.com/engenheiromuniz/mzlog-app'
  },
  {
    name: 'Cadastro de Clientes com ViaCEP', type: 'study', cat: ['java', 'ts'], icon: '📇',
    pt: 'Aplicação full-stack que cadastra clientes e preenche o endereço automaticamente a partir do CEP. Back-end migrado para Spring Boot 4 e Java 21, com ProblemDetail e padrões GoF; front-end Angular 19 com CRUD completo. Bootcamp DIO & CI&T.',
    en: 'Full-stack app that registers customers and auto-fills the address from the Brazilian postal code (CEP). Back end migrated to Spring Boot 4 and Java 21, with ProblemDetail and GoF patterns; Angular 19 front end with full CRUD. DIO & CI&T Bootcamp.',
    tags: ['Java 21', 'Spring Boot 4', 'OpenFeign', 'Angular 19', 'Docker'],
    images: [
      { src: 'assets/projetos/viacep-tela.jpg', pt: 'Tela de cadastro e listagem de clientes', en: 'Customer registration and list screen' },
      { src: 'assets/projetos/viacep-arquitetura.jpg', pt: 'Arquitetura: Angular → API Spring Boot → ViaCEP', en: 'Architecture: Angular → Spring Boot API → ViaCEP', contain: true }
    ],
    code: 'https://github.com/engenheiromuniz/cadastro-clientes-viacep',
    api: 'https://cadastro-clientes-viacep-api.onrender.com/swagger-ui.html'
  },
  {
    name: 'EcoLicença', type: 'study', cat: ['java', 'ts', 'geo'], icon: '🌿',
    pt: 'Sistema de licenciamento ambiental que mostra o caminho que uma empresa percorre para obter autorização do órgão ambiental antes de construir ou operar um empreendimento.',
    en: 'Environmental licensing system that maps the path a company follows to get authorization from the environmental agency before building or operating a facility.',
    tags: ['Java', 'Spring Boot', 'Angular 19', 'TypeScript'],
    code: 'https://github.com/engenheiromuniz/ecolicenca'
  },
  {
    name: 'ShopLite API', type: 'study', cat: ['java'], icon: '🛒',
    pt: 'API REST de um e-commerce simplificado: produtos por categoria, pedidos com vários itens, cupons de desconto e controle de acesso por papel. Estudo de testes (JUnit 5, Mockito, TDD), JPA/Hibernate e Spring Security com JWT.',
    en: 'REST API for a simplified e-commerce: products by category, multi-item orders, discount coupons and role-based access. A deep dive into testing (JUnit 5, Mockito, TDD), JPA/Hibernate and Spring Security with JWT.',
    tags: ['Java 17', 'Spring Boot', 'JPA', 'Spring Security', 'JWT', 'JUnit 5'],
    code: 'https://github.com/engenheiromuniz/shoplite-api'
  },
  {
    name: 'Helpdesk', type: 'study', cat: ['ts'], icon: '🎧',
    pt: 'Sistema de helpdesk com back-end em Node.js/NestJS (TypeScript) e front-end em Angular.',
    en: 'Helpdesk system with a Node.js/NestJS (TypeScript) back end and an Angular front end.',
    tags: ['NestJS', 'Node.js', 'TypeScript', 'Angular'],
    code: 'https://github.com/engenheiromuniz/helpdesk'
  }
];

const EXPERIENCE = [
  {
    role: { pt: 'Engenheiro de Software Full-Stack', en: 'Full-Stack Software Engineer' },
    org: 'Secretaria do Meio Ambiente do DF (SEMA-DF)', when: { pt: 'dez/2021 – atual', en: 'Dec 2021 – present' },
    pt: [
      'Líder técnico dos sistemas web e geoespaciais da Secretaria: arquitetura, desenvolvimento e implantação em produção.',
      'SISDIA: projeto e mantenho módulos centrais do Sistema Distrital de Informações Ambientais, usado mensalmente por milhares de pesquisadores e órgãos públicos.',
      'Dia de Plantar (2026): entrega ponta a ponta, assistida por IA, de plataforma pública de registros georreferenciados, bem antes da estimativa original feita para uma equipe.',
      'Geopier: aplicação geoespacial em Java (Spring Boot), PHP e ArcGIS SDK que compartilha dados em tempo real entre órgãos para a segurança da navegação no Lago Paranoá.',
      'Conferência Distrital de Aquicultura: sistema de inscrições (PHP, PostgreSQL, Survey123) para 570+ participantes de 86 instituições.'
    ],
    en: [
      "Technical lead for the Secretariat's web and geospatial systems: architecture, development and production deployment.",
      'SISDIA: architected and maintain core modules of the Federal District Environmental Information System, used monthly by thousands of researchers and government agencies.',
      'Dia de Plantar (2026): led the end-to-end, AI-assisted delivery of a public platform for geotagged records, well ahead of the original team-based estimate.',
      'Geopier: geospatial application with Java (Spring Boot), PHP and ArcGIS SDK sharing real-time data across agencies for navigation safety on Lake Paranoá.',
      'Federal District Aquaculture Conference: registration system (PHP, PostgreSQL, Survey123) for 570+ participants from 86 institutions.'
    ]
  },
  {
    role: { pt: 'Analista de Sistemas', en: 'Systems Analyst' },
    org: 'SONDA IT · cliente Caixa Econômica Federal', when: { pt: 'nov/2024 – jul/2025', en: 'Nov 2024 – Jul 2025' },
    pt: [
      'Manutenção de microsserviços conteinerizados em Docker, Kubernetes e OpenShift (OKD) integrados ao Azure, com disponibilidade acima de 99,9%.',
      'Dashboards de monitoramento e alertas com Zabbix e Grafana, acelerando a análise de causa raiz e o cumprimento de SLA.',
      'Testes de segurança estática (SAST) com Fortify, corrigindo vulnerabilidades antes das entregas.'
    ],
    en: [
      'Maintained containerized microservices on Docker, Kubernetes and OpenShift (OKD) integrated with Azure, supporting 99.9%+ availability.',
      'Monitoring and alerting dashboards with Zabbix and Grafana, speeding up root cause analysis and SLA compliance.',
      'Static application security testing (SAST) with Fortify, remediating vulnerabilities before releases.'
    ]
  },
  {
    role: { pt: 'Analista de Políticas Públicas – Líder de Infraestrutura de Data Center', en: 'Public Policy Analyst – Data Center Infrastructure Lead' },
    org: 'Secretaria de Economia do DF (SEEC-DF) · SUTIC', when: { pt: 'jun/2013 – nov/2021', en: 'Jun 2013 – Nov 2021' },
    pt: [
      'Operação e governança do data center do GDF: energia, climatização, automação e proteção contra incêndio.',
      'Monitoramento com SCADA (ScadaBR, Java) integrado a CLPs e gestão com o DCIM da Schneider Electric.',
      'Sistemas internos e dashboards em Python (Django), PHP (Laravel) e Delphi; termos de referência e gestão de contratos.'
    ],
    en: [
      "Operation and governance of the Federal District Government's data center: power, cooling, automation and fire protection.",
      "Monitoring with SCADA (ScadaBR, Java) integrated with PLCs and management with Schneider Electric's DCIM.",
      'Internal systems and dashboards in Python (Django), PHP (Laravel) and Delphi; terms of reference and contract management.'
    ]
  },
  {
    role: { pt: 'Analista de TI – Desenvolvimento de Sistemas', en: 'IT Analyst – Systems Development' },
    org: 'Secretaria de Planejamento do DF (SEPLAG-DF)', when: { pt: 'out/2006 – jun/2013', en: 'Oct 2006 – Jun 2013' },
    pt: [
      'Sistemas departamentais em PHP, incluindo help desk (MySQL) para 300+ servidores no Palácio do Buriti.',
      'Padronização e desenvolvimento dos sites das secretarias do GDF; bancos Oracle, SQL Server e MySQL.'
    ],
    en: [
      'Departmental systems in PHP, including a help desk (MySQL) serving 300+ civil servants at the Buriti Palace.',
      'Standardized and developed the websites of all Federal District Government secretariats; Oracle, SQL Server and MySQL databases.'
    ]
  }
];

// ===== Traduções =====
const I18N = {
  en: {
    'nav.about': 'About', 'nav.stack': 'Stack', 'nav.projects': 'Projects', 'nav.exp': 'Experience', 'nav.contact': 'Contact',
    'hero.kicker': "// Hi, I'm", 'hero.meta': '20 years in IT · Open to remote roles', 'hero.cta1': 'See projects',
    'about.title': 'About me',
    'about.body': `<p>Full-Stack Software Engineer with a B.S. in Computer Engineering and <strong>20 years in IT</strong>. I've been building software since 2006 and, since 2021, focusing on <strong>Java and Angular</strong>.</p>
      <p>At the Federal District Environment Secretariat (SEMA-DF), I architect and maintain core modules of <strong>SISDIA</strong>, an environmental information platform used monthly by thousands of researchers and government agencies. I work with Java (Spring Boot), RESTful APIs, PostgreSQL/PostGIS and ArcGIS Enterprise.</p>
      <p>Before focusing on software engineering, I led the Federal District Government's data center infrastructure (SCADA, Schneider DCIM, power and cooling). That gives me a hands-on view of <strong>security, availability and operations</strong> that I bring to every system I build.</p>`,
    'facts.1': 'years in IT', 'facts.2': 'building software', 'facts.3': 'repositories on GitHub', 'facts.4': 'PostGIS · ArcGIS Enterprise · IDE/DF',
    'stack.data': 'Data & Messaging', 'stack.practices': 'Practices',
    'stack.practicesBody': 'Microservices · REST APIs · Design Patterns (GoF) · SOLID · TDD · LGPD / Privacy by Design · Scrum',
    'proj.title': 'Featured projects', 'proj.all': 'All', 'proj.ms': 'Microservices', 'proj.more': 'See all repositories on GitHub →',
    'exp.title': 'Experience', 'edu.title': 'Education',
    'edu.1t': 'B.S. in Computer Engineering', 'edu.2t': 'Postgraduate Specialization in Web Systems Development',
    'contact.title': "Let's talk?", 'contact.body': 'Open to remote Java / Full-Stack roles in Brazil and abroad, especially the US, Canada and Germany.',
    'footer': 'Built with HTML, CSS and JavaScript · hosted on GitHub Pages',
    'label.pro': 'professional', 'label.study': 'study', 'link.demo': 'Live demo ↗', 'link.code': 'Code ↗', 'link.api': 'Live API ↗'
  },
  pt: { 'label.pro': 'profissional', 'label.study': 'estudo', 'link.demo': 'Ver online ↗', 'link.code': 'Código ↗', 'link.api': 'API ao vivo ↗' }
};

// ===== Renderização =====
let lang = 'pt';
let filter = 'all';
const ptDefaults = {};
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const t = k => (I18N[lang] && I18N[lang][k]) || I18N.pt[k] || k;

function mediaHtml(p, idx) {
  if (!p.images || !p.images.length) {
    return `<div class="media"><div class="cover"><span class="ico">${p.icon || '💻'}</span><span class="cv-name">${esc(p.name)}</span><span class="cv-stack">${esc(p.tags.slice(0, 3).join(' · '))}</span></div></div>`;
  }
  const first = p.images[0];
  const thumbs = p.images.length > 1
    ? `<div class="thumbs">${p.images.map((im, i) => `<button class="${i === 0 ? 'on' : ''}" data-p="${idx}" data-i="${i}" aria-label="${esc(im[lang])}"><img src="${im.src}" alt="" loading="lazy"></button>`).join('')}</div>`
    : '';
  return `<div class="media">
      <div class="main" data-p="${idx}" data-i="0" role="button" tabindex="0" aria-label="${esc(first[lang])}">
        <img src="${first.src}" alt="${esc(first[lang])}" class="${first.contain ? 'contain' : ''}" loading="lazy">
        ${p.images.length > 1 ? `<span class="count">📷 ${p.images.length}</span>` : ''}
      </div>${thumbs}
    </div>`;
}

function cardHtml(p, idx, wide) {
  const links = [
    p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">${t('link.demo')}</a>` : '',
    p.api ? `<a href="${p.api}" target="_blank" rel="noopener">${t('link.api')}</a>` : '',
    p.code ? `<a href="${p.code}" target="_blank" rel="noopener">${t('link.code')}</a>` : ''
  ].join('');
  const body = `<div class="card-top"><span class="badge ${p.type === 'study' ? 'study' : ''}">${t('label.' + p.type)}</span></div>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p[lang])}</p>
      <div class="tags">${p.tags.map(x => `<span>${esc(x)}</span>`).join('')}</div>
      <div class="links">${links}</div>`;
  return wide
    ? `<article class="card wide featured">${mediaHtml(p, idx)}<div class="card-body">${body}</div></article>`
    : `<article class="card">${mediaHtml(p, idx)}${body}</article>`;
}

function renderProjects() {
  const show = p => filter === 'all' || p.cat.includes(filter);
  document.getElementById('featured').innerHTML = PROJECTS.map((p, i) => (p.featured && show(p)) ? cardHtml(p, i, true) : '').join('');
  document.getElementById('cards').innerHTML = PROJECTS.map((p, i) => (!p.featured && show(p)) ? cardHtml(p, i, false) : '').join('');
}

// Galeria: miniaturas trocam a imagem principal; clique abre em tela cheia
const lb = { el: null, p: 0, i: 0 };
function showLightbox(p, i) {
  const imgs = PROJECTS[p].images; lb.p = p; lb.i = (i + imgs.length) % imgs.length;
  const im = imgs[lb.i];
  document.getElementById('lbImg').src = im.src;
  document.getElementById('lbImg').alt = im[lang];
  document.getElementById('lbCap').textContent = `${PROJECTS[p].name} — ${im[lang]} (${lb.i + 1}/${imgs.length})`;
  const multi = imgs.length > 1;
  document.getElementById('lbPrev').hidden = !multi; document.getElementById('lbNext').hidden = !multi;
  document.getElementById('lightbox').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeLightbox() { document.getElementById('lightbox').hidden = true; document.body.style.overflow = ''; }

document.getElementById('projetos').addEventListener('click', ev => {
  const th = ev.target.closest('.thumbs button');
  if (th) {
    const p = +th.dataset.p, i = +th.dataset.i, im = PROJECTS[p].images[i];
    const media = th.closest('.media'); const main = media.querySelector('.main'); const img = main.querySelector('img');
    img.src = im.src; img.alt = im[lang]; img.className = im.contain ? 'contain' : ''; main.dataset.i = i;
    media.querySelectorAll('.thumbs button').forEach(b => b.classList.toggle('on', b === th));
    return;
  }
  const main = ev.target.closest('.main');
  if (main) showLightbox(+main.dataset.p, +main.dataset.i);
});
document.getElementById('projetos').addEventListener('keydown', ev => {
  const main = ev.target.closest('.main');
  if (main && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); showLightbox(+main.dataset.p, +main.dataset.i); }
});
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => showLightbox(lb.p, lb.i - 1));
document.getElementById('lbNext').addEventListener('click', () => showLightbox(lb.p, lb.i + 1));
document.getElementById('lightbox').addEventListener('click', ev => { if (ev.target.id === 'lightbox') closeLightbox(); });
document.addEventListener('keydown', ev => {
  if (document.getElementById('lightbox').hidden) return;
  if (ev.key === 'Escape') closeLightbox();
  if (ev.key === 'ArrowLeft') showLightbox(lb.p, lb.i - 1);
  if (ev.key === 'ArrowRight') showLightbox(lb.p, lb.i + 1);
});

function renderTimeline() {
  document.getElementById('timeline').innerHTML = EXPERIENCE.map(e => `
    <li>
      <h3>${esc(e.role[lang])}</h3>
      <div class="org">${esc(e.org)}</div>
      <div class="when">${esc(e.when[lang])}</div>
      <ul>${e[lang].map(x => `<li>${esc(x)}</li>`).join('')}</ul>
    </li>`).join('');
}

function applyLang() {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (!(k in ptDefaults)) ptDefaults[k] = el.textContent;
    el.textContent = lang === 'pt' ? ptDefaults[k] : (I18N.en[k] || ptDefaults[k]);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.dataset.i18nHtml;
    if (!(k in ptDefaults)) ptDefaults[k] = el.innerHTML;
    el.innerHTML = lang === 'pt' ? ptDefaults[k] : (I18N.en[k] || ptDefaults[k]);
  });
  document.querySelectorAll('.flag').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  renderProjects();
  renderTimeline();
}

// ===== Eventos =====
document.querySelectorAll('.flag').forEach(b => b.addEventListener('click', () => {
  lang = b.dataset.lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  applyLang();
}));

document.getElementById('filters').addEventListener('click', ev => {
  const b = ev.target.closest('.chip');
  if (!b) return;
  filter = b.dataset.f;
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === b));
  renderProjects();
});

const navLinks = document.getElementById('navLinks');
document.getElementById('menuBtn').addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.addEventListener('click', () => navLinks.classList.remove('open'));

document.getElementById('ano').textContent = new Date().getFullYear();

try { if (localStorage.getItem('lang') === 'en') lang = 'en'; } catch (e) {}
applyLang();

// Animação suave ao rolar
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); } }), { threshold: .08 });
  document.querySelectorAll('.section .container').forEach(el => { el.classList.add('reveal'); io.observe(el); });
}
