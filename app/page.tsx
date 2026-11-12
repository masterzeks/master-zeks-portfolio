'use client';
import { ArrowUpRight, ArrowRight, Sparkles, Globe2, PenLine, Users, Bot, Menu, X, Video, Send, ExternalLink, Zap } from 'lucide-react';
import { useState } from 'react';

const links = {
  x: 'https://x.com/m_zekks',
  telegram: 'https://t.me/Master_Zeks',
  linkedin: 'https://www.linkedin.com/in/eghonghon-azeke-241488239',
};
const work = [
  {number:'01', platform:'X / TWITTER', type:'PUBLISHED CONTENT', title:'Web3 storytelling 01', description:'A published writing sample from my X portfolio. Read the original post for the complete story.', href:'https://x.com/m_zekks/status/2062458237681586257', icon:PenLine},
  {number:'02', platform:'X / TWITTER', type:'PUBLISHED CONTENT', title:'Web3 storytelling 02', description:'An example of how I communicate ideas to a crypto-native audience.', href:'https://x.com/m_zekks/status/2119655512094470390', icon:Globe2},
  {number:'03', platform:'X / TWITTER', type:'PUBLISHED CONTENT', title:'Web3 storytelling 03', description:'A selected post showcasing my writing and content approach.', href:'https://x.com/m_zekks/status/2001925470489645112', icon:Sparkles},
  {number:'04', platform:'TIKTOK', type:'VIDEO CONTENT', title:'Short-form video', description:'A selected video sample. Watch the original on TikTok.', href:'https://vt.tiktok.com/ZSpHU2mp1/', icon:Video},
  {number:'05', platform:'X / TWITTER', type:'PUBLISHED CONTENT', title:'Web3 storytelling 04', description:'Another published example from my content portfolio.', href:'https://x.com/m_zekks/status/2052649844234187080', icon:PenLine},
];

const experience = [
  {
    name: "Camp Network",
    role: "Ambassador",
    description:
      "Community onboarding, awareness campaigns, and ecosystem communications.",
    stat: "100+ users onboarded",
  },
  {
    name: "Web3 UNILAG",
    role: "Business Development Manager",
    description:
      "Event coordination, partnership outreach, and sponsorship conversations.",
    stat: "500+ event participants",
  },
  {
    name: "Lombard Finance",
    role: "Content and Community",
    description:
      "Created content and supported community engagement.",
    stat: "UGC content",
  },
  {
    name: "Goat Network",
    role: "Content and Community",
    description:
      "Created content and supported community growth.",
    stat: "UGC content",
  },
];
const capabilities=[
 {icon:PenLine,title:'Content & storytelling',copy:'Research-backed posts, campaigns, and explanations that turn technical ideas into stories worth reading.'},
 {icon:Users,title:'Community & growth',copy:'Onboarding, Discord engagement, partnerships, and events that help communities connect.'},
 {icon:Bot,title:'AI & automation',copy:'Experimenting with AI tools, workflows, and creative production to work smarter.'},
];
export default function Home(){
 const [open,setOpen]=useState(false);
 return <main>
  <div className="glow glow-one"/><div className="glow glow-two"/>
  <header className="nav wrap"><a className="brand" href="#home"><span className="brand-mark">M<span>‚</span></span> MASTER ZEKS<span className="dot">.</span></a><nav className={open?'navlinks show':'navlinks'} aria-label="Main navigation">{[['About','#about'],['Expertise','#expertise'],['Experience','#experience'],['Work','#work'],['Contact','#contact']].map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav><button className="mobile-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>
  <section id="home" className="hero wrap"><div className="eyebrow"><span className="live-dot"/> WEB3 CONTENT COMMUNITY  AI</div><div className="hero-badge"><Zap size={15}/> STORIES THAT TRAVEL. COMMUNITIES THAT STICK.</div><h1>Ideas move fast.<br/><span className="gradient">I make them matter.</span></h1><p className="hero-copy">I am <strong>Master Zeks</strong> ‚a Web3 creator and community growth strategist. I help crypto ideas find their voice, their people, and their momentum.</p><div className="hero-actions"><a className="button primary" href="#work">See my work <ArrowUpRight size={18}/></a><a className="button secondary" href={links.x} target="_blank" rel="noopener noreferrer">Find me on X <ArrowRight size={18}/></a></div><div className="hero-bottom"><div className="metric"><b>100+</b><span>People onboarded</span></div><div className="metric"><b>~100K</b><span>Campaign impressions</span></div><div className="metric"><b>500+</b><span>Event participants</span></div></div><div className="orbit" aria-hidden="true"><div className="orbit-inner"></div><span className="orb orb-a"/><span className="orb orb-b"/></div></section>
  <section className="ticker" aria-label="Specialties"><div>WEB3 NATIVE <span>‚</span> STORYTELLING <span>‚</span> COMMUNITY GROWTH <span>‚</span> CREATOR ECONOMY <span>‚</span> AI WORKFLOWS <span>‚</span> CRYPTO RESEARCH</div></section>
  <section id="about" className="section wrap"><div className="section-kicker">01 / THE PERSON BEHIND THE POSTS</div><div className="about-grid"><h2>Curiosity meets<br/><span className="muted">execution.</span></h2><div><p>I work at the intersection of Web3, storytelling, and community. My experience spans creator campaigns, ambassador programs, social content, partnership outreach, and grassroots ecosystem events.</p><p>Whether I am explaining a protocol, helping a community grow, or testing a new AI workflow, I care about clarity, useful ideas, and work that leaves a mark.</p><div className="tags"><span>Crypto storytelling</span><span>Creator campaigns</span><span>Community building</span><span>AI experiments</span></div></div></div></section>
  <section id="expertise" className="section wrap"><div className="section-kicker">02 / WHAT I BRING</div><h2>Built for the<br/><span className="gradient">next internet.</span></h2><div className="cap-grid">{capabilities.map((item,i)=><article className="cap-card" key={item.title}><div className="cap-top"><item.icon size={27}/><span>0{i+1}</span></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></section>
  <section id="experience" className="section wrap"><div className="section-kicker">03 / WHERE I'VE CONTRIBUTED</div><h2>Real communities.<br/><span className="muted">Real involvement.</span></h2><div className="experience-list">{experience.map(item=><article className="experience-item" key={item.name}><div><span className="period">{item.period}</span><h3>{item.name}</h3><span className="role">{item.role}</span></div><p>{item.description}</p><span className="stat">{item.stat}</span></article>)}</div></section>
  <section id="work" className="section wrap"><div className="section-kicker">04 / SELECTED WORK</div><div className="work-heading"><div><h2>Don't take my word<br/><span className="gradient">for it.</span></h2><p className="section-intro">Five published samples. Explore the original posts and video to see my creative work firsthand.</p></div><a className="text-link" href={links.x} target="_blank" rel="noopener noreferrer">More on X <ArrowUpRight size={17}/></a></div><div className="work-grid">{work.map(item=><a className="work-card" key={item.number} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title} on ${item.platform}`}><div className="work-card-head"><span className="work-type">{item.platform} / {item.type}</span><ExternalLink size={17}/></div><div className="work-icon"><item.icon size={29}/></div><h3>{item.title}</h3><p>{item.description}</p><span className="coming">VIEW ORIGINAL <ArrowUpRight size={16}/></span></a>)}</div><p className="fine-print">Titles and descriptions are neutral labels until individual post content and metrics can be verified.</p></section>
  <section id="contact" className="contact-section wrap"><div className="contact-panel"><div className="section-kicker">05 / THE NEXT BIG THING</div><h2>Let's make<br/><span className="gradient">something click.</span></h2><p>Building something in Web3? Need a creator who understands the culture, the product, and the people? I'd love to hear what you're working on.</p><div className="contact-actions"><a className="button primary" href={links.telegram} target="_blank" rel="noopener noreferrer">Message me on Telegram <Send size={18}/></a><a className="social-link" href={links.x} target="_blank" rel="noopener noreferrer">X / Twitter <ArrowUpRight size={16}/></a><a className="social-link" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16}/></a></div></div></section>
  <footer className="wrap footer"><span>¬© {new Date().getFullYear()} Master Zeks. Built for what's next.</span><a href="#home">Back to top ‚</a></footer>
 </main>
}

