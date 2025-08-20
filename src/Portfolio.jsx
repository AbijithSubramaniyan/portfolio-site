import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import SpotlightCard from "./components/SpotlightCard";
import TextType from "./components/TextType";
import Spotlight from "./components/Spotlight";
import NoiseLayer from "./components/NoiseLayer";
import DotGrid from "./components/DotGrid";



export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" }
  ];

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-inter w-full h-screen overflow-y-auto flex text-slate-300 relative scrollbar-hide">
      <DotGrid
  dotSize={2}
  gap={80}
  baseColor="#5A5A5A"        // replace with your chosen hex
  activeColor="#BEBEC6"      // replace with your chosen hex
  proximity={120}
  shockRadius={160}
  shockStrength={5}
  resistance={750}
  returnDuration={1.5}
/>

      <NoiseLayer />
      {/* Left Column - Hero & Nav */}
      <aside className="w-full md:w-[30%] p-8 pt-24 sticky top-0 h-screen flex flex-col">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Abijith Subramaniyan Kunnath</h1>
          <h2 className="text-xl text-teal-400 mb-4 flex items-center gap-1">
  <span className="text-teal-400">Data</span>
  <TextType
    text={[
      "Science Graduate",
      "Analyst?",
      "Engineer?",
      "Specialist?",
    ]}
    typingSpeed={60}
    deletingSpeed={30}
    pauseDuration={2000}
    initialDelay={500}
    loop={true}
    showCursor={true}
    hideCursorWhileTyping={false}
    cursorCharacter="_"
    cursorClassName="text-white"
    cursorBlinkDuration={0.5}
    className="text-teal-400"
  />
</h2>


          <p className="text-slate-400 leading-relaxed mb-6">
            I build data-powered digital experiences for web and mobile. Passionate about ML, analytics, and elegant software solutions.
          </p>
        </div>

        <nav className="mt-2 space-y-3 font-mono text-sm">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block font-mono text-sm transition ${
                activeSection === section.id
                  ? "text-white font-bold"
                  : "text-teal-400 hover:text-white"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-4">
          <div className="flex space-x-4 text-2xl text-slate-400">
            <a href="https://github.com/AbijithSubramaniyan" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abijith-subramaniyan-kunnath-851567126" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/abijithsubramaniyan" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
              <FaInstagram />
            </a>
            <a href="mailto:abijith.subramaniyan@gmail.com" className="hover:text-teal-400">
              <HiOutlineMail />
            </a>
          </div>
           <a
            href="/Abijith_Subramaniyan_Kunnath_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-teal-400 transition-colors duration-300 font-mono"
          >
            View Resumé
            <span aria-hidden="true">↗</span>
          </a>

        </div>
      </aside>

      {/* Right Column - Scrollable Sections */}
      {/* <main className="w-full md:w-[70%] pt-24 overflow-y-auto h-screen pr-2 scrollbar-hide"> */}
      <main className="w-full md:w-[70%] pt-24 pr-2">

        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="max-w-2xl w-full mx-auto py-16 px-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            
        {section.id === "about" && (
  <div className="text-lg leading-relaxed space-y-6 text-slate-400 mb-6">
    <p>
      I’m a developer passionate about crafting engaging user interfaces and building impactful data-driven experiences. With a unique blend of front-end creativity and data science training, I enjoy working at the intersection of clean design and meaningful insights — whether it’s building pixel-perfect web interfaces or transforming raw data into decision-making tools.
    </p>
    <p>
      I recently completed my Master’s in Data Science from the University of Canberra, specializing in Business Intelligence. I’m currently exploring full-time roles in both frontend and data-related positions, while working as a Retail Assistant at{" "}<a href="https://bws.com.au" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400">BWS</a>
. Previously, I worked at{" "}<a href="https://www.tcs.com/home-page" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400">Tata Consultancy Services</a> as a Systems Engineer, where I contributed to SAP retail operations for Marks & Spencer.
    </p>
    <p>
      My most rewarding work includes building <strong>TyireEye™</strong>, a driving condition prediction app using BLE sensors and machine learning, and publishing a paper on <strong>MRI Age Estimation using PNN</strong> during my undergraduate studies. I take pride in designing my personal portfolio from scratch, which reflects both my visual design sensibilities and engineering mindset.
    </p>
    <p>
      Right now, I’m refining my Python skills and diving deep into Power BI through Maven Analytics. I’m also intrigued by generative AI and plan to explore quirky ML projects and eventually build my own web-based product platform. I love creating things that are both fun and functional.
    </p>
    <p>
      Outside of tech, I’m usually at the gym, upgrading my PC, or hunting secrets in a Soulsborne or Metroidvania game. I collect vinyl records, love spinning my favorite hip-hop albums, and most days — I’m just trying to live life with a bit more <span className="text-white hover:text-[#a52355]" style={{ cursor: "url('/kendrick-cursor.png'), auto" }}>Kendrick Lamar</span> in the background.
    </p>
  </div>
)}



        {section.id === "experience" && (
          <div className="space-y-6">
            <SpotlightCard className="group">
              <div className="flex flex-col md:flex-row md:gap-8">
                {/* Date on the left */}
                <div className="md:w-1/4 mb-2 md:mb-0">
                  <p className="text-sm text-white/50">2020 — 2022</p>
              </div>

        {/* Content on the right */}
        <div className="md:w-3/4">
          <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
            Systems Engineer · TCS (Chennai)
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6">Maintained and updated retail datasets using Excel & SAP. Experience with ABAP, HANA, Retail modules. Used Jira for defect tracking and agile coordination. <br />
            <span className="block mt-4 font-medium text-white">Key contributions:</span>
          </p>
          <ul className="list-disc list-outside space-y-2 pl-6 text-slate-400 leading-relaxed mb-6">
            <li>Conducted diagnostic tests for SAP applications to ensure quality and client alignment.</li>
            <li>Collaborated in a fast-paced agile team on SAP application testing and support.</li>
            <li>Worked in project environments using Jira for ticket management and SAP for testing.</li>
            <li>Collaborated with cross-functional teams to ensure timely and successful deployments.</li>
            <li>Used Jira extensively for project and issue tracking.</li>
          </ul>
        </div>
          </div>
    </SpotlightCard>

    <SpotlightCard className="group">
      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="md:w-1/4 mb-2 md:mb-0">
          <p className="text-sm text-white/50">2023 — Present</p>
        </div>
        <div className="md:w-3/4">
          <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
            Retail Assistant · BWS (Canberra)
          </h3>
          <p className="text-slate-400 leading-relaxed mb-6">Delivered excellent customer service in a retail liquor environment. Assisted with purchases, managed inventory, and ensured RSA compliance. <br />
            <span className="block mt-4 font-medium text-white">Key contributions:</span>
          </p>
          <ul className="list-disc list-outside space-y-2 pl-6 text-slate-400 leading-relaxed mb-6">
            <li>Trained in handling regulated goods under Australian RSA compliance.</li>
            <li>Improved inventory accuracy and display standards.</li>
            <li>Strengthened soft skills like teamwork, conflict resolution, and reliability.</li>
          </ul>
        </div>
      </div>
    </SpotlightCard>
          </div>
)}


            {section.id === "projects" && (
  <div className="flex flex-col gap-6">
    <SpotlightCard>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">TyireEye™ – Driving Conditions Warning App</h3>
      <p className="text-slate-400 leading-relaxed mb-6">Built a real-time hazard detection Android app using Bluetooth-enabled tyre pressure sensors (TPMS). Designed data pipelines to ingest, clean, and validate sensor streams, ensuring consistency and accuracy. Developed a FastAPI backend hosting three machine learning models for predicting grip score, tyre pressure issues, and road conditions. Integrated a live dashboard-style UI with visual gauges, alerts, and logging to track driving sessions and potential incidents.
        <br />
        <br/>
        Ensured model stability across varying road/weather conditions and implemented privacy-aware data flows. Collaborated with a team to document the system and maintain development integrity across modules.</p>
      <p className="text-sm text-teal-400">Kotlin · BLE · FastAPI · Python · Scikit-learn</p>
    </SpotlightCard>

    <SpotlightCard>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">MRI Age Estimation using PNN</h3>
      <p className="text-slate-400 leading-relaxed mb-6">Engineered a machine learning pipeline to predict human age from MRI scans using Discrete Wavelet Transform (DWT) and Gray-Level Co-occurrence Matrix (GLCM) for texture-based feature extraction. Trained a Probabilistic Neural Network (PNN), achieving 93.3% accuracy. <br/> <br/>

The project adhered to strict data handling and preprocessing protocols and was published in a peer-reviewed journal. Managed project independently, from model training to documentation, showcasing both research aptitude and practical ML implementation skills.</p>
      <p className="text-sm text-teal-400">Matlab · GLCM · DWT</p>
    </SpotlightCard>
  </div>
)}

          </motion.section>
        ))}
      </main>
    </div>
  );

}
