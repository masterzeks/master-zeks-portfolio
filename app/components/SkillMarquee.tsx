"use client";

type Props = { skills: string[] };

export default function SkillMarquee({ skills }: Props) {
  const loop = [...skills, ...skills, ...skills];
  return (
    <div className="skill-marquee" aria-hidden="true">
      <div className="skill-marquee-track">
        {loop.map((skill, i) => (
          <span className="skill-pill" key={skill + i}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
