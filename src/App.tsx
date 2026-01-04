import { Canvas } from '@react-three/fiber';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Cube } from './components/Cube';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-off-white w-full min-h-screen selection:bg-accent selection:text-white">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Section id="projects" className="bg-black text-white">
          <div className="max-w-5xl mx-auto">
            <span className="font-mono text-accent text-xs mb-4 block">01 / PROJECTS</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-16 leading-[0.9]">
              SELECTED <br />
              <span className="text-stroke text-white">WORKS</span>
            </h2>

            <div className="flex flex-col gap-16">
              <div className="group border-t border-white/20 pt-8">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">SILENT GUARDIAN</h3>
                  <span className="font-mono text-xs text-accent">2025</span>
                </div>
                <p className="text-xl max-w-2xl opacity-70 mb-6">
                  Offline-first AI system analyzing voice samples to detect emotional patterns without cloud dependency. Privacy-centric architecture with on-device inference.
                </p>
                <div className="flex gap-4 font-mono text-xs">
                  <span className="border border-white px-2 py-1">PYTHON</span>
                  <span className="border border-white px-2 py-1">TENSORFLOW</span>
                  <span className="border border-white px-2 py-1">PRIVACY-FIRST</span>
                </div>
              </div>

              <div className="group border-t border-white/20 pt-8">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">AI STUDY ASSISTANT</h3>
                  <span className="font-mono text-xs text-accent">2025</span>
                </div>
                <p className="text-xl max-w-2xl opacity-70 mb-6">
                  Full-stack learning platform summarizing academic content via LLM APIs. Optimized for low latency and smooth learning workflows.
                </p>
                <div className="flex gap-4 font-mono text-xs">
                  <span className="border border-white px-2 py-1">REACT</span>
                  <span className="border border-white px-2 py-1">LLM APIs</span>
                  <span className="border border-white px-2 py-1">NODE.JS</span>
                </div>
              </div>

              <div className="group border-t border-white/20 pt-8">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">ML CLASSIFICATION</h3>
                  <span className="font-mono text-xs text-accent">2025</span>
                </div>
                <p className="text-xl max-w-2xl opacity-70 mb-6">
                  Supervised learning models achieving 92% accuracy. Rigorous hyperparameter tuning and data preprocessing pipelines.
                </p>
                <div className="flex gap-4 font-mono text-xs">
                  <span className="border border-white px-2 py-1">SCIKIT-LEARN</span>
                  <span className="border border-white px-2 py-1">DATA ANALYSIS</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="experience" className="bg-off-white text-black">
          <div className="max-w-5xl mx-auto text-right">
            <span className="font-mono text-accent text-xs mb-4 block">02 / EXPERIENCE</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-16 leading-[0.9]">
              CAREER <br />
              <span className="text-stroke" style={{ WebkitTextFillColor: '#F2F2F2' }}>TRAJECTORY</span>
            </h2>

            <div className="flex flex-col items-end gap-12">
              <div className="border-b border-black/20 pb-8 w-full md:w-2/3">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold">CONTRIBUTOR</h3>
                  <span className="font-mono text-accent">NOV 2025 - PRESENT</span>
                </div>
                <h4 className="text-xl mb-4 font-mono opacity-80">GITHUB</h4>
                <ul className="text-lg opacity-70 list-disc list-inside space-y-2 text-left">
                  <li>Actively contributing to open source projects.</li>
                  <li>Building and maintaining personal projects in AI and Full Stack.</li>
                </ul>
              </div>

              <div className="border-b border-black/20 pb-8 w-full md:w-2/3">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold">AI/ML INTERN</h3>
                  <span className="font-mono text-accent">DEC 2025 - JAN 2026</span>
                </div>
                <h4 className="text-xl mb-4 font-mono opacity-80">SHADOWFOX (REMOTE)</h4>
                <ul className="text-lg opacity-70 list-disc list-inside space-y-2 text-left">
                  <li>Designed and optimized end-to-end machine learning pipelines using Python and TensorFlow.</li>
                  <li>Improved model accuracy and reliability by ~20%.</li>
                  <li>Integrated Generative AI features using Google Gemini APIs.</li>
                </ul>
              </div>

              <div className="border-b border-black/20 pb-8 w-full md:w-2/3">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold">MEMBER</h3>
                  <span className="font-mono text-accent">OCT 2025 - NOV 2025</span>
                </div>
                <h4 className="text-xl mb-4 font-mono opacity-80">GDGoC PUP (GDSC)</h4>
                <ul className="text-lg opacity-70 list-disc list-inside space-y-2 text-left">
                  <li>Participated in tech community events and workshops.</li>
                  <li>Collaborated with peers on technical learning.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="arsenal" className="bg-black text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none">
            <Canvas>
              <ambientLight intensity={0.5} />
              <Cube />
            </Canvas>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <span className="font-mono text-accent text-xs mb-4 block">03 / ARSENAL</span>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-12 mix-blend-difference">
              THE STACK
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 border border-white/10 hover:bg-white hover:text-black transition-colors duration-300">
                <h3 className="font-mono text-accent mb-2">CORE</h3>
                <h4 className="font-bold text-xl mb-2">LANGUAGES</h4>
                <p className="opacity-60 text-sm">Python, C++, JavaScript, SQL, HTML/CSS, Bash</p>
              </div>
              <div className="p-6 border border-white/10 hover:bg-white hover:text-black transition-colors duration-300">
                <h3 className="font-mono text-accent mb-2">INTELLIGENCE</h3>
                <h4 className="font-bold text-xl mb-2">AI / ML</h4>
                <p className="opacity-60 text-sm">TensorFlow, Scikit-learn, Google Gemini, OpenCV, LLMs</p>
              </div>
              <div className="p-6 border border-white/10 hover:bg-white hover:text-black transition-colors duration-300">
                <h3 className="font-mono text-accent mb-2">INFRA</h3>
                <h4 className="font-bold text-xl mb-2">TOOLS & WEB</h4>
                <p className="opacity-60 text-sm">React, Node.js, Tailwind CSS, Vercel V0, Git/GitHub, Linux</p>
              </div>
            </div>
          </div>
        </Section>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
