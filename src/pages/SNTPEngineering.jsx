import React, { useEffect } from 'react';
import './SNTPEngineering.css';

const SNTPEngineering = () => {
  // Images - À remplacer par vos chemins réels
  const logoSntp = 'https://via.placeholder.com/200x80/C1121F/ffffff?text=SNTP+ENGINEERING';
  const heroImage = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80';
  const engineerImage = '/images/engineers-team.jpg';
  const teamImage = 'https://via.placeholder.com/600x400/1B263B/ffffff?text=Team';

  // Icônes placeholder
  const iconConception = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon1';
  const iconRealisation = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon2';
  const iconRoutiere = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon3';
  const iconFerroviaire = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon4';
  const iconOuvrages = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon5';
  const iconAeroportuaire = 'https://via.placeholder.com/70x70/C1121F/ffffff?text=Icon6';

  useEffect(() => {
    // Animation au scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.SNTPEngineering-fade-in-section');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleMapClick = () => {
    window.open('https://maps.app.goo.gl/dhqcMh8Gc3VEP9FM7', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="SNTPEngineering-page">
      {/* ==================== HERO SECTION ==================== */}
      <section className="SNTPEngineering-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="SNTPEngineering-hero-overlay"></div>
        <div className="SNTPEngineering-hero-content">
          <div className="SNTPEngineering-hero-logo">
            <img src={logoSntp} alt="SNTP Engineering Logo" />
          </div>
          <h1 className="SNTPEngineering-hero-title">SNTP ENGINEERING</h1>
          <p className="SNTPEngineering-hero-subtitle">
            <span className="highlight-text">EXPERTISE INTÉGRÉE,</span> SOLUTIONS PRÊTES POUR L'AVENIR
          </p>
          <p className="SNTPEngineering-hero-description">
            Dirigée par une équipe de professionnels chevronnés et expérimentés, SNTP Engineering incarne notre engagement envers l'excellence en ingénierie. Cette unité stratégique renforce notre capacité à concevoir et à livrer des infrastructures de classe mondiale qui façonnent l'avenir de l'Algérie.
          </p>
        </div>
      </section>

      

      {/* ==================== NOTRE EXPERTISE - SECTION MODERNISÉE ==================== */}
<section className="SNTPEngineering-expertise-modern-section SNTPEngineering-fade-in-section">
  <div className="SNTPEngineering-container">
    {/* Header */}
    <div className="SNTPEngineering-expertise-modern-header">
      <h2 className="SNTPEngineering-expertise-modern-title">NOTRE EXPERTISE</h2>
      <div className="SNTPEngineering-expertise-modern-underline"></div>
    </div>

    {/* Conception & Ingénierie - Section Hero */}
    <div className="SNTPEngineering-expertise-hero">
      <div className="SNTPEngineering-expertise-hero-badge">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 10 12 6.16-1.26 10-6.45 10-12V7l-10-5z"/>
        </svg>
      </div>
      <h3 className="SNTPEngineering-expertise-hero-title">Conception & Ingénierie</h3>
      <div className="SNTPEngineering-expertise-hero-grid">
        <div className="SNTPEngineering-expertise-hero-item">
          <div className="SNTPEngineering-expertise-hero-dot"></div>
          <span>Solutions techniques de pointe</span>
        </div>
        <div className="SNTPEngineering-expertise-hero-item">
          <div className="SNTPEngineering-expertise-hero-dot"></div>
          <span>Optimisation de la valeur des projets</span>
        </div>
        <div className="SNTPEngineering-expertise-hero-item">
          <div className="SNTPEngineering-expertise-hero-dot"></div>
          <span>Méthodologies d'ingénierie avancées</span>
        </div>
        <div className="SNTPEngineering-expertise-hero-item">
          <div className="SNTPEngineering-expertise-hero-dot"></div>
          <span>Capacités de modélisation de nouvelle génération</span>
        </div>
      </div>
    </div>

    {/* Compétences Clés - Titre */}
    <div className="SNTPEngineering-expertise-skills-header">
      <h3 className="SNTPEngineering-expertise-skills-title">Compétences Clés</h3>
      <div className="SNTPEngineering-expertise-skills-line"></div>
    </div>

    {/* Grille des compétences */}
    <div className="SNTPEngineering-expertise-skills-grid">
      {/* Card 1 */}
      <div className="SNTPEngineering-expertise-skill-card">
        <div className="SNTPEngineering-expertise-skill-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
          </svg>
        </div>
        <ul className="SNTPEngineering-expertise-skill-list">
          <li>Infrastructures routières et de transport</li>
          <li>Ingénierie des structures complexes</li>
          <li>Systèmes et infrastructures ferroviaires</li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="SNTPEngineering-expertise-skill-card">
        <div className="SNTPEngineering-expertise-skill-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v-2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19z"/>
          </svg>
        </div>
        <ul className="SNTPEngineering-expertise-skill-list">
          <li>Infrastructures portuaires et maritimes</li>
          <li>Développement d'infrastructures aéroportuaires</li>
          <li>Ingénierie hydraulique et environnementale</li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="SNTPEngineering-expertise-skill-card">
        <div className="SNTPEngineering-expertise-skill-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
          </svg>
        </div>
        <ul className="SNTPEngineering-expertise-skill-list">
          <li>Complexes industriels et logistiques</li>
          <li>Infrastructures urbaines et réseaux divers</li>
          <li>Solutions environnementales durables</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* ==================== ÉQUIPE HAUTEMENT QUALIFIÉE ==================== */}
<section className="SNTPEngineering-team-modern-section SNTPEngineering-fade-in-section">
  <div className="SNTPEngineering-container">
    {/* Header */}
    <div className="SNTPEngineering-team-modern-header">
      <div className="SNTPEngineering-team-modern-badge">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      </div>
      <h2 className="SNTPEngineering-team-modern-title">ÉQUIPE HAUTEMENT QUALIFIÉE</h2>
      <div className="SNTPEngineering-team-modern-underline"></div>
      <p className="SNTPEngineering-team-modern-subtitle">
        Des professionnels d'excellence au service de vos ambitions
      </p>
    </div>

    {/* Grille des membres d'équipe */}
    <div className="SNTPEngineering-team-modern-grid">
      {/* Card 1 */}
      <div className="SNTPEngineering-team-modern-card">
        <div className="SNTPEngineering-team-modern-card-inner">
          <div className="SNTPEngineering-team-modern-icon-wrapper">
            <div className="SNTPEngineering-team-modern-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <div className="SNTPEngineering-team-modern-number">01</div>
          </div>
          <h3 className="SNTPEngineering-team-modern-card-title">
            Spécialistes pluridisciplinaires en ingénierie
          </h3>
          <div className="SNTPEngineering-team-modern-card-bar"></div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="SNTPEngineering-team-modern-card">
        <div className="SNTPEngineering-team-modern-card-inner">
          <div className="SNTPEngineering-team-modern-icon-wrapper">
            <div className="SNTPEngineering-team-modern-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
              </svg>
            </div>
            <div className="SNTPEngineering-team-modern-number">02</div>
          </div>
          <h3 className="SNTPEngineering-team-modern-card-title">
            Experts en conception technique et design intégré
          </h3>
          <div className="SNTPEngineering-team-modern-card-bar"></div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="SNTPEngineering-team-modern-card">
        <div className="SNTPEngineering-team-modern-card-inner">
          <div className="SNTPEngineering-team-modern-icon-wrapper">
            <div className="SNTPEngineering-team-modern-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
              </svg>
            </div>
            <div className="SNTPEngineering-team-modern-number">03</div>
          </div>
          <h3 className="SNTPEngineering-team-modern-card-title">
            Maîtres d'œuvre et chefs de projet expérimentés
          </h3>
          <div className="SNTPEngineering-team-modern-card-bar"></div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="SNTPEngineering-team-modern-card">
        <div className="SNTPEngineering-team-modern-card-inner">
          <div className="SNTPEngineering-team-modern-icon-wrapper">
            <div className="SNTPEngineering-team-modern-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="SNTPEngineering-team-modern-number">04</div>
          </div>
          <h3 className="SNTPEngineering-team-modern-card-title">
            Équipe dédiée d'assistance technique avancée
          </h3>
          <div className="SNTPEngineering-team-modern-card-bar"></div>
        </div>
      </div>
    </div>

    
  </div>
</section>
{/* ==================== TECHNOLOGIE & INNOVATION ==================== */}
<section className="SNTPEngineering-tech-section SNTPEngineering-fade-in-section">
  <div className="SNTPEngineering-container">
    {/* Header avec animation */}
    <div className="SNTPEngineering-tech-header">
      <div className="SNTPEngineering-tech-icon-container">
        <div className="SNTPEngineering-tech-icon-orbit">
          <div className="SNTPEngineering-tech-icon-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div className="SNTPEngineering-tech-orbit-dot SNTPEngineering-tech-orbit-dot-1"></div>
          <div className="SNTPEngineering-tech-orbit-dot SNTPEngineering-tech-orbit-dot-2"></div>
          <div className="SNTPEngineering-tech-orbit-dot SNTPEngineering-tech-orbit-dot-3"></div>
        </div>
      </div>
      <h2 className="SNTPEngineering-tech-title">
        TECHNOLOGIE & INNOVATION
      </h2>
      <p className="SNTPEngineering-tech-subtitle">AU CŒUR DE NOTRE APPROCHE</p>
      <div className="SNTPEngineering-tech-underline"></div>
    </div>

    {/* Grille des technologies */}
    <div className="SNTPEngineering-tech-grid">
      {/* Card 1 - Plateformes de conception */}
      <div className="SNTPEngineering-tech-card">
        <div className="SNTPEngineering-tech-card-header">
          <div className="SNTPEngineering-tech-card-number">01</div>
          <div className="SNTPEngineering-tech-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
            </svg>
          </div>
        </div>
        <div className="SNTPEngineering-tech-card-content">
          <h3 className="SNTPEngineering-tech-card-title">
            Plateformes de conception à la pointe de l'industrie
          </h3>
          <div className="SNTPEngineering-tech-card-indicator">
            <div className="SNTPEngineering-tech-card-indicator-fill"></div>
          </div>
        </div>
        <div className="SNTPEngineering-tech-card-glow"></div>
      </div>

      {/* Card 2 - BIM et 3D */}
      <div className="SNTPEngineering-tech-card">
        <div className="SNTPEngineering-tech-card-header">
          <div className="SNTPEngineering-tech-card-number">02</div>
          <div className="SNTPEngineering-tech-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44C3.21 17.21 3 16.88 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15zM5 15.91l6 3.38v-6.71L5 9.21v6.7zm14 0v-6.7l-6 3.37v6.71l6-3.38z"/>
            </svg>
          </div>
        </div>
        <div className="SNTPEngineering-tech-card-content">
          <h3 className="SNTPEngineering-tech-card-title">
            Maîtrise avancée du BIM et de la modélisation 3D
          </h3>
          <div className="SNTPEngineering-tech-card-indicator">
            <div className="SNTPEngineering-tech-card-indicator-fill"></div>
          </div>
        </div>
        <div className="SNTPEngineering-tech-card-glow"></div>
      </div>

      {/* Card 3 - Solutions d'optimisation */}
      <div className="SNTPEngineering-tech-card">
        <div className="SNTPEngineering-tech-card-header">
          <div className="SNTPEngineering-tech-card-number">03</div>
          <div className="SNTPEngineering-tech-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          </div>
        </div>
        <div className="SNTPEngineering-tech-card-content">
          <h3 className="SNTPEngineering-tech-card-title">
            Solutions d'optimisation performantes
          </h3>
          <div className="SNTPEngineering-tech-card-indicator">
            <div className="SNTPEngineering-tech-card-indicator-fill"></div>
          </div>
        </div>
        <div className="SNTPEngineering-tech-card-glow"></div>
      </div>

      {/* Card 4 - Gestion cycle de vie */}
      <div className="SNTPEngineering-tech-card">
        <div className="SNTPEngineering-tech-card-header">
          <div className="SNTPEngineering-tech-card-number">04</div>
          <div className="SNTPEngineering-tech-card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
        <div className="SNTPEngineering-tech-card-content">
          <h3 className="SNTPEngineering-tech-card-title">
            Gestion intégrée du cycle de vie des projets
          </h3>
          <div className="SNTPEngineering-tech-card-indicator">
            <div className="SNTPEngineering-tech-card-indicator-fill"></div>
          </div>
        </div>
        <div className="SNTPEngineering-tech-card-glow"></div>
      </div>
    </div>

   
  </div>
</section>
{/* ==================== PROPOSITION DE VALEUR ==================== */}
<section className="SNTPEngineering-value-prop-section SNTPEngineering-fade-in-section">
  <div className="SNTPEngineering-container">
    {/* Header Principal */}
    <div className="SNTPEngineering-value-prop-header">
      <h2 className="SNTPEngineering-value-prop-main-title">PROPOSITION DE VALEUR</h2>
      <div className="SNTPEngineering-value-prop-main-underline"></div>
    </div>

    {/* Bloc 1: Maîtrise Totale du Cycle de Projet */}
    <div className="SNTPEngineering-value-prop-block SNTPEngineering-value-prop-block-primary">
      <div className="SNTPEngineering-value-prop-block-header">
        <div className="SNTPEngineering-value-prop-block-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
          </svg>
        </div>
        <h3 className="SNTPEngineering-value-prop-block-title">
          MAÎTRISE TOTALE DU CYCLE DE PROJET
        </h3>
      </div>
      <div className="SNTPEngineering-value-prop-cards">
        <div className="SNTPEngineering-value-prop-card">
          <div className="SNTPEngineering-value-prop-card-marker"></div>
          <h4 className="SNTPEngineering-value-prop-card-title">Études préliminaires et faisabilité</h4>
        </div>
        <div className="SNTPEngineering-value-prop-card">
          <div className="SNTPEngineering-value-prop-card-marker"></div>
          <h4 className="SNTPEngineering-value-prop-card-title">Conception détaillée avancée</h4>
        </div>
        <div className="SNTPEngineering-value-prop-card">
          <div className="SNTPEngineering-value-prop-card-marker"></div>
          <h4 className="SNTPEngineering-value-prop-card-title">Suivi et supervision d'exécution</h4>
        </div>
        <div className="SNTPEngineering-value-prop-card">
          <div className="SNTPEngineering-value-prop-card-marker"></div>
          <h4 className="SNTPEngineering-value-prop-card-title">Optimisation continue des performances</h4>
        </div>
        <div className="SNTPEngineering-value-prop-card">
          <div className="SNTPEngineering-value-prop-card-marker"></div>
          <h4 className="SNTPEngineering-value-prop-card-title">Assurance qualité & performance permanente</h4>
        </div>
      </div>
    </div>

    {/* Bloc 2: Performance & Excellence Opérationnelle */}
    <div className="SNTPEngineering-value-prop-block SNTPEngineering-value-prop-block-secondary">
      <div className="SNTPEngineering-value-prop-block-header">
        <div className="SNTPEngineering-value-prop-block-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
          </svg>
        </div>
        <h3 className="SNTPEngineering-value-prop-block-title">
          PERFORMANCE & EXCELLENCE OPÉRATIONNELLE
        </h3>
      </div>
      <div className="SNTPEngineering-value-prop-grid">
        <div className="SNTPEngineering-value-prop-item">
          <div className="SNTPEngineering-value-prop-item-number">01</div>
          <div className="SNTPEngineering-value-prop-item-content">
            <h4 className="SNTPEngineering-value-prop-item-title">Cycles de conception accélérés</h4>
            <div className="SNTPEngineering-value-prop-item-line"></div>
          </div>
        </div>
        <div className="SNTPEngineering-value-prop-item">
          <div className="SNTPEngineering-value-prop-item-number">02</div>
          <div className="SNTPEngineering-value-prop-item-content">
            <h4 className="SNTPEngineering-value-prop-item-title">Optimisation des coûts et de l'efficacité</h4>
            <div className="SNTPEngineering-value-prop-item-line"></div>
          </div>
        </div>
        <div className="SNTPEngineering-value-prop-item">
          <div className="SNTPEngineering-value-prop-item-number">03</div>
          <div className="SNTPEngineering-value-prop-item-content">
            <h4 className="SNTPEngineering-value-prop-item-title">Solutions d'ingénierie durable</h4>
            <div className="SNTPEngineering-value-prop-item-line"></div>
          </div>
        </div>
        <div className="SNTPEngineering-value-prop-item">
          <div className="SNTPEngineering-value-prop-item-number">04</div>
          <div className="SNTPEngineering-value-prop-item-content">
            <h4 className="SNTPEngineering-value-prop-item-title">Garantie d'excellence technique</h4>
            <div className="SNTPEngineering-value-prop-item-line"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Bloc 3: Synergie Stratégique */}
    <div className="SNTPEngineering-value-prop-synergy">
      <div className="SNTPEngineering-value-prop-synergy-content">
        <div className="SNTPEngineering-value-prop-synergy-badge">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="SNTPEngineering-value-prop-synergy-text">
          <h3 className="SNTPEngineering-value-prop-synergy-title">SYNERGIE STRATÉGIQUE</h3>
          <p className="SNTPEngineering-value-prop-synergy-intro">
            Notre unité d'ingénierie maximise l'efficacité de SNTP :
          </p>
          <div className="SNTPEngineering-value-prop-synergy-list">
            <div className="SNTPEngineering-value-prop-synergy-item">
              <div className="SNTPEngineering-value-prop-synergy-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <span>Compatibilité totale (100 %) avec les unités de production</span>
            </div>
            <div className="SNTPEngineering-value-prop-synergy-item">
              <div className="SNTPEngineering-value-prop-synergy-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <span>Optimisation de bout en bout des projets</span>
            </div>
            <div className="SNTPEngineering-value-prop-synergy-item">
              <div className="SNTPEngineering-value-prop-synergy-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <span>Synergie renforcée avec les entités opérationnelles</span>
            </div>
          </div>
        </div>
      </div>
      <div className="SNTPEngineering-value-prop-synergy-pattern"></div>
    </div>
  </div>
</section>
{/* ==================== AVANTAGES COMPÉTITIFS MAJEURS ==================== */}
<section className="SNTPEngineering-advantages-section SNTPEngineering-fade-in-section">
  <div className="SNTPEngineering-container">
    {/* Header Principal */}
    <div className="SNTPEngineering-advantages-header">
      <div className="SNTPEngineering-advantages-badge-wrapper">
        <div className="SNTPEngineering-advantages-badge">
          <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="SNTPEngineering-advantages-badge-ring"></div>
      </div>
      <h2 className="SNTPEngineering-advantages-main-title">AVANTAGES COMPÉTITIFS MAJEURS</h2>
      <div className="SNTPEngineering-advantages-main-underline"></div>
    </div>

    {/* Bloc 1: Excellence Intégrée */}
    <div className="SNTPEngineering-advantages-block SNTPEngineering-advantages-block-light">
      <div className="SNTPEngineering-advantages-block-wrapper">
        <div className="SNTPEngineering-advantages-block-content">
          <div className="SNTPEngineering-advantages-block-header">
            <div className="SNTPEngineering-advantages-block-icon-box">
              <div className="SNTPEngineering-advantages-block-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="SNTPEngineering-advantages-block-pulse"></div>
            </div>
            <div className="SNTPEngineering-advantages-block-title-wrapper">
              <h3 className="SNTPEngineering-advantages-block-title">EXCELLENCE INTÉGRÉE</h3>
              <div className="SNTPEngineering-advantages-block-subtitle">Performance & Synergie</div>
            </div>
          </div>

          <div className="SNTPEngineering-advantages-items-list">
            <div className="SNTPEngineering-advantages-list-item">
              <div className="SNTPEngineering-advantages-list-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <div className="SNTPEngineering-advantages-list-content">
                <h4 className="SNTPEngineering-advantages-list-title">Synergie stratégique</h4>
                <p className="SNTPEngineering-advantages-list-text">avec les unités opérationnelles de SNTP</p>
              </div>
            </div>

            <div className="SNTPEngineering-advantages-list-item">
              <div className="SNTPEngineering-advantages-list-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <div className="SNTPEngineering-advantages-list-content">
                <h4 className="SNTPEngineering-advantages-list-title">Optimisation transversale</h4>
                <p className="SNTPEngineering-advantages-list-text">grâce à une collaboration interne fluide</p>
              </div>
            </div>

            <div className="SNTPEngineering-advantages-list-item">
              <div className="SNTPEngineering-advantages-list-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <div className="SNTPEngineering-advantages-list-content">
                <h4 className="SNTPEngineering-advantages-list-title">Intégration directe</h4>
                <p className="SNTPEngineering-advantages-list-text">avec les laboratoires qualité</p>
              </div>
            </div>

            <div className="SNTPEngineering-advantages-list-item">
              <div className="SNTPEngineering-advantages-list-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                </svg>
              </div>
              <div className="SNTPEngineering-advantages-list-content">
                <h4 className="SNTPEngineering-advantages-list-title">Respect systématique</h4>
                <p className="SNTPEngineering-advantages-list-text">des délais de livraison renforcés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bloc 2: Expertise Technique de Pointe */}
    <div className="SNTPEngineering-advantages-block SNTPEngineering-advantages-block-dark">
      <div className="SNTPEngineering-advantages-block-wrapper">
        <div className="SNTPEngineering-advantages-block-content">
          <div className="SNTPEngineering-advantages-block-header">
            <div className="SNTPEngineering-advantages-block-icon-box">
              <div className="SNTPEngineering-advantages-block-icon SNTPEngineering-advantages-block-icon-light">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                </svg>
              </div>
              <div className="SNTPEngineering-advantages-block-pulse SNTPEngineering-advantages-block-pulse-light"></div>
            </div>
            <div className="SNTPEngineering-advantages-block-title-wrapper">
              <h3 className="SNTPEngineering-advantages-block-title SNTPEngineering-advantages-block-title-light">
                EXPERTISE TECHNIQUE DE POINTE
              </h3>
              <div className="SNTPEngineering-advantages-block-subtitle SNTPEngineering-advantages-block-subtitle-light">
                Innovation & Technologie
              </div>
            </div>
          </div>

          <div className="SNTPEngineering-advantages-tech-grid">
            <div className="SNTPEngineering-advantages-tech-card">
              <div className="SNTPEngineering-advantages-tech-number">01</div>
              <div className="SNTPEngineering-advantages-tech-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
              <h4 className="SNTPEngineering-advantages-tech-title">Solutions d'ingénierie adaptées</h4>
              <p className="SNTPEngineering-advantages-tech-desc">aux environnements exigeants</p>
            </div>

            <div className="SNTPEngineering-advantages-tech-card">
              <div className="SNTPEngineering-advantages-tech-number">02</div>
              <div className="SNTPEngineering-advantages-tech-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44C3.21 17.21 3 16.88 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/>
                </svg>
              </div>
              <h4 className="SNTPEngineering-advantages-tech-title">Mise en œuvre avancée</h4>
              <p className="SNTPEngineering-advantages-tech-desc">du BIM (niveau 2)</p>
            </div>

            <div className="SNTPEngineering-advantages-tech-card">
              <div className="SNTPEngineering-advantages-tech-number">03</div>
              <div className="SNTPEngineering-advantages-tech-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"/>
                </svg>
              </div>
              <h4 className="SNTPEngineering-advantages-tech-title">Logiciels spécialisés</h4>
              <p className="SNTPEngineering-advantages-tech-desc">en géotechnique et structures</p>
            </div>

            <div className="SNTPEngineering-advantages-tech-card">
              <div className="SNTPEngineering-advantages-tech-number">04</div>
              <div className="SNTPEngineering-advantages-tech-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="SNTPEngineering-advantages-tech-title">Outils avancés</h4>
              <p className="SNTPEngineering-advantages-tech-desc">de modélisation hydraulique et routière</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* ==================== MÉTHODOLOGIE & PROCESSUS ==================== */}
<section className="SNTPEngineering-methodology-section SNTPEngineering-fade-in-section">
  <div className="SNTPEngineering-container">
    {/* Header Principal */}
    <div className="SNTPEngineering-methodology-header">
      <h2 className="SNTPEngineering-methodology-main-title">MÉTHODOLOGIE & PROCESSUS</h2>
      <div className="SNTPEngineering-methodology-main-underline"></div>
      <p className="SNTPEngineering-methodology-subtitle">
        Une approche structurée pour une excellence opérationnelle garantie
      </p>
    </div>

    {/* Grille des 2 cartes */}
    <div className="SNTPEngineering-methodology-grid">
      
      {/* Card 1: Approche Systématique */}
      <div className="SNTPEngineering-methodology-card">
        <div className="SNTPEngineering-methodology-card-header">
          <div className="SNTPEngineering-methodology-card-icon">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
            </svg>
          </div>
          <div className="SNTPEngineering-methodology-card-title-wrapper">
            <div className="SNTPEngineering-methodology-card-number">01</div>
            <h3 className="SNTPEngineering-methodology-card-title">
              APPROCHE SYSTÉMATIQUE ET TERRAIN
            </h3>
          </div>
        </div>
        <div className="SNTPEngineering-methodology-card-content">
          <ul className="SNTPEngineering-methodology-list">
            <li>
              <div className="SNTPEngineering-methodology-list-dot"></div>
              <span>Analyse approfondie des contraintes terrain</span>
            </li>
            <li>
              <div className="SNTPEngineering-methodology-list-dot"></div>
              <span>Évaluation multicritères de faisabilité</span>
            </li>
            <li>
              <div className="SNTPEngineering-methodology-list-dot"></div>
              <span>Conception collaborative et itérative</span>
            </li>
            <li>
              <div className="SNTPEngineering-methodology-list-dot"></div>
              <span>Optimisation technique & économique simultanée</span>
            </li>
            <li>
              <div className="SNTPEngineering-methodology-list-dot"></div>
              <span>Production de dossiers d'exécution détaillés</span>
            </li>
            <li>
              <div className="SNTPEngineering-methodology-list-dot"></div>
              <span>Gestion rigoureuse de l'ingénierie de détail</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Card 2: Management de la Qualité */}
      <div className="SNTPEngineering-methodology-card SNTPEngineering-methodology-card-dark">
        <div className="SNTPEngineering-methodology-card-header">
          <div className="SNTPEngineering-methodology-card-icon SNTPEngineering-methodology-card-icon-light">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="SNTPEngineering-methodology-card-title-wrapper">
            <div className="SNTPEngineering-methodology-card-number SNTPEngineering-methodology-card-number-light">02</div>
            <h3 className="SNTPEngineering-methodology-card-title SNTPEngineering-methodology-card-title-light">
              MANAGEMENT DE LA QUALITÉ
            </h3>
          </div>
        </div>
        <div className="SNTPEngineering-methodology-card-content">
          <ul className="SNTPEngineering-methodology-list SNTPEngineering-methodology-list-light">
            <li>
              <div className="SNTPEngineering-methodology-list-dot SNTPEngineering-methodology-list-dot-light"></div>
              <span>Revue systématique par comité technique</span>
            </li>
            <li>
              <div className="SNTPEngineering-methodology-list-dot SNTPEngineering-methodology-list-dot-light"></div>
              <span>Validation croisée et contradictoire des études</span>
            </li>
            <li>
              <div className="SNTPEngineering-methodology-list-dot SNTPEngineering-methodology-list-dot-light"></div>
              <span>Respect strict des normes internationales</span>
            </li>
            <li>
              <div className="SNTPEngineering-methodology-list-dot SNTPEngineering-methodology-list-dot-light"></div>
              <span>Démarche d'amélioration continue</span>
            </li>
            <li>
              <div className="SNTPEngineering-methodology-list-dot SNTPEngineering-methodology-list-dot-light"></div>
              <span>Intégration systématique de solutions environnementales durables</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ==================== VISION STRATÉGIQUE 2026–2030 ==================== */}
<section className="SNTPEngineering-vision-section SNTPEngineering-fade-in-section">
  <div className="SNTPEngineering-container">
    {/* Header avec animation */}
    <div className="SNTPEngineering-vision-header">
      <div className="SNTPEngineering-vision-year-badge">
        <div className="SNTPEngineering-vision-year-content">
          <span className="SNTPEngineering-vision-year-from">2026</span>
          <div className="SNTPEngineering-vision-year-arrow">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </div>
          <span className="SNTPEngineering-vision-year-to">2030</span>
        </div>
      </div>
      <h2 className="SNTPEngineering-vision-main-title">VISION STRATÉGIQUE</h2>
      <div className="SNTPEngineering-vision-main-underline"></div>
      <p className="SNTPEngineering-vision-subtitle">
        Notre feuille de route vers l'excellence et l'innovation
      </p>
    </div>

    

    {/* Grille des objectifs */}
    <div className="SNTPEngineering-vision-grid">
      {/* Objectif 1 */}
      <div className="SNTPEngineering-vision-card">
        <div className="SNTPEngineering-vision-card-number">06</div>
        <div className="SNTPEngineering-vision-card-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44C3.21 17.21 3 16.88 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/>
          </svg>
        </div>
        <h4 className="SNTPEngineering-vision-card-title">
          Devenir centre d'excellence en ingénierie des infrastructures
        </h4>
        <div className="SNTPEngineering-vision-card-progress">
          <div className="SNTPEngineering-vision-card-progress-bar"></div>
        </div>
      </div>
      {/* Objectif 1 */}
      <div className="SNTPEngineering-vision-card">
        <div className="SNTPEngineering-vision-card-number">01</div>
        <div className="SNTPEngineering-vision-card-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44C3.21 17.21 3 16.88 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z"/>
          </svg>
        </div>
        <h4 className="SNTPEngineering-vision-card-title">
          Maîtrise avancée du BIM et des outils de simulation
        </h4>
        <div className="SNTPEngineering-vision-card-progress">
          <div className="SNTPEngineering-vision-card-progress-bar"></div>
        </div>
      </div>

      {/* Objectif 2 */}
      <div className="SNTPEngineering-vision-card">
        <div className="SNTPEngineering-vision-card-number">02</div>
        <div className="SNTPEngineering-vision-card-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
          </svg>
        </div>
        <h4 className="SNTPEngineering-vision-card-title">
          Augmentation significative des capacités d'ingénierie
        </h4>
        <div className="SNTPEngineering-vision-card-progress">
          <div className="SNTPEngineering-vision-card-progress-bar"></div>
        </div>
      </div>

      {/* Objectif 3 */}
      <div className="SNTPEngineering-vision-card">
        <div className="SNTPEngineering-vision-card-number">03</div>
        <div className="SNTPEngineering-vision-card-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <h4 className="SNTPEngineering-vision-card-title">
          Transformation numérique complète
        </h4>
        <div className="SNTPEngineering-vision-card-progress">
          <div className="SNTPEngineering-vision-card-progress-bar"></div>
        </div>
      </div>

      {/* Objectif 4 */}
      <div className="SNTPEngineering-vision-card">
        <div className="SNTPEngineering-vision-card-number">04</div>
        <div className="SNTPEngineering-vision-card-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
          </svg>
        </div>
        <h4 className="SNTPEngineering-vision-card-title">
          Innovation technique permanente
        </h4>
        <div className="SNTPEngineering-vision-card-progress">
          <div className="SNTPEngineering-vision-card-progress-bar"></div>
        </div>
      </div>

      {/* Objectif 5 */}
      <div className="SNTPEngineering-vision-card">
        <div className="SNTPEngineering-vision-card-number">05</div>
        <div className="SNTPEngineering-vision-card-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.07-.18C7.95 17 9.78 13 17 11V8zm-5-4.5L7 8h3v8l5-4.5H12V3.5z"/>
          </svg>
        </div>
        <h4 className="SNTPEngineering-vision-card-title">
          Développement accéléré de solutions durables et bas carbone
        </h4>
        <div className="SNTPEngineering-vision-card-progress">
          <div className="SNTPEngineering-vision-card-progress-bar"></div>
        </div>
      </div>

    </div>

    
  </div>
</section>
{/* ==================== CHIFFRES CLÉS ==================== */}
<section className="SNTPEngineering-stats-section SNTPEngineering-fade-in-section">
  <div className="SNTPEngineering-container">
    {/* Header */}
    <div className="SNTPEngineering-stats-header">
      <h2 className="SNTPEngineering-stats-main-title">CHIFFRES CLÉS</h2>
      <div className="SNTPEngineering-stats-main-underline"></div>
    </div>

    {/* Grille des statistiques */}
    <div className="SNTPEngineering-stats-grid">
      
      {/* Stat 1 - Ingénieurs */}
      <div className="SNTPEngineering-stats-card">
        <div className="SNTPEngineering-stats-card-inner">
          <div className="SNTPEngineering-stats-icon-wrapper">
            <div className="SNTPEngineering-stats-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
            </div>
            <div className="SNTPEngineering-stats-pulse"></div>
          </div>
          <div className="SNTPEngineering-stats-content">
            <div className="SNTPEngineering-stats-number-wrapper">
              <span className="SNTPEngineering-stats-number" data-target="20">20</span>
              <span className="SNTPEngineering-stats-plus">+</span>
            </div>
            <h3 className="SNTPEngineering-stats-label">Ingénieurs spécialistes</h3>
          </div>
        </div>
        <div className="SNTPEngineering-stats-card-glow"></div>
      </div>

      {/* Stat 2 - Disciplines */}
      <div className="SNTPEngineering-stats-card SNTPEngineering-stats-card-dark">
        <div className="SNTPEngineering-stats-card-inner">
          <div className="SNTPEngineering-stats-icon-wrapper">
            <div className="SNTPEngineering-stats-icon SNTPEngineering-stats-icon-light">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
              </svg>
            </div>
            <div className="SNTPEngineering-stats-pulse SNTPEngineering-stats-pulse-light"></div>
          </div>
          <div className="SNTPEngineering-stats-content">
            <div className="SNTPEngineering-stats-number-wrapper">
              
              <span className="SNTPEngineering-stats-plus SNTPEngineering-stats-plus-light">10+</span>
            </div>
            <h3 className="SNTPEngineering-stats-label SNTPEngineering-stats-label-light">Disciplines techniques</h3>
          </div>
        </div>
        <div className="SNTPEngineering-stats-card-glow"></div>
      </div>

      {/* Stat 3 - Performance */}
      <div className="SNTPEngineering-stats-card">
        <div className="SNTPEngineering-stats-card-inner">
          <div className="SNTPEngineering-stats-icon-wrapper">
            <div className="SNTPEngineering-stats-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
            </div>
            <div className="SNTPEngineering-stats-pulse"></div>
          </div>
          <div className="SNTPEngineering-stats-content">
            <div className="SNTPEngineering-stats-number-wrapper">
              <span className="SNTPEngineering-stats-number" data-target="100">100</span>
              <span className="SNTPEngineering-stats-percent">%</span>
            </div>
            <h3 className="SNTPEngineering-stats-label">Performance technique optimisée et mesurée</h3>
          </div>
        </div>
        <div className="SNTPEngineering-stats-card-glow"></div>
      </div>

    </div>

    
  </div>
</section>




      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact-section" className="SNTPEngineering-contact-section SNTPEngineering-fade-in-section">
        <div className="SNTPEngineering-container">
          <h2 className="SNTPEngineering-contact-title">Contactez-Nous</h2>

          <div className="SNTPEngineering-contact-layout">
            {/* Google Map */}
            <div className="SNTPEngineering-contact-map-container">
              <iframe
                className="SNTPEngineering-google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.8931374877826!2d3.0181877!3d36.7638889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb31d1e1d1d1d%3A0x1d1d1d1d1d1d1d1d!2sVilla%208%20Bois%20des%20Cars%203%2C%20Dely%20Ibrahim!5e0!3m2!1sen!2sdz!4v1234567890123!5m2!1sen!2sdz"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation SNTP Engineering"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="SNTPEngineering-contact-info-wrapper">
              <div className="SNTPEngineering-contact-grid">
                <div className="SNTPEngineering-contact-item">
                  <h3 className="SNTPEngineering-contact-label">Adresse</h3>
                  <p className="SNTPEngineering-contact-info">
                    Villa 8 Bois des Cars 3, Dely Ibrahim<br />
                    Alger, Algérie
                  </p>
                </div>

                <div className="SNTPEngineering-contact-item">
                  <h3 className="SNTPEngineering-contact-label">Téléphone</h3>
                  <p className="SNTPEngineering-contact-info">
                    <a href="tel:+213123456789">+213 (0) 23 XX XX XX</a>
                  </p>
                </div>

                <div className="SNTPEngineering-contact-item">
                  <h3 className="SNTPEngineering-contact-label">Email</h3>
                  <p className="SNTPEngineering-contact-info">
                    <a href="mailto:engineering@sntp.dz">engineering@sntp.dz</a>
                  </p>
                </div>
              </div>

              <button 
                className="SNTPEngineering-cta-button SNTPEngineering-primary-button SNTPEngineering-map-button" 
                onClick={handleMapClick}
              >
                <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Ouvrir dans Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SNTPEngineering;
