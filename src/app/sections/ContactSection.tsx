import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { Mail, Phone } from 'lucide-react';
import ramataPhoto from 'figma:asset/Portrait Ramata.png';
import { useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { trackEvent } from '../lib/analytics';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgobvwey';

const infoCards = [
  {
    icon: Mail,
    title: 'E-mail',
    value: 'ramahsissoko93@gmail.com',
    href: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=ramahsissoko93@gmail.com',
    external: true,
    color: 'bg-[var(--portfolio-soft)]',
  },
  {
    icon: Phone,
    title: 'Telephone',
    value: '07 81 53 33 15',
    href: 'tel:+33781533315',
    color: 'bg-[var(--portfolio-accent-mint)]',
  },
];

const projectOptions = [
  { value: 'cdi', label: 'CDI' },
  { value: 'cdd', label: 'CDD' },
  { value: 'alternance', label: 'Alternance' },
  { value: 'site web', label: 'Création d’un site web' },
  { value: 'amelioration', label: 'Amélioration d’un site existant' },
  { value: 'autre', label: 'Autre demande' },
];

const backgroundCodeSnippets = [
  {
    code: `<section class="contact">\n  <h2>Restons en contact</h2>\n</section>`,
    className:
      'top-8 left-4 -rotate-12 text-[0.68rem] sm:text-xs md:text-sm max-w-[11rem] sm:max-w-[13rem]',
  },
  {
    code: `.contact-card {\n  display: grid;\n  gap: 2rem;\n}`,
    className:
      'top-10 right-0 rotate-12 text-[0.68rem] sm:text-xs md:text-sm max-w-[11rem] sm:max-w-[13rem]',
  },
  {
    code: `const message = 'Bonjour';\nconsole.log(message);`,
    className:
      'top-1/3 left-0 rotate-6 text-[0.68rem] sm:text-xs md:text-sm max-w-[10rem] sm:max-w-[12rem] hidden md:block',
  },
  {
    code: `type ContactForm = {\n  name: string;\n  email: string;\n};`,
    className:
      'top-[34%] right-2 -rotate-6 text-[0.68rem] sm:text-xs md:text-sm max-w-[10rem] sm:max-w-[12rem] hidden md:block',
  },
  {
    code: `<input type="email" />\n<button>Envoyer</button>`,
    className:
      'bottom-32 left-2 -rotate-3 text-[0.68rem] sm:text-xs md:text-sm max-w-[10rem] sm:max-w-[12rem]',
  },
  {
    code: `.button {\n  background: #9ac38d;\n  border-radius: 12px;\n}`,
    className:
      'bottom-24 right-0 rotate-3 text-[0.68rem] sm:text-xs md:text-sm max-w-[10rem] sm:max-w-[12rem]',
  },
  {
    code: `function handleClick() {\n  alert('Message envoyé');\n}`,
    className:
      'bottom-8 left-1/4 -rotate-6 text-[0.68rem] sm:text-xs md:text-sm max-w-[11rem] sm:max-w-[13rem] hidden sm:block',
  },
  {
    code: `const [email, setEmail] = useState('');`,
    className:
      'bottom-6 right-1/4 rotate-6 text-[0.68rem] sm:text-xs md:text-sm max-w-[10rem] sm:max-w-[12rem] hidden sm:block',
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitState('sending');

    const submittedForm = e.currentTarget;
    const formPayload = new FormData(submittedForm);
    formPayload.append('_subject', 'Nouveau message depuis le portfolio de Ramata');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error("L'envoi a echoue.");
      }

      submittedForm.reset();
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
      });
      trackEvent('contact_form_submit', {
        form_name: 'portfolio_contact',
        request_type: formPayload.get('projectType')?.toString() ?? 'unknown',
      });
      setSubmitState('success');
    } catch (error) {
      console.error(error);
      setSubmitState('error');
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-4 md:px-8 bg-[var(--portfolio-bg)] relative overflow-hidden"
    >
      {/* Decoration de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,196,148,0.08),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(163,196,148,0.06),transparent_34%)]" />
        {backgroundCodeSnippets.map((snippet) => (
          <pre
            key={snippet.code}
            aria-hidden="true"
            className={`absolute whitespace-pre-wrap font-mono leading-relaxed text-black/8 ${snippet.className}`}
          >
            {snippet.code}
          </pre>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-black relative inline-block">
            Restons en contact
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black" />
          </h2>
          <p className="text-base md:text-lg text-black mt-8 max-w-2xl mx-auto">
            Disponible pour une opportunité professionnelle:  CDI, CDD ou alternance, ou pour créer/améliorer votre site web.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white border-4 border-black p-8 shadow-xl relative transform -rotate-1">
              {/* Ruban decoratif */}
              <div className="absolute -top-3 right-12 w-20 h-6 bg-[var(--portfolio-tape)] border border-[var(--portfolio-tape-border)] transform rotate-6" />

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <Label htmlFor="name" className="text-black mb-2 block">
                    Nom
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-black focus:border-[var(--portfolio-accent-dark)]"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-black mb-2 block">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-black focus:border-[var(--portfolio-accent-dark)]"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="projectType"
                    className="text-black mb-2 block"
                  >
                    Objet de votre demande
                  </Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:border-[var(--portfolio-accent-dark)] bg-white text-black"
                  >
                    <option value="" disabled hidden />
                    {projectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-black mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-2 border-black focus:border-[var(--portfolio-accent-dark)] resize-none" placeholder='Décrivez votre demande'
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitState === 'sending'}
                  className="w-full bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent-dark)] hover:text-white text-black border-4 border-black text-base py-5 transform hover:scale-105 transition-all"
                >
                  {submitState === 'sending'
                    ? 'Envoi en cours...'
                    : 'Envoyer le message ✨'}
                </Button>

                {submitState === 'success' && (
                  <p className="text-sm text-green-700">
                    Merci, votre message a bien été envoyé.
                  </p>
                )}

                {submitState === 'error' && (
                  <p className="text-sm text-red-700">
                    L'envoi a echoue. Reessaie dans quelques instants.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid gap-4">
              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`${card.color} border-4 border-black p-5 shadow-lg h-full`}
                  >
                    <Icon className="text-black mb-3" size={24} />
                    <p className="text-sm uppercase tracking-[0.2em] text-black/60 mb-2">
                      {card.title}
                    </p>
                    <a
                      href={card.href}
                      onClick={() =>
                        trackEvent('contact_info_click', {
                          contact_type: card.title.toLowerCase(),
                          destination: card.href,
                        })
                      }
                      className="block text-black break-all hover:text-black/70"
                      aria-label={`${card.title} : ${card.value}`}
                      target={card.external ? '_blank' : undefined}
                      rel={card.external ? 'noreferrer' : undefined}
                    >
                      {card.value}
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Message final */}
            <div className="bg-[var(--portfolio-accent-mint)] border-4 border-black p-6 shadow-lg transform rotate-2">
              <p className="text-lg text-black text-center italic leading-relaxed">
                Disponible pour rejoindre une équipe ou concrétiser un projet web. ✨
              </p>
            </div>

            {/* Signature visuelle */}
            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 sm:w-28 aspect-[3/4] bg-white border-4 border-black rounded-2xl shadow-lg overflow-hidden p-1"
              >
                <img
                  src={ramataPhoto}
                  alt="Photo de Ramata SISSOKO"
                  className="w-full h-full object-contain rounded-xl bg-[var(--portfolio-soft)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
