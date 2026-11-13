const works = [
  { type: 'CONTENT / STORYTELLING', title: 'Web3, explained with clarity.', description: 'Making complex crypto narratives feel simple, relevant, and worth reading.', href: 'https://x.com/m_zekks/status/2062458237681586257', number: '01' },
  { type: 'ECOSYSTEM / RESEARCH', title: 'Finding the story behind the technology.', description: 'Thoughtful research-led writing that connects products with people.', href: 'https://x.com/m_zekks/status/2119655512094470390', number: '02' },
  { type: 'COMMUNITY / CONTENT', title: 'Content built for real engagement.', description: 'Useful narratives, genuine conversations, and community-first communication.', href: 'https://x.com/m_zekks/status/2001925470489645112', number: '03' },
  { type: 'VIDEO / CREATIVE', title: 'Ideas that move.', description: 'Short-form video and visual storytelling for digital-native audiences.', href: 'https://vt.tiktok.com/ZSpHU2mp1/', number: '04' },
  { type: 'WEB3 / EDUCATION', title: 'Turning attention into understanding.', description: 'Making emerging ecosystems accessible to the next wave of users.', href: 'https://x.com/m_zekks/status/2052649844234187080', number: '05' },
];

const experience = [
  { name: 'Camp Network', role: 'Ambassador', detail: 'Community onboarding, campaigns and ecosystem storytelling.', stat: '100+ onboarded' },
  { name: 'Web3 UNILAG', role: 'Business Development Manager', detail: 'Partnership outreach, sponsorships and community events.', stat: '500+ attendees' },
  { name: 'Lombard Finance', role: 'Content & Community', detail: 'Content creation and community engagement.', stat: 'Web3 growth' },
  { name: 'Goat Network', role: 'Content & Community', detail: 'Creative communication and community growth.', stat: 'Ecosystem content' },
];

const skills = [
  'Web3 storytelling',
  'Content strategy',
  'Community growth',
  'AI & automation',
  'Research & writing',
  'Creative direction',
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="shell">
        <header className="nav">
          <a href="#top" className="brand"><span className="brand-mark" /> master zeks<span className="brand-dot">.</span></a>
          <nav>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
          </nav>
          <a className="nav-contact" href="https://t.me/Master_Zeks" target="_blank" rel="noreferrer">Let us talk <span /></a>
        </header>

        <section id="top" className="hero">
          <div className="hero-top">
            <span className="eyebrow"><span className="status-dot" /> AVAILABLE FOR COLLABORATIONS</span>
            <span className="hero-index">INDEPENDENT CREATOR / WEB3</span>
          </div>
          <div className="avatar-wrap">
            <div className="avatar-halo" />
            <img className="avatar" src="/profile.jpg" alt="Master Zeks illustrated profile portrait" />
            <span className="avatar-spark" />
          </div>
          <p className="intro">Hey, I am <span>Master Zeks</span> <span className="wave" /></p>
          <h1>I turn <em>complex ideas</em><br />into stories people<br /><span className="outlined">care about.</span></h1>
          <p className="hero-copy">Web3 creator, community builder &amp; AI enthusiast.<br />I help ambitious ideas find their voice, audience and momentum.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">Explore my work <span /></a>
            <a className="secondary-button" href="https://x.com/m_zekks" target="_blank" rel="noreferrer">Find me on X <span /></a>
          </div>
          <div className="scroll-hint">SCROLL TO EXPLORE <span /></div>
        </section>

        <section className="stats" aria-label="Highlights">
          <div><strong>100<span>+</span></strong><p>People onboarded</p></div>
          <div><strong>500<span>+</span></strong><p>Event participants</p></div>
          <div><strong>04</strong><p>Web3 teams &amp; communities</p></div>
          <div><strong>AI</strong><p>Curiosity to create</p></div>
        </section>

        <section id="about" className="section about">
          <div className="section-kicker"><span>01 / ABOUT ME</span><span>THE PERSON BEHIND THE POSTS</span></div>
          <div className="about-grid">
            <h2>Not just content.<br /><em>Connection.</em></h2>
            <div className="about-body">
              <p>I am Master Zeks, a Web3 creator who believes the best ideas deserve more than buzzwords.</p>
              <p>I blend research, writing, community building and AI-powered creativity to make emerging technology feel human. From helping communities grow to turning technical concepts into stories worth sharing, I care about making an impact that lasts beyond the timeline.</p>
              <a className="text-link" href="https://t.me/Master_Zeks" target="_blank" rel="noreferrer">Let us build something together <span /></a>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill" key={skill}>
                <span className="skill-icon" />
                <span>{skill}</span>
                <span className="skill-arrow">-</span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-kicker"><span>02 / SELECTED WORK</span><span>WORDS, IDEAS &amp; EXPERIMENTS</span></div>
          <div className="section-heading">
            <h2>Proof is in<br /><em>the work.</em></h2>
            <p>A few things I have put into the world.<br />Click through to explore the original posts.</p>
          </div>
          <div className="work-grid">
            {works.map((work, i) => (