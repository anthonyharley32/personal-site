"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { User, FolderKanban, Mail, X, Instagram, Linkedin, ChevronRight, Github, Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Layout() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const links = [
    {
      label: "About",
      href: "#home",
      icon: (
        <User className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Projects",
      href: "#projects",
      icon: (
        <FolderKanban className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Contact",
      href: "#contact",
      icon: (
        <Mail className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: () => setContactOpen(true),
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              
              {/* Social Links */}
              <SidebarLink
                link={{
                  label: "GitHub",
                  href: "https://github.com/anthonyharley32",
                  icon: <Github className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
                }}
              />
              <SidebarLink
                link={{
                  label: "X",
                  href: "https://x.com/anthony_harley1",
                  icon: (
                    <svg className="h-5 w-5 text-neutral-700 dark:text-neutral-200" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                }}
              />
              <SidebarLink
                link={{
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/anthony-harley-b8622827b/",
                  icon: <Linkedin className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
                }}
              />
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <MainContent contactOpen={contactOpen} setContactOpen={setContactOpen} />
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#home"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img
        src="/AH_logo.png"
        className="h-7 w-7 flex-shrink-0 rounded-sm object-cover"
        alt="Anthony Harley"
      />
      <motion.span
        initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Anthony Harley
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#home"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <img
        src="/AH_logo.png"
        className="h-7 w-7 flex-shrink-0 rounded-sm object-cover"
        alt="Anthony Harley"
      />
    </a>
  );
};

// Experience data structure
interface ExperienceNode {
  title: string;
  period?: string;
  description?: string;
  children?: ExperienceNode[];
}

const experienceData: ExperienceNode[] = [
  {
    title: "Alpha School",
    period: "2025",
    description: "AI Engineering",
    children: [
      {
        title: "AWS",
        children: [
          { title: "EC2" },
          { title: "Amplify" },
          { title: "AppRunner" },
          { title: "Lambda" },
          { title: "S3" },
          { title: "DynamoDB" },
        ],
      },
      {
        title: "LLMs",
        children: [
          { title: "Agent Orchestration" },
          { title: "Prompt Engineering" },
        ],
      },
      {
        title: "Full Stack Engineering",
        children: [
          { title: "React" },
          { title: "TypeScript" },
          { title: "Python" },
        ],
      },
    ],
  },
  {
    title: "Gauntlet AI",
    period: "2025",
    description: "AI Development",
    children: [
      {
        title: "LLM Development",
        children: [
          { title: "LangChain" },
          { title: "LangGraph" },
          { title: "LangFuse" },
          { title: "Agents" },
          { title: "RAG" },
          { title: "Fine Tuning" },
        ],
      },
      {
        title: "AI Modalities",
        children: [
          { title: "Voice AI" },
          { title: "Computer Vision" },
          { title: "Text-to-Video Generation" },
        ],
      },
      {
        title: "Full Stack Development",
        children: [
          { title: "TypeScript" },
          { title: "Python" },
          { title: "Supabase" },
          { title: "Firestore" },
          { title: "Swift" },
          { title: "Mobile Development" },
          { title: "ThreeJS" },
          { title: "Chrome Extensions" },
        ],
      },
      {
        title: "Development Tools",
        children: [
          { title: "Cursor" },
          { title: "Claude Code" },
          { title: "Github" },
          { title: "MCP" }
        ],
      },
    ],
  },
  {
    title: "Engin8 Engineering",
    period: "2024-2025",
    description: "Electrical Engineering & Development",
    children: [
      { title: "AutoCAD" },
      { title: "Revit" },
      { title: "Residential Schematic Design" },
    ],
  },
  {
    title: "BYU",
    period: "2021-2023",
    description: "Electrical Engineering",
    children: [
      {
        title: "Software Design",
        children: [
          { title: "C" },
          { title: "C++" },
          { title: "Arduino" },
        ],
      },
      {
        title: "Hardware Design",
        children: [
          { title: "PCB Design" },
          { title: "Eagle" },
          { title: "Fusion 360" },
        ],
      },
    ],
  },
];

// Recursive tree node component
const TreeNode = ({ node, depth = 0 }: { node: ExperienceNode; depth?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="w-full">
      <div
        className={cn(
          "flex items-center gap-2 py-2 px-3 rounded-lg transition-colors",
          hasChildren && "cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700",
          depth === 0 && "bg-neutral-100 dark:bg-neutral-700/50"
        )}
        style={{ marginLeft: depth * 24 }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren && (
          <motion.div
            initial={false}
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="h-4 w-4 text-neutral-500 dark:text-neutral-400 flex-shrink-0" />
          </motion.div>
        )}
        {!hasChildren && depth > 0 && (
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <span className={cn(
              "font-medium text-neutral-800 dark:text-neutral-100",
              depth === 0 ? "text-lg" : "text-base"
            )}>
              {node.title}
            </span>
            {node.period && (
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {node.period}
              </span>
            )}
          </div>
          {node.description && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
              {node.description}
            </p>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-1 space-y-1">
              {node.children!.map((child, index) => (
                <TreeNode key={index} node={child} depth={depth + 1} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Experience Timeline component
const ExperienceTimeline = () => {
  return (
    <div className="space-y-3">
      {experienceData.map((experience, index) => (
        <TreeNode key={index} node={experience} />
      ))}
    </div>
  );
};

// Projects data structure
interface Project {
  title: string;
  description: string;
  url: string;
  tags?: string[];
  logo?: string;
  logoAlt?: string;
  demoUrl?: string;
  demoUrl2?: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    title: "Navi",
    description: "The first and best LLM service with chat branching. Just highlight text and answer questions with perfect context management",
    url: "https://chatnavi.ai/",
    tags: ["React", "TypeScript", "Agents"],
    logo: "/navi-logo.png",
    logoAlt: "Navi logo",
  },
  {
    title: "LlamaBar",
    description: "Chrome extension for interacting with Ollama - local AI assistant powered by open-source LLMs",
    url: "https://chromewebstore.google.com/detail/llamabar/bflbgodpnihocldimhbcieiocbekecpi",
    tags: ["Chrome Extensions", "TypeScript"],
    logo: "/llamabar-logo.jpg",
    logoAlt: "LlamaBar logo",
    demoUrl: "https://x.com/anthony_harley1/status/1892079890611962153?s=20",
    githubUrl: "https://github.com/anthonyharley32/LlamaBar",
  },
  {
    title: "StadiumSync",
    description: "Stadium CRM for fans and venues built in 1 week! RAG pipeline implemented with autocomplete and self-learning responses.",
    url: "#",
    tags: ["Mobile Development", "RAG", "LangChain"],
    logo: "/stadiumsync.jpg",
    logoAlt: "StadiumSync logo",
    demoUrl: "https://x.com/anthony_harley1/status/1882951403301388447?s=20",
    demoUrl2: "https://x.com/anthony_harley1/status/1885918582883631461?s=20",
    githubUrl: "https://github.com/anthonyharley32/stadium-sync",
  },
  {
    title: "VistaVid",
    description: "TikTok Clone built with AI features like on device motion detection and content moderation with fine-tuned model.",
    url: "#",
    tags: ["Swift", "Computer Vision", "Fine Tuning"],
    logo: "/vistavid.png",
    logoAlt: "VistaVid logo",
    demoUrl: "https://x.com/anthony_harley1/status/1889877147080335697?s=20",
    demoUrl2: "https://x.com/anthony_harley1/status/1890906835009343871?s=20",
    githubUrl: "https://github.com/anthonyharley32/VistaVid",
  },
  {
    title: "ChatGenius",
    description: "Slack clone with AI features like avatar responses",
    url: "#",
    tags: ["React", "Voice AI", "Python"],
    logo: "/chatgenius.png",
    logoAlt: "ChatGenius logo",
    demoUrl: "https://x.com/anthony_harley1/status/1877875751174766842?s=20",
    demoUrl2: "https://x.com/anthony_harley1/status/1880405339532915125?s=20",
    githubUrl: "https://github.com/anthonyharley32/chat-genius",
  },
  {
    title: "AI Video Generation",
    description: "Using script and JSON to generated animated videos with AI",
    url: "#",
    tags: ["Text-to-Video Generation", "Python"],
    demoUrl: "https://x.com/anthony_harley1/status/1903568045697847558?s=20",
    githubUrl: "https://github.com/anthonyharley32/vid-gen-server",
  },
];

// Main content with scrollable sections
const MainContent = ({ contactOpen, setContactOpen }: { contactOpen: boolean; setContactOpen: (open: boolean) => void }) => {
  
  return (
    <div className="flex-1 overflow-y-auto scroll-smooth bg-white dark:bg-neutral-900 rounded-tl-2xl border-l border-t border-neutral-200 dark:border-neutral-700">
      {/* About Section (merged with Home) */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center p-10 bg-neutral-50 dark:bg-neutral-800"
      >
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0 hover:scale-105 transition-transform duration-100">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="/anthony bodybodyshot.JPG"
              alt="Anthony Harley"
              className="w-64 h-80 md:w-80 md:h-96 object-cover shadow-xl"
              style={{
                clipPath: "polygon(18% 0, 100% 0, 100% 85%, 82% 100%, 0 100%, 0 15%)"
              }}
            />
          </div>
          
          {/* Text */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-2"
            >
              Hi, I'm Anthony Harley (할리)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-600 dark:text-neutral-400 mb-6"
            >
              AI Engineer & Developer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-600 dark:text-neutral-400 mb-8"
            >
              I build production AI systems that drive real outcomes. From shipping the first LLM chat service with branching (Navi) to building full-stack mobile apps in 1 week, I rapidly prototype and deploy intelligent systems. Trained in AI engineering with AWS + advanced LLMs, specializing in LangChain, RAG pipelines, and full-stack development.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => setContactOpen(true)}
                className="px-6 py-3 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:scale-105 transition-transform duration-100 cursor-pointer"
              >
                Get In Touch
              </button>
              <a
                href="/Software Engineering Resume.png"
                download="Anthony_Harley_Resume.png"
                className="px-6 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-lg font-medium border-2 border-neutral-800 dark:border-neutral-100 hover:scale-105 transition-transform duration-100 cursor-pointer flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Resume
              </a>
            </motion.div>
          </div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl w-full mt-16"
        >
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Experience
          </h2>
          <ExperienceTimeline />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-10"
      >
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-transform duration-100 flex flex-col relative"
              >
                {/* GitHub Icon in top right */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-100"
                    aria-label="View on GitHub"
                  >
                    <Github className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                  </a>
                )}
                
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                    {project.title}
                  </h3>
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt={project.logoAlt || project.title}
                      className="h-8 w-8 object-contain rounded-lg flex-shrink-0"
                    />
                  )}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Buttons */}
                {project.title === "Navi" ? (
                  // Navi: Only "Visit App" button
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto px-4 py-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm font-medium rounded-lg border-2 border-neutral-900 dark:border-white hover:scale-105 transition-transform duration-100 text-center cursor-pointer"
                  >
                    Visit App
                  </a>
                ) : project.title === "LlamaBar" ? (
                  // LlamaBar: Combined button with divider
                  <div className="mt-auto flex rounded-lg overflow-hidden border-2 border-neutral-900 dark:border-white">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium text-center cursor-pointer hover:scale-105 transition-transform duration-100"
                    >
                      View Demo
                    </a>
                    <div className="w-px bg-neutral-900 dark:bg-white"></div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-sm font-medium text-center cursor-pointer hover:scale-105 transition-transform duration-100"
                    >
                      Visit App
                    </a>
                  </div>
                ) : project.demoUrl2 ? (
                  // Projects with two demos: split button design
                  <div className="mt-auto flex rounded-lg overflow-hidden border-2 border-neutral-900 dark:border-white">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-neutral-900 dark:bg-neutral-900 text-white dark:text-white text-sm font-medium text-center cursor-pointer hover:scale-105 transition-transform duration-100 origin-right"
                    >
                      View Demo 1
                    </a>
                    <div className="w-px bg-white dark:bg-white"></div>
                    <a
                      href={project.demoUrl2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-neutral-900 dark:bg-neutral-900 text-white dark:text-white text-sm font-medium text-center cursor-pointer hover:scale-105 transition-transform duration-100 origin-left"
                    >
                      View Demo 2
                    </a>
                  </div>
                ) : project.demoUrl ? (
                  // All others: "View Demo" button
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto px-4 py-2 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-lg hover:scale-105 transition-transform duration-100 text-center cursor-pointer"
                  >
                    View Demo
                  </a>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-10"
      >
        {/* Divider */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-600 to-transparent" />
        </div>
        
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Get In Touch Button */}
          <motion.button
            onClick={() => setContactOpen(true)}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "px-8 py-4 cursor-pointer hover:scale-105 transition-transform duration-100 rounded-lg",
              "bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900",
              "hover:shadow-xl hover:shadow-neutral-400/20"
            )}
          >
            <span className="text-xl font-semibold">
              Get In Touch
            </span>
          </motion.button>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {contactOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setContactOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-lg pointer-events-auto relative">
                {/* Close button */}
                <button
                  onClick={() => setContactOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 transition-all duration-100 cursor-pointer"
                >
                  <X className="h-5 w-5 text-neutral-500" />
                </button>
                
                {/* Modal content */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                    Get In Touch
                  </h2>
                  
                  {/* 
                    To enable email: 
                    1. Go to https://formspree.io and sign up (free)
                    2. Create a new form
                    3. Replace YOUR_FORM_ID below with your actual form ID
                  */}
                  <form
                    action="https://formspree.io/f/xeoqlorp"
                    method="POST"
                    className="space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-500 resize-none"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900 py-3 rounded-lg font-medium hover:scale-105 transition-transform duration-100 cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                  
                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
                    <span className="text-sm text-neutral-500">or</span>
                    <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-700" />
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="https://x.com/anthony_harley1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:scale-105 transition-transform duration-100"
                    >
                      <svg className="h-5 w-5 text-neutral-700 dark:text-neutral-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/anthony_harley32/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:scale-105 transition-transform duration-100"
                    >
                      <Instagram className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/anthony-harley-b8622827b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:scale-105 transition-transform duration-100"
                    >
                      <Linkedin className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

