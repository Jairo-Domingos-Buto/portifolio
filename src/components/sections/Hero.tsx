import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { GradientWaves } from "@/components/backgrounds/GradientWaves";
import { profile, social, hero, stats } from "@/data/Config";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background px-4 pb-16 pt-28 sm:px-6 lg:min-h-[calc(100vh-1rem)] lg:px-8 lg:pb-20 lg:pt-32">
      <GradientWaves className="opacity-[0.12] mix-blend-multiply" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* lado esquerdo */}
          <div className="max-w-3xl">
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {profile.role} · {profile.location}
            </p>
            <h3 className="max-w-3xl text-[clamp(2.25rem,8vw,6.6rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-foreground">
              {hero.headline}
            </h3>
            <div className="mt-10 flex max-w-xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground">
                {hero.description}
              </p>
              <a
                href={hero.ctaPrimary.href}
                className="inline-flex shrink-0 items-center gap-2 border-b border-foreground pb-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {hero.ctaPrimary.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-5 border-t border-border pt-5">
              <a
                href={social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github size={17} />
              </a>
              <a
                href={social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin size={17} />
              </a>
              <a
                href={social.emailComposeUrl}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
    {/* lado direito */}
          <div className="relative lg:pb-10">
            <div className="relative ml-auto aspect-[0.82] w-full max-w-md overflow-hidden bg-secondary">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover grayscale "
                width={640}
                height={780}
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/55 to-transparent p-6 pt-24 text-background">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em]">
                  Vive em {profile.location}
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-4 border-t border-border pt-4">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <p className="font-mono text-xl text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
