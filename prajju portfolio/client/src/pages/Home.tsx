import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBar } from "@/components/SkillBar";
import { ContactForm } from "@/components/ContactForm";
import { ArrowDown, Code, Database, Globe, Cpu, BookOpen, User, Github, Linkedin, Mail, Twitter, Gamepad2, Plane, Sprout, Book, Clapperboard, Music } from "lucide-react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      <Navigation />

      {/* HERO SECTION */}
      <section ref={targetRef} className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-0">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />

        <motion.div
          style={{ opacity, scale, y }}
          className="text-center z-10 space-y-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              HELLO, WORLD
            </span>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-foreground mb-4">
              Prajwal AM
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
              Computer Science Engineer & <span className="text-foreground font-medium">Full Stack Developer</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center gap-6 mt-8"
          >
            <a href="mailto:prajwal@example.com" className="p-3 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Mail size={28} />
            </a>
            <a href="https://github.com" target="_blank" className="p-3 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="p-3 text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Linkedin size={28} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-12"
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-all group"
            >
              SCROLL DOWN
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 pb-24">

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-24">
          <SectionHeader title="About Me" subtitle="A glimpse into my journey and passion for technology." />

          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 relative">
              <div className="grid grid-cols-2 gap-5 h-full content-center">
                {[
                  { icon: Gamepad2, label: "Gaming", color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20 hover:border-indigo-500" },
                  { icon: Clapperboard, label: "Movies", color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20 hover:border-rose-500" },
                  { icon: Music, label: "Music", color: "text-sky-500", bg: "bg-sky-500/10", border: "border-sky-500/20 hover:border-sky-500" },
                  { icon: Book, label: "Reading", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20 hover:border-amber-500" }
                ].map((hobby, idx) => (
                  <div key={idx} className={`aspect-square flex flex-col items-center justify-center p-4 rounded-[2.5rem] border bg-card/80 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${hobby.border}`}>
                    <div className={`p-4 rounded-3xl ${hobby.bg} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <hobby.icon className={`w-8 h-8 ${hobby.color}`} />
                    </div>
                    <span className="font-bold text-muted-foreground group-hover:text-foreground transition-colors">{hobby.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium text-2xl">
                Hi, I'm Prajwal. I am a Computer Science student with a passion for building and learning.
              </p>
              <p>
                I am actively exploring the world of technology, fueled by a genuine curiosity for how software shapes our lives. With a strong foundation in programming basics and increasing exposure to web development, I treat every project as a hands-on opportunity to bridge the gap between theory and practice.
              </p>
              <p>
                I focus on practical learning—turning ideas into working code and constantly refining my understanding. I am a dedicated learner, eager to bring my enthusiasm and growing skill set to a collaborative team environment for internships and future opportunities.
              </p>


            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="scroll-mt-24">
          <SectionHeader title="Education" />

          <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12 pb-4">
            {[
              {
                degree: "B.E. in Computer Science",
                school: "Maharaja Institute of Technology, Mysore",
                year: "2023 - 2027",
                score: "8.6 CGPA",
                desc: "Gaining comprehensive exposure to core computer science fundamentals, including Data Structures, Algorithms, and OOPs. Developing a practical understanding of software engineering principles through hands-on academic projects."
              },
              {
                degree: "Pre-University Course (PUC) - PCMC",
                school: "Gopalswamy Shishuvihara Independent College",
                year: "2021 - 2023",
                score: "89 Percentile",
                desc: "Built a strong analytical foundation through Physics, Chemistry, Mathematics, and Computer Science. Developed logical problem-solving skills essential for engineering."
              },
              {
                degree: "Secondary School (10th Grade)",
                school: "JSS Higher primary school, Suttur",
                year: "2019 - 2020",
                score: "81.6%",
                desc: "Established a solid academic base with a focus on Mathematics and Science. Demonstrated consistent academic performance and developed an early interest in problem-solving and logic."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-primary transition-colors group-hover:bg-primary" />
                <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-primary font-medium mt-1 mb-2">
                  <span>{item.school}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span>{item.year}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-md mb-3">
                  {item.score}
                </div>
                <p className="text-muted-foreground max-w-2xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <SectionHeader title="Technical Skills" subtitle="competencies acquired through academic coursework and personal projects." />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Basics */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Programming Basics</h3>
              <p className="text-sm text-muted-foreground mb-6">Foundational knowledge in core algorithmic languages.</p>

              <div className="space-y-3">
                {[
                  { name: "Python", level: "Intermediate" },
                  { name: "Java", level: "Basics" },
                  { name: "C Language", level: "Basics" }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs px-2 py-1 bg-white text-muted-foreground rounded-full border border-gray-100 shadow-sm">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Technologies */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Web Tech</h3>
              <p className="text-sm text-muted-foreground mb-6">Modern stack used for building responsive applications.</p>

              <div className="space-y-3">
                {[
                  { name: "React.js", level: "Project Exp" },
                  { name: "Node.js", level: "Used" },
                  { name: "Express.js", level: "Used" }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between p-2 bg-secondary/50 rounded-lg">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs px-2 py-1 bg-white text-muted-foreground rounded-full border border-gray-100 shadow-sm">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Experience */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Course Experience</h3>
              <p className="text-sm text-muted-foreground mb-6">Hands-on practical exposure to hardware integration.</p>

              <div className="space-y-3">
                <div className="p-3 bg-secondary/50 rounded-lg border-l-4 border-green-500">
                  <span className="font-bold text-foreground block mb-1">IoT Embedded Systems</span>
                  <span className="text-xs text-muted-foreground">Practical lab sessions & hardware interfacing</span>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24">
          <SectionHeader title="Featured Projects" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              index={0}
              title="Smart Home Automation"
              description="An IoT-based system to control home appliances remotely via a mobile app. Features real-time energy monitoring and scheduling."
              tags={["IoT", "ESP32", "React Native", "Firebase"]}
              imageUrl="https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=1000&auto=format&fit=crop"
              repoUrl="https://github.com/prajwal"
            />
            <ProjectCard
              index={1}
              title="Portfolio Website"
              description="A modern, high-performance personal portfolio built with React and Tailwind CSS to showcase my skills and projects."
              tags={["React", "TypeScript", "Tailwind", "Framer Motion"]}
              imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
              demoUrl="https://prajwal-portfolio.com"
              repoUrl="https://github.com/prajwal"
            />
            <ProjectCard
              index={2}
              title="Zoo Management Database"
              description="A comprehensive database system for managing zoo animals, staff, ticket sales, and visitor analytics. Streamlines operations and record-keeping."
              tags={["SQL", "Database Design", "PHP", "Management System"]}
              imageUrl="https://images.unsplash.com/photo-1574068468668-a05a11f871da?q=80&w=2000&auto=format&fit=crop"
              repoUrl="https://github.com/prajwal"
            />
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="scroll-mt-24">
          <SectionHeader title="Certifications" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Java Boot Camp", image: "/certificates/java-bootcamp.jpg" },
              {
                name: "AI Fundamentals",
                issuer: "IBM / Coursera",
                date: "2023",
                image: "/certificates/ai-fundamentals.png"
              },
              { name: "Cyber Security Technologies", image: "/certificates/coursera-cybersecurity.png" },
              { name: "AWS Cloud Practitioner Essentials", image: "/certificates/coursera-aws.png" },
              { name: "Developing Front-End Apps with React", image: "/certificates/coursera-react.png" }
            ].map((cert, i) => {
              const CardContent = (
                <div className={`flex items-center p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow ${cert.image ? 'cursor-pointer hover:border-primary/50' : ''}`}>
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded-lg mr-4">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{cert.name}</h4>
                    {cert.issuer && <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>}
                  </div>
                </div>
              );

              if (cert.image) {
                return (
                  <Dialog key={i}>
                    <DialogTrigger asChild>
                      {CardContent}
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none flex items-center justify-center">
                      <div className="relative w-full h-[80vh] flex items-center justify-center pointer-events-none">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl pointer-events-auto"
                        />
                        <DialogClose className="absolute top-4 right-4 pointer-events-auto bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors">
                          <X size={24} />
                          <span className="sr-only">Exit</span>
                        </DialogClose>
                      </div>
                    </DialogContent>
                  </Dialog>
                );
              }

              return <div key={i}>{CardContent}</div>;
            })}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24 pb-24">
          <SectionHeader title="Get In Touch" subtitle="I'm currently looking for internships and new opportunities." align="center" />
          <ContactForm />
        </section>
      </div>

      <footer className="py-8 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Prajwal AM. Made with <span className="text-red-500">♥</span> and Code.</p>
        </div>
      </footer>
    </div>
  );
}
