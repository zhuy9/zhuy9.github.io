export const companies = [
  {
    name: 'meds.com',
    icon: '/icons/meds.png',
    location: 'Chicago, IL',
    mode: 'Hybrid',
    industry: [
      { label: 'Consumer Web', color: 'gray' },
      { label: 'Healthcare', color: 'green' },
      { label: 'Telemedicine', color: 'green' },
    ],
    tech: [
      { label: 'AngularJS', color: 'red' },
      { label: 'TypeScript', color: 'blue' },
    ],
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Jun 2026 – Present',
        bullets: [
          'Built a GCP error-logging framework for the BlueChew product, improving platform observability.',
        ],
      },
    ],
  },
  {
    name: 'Intecular',
    icon: '/icons/intecular.png',
    location: 'Chicago, IL',
    mode: 'Remote',
    tenure: '1 yr 3 mos',
    industry: [
      { label: 'B2B', color: 'gray' },
      { label: 'IoT', color: 'purple' },
      { label: 'Smart Home', color: 'purple' },
    ],
    tech: [
      { label: 'React', color: 'blue' },
      { label: 'Claude Code', color: 'orange' },
    ],
    roles: [
      {
        title: 'Software Engineer',
        period: 'Apr 2026 – May 2026',
        bullets: [
          "Built Intecular's first B2B telemetry dashboard (smart-outlet data for hotels & short-term rentals), shipped in weeks with AI-assisted workflows.",
        ],
      },
      {
        title: 'Advisor',
        period: 'Mar 2025 – May 2026',
        bullets: ['Advised on business development, software design, and GenAI integration.'],
      },
    ],
  },
  {
    name: 'Enfusion (a Clearwater Analytics company)',
    icon: '/icons/enfusion.webp',
    location: 'Chicago, IL',
    mode: 'Hybrid',
    tenure: '3 yrs 5 mos',
    industry: [
      { label: 'Enterprise SaaS', color: 'gray' },
      { label: 'FinTech', color: 'blue' },
      { label: 'Portfolio Management', color: 'blue' },
    ],
    tech: [
      { label: 'Java', color: 'orange' },
      { label: 'JVM', color: 'orange' },
      { label: 'Spring Boot', color: 'green' },
    ],
    roles: [
      {
        title: 'Vice President, Senior Software Engineer',
        period: 'Mar 2025 – Nov 2025',
        bullets: [
          'Architected Fixed Income Rebalancing for Portfolio Workbench',
          'Cut Portfolio Workbench load time 50% (8→4 min), doubling capacity to 90 funds.',
        ],
        bookmark: {
          href: 'https://cwan.com/press-releases/enfusion-introduces-the-next-phase-of-portfolio-workbench-empowering-asset-managers-with-increased-efficiency-and-flexibility/',
          title:
            'Enfusion Introduces the Next Phase of Portfolio Workbench, Empowering Asset Managers with Increased Efficiency and Flexibility',
          source: 'cwan.com',
        },
      },
      {
        title: 'Associate Vice President, Senior Software Engineer',
        period: 'Mar 2024 – Feb 2025',
        bullets: [
          'Architected Equity Rebalancing for Portfolio Workbench (10+ institutional clients).',
        ],
      },
      {
        title: 'Senior Associate, Java Developer',
        period: 'Mar 2023 – Feb 2024',
        bullets: [
          'Owned the Non-Drifting Rebalancer end-to-end as sole engineer.',
        ],
      },
      {
        title: 'Associate, Junior Software Engineer',
        period: 'Jul 2022 – Feb 2023',
      },
    ],
  },
];
