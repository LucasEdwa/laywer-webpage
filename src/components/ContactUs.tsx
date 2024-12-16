import React, { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

// Declare grecaptcha as a global variable
declare const grecaptcha: any;

export default function ContactUs() {
    const form = useRef<HTMLFormElement>(null);
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        grecaptcha.ready(() => {
            grecaptcha.render('recaptcha', {
                sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY!,
                callback: (token: string) => {
                    setRecaptchaToken(token);
                    setIsVerified(true);
                },
                'expired-callback': () => {
                    setRecaptchaToken('');
                    setIsVerified(false);
                }
            });
        });
    }, []);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        if (!isVerified) {
            alert('Please verify that you are not a robot.');
            return;
        }

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID!,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
            form.current!,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
        ).then(
            () => {
                alert('Message sent successfully!');
                form.current?.reset();
                // Reset state
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            },
            (error) => {
                console.error('Failed to send message:', error.text);
                alert('Failed to send message. Please try again later.');
            }
        );
    };

    return (
        <div>
            <section className="mx-10 border-y-2">
                <div className="text-center flex flex-col gap-7 p-7">
                    <h1 className="text-4xl font-bold">Kontakta oss</h1>
                    <p className="text-xl">Vi är en advokatbyrå som erbjuder juridisk rådgivning inom familjerätt, socialrätt och migrationsrätt.</p>
                </div>
                <form ref={form} className="flex w-full flex-col justify-center gap-10 p-4" onSubmit={sendEmail}>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="name">Namn</label>
                        <input type="text" id="name" name="user_name" className="border p-2" required onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="email">E-post</label>
                        <input type="email" id="email" name="user_email" className="border p-2" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" id="phone" name="user_phone" className="border p-2" onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="message">Meddelande</label>
                        <textarea id="message" name="message" className="border p-2" required onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div className="flex justify-center p-8 relative">
                        <div id="recaptcha"></div>
                    </div>
                    <div className="flex justify-center p-8 relative">
                        <button className="bg-black hover:bg-gray-700 text-white shadow-xl font-bold py-2 px-8 rounded-md" type="submit">
                            SKICKA
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}