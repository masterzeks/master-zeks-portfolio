const works = [
  { type: "CONTENT / STORYTELLING", title: "Web3, explained with clarity.", description: "Making complex crypto narratives feel simple, relevant, and worth reading.", href: "https://x.com/m_zekks/status/2062458237681586257", number: "01" },
  { type: "ECOSYSTEM / RESEARCH", title: "Finding the story behind the technology.", description: "Thoughtful research-led writing that connects products with people.", href: "https://x.com/m_zekks/status/2119655512094470390", number: "02", logo: "/logos/mojo-ai-avatar.jpg", logoClass: "logo-badge logo-badge-fill logo-badge-lg", logoAlt: "Mojo AI logo" },
  { type: "COMMUNITY / CONTENT", title: "Content built for real engagement.", description: "Useful narratives, genuine conversations, and community-first communication.", href: "https://x.com/m_zekks/status/2001925470489645112", number: "03" },
  { type: "VIDEO / CREATIVE", title: "Ideas that move.", description: "Short-form video and visual storytelling for digital-native audiences.", href: "https://vt.tiktok.com/ZSpHU2mp1/", number: "04" },
  { type: "WEB3 / EDUCATION", title: "Turning attention into understanding.", description: "Making emerging ecosystems accessible to the next wave of users.", href: "https://x.com/m_zekks/status/2052649844234187080", number: "05", logo: "/logos/ton.svg", logoClass: "logo-badge logo-badge-fill logo-badge-lg", logoAlt: "TON logo" },
];

const clips = [
  {
    title: "Samuel Xeus on how he discovered Web3",
    href: "https://x.com/M_zekks/status/2102721716300517749",
    thumb: "/clips/samuel-xeus.jpg",
    alt: "Thumbnail for Samuel Xeus on how he discovered Web3",
    views: "2.1K views",
    date: "23 Sep 2026",
    width: 1200,
    height: 682,
  },
  {
    title: "What women understand about marketing and content",
    href: "https://x.com/M_zekks/status/2119810290170630548",
    thumb: "/clips/women-marketing.jpg",
    alt: "Thumbnail for What women understand about marketing and content",
    views: "364 views",
    date: "9 Nov 2026",
    width: 1200,
    height: 686,
  },
];

const experience = [
  { name: "Mojo AI", role: "Affiliate", detail: "Affiliate partner for Mojo AI.", stat: "Nov 2026 – Present", logo: "/logos/mojo-ai-avatar.jpg", logoClass: "logo-badge logo-badge-fill" },
  { name: "Web3 UNILAG", role: "Business Development Manager", detail: "Partnership outreach, sponsorships and community events.", stat: "Sep 2025 – Present", logo: "/logos/web3-unilag.png", logoClass: "logo-badge logo-badge-dark" },
  { name: "Primus Labs", role: "Content", detail: "Educational threads explaining zkTLS and Primus's tools.", stat: "Oct – Nov 2026", logo: "/logos/primus-labs.png", logoClass: "logo-badge logo-badge-fill", href: "https://x.com/m_zekks/status/2106290151794110916" },
  { name: "Acurast", role: "Content", detail: "Intro content on Acurast's decentralized compute network.", stat: "Sep – Nov 2026", logo: "/logos/acurast.jpg", logoClass: "logo-badge logo-badge-fill", href: "https://x.com/m_zekks/status/2104900508104196122" },
  { name: "Bet25", role: "Content", detail: "Explainer posts on zero-margin sportsbook odds.", stat: "Oct 2026", logo: "/logos/bet25.jpg", logoClass: "logo-badge logo-badge-fill", href: "https://x.com/m_zekks/status/2114028468971200691" },
  { name: "Camp Network", role: "Ambassador", detail: "Community onboarding, campaigns and ecosystem storytelling.", stat: "Apr 2025 – May 2026", logo: "/logos/camp-network.svg", logoClass: "logo-badge logo-badge-light" },
  { name: "MEXC", role: "Partnership", detail: "Partnered with MEXC.", stat: "Jan 2026 – Apr 2026", logo: "/logos/mexc.png", logoClass: "logo-badge logo-badge-fill" },
  { name: "Goat Network", role: "Content", detail: "Content for Goat Network.", stat: "Jun 2025 – Apr 2026", logo: "/logos/goat-network.svg", logoClass: "logo-badge logo-badge-light" },
  { name: "Lombard Finance", role: "Content", detail: "Content for Lombard Finance.", stat: "May 2025 – Mar 2026", logo: "/logos/lombard-finance.svg", logoClass: "logo-badge logo-badge-fill" },
  { name: "Higgsfield AI", role: "Partnership", detail: "Partnered with Higgsfield AI.", stat: "Jan 2026 – Feb 2026", logo: "/logos/higgsfield.jpg", logoClass: "logo-badge logo-badge-fill" },
];

const skills = [
  "Web3 storytelling", "Content strategy", "Community growth",
  "AI & automation", "Research & writing", "Creative direction",
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
            <a href="#clips">Clips</a>
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
          <div><strong>10<span>+</span></strong><p>Web3 teams &amp; communities</p></div>
          <div><strong>Always</strong><p>Curious to create</p></div>
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
              <a href={work.href} key={work.number} target="_blank" rel="noreferrer" className={"work-card work-card-" + i}>
                <div className="work-card-top"><span>{work.type}</span><span className="work-open" /></div>
                <div className="work-art" aria-hidden="true">
                  {work.logo ? (
                    <img className={work.logoClass} src={work.logo} alt={work.logoAlt} width={96} height={96} />
                  ) : (
                    <span />
                  )}
                </div>
                <div className="work-card-bottom">
                  <span className="work-num">{work.number} / 05</span>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="clips" className="section clips">
          <div className="section-kicker"><span>03 / CLIPS</span><span>SHORT-FORM VIDEO</span></div>
          <div className="section-heading">
            <h2>Clips worth<br /><em>watching.</em></h2>
            <p>A couple of clips from my profile on X.<br />Click through to watch the original posts.</p>
          </div>
          <div className="clips-grid">
            {clips.map((clip) => (
              <a href={clip.href} key={clip.href} target="_blank" rel="noreferrer" className="clip-card">
                <div className="clip-thumb">
                  <img src={clip.thumb} alt={clip.alt} width={clip.width} height={clip.height} />
                  <span className="clip-play" aria-hidden="true" />
                </div>
                <div className="clip-meta">
                  <h3>{clip.title}</h3>
                  <p>
                    <span className="clip-views">{clip.views}</span>
                    <span className="clip-dot" />
                    <span className="clip-date">{clip.date}</span>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-kicker"><span>04 / EXPERIENCE</span><span>COMMUNITIES I HAVE HELPED SHAPE</span></div>
          <div className="section-heading">
            <h2>Built with<br /><em>good people.</em></h2>
            <p>Some collaborations that sharpened my craft<br />and expanded my perspective.</p>
          </div>
          <div className="experience-list">
            {experience.map((item, i) => {
              const count = String(i + 1).padStart(2, "0");
              const inner = (
                <>
                  <span className="experience-count">{count}</span>
                  <div className="experience-name">
                    <img className={item.logoClass} src={item.logo} alt={item.name + " logo"} width={44} height={44} />
                    <div className="experience-name-text">
                      <h3>{item.name}</h3>
                      <p>{item.role}</p>
                    </div>
                  </div>
                  <p className="experience-detail">{item.detail}</p>
                  <span className="experience-stat">{item.stat}</span>
                </>
              );
              if (item.href) {
                return (
                  <a className="experience-row experience-row-link" href={item.href} key={item.name} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                );
              }
              return (
                <div className="experience-row" key={item.name}>
                  {inner}
                </div>
              );
            })}
          </div>
        </section>

        <section className="section automation">
          <div className="section-kicker"><span>05 / MORE THAN CONTENT</span><span>ALWAYS EXPERIMENTING</span></div>
          <div className="automation-panel">
            <span className="panel-icon" />
            <div>
              <span className="panel-label">AI / AUTOMATION / CREATIVE TECH</span>
              <h2>Curious by default.<br /><em>Building by instinct.</em></h2>
              <p>When I am not writing, I am experimenting with AI workflows, creative video, websites and bots, finding smarter ways to bring ideas to life.</p>
            </div>
            <span className="panel-decoration" />
          </div>
        </section>

        <section id="contact" className="contact">
          <span className="eyebrow"><span className="status-dot" /> HAVE A PROJECT IN MIND?</span>
          <h2>Let us make<br /><em>something matter.</em></h2>
          <p>Good stories start with a conversation. Mine is always open.</p>
          <a className="primary-button" href="https://t.me/Master_Zeks" target="_blank" rel="noreferrer">Start a conversation <span /></a>
        </section>

        <footer>
          <a className="brand" href="#top"><span className="brand-mark" /> master zeks<span className="brand-dot">.</span></a>
          <span>{new Date().getFullYear()}</span>
          <div className="socials">
            <a href="https://x.com/m_zekks" target="_blank" rel="noreferrer">X</a>
            <a href="https://t.me/Master_Zeks" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://www.linkedin.com/in/eghonghon-azeke-241488239" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
