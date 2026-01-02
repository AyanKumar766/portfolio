import { Section } from './Section';

export const About = () => {
    return (
        <Section id="about" className="bg-off-white text-black">
            <div className="max-w-5xl mx-auto">
                <span className="font-mono text-accent text-xs mb-4 block">00 / ABOUT</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 leading-[1.1]">
                    BUILDING THE <br />
                    <span className="text-transparent text-stroke">INVISIBLE</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl opacity-90">
                        I am an <span className="text-accent">Ayan Kumar</span> ,a computer science student and software developer focused on building practical, privacy-aware, and user-centric applications. I enjoy solving real-world problems using full-stack development and AI, with a strong emphasis on clean code, thoughtful design, and continuous learning.
                    </p>

                    <div className="flex flex-col gap-6 text-sm font-mono opacity-60">
                        <p>
                            CURRENTLY FOCUSING ON<br />
                            NEXT-GEN PRIVACY TECH
                        </p>
                        <p>
                            BASED IN<br />
                            DIGITAL SPACE
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
