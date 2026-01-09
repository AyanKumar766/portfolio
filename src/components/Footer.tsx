export const Footer = () => {
    return (
        <footer className="bg-black text-neutral-500 py-12 px-6 md:px-12 border-t border-white/10 font-mono text-xs">
            <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="flex flex-col gap-2">
                    <span className="text-white font-bold tracking-tighter text-xl">AYAN KUMAR</span>
                    <p>ASPIRING SOFTWARE ENGINEER</p>
                </div>

                <div className="flex gap-12">
                    <div className="flex flex-col gap-2">
                        <span className="text-white">PROJECTS</span>
                        <a href="https://github.com/kumar-ayan/Silent-Guardian" className="hover:text-accent transition-colors">GUARDIAN</a>
                        <a href="#projects" className="hover:text-accent transition-colors">ASSISTANT</a>
                        <a href="#projects" className="hover:text-accent transition-colors">CLASSIFIER</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white">CONNECT</span>
                        <a href="mailto:exoticayann@gmail.com" className="hover:text-accent transition-colors">EMAIL</a>
                        <a href="https://github.com/kumar-ayan" className="hover:text-accent transition-colors">GITHUB</a>
                        <a href="https://www.linkedin.com/in/ayan-kumar-/" className="hover:text-accent transition-colors">LINKEDIN</a>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex justify-between uppercase">
                <span>© 2026 / ALL RIGHTS RESERVED</span>
                <span>SYSTEM STATUS: STABLE</span>
            </div>
        </footer>
    );
};
