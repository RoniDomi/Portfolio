import '../screen.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import type { FormEvent } from 'react';

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return; // type-safe guard

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert('Message sent!');
        form.current?.reset();
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <>
    <div id='contactform'>
        <h1>Contact me!</h1>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message" required />
            <button type="submit">Send</button>
        </form>
    </div>
    </>
  );
}
