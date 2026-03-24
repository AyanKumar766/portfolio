import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Section } from './Section';

const CONTACT_EMAIL = 'exoticayann@gmail.com';

const sanitizeSingleLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        website: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (formData.website.trim()) {
            setStatus('idle');
            return;
        }

        const name = sanitizeSingleLine(formData.name);
        const email = sanitizeSingleLine(formData.email);
        const message = formData.message.trim();

        if (!name || !email || !message) {
            setErrorMessage('Please complete every field before opening the email draft.');
            setStatus('error');
            return;
        }

        setErrorMessage('');
        setStatus('loading');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "3825446d-d67d-4ac5-bb49-22f501072ac4");
            formDataToSend.append("name", name);
            formDataToSend.append("email", email);
            formDataToSend.append("message", message);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '', website: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error("Submission failed:", data);
                setErrorMessage('Message submission failed. Please try again.');
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setErrorMessage('Unable to send message. Please use the direct email link instead.');
            setStatus('error');
        }
    };

    return (
        <Section id="contact" className="bg-white text-black relative z-20">
            <div className="max-w-6xl mx-auto">
                <span className="font-mono text-accent text-xs mb-8 block">04 / CONTACT</span>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Info */}
                    <div className="flex flex-col gap-12">
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                            LET'S WORK <br />
                            <span className="text-stroke" style={{ WebkitTextFillColor: 'white' }}>TOGETHER</span>
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="font-mono text-xs mb-4 opacity-50">SOCIALS</h3>
                                <div className="flex flex-col gap-2 text-xl font-bold">
                                    <a href="https://www.linkedin.com/in/ayan-kumar-/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors w-fit">LINKEDIN</a>
                                    <a href="https://github.com/kumar-ayan" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors w-fit">GITHUB</a>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-mono text-xs mb-4 opacity-50">CURRENTLY BASED IN</h3>
                                <p className="text-xl font-bold">Patiala, Punjab, India</p>
                                <p className="mt-2 opacity-60 max-w-sm">OPEN TO REMOTE OPPORTUNITIES & FREELANCE PROJECTS.</p>
                            </div>

                            <div>
                                <h3 className="font-mono text-xs mb-4 opacity-50">DIRECT EMAIL</h3>
                                <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl font-bold hover:text-accent transition-colors">{CONTACT_EMAIL}</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:pt-4">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-30 p-8 md:p-10 border border-black/10 rounded-2xl shadow-2xl bg-white">
                            {status === 'success' ? (
                                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border border-black/10 bg-off-white/50 rounded-2xl shadow-xl">
                                    <CheckCircle2 className="size-16 text-accent mb-6" />
                                    <h3 className="text-3xl font-bold tracking-tighter mb-2">MESSAGE SENT</h3>
                                    <p className="opacity-60">Thanks for reaching out! I'll get back to you soon.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="sr-only" aria-hidden="true">
                                        <label htmlFor="website">Website</label>
                                        <input
                                            type="text"
                                            id="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            value={formData.website}
                                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        />
                                    </div>

                                    <div className="group">
                                        <label htmlFor="name" className="font-mono text-xs opacity-50 mb-2 block group-focus-within:text-accent transition-colors">NAME</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            maxLength={80}
                                            autoComplete="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-transparent border-b border-black/20 py-4 text-xl md:text-2xl font-bold focus:outline-none focus:border-accent transition-colors placeholder:text-black/20"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="group">
                                        <label htmlFor="email" className="font-mono text-xs opacity-50 mb-2 block group-focus-within:text-accent transition-colors">EMAIL</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            maxLength={254}
                                            autoComplete="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-transparent border-b border-black/20 py-4 text-xl md:text-2xl font-bold focus:outline-none focus:border-accent transition-colors placeholder:text-black/20"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="group">
                                        <label htmlFor="message" className="font-mono text-xs opacity-50 mb-2 block group-focus-within:text-accent transition-colors">MESSAGE</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            maxLength={2000}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-transparent border-b border-black/20 py-4 text-xl md:text-2xl font-bold focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-black/20"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-sm text-red-600" role="alert">
                                            {errorMessage}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="mt-8 bg-black text-white px-8 py-6 flex items-center justify-between group hover:bg-accent transition-colors duration-300 disabled:opacity-50 disabled:hover:bg-black"
                                    >
                                        <span className="font-bold tracking-wider">
                                            {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                                        </span>
                                        {status === 'loading' ? (
                                            <Loader2 className="animate-spin" />
                                        ) : (
                                            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        )}
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
};
