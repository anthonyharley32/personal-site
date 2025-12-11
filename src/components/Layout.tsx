"use client";

import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { User, FolderKanban, Mail, X, Instagram, Linkedin, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Layout() {
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
    },
  ];
  const [open, setOpen] = useState(false);

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
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <MainContent />
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
        src="/Anthony Headshot.jpeg"
        className="h-7 w-7 flex-shrink-0 rounded-full object-cover"
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
        src="/Anthony Headshot.jpeg"
        className="h-7 w-7 flex-shrink-0 rounded-full object-cover"
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
    title: "BYU",
    period: "2021-2023",
    description: "Electrical Engineering",
    children: [],
  },
  {
    title: "Electrical Engineering Firm",
    period: "2023-2025",
    description: "Engineering & Development",
    children: [],
  },
  {
    title: "Gauntlet AI",
    period: "2025",
    description: "AI Development",
    children: [],
  },
  {
    title: "Alpha School",
    period: "2025-Present",
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
          { title: "OpenAI" },
          { title: "Anthropic" },
          { title: "Prompt Engineering" },
          { title: "RAG" },
        ],
      },
      {
        title: "Full Stack Engineering",
        children: [
          { title: "React" },
          { title: "TypeScript" },
          { title: "Node.js" },
          { title: "Next.js" },
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
            transition={{ duration: 0.2, ease: "easeInOut" }}
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

// Main content with scrollable sections
const MainContent = () => {
  const [contactOpen, setContactOpen] = useState(false);
  
  return (
    <div className="flex-1 overflow-y-auto scroll-smooth bg-white dark:bg-neutral-900 rounded-tl-2xl border-l border-t border-neutral-200 dark:border-neutral-700">
      {/* About Section (merged with Home) */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center p-10 bg-neutral-50 dark:bg-neutral-800"
      >
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="/anthony bodybodyshot.JPG"
              alt="Anthony Harley"
              className="w-64 h-80 md:w-80 md:h-96 object-cover shadow-xl"
              style={{
                clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)"
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
              className="text-lg text-neutral-600 dark:text-neutral-400 mb-4"
            >
              I'm an AI engineer with a background in electrical engineering, now focused on building intelligent systems and modern web applications. I work with LLMs, cloud infrastructure, and full-stack development.
            </motion.p>
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
        className="min-h-screen flex items-center justify-center p-10"
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div
                key={i}
                className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-neutral-200 dark:bg-neutral-700 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  Project {i}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  A brief description of this project and what it does.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-10"
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          {/* Get In Touch Button */}
          <motion.button
            onClick={() => setContactOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "px-8 py-4 transition-all duration-300 cursor-pointer",
              "bg-gradient-to-br from-neutral-800 to-neutral-900 dark:from-neutral-100 dark:to-neutral-200",
              "hover:shadow-xl hover:shadow-neutral-400/20"
            )}
          >
            <span className="text-xl font-semibold text-white dark:text-neutral-900">
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
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-lg pointer-events-auto relative">
                {/* Close button */}
                <button
                  onClick={() => setContactOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
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
                      className="w-full bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-900 py-3 rounded-lg font-medium hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
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
                      className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <svg className="h-5 w-5 text-neutral-700 dark:text-neutral-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/anthony_harley32/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/anthony-harley-b8622827b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
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

