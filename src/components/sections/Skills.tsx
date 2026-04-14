import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const skillCategories = [
  {
    title: 'Backend & APIs',
    level: 'Intermediário',
    skills: ['PHP & Laravel', 'REST APIs', 'MySQL & PostgreSQL', 'Redis & Cache'],
  },
  {
    title: 'Frontend Web',
    level: 'Intermediário+',
    skills: ['JavaScript', 'React', 'HTML5 & CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Mobile',
    level: 'Iniciante',
    skills: ['React Native', 'Firebase', 'Push Notifications'],
  },
  {
    title: 'DevOps & Ferramentas',
    level: 'Operacional',
    skills: ['Git & GitHub', 'Docker', 'Linux', 'CI/CD básico'],
  },
];

export function Skills() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={targetRef} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isIntersecting ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Stack técnico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profundidade em ferramentas essenciais, não superficialidade em muitas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className={`transition-all duration-500 hover:scale-105 ${isIntersecting ? 'animate-scale-in opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <span className="text-sm text-muted-foreground">{category.level}</span>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 ${isIntersecting ? 'animate-fade-in opacity-100' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            <strong className="text-foreground">Princípio:</strong> Prefiro dominar profundamente Laravel + React + MySQL 
            do que conhecer superficialmente 20 tecnologias. Isso me permite resolver problemas complexos 
            com confiança e entregar código de qualidade.
          </p>
        </div>
      </div>
    </section>
  );
}
