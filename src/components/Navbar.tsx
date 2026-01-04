import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

import resume from '../assets/Resume.pdf';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { number: '01', label: 'PROJECTS', href: '#projects' },
        { number: '02', label: 'EXPERIENCE', href: '#experience' },
        { number: '03', label: 'ARSENAL', href: '#arsenal' },
        { number: '04', label: 'CONTACT', href: '#contact' },
    ];

    return (
        <>
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-start pointer-events-none">
                <button
                    onClick={() => setIsOpen(true)}
                    className="pointer-events-auto bg-black text-white p-3 hover:bg-accent transition-colors duration-300"
                >
                    <Menu size={24} />
                </button>

            </header>

            {/* Side Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.5, ease: 'circOut' }}
                        className="fixed inset-0 z-[60] bg-black text-white flex flex-col"
                    >
                        <div className="p-6 md:p-8 flex justify-between items-center border-b border-white/10">
                            <span className="font-bold tracking-tighter text-2xl">ASORBIT</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-3 hover:text-accent transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <nav className="flex-1 flex flex-col justify-center px-8 md:px-16 gap-8">
                            {menuItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-baseline gap-4 text-4xl md:text-6xl font-black tracking-tighter hover:text-accent transition-colors"
                                >
                                    <span className="text-sm font-mono text-neutral-500 group-hover:text-accent/50 transition-colors">
                                        {item.number}
                                    </span>
                                    {item.label}
                                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-4" />
                                </a>
                            ))}
                        </nav>

                        <div className="p-8 border-t border-white/10 flex justify-between font-mono text-xs text-neutral-500">
                            <p>© 2026 AYAN KUMAR</p>
                            <div className="flex gap-2">
                                <a href={resume} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">RESUME</a>
                                <span>/</span>
                                <a href="https://www.linkedin.com/in/ayan-kumar-/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LINKEDIN</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >
        </>
    );
};
