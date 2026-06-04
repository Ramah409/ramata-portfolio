type MarqueeLogoType =
  | 'html5'
  | 'css3'
  | 'javascript'
  | 'typescript'
  | 'angular'
  | 'postgresql'
  | 'git'
  | 'github'
  | 'figma'
  | 'codex'
  | 'claude'
  | 'chatgpt'
  | 'pgadmin'
  | 'postman'
  | 'render'
  | 'netlify'
  | 'springboot'
  | 'vscode'
  | 'wordpress'
  | 'elementor'
  | 'woocommerce';

const marqueeItems: Array<{ label: string; logo: MarqueeLogoType }> = [
  { label: 'HTML5', logo: 'html5' },
  { label: 'CSS', logo: 'css3' },
  { label: 'JavaScript', logo: 'javascript' },
  { label: 'TypeScript', logo: 'typescript' },
  { label: 'Angular', logo: 'angular' },
  { label: 'PostgreSQL', logo: 'postgresql' },
  { label: 'Git', logo: 'git' },
  { label: 'GitHub', logo: 'github' },
  { label: 'Figma', logo: 'figma' },
  { label: 'Codex', logo: 'codex' },
  { label: 'Claude', logo: 'claude' },
  { label: 'ChatGPT', logo: 'chatgpt' },
  { label: 'Visual Studio Code', logo: 'vscode' },
  { label: 'PgAdmin', logo: 'pgadmin' },
  { label: 'Postman', logo: 'postman' },
  { label: 'Render', logo: 'render' },
  { label: 'Netlify', logo: 'netlify' },
  { label: 'Spring Boot', logo: 'springboot' },
  { label: 'WordPress', logo: 'wordpress' },
  { label: 'Elementor', logo: 'elementor' },
  { label: 'WooCommerce', logo: 'woocommerce' },
];

function LogoBox({
  children,
  bg = 'bg-white',
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <div
      className={`${bg} flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-black`}
    >
      {children}
    </div>
  );
}

function MarqueeLogo({ type }: { type: MarqueeLogoType }) {
  switch (type) {
    case 'html5':
      return (
        <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path fill="#E44D26" d="M8 4h48l-4 48-20 8-20-8L8 4Z" />
          <path fill="#F16529" d="M32 56l16-6.4L51 9H32v47Z" />
          <path
            fill="#EBEBEB"
            d="M32 26H22l-.7-8H32V10H12l2 24h18v-8Zm0 20-.1.1-8.5-2.8-.5-6.3h-8l1 12.3L32 55v-9Z"
          />
          <path
            fill="#FFF"
            d="M32 26v8h9.3l-.9 9.2-8.4 2.8V55l16.1-5.7L50 26H32Zm0-16v8h18.7l.7-8H32Z"
          />
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path fill="#264DE4" d="M8 4h48l-4 48-20 8-20-8L8 4Z" />
          <path fill="#2965F1" d="M32 56l16-6.4L51 9H32v47Z" />
          <path
            fill="#EBEBEB"
            d="M32 26H22l-.7-8H32V10H12l2 24h18v-8Zm0 20-.1.1-8.5-2.8-.5-6.3h-8l1 12.3L32 55v-9Z"
          />
          <path
            fill="#FFF"
            d="M32 26v8h9.3l-.9 9.2-8.4 2.8V55l16.1-5.7L50 26H32Zm10-16H32v8h10.7l.7-8Z"
          />
        </svg>
      );
    case 'javascript':
      return (
        <LogoBox bg="bg-[#F7DF1E]">
          <span className="text-[13px] font-bold text-black">JS</span>
        </LogoBox>
      );
    case 'typescript':
      return (
        <LogoBox bg="bg-[#3178C6]">
          <span className="text-[13px] font-bold text-white">TS</span>
        </LogoBox>
      );
    case 'angular':
      return (
        <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path fill="#DD0031" d="M32 4 9 12l3.5 30L32 60l19.5-18L55 12 32 4Z" />
          <path fill="#C3002F" d="M32 4v56l19.5-18L55 12 32 4Z" />
          <path
            fill="#FFF"
            d="M32 16 20 44h4.5l2.4-6h10.2l2.4 6H44L32 16Zm-3.6 18 3.6-8.6 3.6 8.6h-7.2Z"
          />
        </svg>
      );
    case 'postgresql':
      return (
        <LogoBox bg="bg-[#DCE8FF]">
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <ellipse cx="32" cy="17" rx="16" ry="8" fill="#336791" />
            <path fill="#4A86B8" d="M16 17v19c0 4 7 8 16 8s16-4 16-8V17Z" />
            <ellipse cx="32" cy="36" rx="16" ry="8" fill="#336791" />
          </svg>
        </LogoBox>
      );
    case 'git':
      return (
        <svg viewBox="0 0 64 64" className="h-8 w-8 shrink-0" aria-hidden="true">
          <path fill="#F05133" d="M32 6 58 32 32 58 6 32 32 6Z" />
          <path
            fill="#FFF"
            d="M38.8 42.8a4.8 4.8 0 0 1-7.6-4V25.2a4.8 4.8 0 1 1 3.2 0v13.6a4.8 4.8 0 0 1 4.4 4Zm-10-22a4.8 4.8 0 1 1 0 6.4l6.8 6.8-2.2 2.2-6.8-6.8a4.8 4.8 0 0 1 2.2-8.6Zm10 18.8a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm-10-20a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm4 0a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z"
          />
        </svg>
      );
    case 'github':
      return (
        <LogoBox>
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.72.08-.72 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.24a11.4 11.4 0 0 1 6 0c2.29-1.56 3.29-1.24 3.29-1.24.66 1.66.24 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.65-2.8 5.68-5.48 5.98.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
            />
          </svg>
        </LogoBox>
      );
    case 'figma':
      return (
        <LogoBox>
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <circle cx="24" cy="14" r="10" fill="#F24E1E" />
            <circle cx="40" cy="14" r="10" fill="#FF7262" />
            <circle cx="24" cy="32" r="10" fill="#A259FF" />
            <circle cx="40" cy="32" r="10" fill="#1ABCFE" />
            <circle cx="24" cy="50" r="10" fill="#0ACF83" />
          </svg>
        </LogoBox>
      );
    case 'codex':
      return (
        <LogoBox>
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <path fill="#111" d="M20 14h24l10 10v26H30L20 40V14Z" />
            <path fill="#FFF" d="m28 25-8 7 8 7 2.6-3-4.6-4 4.6-4-2.6-3Zm8 0-2.6 3 4.6 4-4.6 4 2.6 3 8-7-8-7Z" />
          </svg>
        </LogoBox>
      );
    case 'claude':
      return (
        <LogoBox bg="bg-[#FFF5EE]">
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <g fill="#D97745">
              <rect x="29" y="8" width="6" height="16" rx="3" />
              <rect x="29" y="40" width="6" height="16" rx="3" />
              <rect x="8" y="29" width="16" height="6" rx="3" />
              <rect x="40" y="29" width="16" height="6" rx="3" />
              <rect x="14" y="14" width="6" height="16" rx="3" transform="rotate(-45 17 22)" />
              <rect x="44" y="34" width="6" height="16" rx="3" transform="rotate(-45 47 42)" />
              <rect x="14" y="34" width="6" height="16" rx="3" transform="rotate(45 17 42)" />
              <rect x="44" y="14" width="6" height="16" rx="3" transform="rotate(45 47 22)" />
            </g>
          </svg>
        </LogoBox>
      );
    case 'chatgpt':
      return (
        <LogoBox>
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <g fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M32 10c6 0 11 5 11 11v3" />
              <path d="M50 27c3 5 2 12-3 16l-3 1" />
              <path d="M44 50c-5 3-12 2-16-3l-1-3" />
              <path d="M14 44c-3-5-2-12 3-16l3-1" />
              <path d="M20 14c5-3 12-2 16 3l1 3" />
              <path d="M14 20c0-6 5-10 10-10h3" />
            </g>
          </svg>
        </LogoBox>
      );
    case 'pgadmin':
      return (
        <LogoBox bg="bg-[#EAF2FF]">
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <ellipse cx="26" cy="18" rx="12" ry="6" fill="#3B82F6" />
            <path fill="#60A5FA" d="M14 18v16c0 3 5 6 12 6s12-3 12-6V18Z" />
            <circle cx="44" cy="40" r="10" fill="#1E3A8A" />
            <path fill="#FFF" d="M44 34.5 46 36l2.5-.3.6 2.3 2 1.4-1.3 2.1.3 2.5-2.4.6-1.4 2-2.1-1.3-2.5.3-.6-2.4-2-1.4 1.3-2.1-.3-2.5 2.4-.6 1.4-2Z" />
          </svg>
        </LogoBox>
      );
    case 'postman':
      return (
        <LogoBox bg="bg-[#FFF2EA]">
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <circle cx="24" cy="32" r="12" fill="#FF6C37" />
            <path d="M30 26 46 18" stroke="#FF6C37" strokeWidth="5" strokeLinecap="round" />
            <path d="m44 18 4-1-2 4" fill="none" stroke="#FF6C37" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </LogoBox>
      );
    case 'render':
      return (
        <LogoBox>
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <path fill="#111" d="M14 14h18a9 9 0 0 1 0 18H14V14Z" />
            <path fill="#111" d="M32 32h18v18H32a9 9 0 0 1 0-18Z" />
          </svg>
        </LogoBox>
      );
    case 'netlify':
      return (
        <LogoBox>
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <path fill="#00C7B7" d="M18 10h10l8 8-8 8H18l-8-8 8-8Zm18 18h10l8 8-8 8H36l-8-8 8-8Z" />
            <path fill="#0F172A" d="M26 26h12v12H26Z" />
          </svg>
        </LogoBox>
      );
    case 'springboot':
      return (
        <LogoBox bg="bg-[#F2FFE8]">
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <path fill="#6DB33F" d="M50 18c-12 0-23 7-28 18 4-3 9-5 14-5-6 3-11 9-12 17 10 2 21-1 28-8 8-8 9-19 4-22-1 0-3 0-6 0Z" />
            <path d="M24 39c6 0 10 2 15 7" fill="none" stroke="#2F5E1A" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </LogoBox>
      );
    case 'vscode':
      return (
        <LogoBox bg="bg-[#E9F4FF]">
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <path
              fill="#2489CA"
              d="M46 8 22.5 30.5 13 23l-5 4 10.5 9L8 46l5 4 9.5-7.5L46 56c2 .9 4-.5 4-2.7V10.7C50 8.5 48 7.1 46 8Z"
            />
            <path
              fill="#1070B3"
              d="M46 8 22.5 30.5l-9.3-7.3L8 27l10.5 9L8 46l5.2 3.8 9.3-7.3L46 56c2 .9 4-.5 4-2.7V10.7C50 8.5 48 7.1 46 8Z"
            />
          </svg>
        </LogoBox>
      );
    case 'wordpress':
      return (
        <LogoBox>
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <circle cx="32" cy="32" r="24" fill="#21759B" />
            <text
              x="32"
              y="40"
              textAnchor="middle"
              fontSize="28"
              fontWeight="700"
              fill="#FFF"
              fontFamily="Georgia, serif"
            >
              W
            </text>
          </svg>
        </LogoBox>
      );
    case 'elementor':
      return (
        <LogoBox bg="bg-[#FFE6F0]">
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <rect x="14" y="12" width="36" height="40" rx="8" fill="#92003B" />
            <rect x="24" y="20" width="4" height="24" fill="#FFF" />
            <rect x="32" y="20" width="4" height="24" fill="#FFF" />
            <rect x="40" y="20" width="4" height="24" fill="#FFF" />
          </svg>
        </LogoBox>
      );
    case 'woocommerce':
      return (
        <LogoBox bg="bg-[#F0E6FF]">
          <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden="true">
            <path fill="#7F54B3" d="M14 20c0-5 4-8 8-8h20c4 0 8 3 8 8v14c0 5-4 8-8 8H30l-8 8v-8h0c-4 0-8-3-8-8V20Z" />
            <text
              x="32"
              y="34"
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="#FFF"
              fontFamily="Arial, sans-serif"
            >
              Woo
            </text>
          </svg>
        </LogoBox>
      );
  }
}

export function TechMarquee() {
  return (
    <section aria-label="Technologies et outils utilises" className="bg-[var(--portfolio-bg)] pb-12">
      <div className="border-y-4 border-black bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <div className="relative overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

          <div
            className="flex w-max gap-4 px-4"
            style={{
              animation: 'languages-marquee 40s linear infinite',
              willChange: 'transform',
            }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="flex shrink-0 items-center gap-3 rounded-full border-2 border-black bg-[var(--portfolio-surface)] px-4 py-2 shadow-sm"
              >
                <MarqueeLogo type={item.logo} />
                <span className="whitespace-nowrap text-sm md:text-base text-black">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes languages-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}
