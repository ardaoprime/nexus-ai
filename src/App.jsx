import React, { useMemo, useState } from 'react';
import {
  Activity, ArrowUpRight, Bell, Blocks, Bot, BriefcaseBusiness,
  ChartNoAxesCombined, ChevronDown, CircleHelp, Compass, CreditCard,
  FileText, Globe2, LayoutDashboard, Lightbulb, Menu, Plus, Search,
  Settings, ShieldCheck, Sparkles, Target, TrendingUp, WandSparkles, X,
  Download, ExternalLink, CheckCircle2, Circle, Trash2, Eye, Copy,
  Mail, User, Lock, Palette, HelpCircle, Rocket, BarChart3, Megaphone,
  Wallet, Globe, RefreshCw
} from 'lucide-react';

const nav = [
  { label: 'Vue d’ensemble', icon: LayoutDashboard },
  { label: 'Trouver une idée', icon: Lightbulb },
  { label: 'Étude de marché', icon: Compass },
  { label: 'Créer mon site', icon: Globe2 },
  { label: 'Marketing', icon: Target },
  { label: 'Finances', icon: ChartNoAxesCombined },
];

const quickActions = [
  { icon: Lightbulb, title: 'Trouver une opportunité', desc: 'Explore des besoins et des idées de business.', tone: 'violet', target: 'Trouver une idée' },
  { icon: Globe2, title: 'Créer un site web', desc: 'Construis une première version de ton site.', tone: 'blue', target: 'Créer mon site' },
  { icon: ChartNoAxesCombined, title: 'Suivre mes finances', desc: 'Organise tes revenus et tes dépenses.', tone: 'green', target: 'Finances' },
];


function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
}

function buildWebsiteHtml(name, description, color) {
  const safeName = escapeHtml(name || 'Mon projet');
  const safeDescription = escapeHtml(description || 'Découvrez notre univers et notre offre.');
  const safeColor = /^#[0-9a-f]{6}$/i.test(color) ? color : '#8068e9';
  const text = (description || '').toLowerCase();
  let category = {
    label: 'NOTRE UNIVERS',
    heading: 'Une idée qui devient une expérience',
    cards: [
      ['Une offre claire', 'Découvrez ce que nous proposons et comment cela peut vous aider.'],
      ['Pensé pour vous', 'Une expérience imaginée autour de vos besoins et de vos envies.'],
      ['Passons à la suite', 'Contactez-nous pour poser vos questions et découvrir le projet.']
    ],
    cta: 'Nous contacter'
  };
  if (/vêtement|vetement|mode|streetwear|marque|habit|collection|textile/.test(text)) category = {
    label:'LA COLLECTION', heading:'Affirme ton style.', cards:[
      ['Nos essentiels','Des pièces pensées pour accompagner ton style au quotidien.'],
      ['Notre identité','Une marque avec son univers, ses inspirations et son caractère.'],
      ['La prochaine collection','Découvre les nouveautés et les pièces à venir.']
    ], cta:'Découvrir la collection'
  };
  else if (/sport|fitness|muscul|coach|entraî|entrain|boxe/.test(text)) category = {
    label:'BOUGE À TON RYTHME', heading:'Progresse avec un accompagnement adapté.', cards:[
      ['Un objectif clair','Des solutions pensées pour t’aider à avancer à ton rythme.'],
      ['Un accompagnement','Des conseils et un suivi centrés sur tes besoins.'],
      ['Passe à l’action','Présente ton objectif et découvre comment commencer.']
    ], cta:'Découvrir nos services'
  };
  else if (/application|appli|logiciel|saas|technolog|numérique|numerique|ia |intelligence artificielle/.test(text)) category = {
    label:'UNE SOLUTION PLUS SIMPLE', heading:'La technologie au service de tes idées.', cards:[
      ['Simple à utiliser','Une expérience claire pour aller directement à l’essentiel.'],
      ['Les fonctionnalités','Présente les outils qui rendent ton quotidien plus facile.'],
      ['Conçu pour évoluer','Une solution qui peut grandir avec les besoins de ses utilisateurs.']
    ], cta:'Explorer la solution'
  };
  else if (/restaurant|café|cafe|food|cuisine|pâtisserie|patisserie|traiteur/.test(text)) category = {
    label:'NOTRE SAVOIR-FAIRE', heading:'Le goût des bonnes choses.', cards:[
      ['Notre carte','Présente les plats, produits ou créations de la maison.'],
      ['Des produits choisis','Mets en avant les ingrédients et la qualité de ton savoir-faire.'],
      ['Nous rendre visite','Ajoute ici les horaires et les informations pratiques de ton établissement.']
    ], cta:'Voir notre offre'
  };
  else if (/jeu vidéo|jeux vidéo|gaming|jeu mobile|game/.test(text)) category = {
    label:'ENTRE DANS LE JEU', heading:'Une nouvelle expérience à découvrir.', cards:[
      ['Le concept','Explique ce qui rend ton jeu différent et amusant.'],
      ['Les fonctionnalités','Présente les modes, univers et possibilités du jeu.'],
      ['Suivre le projet','Partage les nouveautés et les prochaines étapes du développement.']
    ], cta:'Découvrir le projet'
  };
  const cards = category.cards.map(([title, body]) => `<article class="card"><span class="card-number">0${category.cards.findIndex(x=>x[0]===title)+1}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></article>`).join('');
  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${safeDescription}"><meta name="theme-color" content="${safeColor}"><title>${safeName}</title>
<style>
:root{--accent:${safeColor};font-family:Inter,Arial,sans-serif;color:#172033;background:#fff}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0}header{height:78px;display:flex;align-items:center;justify-content:space-between;padding:0 max(6vw,22px);background:#fff;border-bottom:1px solid #eceef3;position:sticky;top:0}header strong{font-size:21px;letter-spacing:-.7px}header a,.button{color:#fff;background:var(--accent);padding:13px 20px;border-radius:9px;text-decoration:none;font-weight:700;font-size:14px}.hero{padding:clamp(75px,12vw,145px) 22px;text-align:center;background:radial-gradient(circle at 50% 0%,color-mix(in srgb,var(--accent) 15%,white),#fff 65%)}.eyebrow{color:var(--accent);font-weight:800;letter-spacing:2px;font-size:11px}.hero h1{font-size:clamp(42px,8vw,82px);line-height:1.02;letter-spacing:-3px;max-width:950px;margin:20px auto}.hero p{font-size:18px;line-height:1.8;color:#687287;max-width:700px;margin:0 auto 30px}.section{max-width:1120px;margin:auto;padding:85px 22px}.section h2{text-align:center;font-size:clamp(28px,4vw,42px);letter-spacing:-1.5px;margin:0 0 12px}.lead{text-align:center;color:#687287;line-height:1.8;max-width:720px;margin:0 auto 42px}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.card{background:#fff;border:1px solid #e8eaf0;border-radius:17px;padding:28px;box-shadow:0 15px 45px #1720330a}.card-number{display:grid;place-items:center;width:35px;height:35px;border-radius:10px;background:color-mix(in srgb,var(--accent) 13%,white);color:var(--accent);font-weight:800;font-size:12px}.card h3{font-size:19px;margin:22px 0 10px}.card p{color:#687287;line-height:1.8;margin:0}.contact{background:#151a2b;color:white;text-align:center;padding:75px 22px}.contact h2{font-size:clamp(28px,4vw,42px);margin:0 0 12px}.contact p{color:#c4c9d7;margin:0 auto 25px;line-height:1.7;max-width:600px}.contact a{display:inline-block;color:#fff;background:var(--accent);padding:13px 20px;border-radius:9px;text-decoration:none;font-weight:700}footer{text-align:center;color:#7b8292;padding:25px;font-size:13px}
@media(max-width:700px){header{height:68px}.hero h1{letter-spacing:-1.5px}.cards{grid-template-columns:1fr}.section{padding:60px 20px}.card{padding:23px}}
</style></head><body>
<header><strong>${safeName}</strong><a href="#offre">Découvrir</a></header>
<main><section class="hero"><div class="eyebrow">${escapeHtml(category.label)}</div><h1>${safeName}</h1><p>${safeDescription}</p><a class="button" href="#offre">${escapeHtml(category.cta)}</a></section>
<section class="section" id="offre"><h2>${escapeHtml(category.heading)}</h2><p class="lead">${safeDescription}</p><div class="cards">${cards}</div></section>
<section class="contact" id="contact"><h2>Un projet en tête ?</h2><p>Tu souhaites en savoir plus sur ${safeName} ? Retrouve ici les prochaines informations et les moyens de prendre contact.</p><a href="mailto:contact@example.com?subject=${encodeURIComponent('Contact - '+(name||'Mon projet'))}">Nous écrire</a></section></main>
<footer>© ${new Date().getFullYear()} ${safeName} · Site créé avec NEXUS AI</footer></body></html>`;
}

function App() {
  const [active, setActive] = useState('Vue d’ensemble');
  const [mobileNav, setMobileNav] = useState(false);
  const [notice, setNotice] = useState('Bienvenue dans ton espace de création.');
  const [ideaType, setIdeaType] = useState('En ligne');
  const [ideaInterest, setIdeaInterest] = useState('');
  const [ideaSkills, setIdeaSkills] = useState('');
  const [ideaResults, setIdeaResults] = useState(false);
  const [marketName, setMarketName] = useState('');
  const [marketCustomer, setMarketCustomer] = useState('');
  const [marketProblem, setMarketProblem] = useState('');
  const [marketNotes, setMarketNotes] = useState('');
  const [siteName, setSiteName] = useState('');
  const [siteDescription, setSiteDescription] = useState('');
  const [siteColor, setSiteColor] = useState('#8068e9');
  const [siteGenerated, setSiteGenerated] = useState(false);
  const [sitePrompt, setSitePrompt] = useState('');
  const [generatedSiteHtml, setGeneratedSiteHtml] = useState('');
  const [marketingGoal, setMarketingGoal] = useState('Trouver mes premiers clients');
  const [marketingAudience, setMarketingAudience] = useState('');
  const [marketingChannel, setMarketingChannel] = useState('Réseaux sociaux');
  const [marketingPlan, setMarketingPlan] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState('Dépense');
  const [transactionLabel, setTransactionLabel] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [assistantStep, setAssistantStep] = useState(0);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Salut ! Je suis NEXUS. Je vais t’aider à transformer ton idée en projet concret. Pour commencer, décris-moi ton idée, même si elle est encore floue.' }]);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState('Général');
  const [supportQuestion, setSupportQuestion] = useState('');
  const [supportSent, setSupportSent] = useState(false);

  const income = useMemo(() => transactions.filter(t => t.type === 'Revenu').reduce((s,t) => s + t.amount, 0), [transactions]);
  const expenses = useMemo(() => transactions.filter(t => t.type === 'Dépense').reduce((s,t) => s + t.amount, 0), [transactions]);
  const balance = income - expenses;

  const go = (page) => { setActive(page); setMobileNav(false); setWorkspaceOpen(false); setProfileOpen(false); };
  const addTransaction = (e) => {
    e.preventDefault();
    const amount = Number(String(transactionAmount).replace(',', '.'));
    if (!transactionLabel.trim() || !Number.isFinite(amount) || amount <= 0) return;
    setTransactions(items => [{ id: Date.now(), type: transactionType, label: transactionLabel.trim(), amount }, ...items]);
    setTransactionLabel(''); setTransactionAmount('');
  };
  const submitPrompt = (e) => {
    e.preventDefault();
    const answer = prompt.trim();
    if (!answer || assistantStep >= 4) return;
    const next = [...messages, { role: 'user', text: answer }];
    const replies = [
      'Très bien, on part de cette idée. À qui aimerais-tu vendre ton produit ou ton service ?',
      'Compris. Quel besoin ou quel problème précis veux-tu résoudre pour ces personnes ?',
      'Dernière question : quel budget peux-tu consacrer au démarrage ? Tu peux répondre « 0 € ».',
    ];
    let reply = replies[assistantStep];
    if (assistantStep === 3) {
      const answers = next.filter(m => m.role === 'user').map(m => m.text);
      reply = 'Ton premier brief :\n\n• Idée : ' + answers[0] + '\n• Clients : ' + answers[1] + '\n• Besoin : ' + answers[2] + '\n• Budget : ' + answer + '\n\nProchaines étapes : parler à des clients potentiels, comparer les solutions existantes et tester une version simple. Ce brief est une aide à la réflexion, pas une étude de marché vérifiée.';
    }
    next.push({ role: 'assistant', text: reply });
    setMessages(next); setAssistantStep(s => s + 1); setPrompt('');
  };
  const restartAssistant = () => { setAssistantStep(0); setMessages([{ role: 'assistant', text: 'On recommence ! Décris-moi ton idée de business.' }]); };

  const Header = () => (
    <header className="topbar">
      <button className="icon-btn mobile-menu" onClick={() => setMobileNav(true)} aria-label="Ouvrir le menu"><Menu size={20}/></button>
      <div className="breadcrumbs">Workspace <span>/</span> <b>{active}</b></div>
      <div className="top-actions">
        <div className="status-pill"><span/> Espace de travail prêt</div>
        <button className="icon-btn notification" aria-label="Notifications" onClick={() => setNotice('Tu es à jour : aucune notification pour le moment.')}><Bell size={18}/></button>
        <button className="top-avatar" onClick={() => go('Mon compte')}>A</button>
      </div>
    </header>
  );

  const PageTitle = ({ eyebrow, title, subtitle }) => (
    <div className="page-title"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{subtitle}</p></div>
  );

  const Dashboard = () => (
    <>
      <section className="welcome-row">
        <div><div className="eyebrow"><span className="eyebrow-line"/> TON CENTRE DE COMMANDEMENT</div>
          <h1>Fais passer tes idées<br/><span>au niveau supérieur.</span></h1>
          <p className="welcome-copy">De la première idée au lancement : construis ton projet, une étape à la fois.</p></div>
        <div className="welcome-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core"><Bot size={39}/></div><span className="orbit-chip chip-one"><Sparkles size={15}/></span><span className="orbit-chip chip-two"><TrendingUp size={15}/></span><span className="orbit-chip chip-three"><Target size={15}/></span></div>
      </section>
      <section className="notice-strip"><ShieldCheck size={17}/><span>{notice}</span><button onClick={() => setNotice('Bienvenue dans ton espace de création.')} aria-label="Fermer"><X size={15}/></button></section>
      <section className="metrics-grid">
        <article className="metric-card"><div className="metric-top"><span>Projets actifs</span><span className="metric-icon purple"><BriefcaseBusiness size={17}/></span></div><div className="metric-value">1 <small>espace</small></div><div className="metric-foot">Ton aventure commence ici</div></article>
        <article className="metric-card"><div className="metric-top"><span>Dépenses suivies</span><span className="metric-icon blue"><CreditCard size={17}/></span></div><div className="metric-value">{expenses.toFixed(2).replace('.', ',')} €</div><div className="metric-foot">Total des dépenses enregistrées</div></article>
        <article className="metric-card"><div className="metric-top"><span>Revenus suivis</span><span className="metric-icon green"><TrendingUp size={17}/></span></div><div className="metric-value">{income.toFixed(2).replace('.', ',')} €</div><div className="metric-foot">Total des revenus enregistrés</div></article>
        <article className="metric-card"><div className="metric-top"><span>Solde estimé</span><span className="metric-icon orange"><Activity size={17}/></span></div><div className="metric-value">{balance.toFixed(2).replace('.', ',')} €</div><div className="metric-foot">Revenus moins dépenses</div></article>
      </section>
      <section className="section-heading"><div><div className="eyebrow">COMMENCE MAINTENANT</div><h2>Que veux-tu accomplir ?</h2><p>Choisis une première étape. Tu pourras tout modifier ensuite.</p></div><button className="text-link" onClick={() => go('Trouver une idée')}>Voir le parcours complet <ArrowUpRight size={15}/></button></section>
      <section className="action-grid">{quickActions.map(({icon:Icon,title,desc,tone,target},i)=><button className="action-card" key={title} onClick={()=>go(target)}><div className={'action-icon '+tone}><Icon size={21}/></div><div className="action-number">0{i+1}</div><h3>{title}</h3><p>{desc}</p><span className="card-link">Commencer <ArrowUpRight size={15}/></span></button>)}</section>
      <section className="bottom-grid">
        <article className="panel assistant-panel"><div className="panel-heading"><div className="panel-icon"><WandSparkles size={18}/></div><div><h3>Parle à NEXUS</h3><p>Décris ce que tu souhaites construire.</p></div><span className="beta-tag">GUIDÉ</span></div>
          <div className="guide-note"><Sparkles size={13}/> Assistant guidé — première version sans connexion à un modèle IA.</div>
          <div className="chat-messages" aria-live="polite">{messages.map((m,i)=><div className={'chat-message '+m.role} key={i}><b>{m.role==='assistant'?'NEXUS':'Toi'}</b><p>{m.text}</p></div>)}</div>
          <form className="prompt-box" onSubmit={submitPrompt}><textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Écris ta réponse ici..." rows={2}/><div className="prompt-footer"><span><Sparkles size={13}/> {assistantStep>=4?'Brief terminé':'Étape '+(assistantStep+1)+' sur 4'}</span><div className="assistant-actions">{assistantStep>=4&&<button type="button" className="restart-button" onClick={restartAssistant}>Recommencer</button>}<button type="submit" disabled={!prompt.trim()||assistantStep>=4}>Envoyer <ArrowUpRight size={15}/></button></div></div></form>
        </article>
        <article className="panel progress-panel"><div className="panel-heading"><div className="panel-icon blue-panel"><FileText size={18}/></div><div><h3>Ton parcours</h3><p>Les fondations de ton futur projet.</p></div></div><div className="empty-progress"><div className="empty-icon"><Target size={22}/></div><div><b>Ton espace est prêt</b><p>Choisis une rubrique dans le menu pour avancer sur ton projet.</p></div></div><button className="new-project" onClick={()=>go('Trouver une idée')}><Plus size={16}/> Commencer mon projet</button></article>
      </section>
    </>
  );

  const Ideas = () => (
    <>
      <PageTitle eyebrow="EXPLORATION • 01" title="Trouver une idée de business" subtitle="Fais émerger des pistes adaptées à tes centres d’intérêt et à tes compétences."/>
      <div className="work-grid">
        <section className="panel form-panel"><h3><Lightbulb size={18}/> Construis ton point de départ</h3><label>Quel type de projet t'intéresse ?</label><div className="choice-row">{['En ligne','Local','Application','Service'].map(v=><button key={v} className={'choice '+(ideaType===v?'selected':'')} onClick={()=>setIdeaType(v)}>{v}</button>)}</div><label htmlFor="interest">Tes centres d’intérêt</label><textarea id="interest" className="field" rows="3" value={ideaInterest} onChange={e=>setIdeaInterest(e.target.value)} placeholder="Ex. jeux vidéo, sport, technologie, animaux..."/><label htmlFor="skills">Tes compétences ou ce que tu aimes faire</label><textarea id="skills" className="field" rows="3" value={ideaSkills} onChange={e=>setIdeaSkills(e.target.value)} placeholder="Ex. montage vidéo, programmation, dessin, organisation..."/><button className="primary-button" onClick={()=>setIdeaResults(true)} disabled={!ideaInterest.trim()&&!ideaSkills.trim()}><Sparkles size={16}/> Générer des pistes</button></section>
        <section className="panel"><h3><Compass size={18}/> Comment choisir une bonne idée ?</h3><div className="tip-list"><div><b>1. Un vrai besoin</b><p>Repère une difficulté que des personnes rencontrent régulièrement.</p></div><div><b>2. Des clients identifiables</b><p>Définis précisément qui pourrait utiliser ou acheter ta solution.</p></div><div><b>3. Un test peu coûteux</b><p>Avant de construire beaucoup, vérifie l’intérêt avec une maquette ou des échanges.</p></div></div></section>
      </div>
      {ideaResults&&<section className="panel results-panel"><div className="panel-heading"><div className="panel-icon"><Sparkles size={18}/></div><div><h3>3 pistes à explorer</h3><p>Suggestions de réflexion, à valider auprès de vrais utilisateurs.</p></div></div><div className="idea-cards">{[{n:'01',t:'Une ressource spécialisée',d:'Créer des guides, modèles ou contenus utiles autour de '+ideaInterest+'.',b:'Démarrage léger'},{n:'02',t:'Un service à la demande',d:'Proposer une aide ou un service lié à '+(ideaSkills||ideaInterest)+'.',b:'Tester avec 3 personnes'},{n:'03',t:'Un outil simple',d:'Imaginer un petit outil numérique qui résout un problème concret pour une communauté.',b:'Prototype rapide'}].map(x=><article className="idea-card" key={x.n}><span>{x.n}</span><h4>{x.t}</h4><p>{x.d}</p><small>{x.b}</small></article>)}</div><p className="disclaimer">Ces pistes sont générées à partir de tes réponses. Elles ne prouvent pas qu’un marché existe ni qu’une idée sera rentable.</p></section>}
    </>
  );

  const Market = () => (
    <>
      <PageTitle eyebrow="VALIDATION • 02" title="Étude de marché" subtitle="Prépare une étude structurée. Les réponses et données doivent être vérifiées sur le terrain."/>
      <section className="panel form-panel wide-panel"><h3><Search size={18}/> Définis ton marché</h3><div className="two-fields"><div><label htmlFor="marketName">Ton idée ou ton produit</label><input id="marketName" className="field" value={marketName} onChange={e=>setMarketName(e.target.value)} placeholder="Ex. application de révision"/></div><div><label htmlFor="marketCustomer">Clients visés</label><input id="marketCustomer" className="field" value={marketCustomer} onChange={e=>setMarketCustomer(e.target.value)} placeholder="Ex. lycéens, indépendants..."/></div></div><label htmlFor="marketProblem">Quel problème résous-tu ?</label><textarea id="marketProblem" className="field" rows="2" value={marketProblem} onChange={e=>setMarketProblem(e.target.value)} placeholder="Décris le besoin auquel tu réponds..."/><label htmlFor="marketNotes">Concurrents, prix ou observations (facultatif)</label><textarea id="marketNotes" className="field" rows="3" value={marketNotes} onChange={e=>setMarketNotes(e.target.value)} placeholder="Ajoute les informations que tu as déjà trouvées..."/></section>
      <div className="work-grid market-grid"><section className="panel"><h3><CheckCircle2 size={18}/> Ta checklist d’étude</h3>{['Interroger au moins 5 clients potentiels','Identifier 3 solutions ou concurrents existants','Comparer les prix et les fonctionnalités','Vérifier les avis et les frustrations des clients','Estimer les coûts et le prix acceptable','Faire un petit test avant d’investir'].map((s,i)=><label className="check-line" key={s}><input type="checkbox"/> <span>{s}</span></label>)}</section><section className="panel"><h3><FileText size={18}/> Fiche de synthèse</h3><div className="summary-lines"><p><b>Projet :</b> {marketName||'À compléter'}</p><p><b>Clients :</b> {marketCustomer||'À compléter'}</p><p><b>Problème :</b> {marketProblem||'À compléter'}</p><p><b>Notes :</b> {marketNotes||'Aucune note ajoutée'}</p></div><button className="secondary-button" onClick={()=>navigator.clipboard?.writeText('Projet : '+marketName+'\nClients : '+marketCustomer+'\nProblème : '+marketProblem+'\nNotes : '+marketNotes)}><Copy size={15}/> Copier ma synthèse</button></section></div>
      <p className="disclaimer">NEXUS ne récupère pas automatiquement des statistiques de marché dans cette version. N’invente pas de chiffres : consigne ici des informations réellement vérifiées.</p>
    </>
  );

  const generateAndDownloadSite = () => {
    const description = sitePrompt.trim();
    if (!description) return;
    const name = siteName.trim() || 'Mon projet';
    const html = buildWebsiteHtml(name, description, siteColor);
    setSiteDescription(description);
    setGeneratedSiteHtml(html);
    setSiteGenerated(true);
  };

  const downloadWebsite = () => {
    if (!generatedSiteHtml) return;
    const blob = new Blob([generatedSiteHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = (siteName.trim() || 'mon-site').toLowerCase().replace(/[^a-z0-9-]+/g, '-') + '.html';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const Website = () => (
    <>
      <PageTitle eyebrow="CRÉATION AUTOMATIQUE" title="Crée ton site en un clic" subtitle="Décris ton activité. NEXUS construit une première page adaptée à ton projet."/>
      <div className="work-grid website-grid">
        <section className="panel form-panel">
          <h3><WandSparkles size={18}/> Ton site, simplement</h3>
          <label htmlFor="sitePrompt">Décris ton activité en quelques mots</label>
          <textarea id="sitePrompt" className="field" rows="4" value={sitePrompt} onChange={e=>{setSitePrompt(e.target.value);setSiteGenerated(false);setGeneratedSiteHtml('')}} placeholder="Ex. Une marque de vêtements streetwear avec des collections modernes et accessibles..."/>
          <label htmlFor="siteName">Nom de ton projet <span className="muted">(facultatif)</span></label>
          <input id="siteName" className="field" value={siteName} onChange={e=>{setSiteName(e.target.value);setSiteGenerated(false);setGeneratedSiteHtml('')}} placeholder="Ex. Nova Studio"/>
          <label>Couleur du site</label>
          <div className="color-row"><input type="color" value={siteColor} onChange={e=>{setSiteColor(e.target.value);setSiteGenerated(false);setGeneratedSiteHtml('')}}/><span>{siteColor.toUpperCase()}</span></div>
          <button className="primary-button" onClick={generateAndDownloadSite} disabled={!sitePrompt.trim()}><WandSparkles size={16}/> Générer mon site</button>
          {siteGenerated&&<button className="secondary-button" onClick={downloadWebsite}><Download size={15}/> Télécharger le site</button>}
          <p className="disclaimer">NEXUS adapte la structure et les textes au type d’activité décrit. Le téléchargement fournit un vrai fichier de site web. La publication en ligne viendra ensuite.</p>
        </section>
        <section className="panel preview-panel">
          <div className="preview-toolbar"><span><Eye size={15}/> APERÇU DU SITE</span><span className="preview-dot">{siteGenerated?'● Généré':'● Aperçu'}</span></div>
          <div className="site-preview">
            <div className="site-nav"><b>{siteName.trim()||'Nom de ton projet'}</b><span>Accueil　 Offre　 Contact</span></div>
            <div className="site-hero" style={{'--site-accent':siteColor}}><span>{sitePrompt?'TON PROJET':'APERÇU'}</span><h2>{siteName.trim()||'Ton projet'}</h2><p>{sitePrompt||'Ta description apparaîtra ici dès que tu auras présenté ton activité.'}</p><a className="site-preview-link" href="#site-feature">Découvrir</a></div>
            <div className="site-feature" id="site-feature"><h3>{sitePrompt?'Une offre pensée autour de ton idée':'Les points forts de ton projet'}</h3><p>{sitePrompt||'Les informations de ton site apparaîtront ici.'}</p></div>
          </div>
          <div className="preview-footer">{siteGenerated?'Ton site est prêt à être téléchargé.':'La prévisualisation évolue pendant que tu écris.'}</div>
        </section>
      </div>
    </>
  );
  const Marketing = () => (
    <>
      <PageTitle eyebrow="ACQUISITION • 04" title="Marketing" subtitle="Prépare une stratégie simple pour faire connaître ton projet sans dépenser inutilement."/>
      <div className="work-grid"><section className="panel form-panel"><h3><Megaphone size={18}/> Ton plan de communication</h3><label htmlFor="marketingGoal">Ton objectif</label><select id="marketingGoal" className="field" value={marketingGoal} onChange={e=>setMarketingGoal(e.target.value)}>{['Trouver mes premiers clients','Faire connaître ma marque','Obtenir des inscriptions','Présenter un nouveau produit'].map(v=><option key={v}>{v}</option>)}</select><label htmlFor="marketingAudience">À qui souhaites-tu t’adresser ?</label><input id="marketingAudience" className="field" value={marketingAudience} onChange={e=>setMarketingAudience(e.target.value)} placeholder="Ex. étudiants, petites entreprises..."/><label htmlFor="marketingChannel">Canal principal</label><select id="marketingChannel" className="field" value={marketingChannel} onChange={e=>setMarketingChannel(e.target.value)}>{['Réseaux sociaux','Site web / référencement','Email','Partenariats','Événements locaux'].map(v=><option key={v}>{v}</option>)}</select><button className="primary-button" onClick={()=>setMarketingPlan(true)}><Sparkles size={16}/> Créer mon mini-plan</button></section>
      <section className="panel"><h3><BarChart3 size={18}/> Les bases du marketing</h3><div className="tip-list"><div><b>Message clair</b><p>Explique en une phrase à qui tu t’adresses et ce que tu améliores.</p></div><div><b>Preuve concrète</b><p>Montre une démonstration, un exemple ou un retour authentique.</p></div><div><b>Régularité</b><p>Publie utilement et observe les réactions plutôt que de chercher le volume.</p></div></div></section></div>
      {marketingPlan&&<section className="panel results-panel"><h3><Rocket size={18}/> Ton plan de départ</h3><div className="plan-steps">{[['1','Définir le message','Écris une phrase qui explique le bénéfice principal.'],['2','Créer 3 contenus','Prépare une présentation, une démonstration et une réponse à une question fréquente.'],['3','Diffuser et écouter','Utilise '+marketingChannel+' pour toucher '+(marketingAudience||'ton public cible')+'.'],['4','Mesurer','Note les vues utiles, les demandes et les retours reçus.']].map(x=><div className="plan-step" key={x[0]}><span>{x[0]}</span><div><b>{x[1]}</b><p>{x[2]}</p></div></div>)}</div><p className="disclaimer">Objectif : {marketingGoal}. Ce plan est un point de départ, pas une garantie de résultats.</p></section>}
    </>
  );

  const Finance = () => (
    <>
      <PageTitle eyebrow="PILOTAGE • 05" title="Finances" subtitle="Enregistre tes revenus et dépenses pour suivre simplement le budget de ton projet."/>
      <div className="finance-stats"><article className="metric-card"><span>Revenus</span><strong className="positive">{income.toFixed(2).replace('.',',')} €</strong></article><article className="metric-card"><span>Dépenses</span><strong>{expenses.toFixed(2).replace('.',',')} €</strong></article><article className="metric-card"><span>Solde</span><strong className={balance>=0?'positive':'negative'}>{balance.toFixed(2).replace('.',',')} €</strong></article></div>
      <div className="work-grid"><section className="panel form-panel"><h3><Plus size={18}/> Ajouter une opération</h3><form onSubmit={addTransaction}><label>Type</label><div className="choice-row"><button type="button" className={'choice '+(transactionType==='Dépense'?'selected':'')} onClick={()=>setTransactionType('Dépense')}>Dépense</button><button type="button" className={'choice '+(transactionType==='Revenu'?'selected':'')} onClick={()=>setTransactionType('Revenu')}>Revenu</button></div><label htmlFor="transactionLabel">Libellé</label><input id="transactionLabel" className="field" value={transactionLabel} onChange={e=>setTransactionLabel(e.target.value)} placeholder="Ex. hébergement, vente..."/><label htmlFor="transactionAmount">Montant en euros</label><input id="transactionAmount" className="field" inputMode="decimal" value={transactionAmount} onChange={e=>setTransactionAmount(e.target.value)} placeholder="Ex. 12,50"/><button className="primary-button" type="submit" disabled={!transactionLabel.trim()||!(Number(String(transactionAmount).replace(',','.'))>0)}>Ajouter à mes finances</button></form></section>
      <section className="panel"><h3><Wallet size={18}/> Historique des opérations</h3>{transactions.length===0?<div className="empty-state"><CreditCard size={25}/><b>Aucune opération enregistrée</b><p>Ajoute une dépense ou un revenu pour commencer ton suivi.</p></div>:<div className="transaction-list">{transactions.map(t=><div className="transaction-row" key={t.id}><div className={'transaction-icon '+(t.type==='Revenu'?'income':'expense')}>{t.type==='Revenu'?<TrendingUp size={16}/>:<CreditCard size={16}/>}</div><div className="transaction-name"><b>{t.label}</b><small>{t.type}</small></div><strong className={t.type==='Revenu'?'positive':'negative'}>{t.type==='Revenu'?'+':'−'}{t.amount.toFixed(2).replace('.',',')} €</strong><button className="icon-btn" aria-label="Supprimer" onClick={()=>setTransactions(items=>items.filter(x=>x.id!==t.id))}><Trash2 size={15}/></button></div>)}</div>}</section></div>
      <p className="disclaimer">Outil de suivi indicatif : il ne remplace pas un compte bancaire, une comptabilité officielle ou un conseil financier. Les données restent dans cette session du navigateur.</p>
    </>
  );

  const SettingsPage = () => (
    <><PageTitle eyebrow="PERSONNALISATION" title="Paramètres" subtitle="Gère les préférences de ton espace NEXUS."/><div className="work-grid settings-grid"><section className="panel settings-menu">{['Général','Apparence','Confidentialité'].map((v,i)=><button key={v} className={settingsTab===v?'selected-setting':''} onClick={()=>setSettingsTab(v)}>{i===0?<Settings size={17}/>:i===1?<Palette size={17}/>:<Lock size={17}/>} {v}</button>)}</section><section className="panel"><h3>{settingsTab}</h3>{settingsTab==='Général'?<><p className="muted">Langue de l’interface</p><div className="setting-value">Français</div><p className="muted">Version de l’application</p><div className="setting-value">NEXUS AI · 0.1.0 (aperçu)</div></>:settingsTab==='Apparence'?<><p className="muted">Thème actuel</p><div className="setting-value">Sombre</div><p className="muted">Couleur d’accent</p><div className="setting-value">Violet</div></>:<><p className="muted">Tes données de travail sont utilisées pour afficher les informations dans cette interface.</p><div className="setting-value">Aucun compte externe connecté</div></>}</section></div></>
  );

  const Support = () => (
    <><PageTitle eyebrow="CENTRE D’AIDE" title="Aide & support" subtitle="Retrouve les réponses aux questions fréquentes sur les fonctionnalités de NEXUS."/><div className="work-grid"><section className="panel"><h3><HelpCircle size={18}/> Questions fréquentes</h3><div className="faq-item"><b>Est-ce que NEXUS réalise une vraie étude de marché ?</b><p>Pas automatiquement pour le moment. L’espace t’aide à organiser tes recherches, mais tu dois vérifier les informations auprès de sources réelles.</p></div><div className="faq-item"><b>Mon site est-il publié sur Internet ?</b><p>Non. Le créateur actuel prépare une maquette et son contenu. La publication nécessitera un hébergement et un nom de domaine.</p></div><div className="faq-item"><b>Mes finances sont-elles synchronisées avec ma banque ?</b><p>Non. Les opérations sont saisies manuellement dans cette version.</p></div></section><section className="panel form-panel"><h3><Mail size={18}/> Contacter le support</h3><label htmlFor="supportQuestion">Décris le problème rencontré</label><textarea id="supportQuestion" className="field" rows="5" value={supportQuestion} onChange={e=>{setSupportQuestion(e.target.value);setSupportSent(false)}} placeholder="Explique ce qui ne fonctionne pas..."/><button className="primary-button" disabled={!supportQuestion.trim()} onClick={()=>setSupportSent(true)}>Préparer ma demande</button>{supportSent&&<p className="success-note"><CheckCircle2 size={16}/> Ta demande est préparée. Tu peux copier le texte pour nous le transmettre : {supportQuestion}</p>}</section></div></>
  );

  const Account = () => (
    <><PageTitle eyebrow="ESPACE PERSONNEL" title="Mon compte" subtitle="Les informations de ton profil et de ton espace de travail."/><div className="work-grid"><section className="panel account-card"><div className="large-avatar">A</div><h3>Mon compte NEXUS</h3><p className="muted">Profil local · Aucun compte connecté</p><div className="setting-value"><User size={16}/> Nom affiché : Utilisateur</div><div className="setting-value"><CreditCard size={16}/> Offre : Starter / aperçu gratuit</div></section><section className="panel"><h3><Blocks size={18}/> Mon espace de travail</h3><div className="setting-value">NEXUS Workspace</div><p className="muted">Ton espace rassemble tes idées, ton étude, ta maquette de site, ton marketing et ton suivi financier.</p><button className="secondary-button" onClick={()=>go('Vue d’ensemble')}>Retour à la vue d’ensemble <ArrowUpRight size={15}/></button></section></div></>
  );

  const Discover = () => (
    <><PageTitle eyebrow="DÉCOUVRIR NEXUS" title="Construis sans limites" subtitle="Découvre le parcours complet pour transformer une idée en projet concret."/><div className="discover-grid">{[{icon:Lightbulb,title:'Trouver une idée',desc:'Identifier un besoin et imaginer une solution.',page:'Trouver une idée'},{icon:Compass,title:'Étudier le marché',desc:'Comprendre les clients et les solutions existantes.',page:'Étude de marché'},{icon:Globe2,title:'Créer un site',desc:'Préparer une première maquette de ton site.',page:'Créer mon site'},{icon:Megaphone,title:'Faire connaître ton projet',desc:'Organiser tes premiers contenus marketing.',page:'Marketing'},{icon:Wallet,title:'Suivre ton budget',desc:'Garder une trace des revenus et dépenses.',page:'Finances'}].map(({icon:Icon,title,desc,page})=><button className="discover-card" key={page} onClick={()=>go(page)}><Icon size={22}/><h3>{title}</h3><p>{desc}</p><span>Ouvrir <ArrowUpRight size={15}/></span></button>)}</div></>
  );

  const renderPage = () => {
    switch(active) {
      case 'Trouver une idée': return Ideas();
      case 'Étude de marché': return Market();
      case 'Créer mon site': return Website();
      case 'Marketing': return Marketing();
      case 'Finances': return Finance();
      case 'Paramètres': return SettingsPage();
      case 'Aide & support': return Support();
      case 'Mon compte': return Account();
      case 'Découvrir': return Discover();
      default: return Dashboard();
    }
  };

  return <div className="app-shell">
    <aside className={'sidebar '+(mobileNav?'sidebar-open':'')}>
      <div className="brand"><div className="brand-mark"><Blocks size={21} strokeWidth={2.2}/></div><div><span className="brand-name">NEXUS<span>AI</span></span><small>YOUR BUSINESS, REIMAGINED</small></div><button className="icon-btn mobile-close" onClick={()=>setMobileNav(false)} aria-label="Fermer le menu"><X size={19}/></button></div>
      <div className="workspace-label">WORKSPACE</div>
      <button className="workspace-switch" onClick={()=>setWorkspaceOpen(v=>!v)}><div className="workspace-avatar">N</div><span><b>Mon espace</b><small>Offre gratuite</small></span><ChevronDown size={15}/></button>
      {workspaceOpen&&<div className="workspace-pop"><b>NEXUS Workspace</b><p>Espace personnel actif</p><button onClick={()=>go('Vue d’ensemble')}>Ouvrir la vue d’ensemble</button></div>}
      <div className="nav-label">MENU PRINCIPAL</div><nav>{nav.map(({label,icon:Icon})=><button key={label} className={'nav-item '+(active===label?'active':'')} onClick={()=>go(label)}><Icon size={18}/><span>{label}</span></button>)}</nav>
      <div className="sidebar-bottom"><div className="upgrade-card"><div className="upgrade-icon"><Sparkles size={17}/></div><b>Construis sans limites</b><p>Commence gratuitement. Fais évoluer ton projet à ton rythme.</p><button onClick={()=>go('Découvrir')}>Découvrir <ArrowUpRight size={14}/></button></div><button className={'nav-item '+(active==='Paramètres'?'active':'')} onClick={()=>go('Paramètres')}><Settings size={18}/><span>Paramètres</span></button><button className={'nav-item '+(active==='Aide & support'?'active':'')} onClick={()=>go('Aide & support')}><CircleHelp size={18}/><span>Aide & support</span></button>
      <button className="profile-row" onClick={()=>go('Mon compte')}><div className="profile-avatar">A</div><div><b>Mon compte</b><small>Plan Starter</small></div><ChevronDown size={15}/></button></div>
    </aside>
    {mobileNav&&<button className="backdrop" aria-label="Fermer le menu" onClick={()=>setMobileNav(false)}/>}
    <main className="main-area">{Header()}<div className="content">{renderPage()}<footer>© 2026 NEXUS AI <span>•</span> Conçu pour transformer les idées en projets concrets.</footer></div></main>
  </div>;
}

export default App;
