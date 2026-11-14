import type { CSSProperties } from "react";
import Ambient from "./components/Ambient";
import BackToTop from "./components/BackToTop";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import SkillMarquee from "./components/SkillMarquee";
import Stats from "./components/Stats";
import {
  IconArrow,
  IconArrowUpRight,
  IconBolt,
  IconBrand,
  IconBurst,
  IconChevronDown,
  IconSkill,
  IconSpark,
  IconTelegram,
  IconWave,
  IconX,
} from "./icons";

const works = [
  {
    type: "CONTENT / STORYTELLING",
    title: "Web3, explained with clarity.",
    description: "Making complex crypto narratives feel simple, relevant, and worth reading.",
    href: "https://x.com/m_zekks/status/2062458237681586257",
    number: "01",
    image: "/work/stocks-article.jpg",
    imageAlt: "Cover for the Stocks 101 article on real stocks versus other assets",
    imagePosition: "left center",
  },
  {
    type: "ECOSYSTEM / RESEARCH",
    title: "Finding the story behind the technology.",
    description: "Thoughtful research-led writing that connects products with people.",
    href: "https://x.com/m_zekks/status/2119655512094470390",
    number: "02",
    image: "/work/mojo-predictions.jpg",
    imageAlt: "Mojo AI analysing Premier League games on Polymarket",
    logo: "/logos/mojo-ai-avatar.jpg",
    logoClass: "logo-badge logo-badge-fill",
    logoAlt: "Mojo AI logo",
  },
  {
    type: "COMMUNITY / CONTENT",
    title: "Content built for real engagement.",
    description: "Useful narratives, genuine conversations, and community-first communication.",
    href: "https://x.com/m_zekks/status/2001925470489645112",
    number: "03",
    image: "/work/crypto-tax.jpg",
    imageAlt: "Screenshot from the crypto tax thread",
  },
  {
    type: "VIDEO / CREATIVE",
    title: "Ideas that move.",
    description: "Short-form video and visual storytelling for digital-native audiences.",
    href: "https://vt.tiktok.com/ZSpHU2mp1/",
    number: "04",
    image: "/work/tiktok-ideas.jpg",
    imageAlt: "Cover for a TikTok video on surviving the bear market",
    imagePosition: "center top",
  },
  {
    type: "WEB3 / EDUCATION",
    title: "Turning attention into understanding.",
    description: "Making emerging ecosystems accessible to the next wave of users.",
    href: "https://x.com/m_zekks/status/2052649844234187080",
    number: "05",
    image: "/work/ton-story.jpg",
    imageAlt: "Photo from the TON history thread",
    logo: "/logos/ton.svg",
    logoClass: "logo-badge logo-badge-fill",
    logoAlt: "TON logo",
  },
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

const videos = [
  {
    title: "What Is Web3? (series 1)",
    href: "https://www.tiktok.com/@master.zeks/video/7555491342160284936",
    thumb: "/videos/what-is-web3.jpg",
    alt: "Cover for What Is Web3? (series 1)",
    views: "9.7K views",
    date: "29 Sep 2025",
    width: 540,
    height: 960,
    play: true,
  },
  {
    title: "Tips to survive the bear market",
    href: "https://www.tiktok.com/@master.zeks/video/7603817808727690503",
    thumb: "/videos/bear-market-tips.jpg",
    alt: "Cover for Tips to survive the bear market",
    views: "1.1K views",
    date: "6 Feb 2026",
    width: 540,
    height: 960,
    play: true,
  },
  {
    title: "Here's my advice to anyone just starting Web3",
    href: "https://www.tiktok.com/@master.zeks/photo/7575970653497511186",
    thumb: "/videos/your-mind-matters.jpg",
    alt: "Cover for Here's my advice to anyone just starting Web3",
    views: "1.7K views",
    date: "23 Nov 2025",
    width: 1080,
    height: 1440,
    play: false,
  },
];

const events = [
  {
    title: "Camp Nigeria Community Outreach",
    role: "Co-host / Volunteer",
    date: "15 Aug 2025",
    place: "Living Fountain Orphanage, Lagos",
    description: "Camp Nigeria community outreach where we shared food, clothes, hygiene kits and learning materials with 50+ children.",
    cover: "/events/camp-outreach.jpg",
    coverAlt: "Camp Nigeria Community Outreach at Living Fountain Orphanage, Lagos",
    logo: "/logos/camp-network.svg",
    logoClass: "logo-badge logo-badge-light",
    primaryHref: "https://x.com/campnetworkxyz/status/1957394472850903480",
    primaryLabel: "Watch the recap",
    secondaryHref: "https://x.com/SamuelXeus/status/1957523659268190525",
    secondaryLabel: "Shout-out from Samuel Xeus",
  },
];

const experience = [
  { name: "Higgsfield AI", role: "Partnership", detail: "Partnered with Higgsfield AI.", stat: "Jan 2026 – Feb 2026", logo: "/logos/higgsfield.jpg", logoClass: "logo-badge logo-badge-fill" },
  { name: "Mojo AI", role: "Affiliate", detail: "Affiliate partner for Mojo AI.", stat: "Nov 2026 – Present", logo: "/logos/mojo-ai-avatar.jpg", logoClass: "logo-badge logo-badge-fill" },
  { name: "Web3 UNILAG", role: "Business Development Manager", detail: "Partnership outreach, sponsorships and community events.", stat: "Jan 2025 – Mar 2026", logo: "/logos/web3-unilag.png", logoClass: "logo-badge logo-badge-dark" },
  { name: "Primus Labs", role: "Content", detail: "Educational threads explaining zkTLS and Primus's tools.", stat: "Oct – Nov 2026", logo: "/logos/primus-labs.png", logoClass: "logo-badge logo-badge-fill", href: "https://x.com/m_zekks/status/2106290151794110916" },
  { name: "Acurast", role: "Content", detail: "Intro content on Acurast's decentralized compute network.", stat: "Sep – Nov 2026", logo: "/logos/acurast.jpg", logoClass: "logo-badge logo-badge-fill", href: "https://x.com/m_zekks/status/2104900508104196122" },
  { name: "Bet25", role: "Content", detail: "Explainer posts on zero-margin sportsbook odds.", stat: "Oct 2026", logo: "/logos/bet25.jpg", logoClass: "logo-badge logo-badge-fill", href: "https://x.com/m_zekks/status/2114028468971200691" },
  { name: "Camp Network", role: "Ambassador", detail: "Community onboarding, campaigns and ecosystem storytelling.", stat: "Apr 2025 – May 2026", logo: "/logos/camp-network.svg", logoClass: "logo-badge logo-badge-light" },
  { name: "MEXC", role: "Partnership", detail: "Partnered with MEXC.", stat: "Jan 2026 – Apr 2026", logo: "/logos/mexc.png", logoClass: "logo-badge logo-badge-fill" },
  { name: "Goat Network", role: "Content", detail: "Content for Goat Network.", stat: "Jun 2025 – Apr 2026", logo: "/logos/goat-network.svg", logoClass: "logo-badge logo-badge-light" },
  { name: "Lombard Finance", role: "Content", detail: "Content for Lombard Finance.", stat: "May 2025 – Mar 2026", logo: "/logos/lombard-finance.svg", logoClass: "logo-badge logo-badge-fill" },
];

const skills = [
  "Web3 storytelling", "Content strategy", "Community growth",
  "AI & automation", "Research & writing", "Creative direction",
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#about">Skip to content</a>
      <Ambient />
      <div className="shell">
        <Nav />

        <section id="top" className="hero">
          <div className="hero-top hero-enter" style={{ "--enter-delay": "0ms" } as CSSProperties}>
            <span className="eyebrow"><span className="status-dot" /> AVAILABLE FOR COLLABORATIONS</span>
            <span className="hero-index">INDEPENDENT CREATOR / WEB3</span>
          </div>
          <div className="avatar-wrap hero-enter" style={{ "--enter-delay": "80ms" } as CSSProperties}>
            <div className="avatar-halo" />
            <img className="avatar" src="/profile.jpg" alt="Master Zeks illustrated profile portrait" />
            <span className="avatar-spark"><IconSpark /></span>
          </div>
          <p className="intro hero-enter" style={{ "--enter-delay": "140ms" } as CSSProperties}>
            Hey, I&apos;m <span>Master Zeks</span> <span className="wave"><IconWave /></span>
          </p>
          <h1 className="hero-enter" style={{ "--enter-delay": "200ms" } as CSSProperties}>
            I turn <em>complex ideas</em><br />into stories people<br /><span className="outlined">care about.</span>
          </h1>
          <p className="hero-copy hero-enter" style={{ "--enter-delay": "280ms" } as CSSProperties}>
            Web3 creator, community builder &amp; AI enthusiast.<br />I help ambitious ideas find their voice, audience and momentum.
          </p>
          <div className="hero-actions hero-enter" style={{ "--enter-delay": "360ms" } as CSSProperties}>
            <a className="primary-button" href="#work">Explore my work <IconArrow className="btn-icon" /></a>
            <a className="secondary-button" href="https://x.com/m_zekks" target="_blank" rel="noreferrer">Find me on X <IconArrow className="btn-icon" /></a>
          </div>
          <div className="scroll-hint hero-enter" style={{ "--enter-delay": "440ms" } as CSSProperties}>
            SCROLL TO EXPLORE <IconChevronDown className="scroll-chevron" />
          </div>
        </section>

        <Stats />

        <section id="about" className="section about">
          <Reveal>
            <div className="section-kicker"><span>01 / ABOUT ME</span><span>THE PERSON BEHIND THE POSTS</span></div>
            <div className="about-grid">
              <h2>Not just content.<br /><em>Connection.</em></h2>
              <div className="about-body">
                <p>I&apos;m Master Zeks, a Web3 creator who believes the best ideas deserve more than buzzwords.</p>
                <p>I blend research, writing, community building and AI-powered creativity to make emerging technology feel human. From helping communities grow to turning technical concepts into stories worth sharing, I care about making an impact that lasts beyond the timeline.</p>
                <a className="text-link" href="https://t.me/Master_Zeks" target="_blank" rel="noreferrer">Let&apos;s build something together <IconArrow className="btn-icon" /></a>
              </div>
            </div>
          </Reveal>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <Reveal className="skill" key={skill} delay={i * 70}>
                <span className="skill-icon"><IconSkill name={skill} /></span>
                <span>{skill}</span>
                <span className="skill-arrow"><IconArrow /></span>
              </Reveal>
            ))}
          </div>
          <SkillMarquee skills={skills} />
        </section>

        <section id="work" className="section work">
          <Reveal>
            <div className="section-kicker"><span>02 / SELECTED WORK</span><span>WORDS, IDEAS &amp; EXPERIMENTS</span></div>
            <div className="section-heading">
              <h2>Proof is in<br /><em>the work.</em></h2>
              <p>A few things I have put into the world.<br />Click through to explore the original posts.</p>
            </div>
          </Reveal>
          <div className="work-grid">
            {works.map((work, i) => (
              <Reveal key={work.number} className={"work-card work-card-" + i} delay={i * 80} as="div">
                <a href={work.href} target="_blank" rel="noreferrer" className="work-card-link">
                  <div className="work-card-top"><span>{work.type}</span><span className="work-open"><IconArrowUpRight /></span></div>
                  <div className="work-art">
                    {work.image ? (
                      <img
                        className="work-photo"
                        src={work.image}
                        alt={work.imageAlt}
                        style={work.imagePosition ? { objectPosition: work.imagePosition } : undefined}
                      />
                    ) : null}
                    {work.logo ? (
                      <img className={(work.logoClass || "logo-badge") + " work-logo"} src={work.logo} alt={work.logoAlt} width={44} height={44} />
                    ) : null}
                  </div>
                  <div className="work-card-bottom">
                    <span className="work-num">{work.number} / 05</span>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="clips" className="section clips">
          <Reveal>
            <div className="section-kicker"><span>03 / CLIPS</span><span>SHORT-FORM VIDEO</span></div>
            <div className="section-heading">
              <h2>Clips worth<br /><em>watching.</em></h2>
              <p>A couple of clips from my profile on X.<br />Click through to watch the original posts.</p>
            </div>
          </Reveal>
          <div className="clips-grid">
            {clips.map((clip, i) => (
              <Reveal key={clip.href} delay={i * 90}>
                <a href={clip.href} target="_blank" rel="noreferrer" className="clip-card">
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
              </Reveal>
            ))}
          </div>
        </section>

        <section id="videos" className="section videos">
          <Reveal>
            <div className="section-kicker"><span>04 / VIDEOS</span><span>TIKTOK</span></div>
            <div className="section-heading">
              <h2>Videos.</h2>
              <p>Videos I made.</p>
            </div>
          </Reveal>
          <div className="videos-grid">
            {videos.map((video, i) => (
              <Reveal key={video.href} delay={i * 80}>
                <a href={video.href} target="_blank" rel="noreferrer" className="clip-card video-card">
                  <div className="clip-thumb video-thumb">
                    <img src={video.thumb} alt={video.alt} width={video.width} height={video.height} />
                    {video.play ? <span className="clip-play" aria-hidden="true" /> : null}
                  </div>
                  <div className="clip-meta">
                    <h3>{video.title}</h3>
                    <p>
                      {video.views ? <span className="clip-views">{video.views}</span> : null}
                      {video.views && video.date ? <span className="clip-dot" /> : null}
                      {video.date ? <span className="clip-date">{video.date}</span> : null}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="events" className="section events">
          <Reveal>
            <div className="section-kicker"><span>05 / EVENTS</span><span>COMMUNITY</span></div>
            <div className="section-heading">
              <h2>Events.</h2>
            </div>
          </Reveal>
          <div className="events-grid">
            {events.map((event) => (
              <Reveal key={event.title}>
                <article className="clip-card event-card">
                  <a href={event.primaryHref} target="_blank" rel="noreferrer" className="event-cover">
                    <div className="clip-thumb event-thumb">
                      <img src={event.cover} alt={event.coverAlt} width={675} height={1200} />
                      <span className="clip-play" aria-hidden="true" />
                    </div>
                  </a>
                  <div className="clip-meta event-meta">
                    <div className="event-title-row">
                      <img className={event.logoClass} src={event.logo} alt="" width={36} height={36} />
                      <div>
                        <p className="event-role">{event.role}</p>
                        <h3>{event.title}</h3>
                      </div>
                    </div>
                    <p className="event-when">
                      <span className="clip-date">{event.date}</span>
                      <span className="clip-dot" />
                      <span>{event.place}</span>
                    </p>
                    <p className="event-desc">{event.description}</p>
                    <p className="event-links">
                      <a href={event.primaryHref} target="_blank" rel="noreferrer" className="event-link-primary">{event.primaryLabel}</a>
                      {event.secondaryHref ? (
                        <a href={event.secondaryHref} target="_blank" rel="noreferrer" className="event-link-secondary">{event.secondaryLabel}</a>
                      ) : null}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <Reveal>
            <div className="section-kicker"><span>06 / EXPERIENCE</span><span>COMMUNITIES I HAVE HELPED SHAPE</span></div>
            <div className="section-heading">
              <h2>Built with<br /><em>good people.</em></h2>
              <p>Some collaborations that sharpened my craft<br />and expanded my perspective.</p>
            </div>
          </Reveal>
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
                  <Reveal className="experience-reveal" key={item.name} delay={i * 40}>
                    <a className="experience-row experience-row-link" href={item.href} target="_blank" rel="noreferrer">
                      {inner}
                    </a>
                  </Reveal>
                );
              }
              return (
                <Reveal className="experience-reveal" key={item.name} delay={i * 40}>
                  <div className="experience-row">
                    {inner}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="section automation">
          <Reveal>
            <div className="section-kicker"><span>07 / MORE THAN CONTENT</span><span>ALWAYS EXPERIMENTING</span></div>
            <div className="automation-panel">
              <span className="panel-icon"><IconBolt /></span>
              <div>
                <span className="panel-label">AI / AUTOMATION / CREATIVE TECH</span>
                <h2>Curious by default.<br /><em>Building by instinct.</em></h2>
                <p>When I&apos;m not writing, I&apos;m usually in an AI workflow, a short video, a site, or a bot — looking for a smarter way to get an idea into the world.</p>
              </div>
              <span className="panel-decoration" aria-hidden="true"><IconBurst /></span>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="contact">
          <Reveal>
            <span className="eyebrow"><span className="status-dot" /> HAVE A PROJECT IN MIND?</span>
            <h2>Let&apos;s make<br /><em>something that matters.</em></h2>
            <p>Good stories start with a conversation. Mine is always open.</p>
            <a className="primary-button" href="https://t.me/Master_Zeks" target="_blank" rel="noreferrer">
              Start a conversation <IconArrow className="btn-icon" />
            </a>
            <div className="contact-chips">
              <a className="contact-chip" href="https://x.com/M_zekks" target="_blank" rel="noreferrer">
                <IconX className="chip-icon" /> @M_zekks
              </a>
              <a className="contact-chip" href="https://t.me/Master_Zeks" target="_blank" rel="noreferrer">
                <IconTelegram className="chip-icon" /> @Master_Zeks
              </a>
            </div>
          </Reveal>
        </section>

        <footer>
          <a className="brand" href="#top"><IconBrand className="brand-mark" /> master zeks<span className="brand-dot">.</span></a>
          <span>{new Date().getFullYear()}</span>
          <div className="socials">
            <a href="https://x.com/m_zekks" target="_blank" rel="noreferrer">X</a>
            <a href="https://t.me/Master_Zeks" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://www.linkedin.com/in/eghonghon-azeke-241488239" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </footer>
      </div>
      <BackToTop />
    </main>
  );
}
