import React from 'react';
import { Card, CardContent } from './ui/card';
import { Code, Palette, Database, Globe } from 'lucide-react';

export const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend Development",
      description: "Building responsive and interactive UIs with React, Tailwind CSS, and modern JavaScript."
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: "Backend Architecture",
      description: "Designing robust APIs and database schemas using Node.js, Python, and SQL/NoSQL databases."
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: "UI/UX Design",
      description: "Creating intuitive and accessible designs that prioritize user experience and visual appeal."
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: "Deployment & DevOps",
      description: "Managing CI/CD pipelines and cloud infrastructure to ensure reliable application delivery."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            With over 5 years of experience in the industry, I specialize in building full-stack applications 
            that are not only functional but also delightful to use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="border-none shadow-lg bg-background/50 hover:bg-background transition-colors">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-secondary rounded-full">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBwcm9qZWN0fGVufDF8fHx8MTc2NDYxNDU2OHww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Working" 
              className="rounded-lg shadow-xl w-full object-cover h-80"
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              I started my journey as a self-taught developer, curious about how the web works. 
              Fast forward to today, I've had the privilege of working with startups and established companies 
              to deliver high-quality digital products.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe in continuous learning and staying updated with the latest technologies to provide the best solutions for my clients.
              When I'm not coding, you can find me exploring new hiking trails or experimenting with photography.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <span className="block text-3xl font-bold text-primary">50+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Projects</span>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <span className="block text-3xl font-bold text-primary">30+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Clients</span>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <span className="block text-3xl font-bold text-primary">5+</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
