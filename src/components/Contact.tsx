import { ArrowUpRight } from 'lucide-react';
import { Section } from './Section';

export const Contact = () => {
    const email = 'ayan.1236176@gmail.com';

    return (
        <Section id="contact" className="bg-white text-black">
            <div className="max-w-5xl mx-auto">
                <span className="font-mono text-accent text-xs mb-4 block">04 / CONTACT</span>

                <div className="flex flex-col gap-8 md:gap-16">
                    <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                        LET'S WORK <br />
                        <span className="text-stroke text-transparent">TOGETHER</span>
                    </h2>

                    <div className="flex flex-col gap-8">
                        <a
                            href={`mailto:${email}`}
                            className="group flex items-center gap-4 text-2xl md:text-5xl font-bold hover:text-accent transition-colors duration-300 w-fit"
                        >
                            <span>SEND AN EMAIL</span>
                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 size-8 md:size-12" />
                        </a>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-black/10 pt-8 mt-8">
                            <div>
                                <h3 className="font-mono text-xs mb-4 opacity-50">SOCIALS</h3>
                                <div className="flex flex-col gap-2 text-xl font-bold">
                                    <a href="https://www.linkedin.com/in/ayan-kumar-/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors w-fit">LINKEDIN</a>
                                    <a href="https://github.com/AyanKumar766" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors w-fit">GITHUB</a>

                                </div>
                            </div>

                            <div>
                                <h3 className="font-mono text-xs mb-4 opacity-50">CURRENTLY BASED IN</h3>
                                <p className="text-xl font-bold">Patiala, Punjab, India</p>
                                <p className="mt-2 opacity-60 max-w-sm">OPEN TO REMOTE OPPORTUNITIES & FREELANCE PROJECTS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
