import React, { useState } from 'react';
import {
  Activity, ArrowUpRight, Bell, Blocks, Bot, BriefcaseBusiness,
  ChartNoAxesCombined, ChevronDown, CircleHelp, Compass, CreditCard,
  FileText, Globe2, LayoutDashboard, Lightbulb, Menu, Plus,
  Search, Settings, ShieldCheck, Sparkles, Target, TrendingUp,
  WandSparkles, X
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
  { icon: Lightbulb, title: 'Trouver une opportunité', desc: 'Explore des besoins et des idées de business.', tone: 'violet' },
  { icon: Globe2, title: 'Créer un site web', desc: 'Construis une première version de ton site.', tone: 'blue' },
  { icon: ChartNoAxesCombined, title: 'Suivre mes finances', desc: 'Organise tes revenus et tes dépenses.', tone: 'green' },
];

function App() {
  const [active, setActive] = useState('Vue d’ensemble');
  const [mobileNav, setMobileNav] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [notice, setNotice] = useState('Bienvenue dans ton espace de création.');

  const chooseAction = (title) => {
    setActive(title);
    setNotice(title + ' : cet espace sera construit avec toi étape par étape.');
  };

  const submitPrompt = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setNotice('Ton objectif a été noté : « ' + prompt.trim() + ' ». La connexion à un moteur IA sera ajoutée dans une prochaine étape.');
    setPrompt('');
  };

  return (
    <div className="app-shell">
      <aside className={'sidebar ' + (mobileNav ? 'sidebar-open' : '')}>
        <div className="brand">
          <div className="brand-mark"><Blocks size={21} strokeWidth={2.2} /></div>
          <div><span className="brand-name">NEXUS<span>AI</span></span><small>YOUR BUSINESS, REIMAGINED</small></div>
          <button className="icon-btn mobile-close" onClick={() => setMobileNav(false)} aria-label="Fermer le menu"><X size={19}/></button>
        </div>
        <div className="workspace-label">WORKSPACE</div>
        <button className="workspace-switch"><div className="workspace-avatar">N</div><span><b>Mon espace</b><small>Offre gratuite</small></span><ChevronDown size={15}/></button>
        <div className="nav-label">MENU PRINCIPAL</div>
        <nav>
          {nav.map(({ label, icon: Icon }) => (
            <button key={label} className={'nav-item ' + (active === label ? 'active' : '')} onClick={() => { setActive(label); setMobileNav(false); }}>
              <Icon size={18}/><span>{label}</span>{label === 'Marketing' && <span className="soon-dot"/>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-icon"><Sparkles size={17}/></div>
            <b>Construis sans limites</b>
            <p>Commence gratuitement. Fais évoluer ton projet à ton rythme.</p>
            <button onClick={() => setNotice('Tu peux commencer gratuitement : aucune formule payante n’est nécessaire pour cette première étape.')}>Découvrir <ArrowUpRight size={14}/></button>
          </div>
          <button className="nav-item"><Settings size={18}/><span>Paramètres</span></button>
          <button className="nav-item"><CircleHelp size={18}/><span>Aide & support</span></button>
          <div className="profile-row"><div className="profile-avatar">A</div><div><b>Mon compte</b><small>Plan Starter</small></div><ChevronDown size={15}/></div>
        </div>
      </aside>

      {mobileNav && <button className="backdrop" aria-label="Fermer le menu" onClick={() => setMobileNav(false)}/>}

      <main className="main-area">
        <header className="topbar">
          <button className="icon-btn mobile-menu" onClick={() => setMobileNav(true)} aria-label="Ouvrir le menu"><Menu size={20}/></button>
          <div className="breadcrumbs">Workspace <span>/</span> <b>{active}</b></div>
          <div className="top-actions">
            <div className="status-pill"><span/> Tous les systèmes opérationnels</div>
            <button className="icon-btn notification" aria-label="Notifications" onClick={() => setNotice('Tu es à jour : aucune notification pour le moment.')}><Bell size={18}/></button>
            <div className="top-avatar">A</div>
          </div>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div>
              <div className="eyebrow"><span className="eyebrow-line"/> TON CENTRE DE COMMANDEMENT</div>
              <h1>Fais passer tes idées<br/><span>au niveau supérieur.</span></h1>
              <p className="welcome-copy">De la première idée au lancement : construis ton projet, une étape à la fois.</p>
            </div>
            <div className="welcome-art" aria-hidden="true">
              <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
              <div className="core"><Bot size={39}/></div>
              <span className="orbit-chip chip-one"><Sparkles size={15}/></span>
              <span className="orbit-chip chip-two"><TrendingUp size={15}/></span>
              <span className="orbit-chip chip-three"><Target size={15}/></span>
            </div>
          </section>

          <section className="notice-strip"><ShieldCheck size={17}/><span>{notice}</span><button onClick={() => setNotice('Bienvenue dans ton espace de création.')} aria-label="Fermer"><X size={15}/></button></section>

          <section className="metrics-grid">
            <article className="metric-card"><div className="metric-top"><span>Projets actifs</span><span className="metric-icon purple"><BriefcaseBusiness size={17}/></span></div><div className="metric-value">0 <small>projet</small></div><div className="metric-foot">Ton aventure commence ici</div></article>
            <article className="metric-card"><div className="metric-top"><span>Budget investi</span><span className="metric-icon blue"><CreditCard size={17}/></span></div><div className="metric-value">0,00 €</div><div className="metric-foot">Aucune dépense enregistrée</div></article>
            <article className="metric-card"><div className="metric-top"><span>Revenus suivis</span><span className="metric-icon green"><TrendingUp size={17}/></span></div><div className="metric-value">0,00 €</div><div className="metric-foot">Ajoute tes premiers revenus</div></article>
            <article className="metric-card"><div className="metric-top"><span>Progression</span><span className="metric-icon orange"><Activity size={17}/></span></div><div className="metric-value">0<small>%</small></div><div className="progress-track"><span/></div><div className="metric-foot">Aucune étape terminée</div></article>
          </section>

          <section className="section-heading"><div><div className="eyebrow">COMMENCE MAINTENANT</div><h2>Que veux-tu accomplir ?</h2><p>Choisis une première étape. Tu pourras tout modifier ensuite.</p></div><button className="text-link" onClick={() => chooseAction('Trouver une idée')}>Voir le parcours complet <ArrowUpRight size={15}/></button></section>

          <section className="action-grid">
            {quickActions.map(({ icon: Icon, title, desc, tone }, i) => (
              <button className="action-card" key={title} onClick={() => chooseAction(title)}>
                <div className={'action-icon ' + tone}><Icon size={21}/></div>
                <div className="action-number">0{i + 1}</div>
                <h3>{title}</h3><p>{desc}</p>
                <span className="card-link">Commencer <ArrowUpRight size={15}/></span>
              </button>
            ))}
          </section>

          <section className="bottom-grid">
            <article className="panel assistant-panel">
              <div className="panel-heading"><div className="panel-icon"><WandSparkles size={18}/></div><div><h3>Parle à NEXUS</h3><p>Décris ce que tu souhaites construire.</p></div><span className="beta-tag">APERÇU</span></div>
              <form className="prompt-box" onSubmit={submitPrompt}>
                <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Ex. : Je veux lancer un business en ligne avec 0 € de budget..." rows={2}/>
                <div className="prompt-footer"><span><Sparkles size={13}/> Assistant IA — connexion à venir</span><button type="submit" disabled={!prompt.trim()}>Envoyer <ArrowUpRight size={15}/></button></div>
              </form>
            </article>
            <article className="panel progress-panel">
              <div className="panel-heading"><div className="panel-icon blue-panel"><FileText size={18}/></div><div><h3>Ton parcours</h3><p>Les fondations de ton futur projet.</p></div></div>
              <div className="empty-progress"><div className="empty-icon"><Target size={22}/></div><div><b>Aucun projet pour le moment</b><p>Crée ton premier projet pour voir apparaître tes étapes ici.</p></div></div>
              <button className="new-project" onClick={() => chooseAction('Nouveau projet')}><Plus size={16}/> Créer mon premier projet</button>
            </article>
          </section>
          <footer>© 2026 NEXUS AI <span>•</span> Conçu pour transformer les idées en projets concrets.</footer>
        </div>
      </main>
    </div>
  );
}

export default App;