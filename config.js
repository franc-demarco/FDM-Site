/* ============================================================
   SITE CONFIGURATION
   Edit any value below to update the portfolio site.
   No need to touch index.html.
   ============================================================ */

window.SITE_CONFIG = {

  /* ---------- PAGE META ---------- */
  meta: {
    title: 'Francesco De Marco — Developer Portfolio',
    description: 'Personal developer portfolio — projects, experience, and contact information.'
  },

  /* ---------- NAVIGATION ---------- */
  nav: {
    brand: 'francesco-de-marco / portfolio',
    links: {
      about: 'about',
      projects: 'projects',
      contact: 'contact'
    }
  },

  /* ---------- HERO SECTION ---------- */
  hero: {
    avatarUrl: 'https://picsum.photos/seed/profile/200/200',
    avatarAlt: 'Portrait of Francesco De Marco',
    name: 'Francesco De Marco',
    subtitle: 'Software Engineer · Building reliable software applications.',
    readmeFilename: 'README.md',
    aboutTitle: 'About Me',
    bio: [
      "I'm a software engineer with 6+ years of experience designing and shipping production web applications. I focus on the intersection of clean architecture, performance, and developer experience.",
      "I work primarily across the JavaScript and Python ecosystems, building everything from real-time dashboards to data-intensive APIs. I care about thoughtful UX, well-tested code, and shipping fast without breaking things.",
      "Currently exploring AI-assisted developer tooling and edge runtimes."
    ],
    topicTags: [
      'Swift',
      'iOS',
      'Android',
      'Back-end',
      'postgresql',
      'aws',
      'docker',
      'graphql'
    ],
    ctaText: 'View My Work'
  },

  /* ---------- PROJECTS / PULL REQUESTS ---------- */
  projects: {
    sectionTitle: 'Pull Requests',
    items: [
      {
        number: 142,
        title: 'Realtime collaborative whiteboard',
        branch: 'feature/canvas-engine',
        status: 'merged',
        label: 'merged',
        description: 'WebGL-powered shared canvas with CRDT-based sync and offline support.',
        longDescription: 'A multiplayer whiteboard built around a custom CRDT engine. Drawing, shapes, and text propagate to all connected clients in under 80ms p99. The rendering layer uses WebGL to stay smooth past 50k vector primitives, and sessions reconcile gracefully after network drops thanks to operation-based conflict resolution.',
        stack: ['React', 'TypeScript', 'WebGL', 'Yjs', 'WebSocket', 'Node.js', 'Redis'],
        date: 'merged on Mar 14',
        commits: 87,
        files: 42,
        previewSeed: 'whiteboard',
        links: { github: '#', demo: '#' }
      },
      {
        number: 138,
        title: 'Observability platform for distributed APIs',
        branch: 'release/v2.0',
        status: 'merged',
        label: 'featured',
        description: 'Tracing, metrics, and structured logs unified behind a single query language.',
        longDescription: 'An end-to-end observability stack ingesting OpenTelemetry traces and Prometheus metrics into a columnar store. Query latency on 30 days of data sits below 200ms thanks to query rewriting and aggressive caching. Includes a custom DSL inspired by PromQL and a React-based exploration UI with linkable trace views.',
        stack: ['Go', 'ClickHouse', 'OpenTelemetry', 'React', 'Kubernetes', 'gRPC'],
        date: 'merged on Feb 02',
        commits: 214,
        files: 156,
        previewSeed: 'observability',
        links: { github: '#', demo: '#' }
      },
      {
        number: 121,
        title: 'AI code review assistant',
        branch: 'feature/llm-pipeline',
        status: 'open',
        label: 'open',
        description: 'GitHub bot that reviews PRs using a tuned retrieval-augmented pipeline.',
        longDescription: 'A GitHub App that posts inline review comments on pull requests. It builds an embedding index of the repository on first install, retrieves relevant context per diff hunk, and prompts an LLM with structured guidance. Comments are scored for confidence and only high-confidence findings are surfaced. Deployed on Cloud Run with a Postgres + pgvector backend.',
        stack: ['Python', 'FastAPI', 'pgvector', 'OpenAI API', 'Cloud Run', 'GitHub App'],
        date: 'opened on Apr 10',
        commits: 38,
        files: 29,
        previewSeed: 'aireview',
        links: { github: '#', demo: '#' }
      },
      {
        number: 109,
        title: 'CLI for managing Postgres migrations',
        branch: 'main',
        status: 'merged',
        label: 'merged',
        description: 'Zero-downtime migration tool with linting, dry-run, and rollback planning.',
        longDescription: 'A migration runner that statically analyzes SQL for risky operations (long locks, blocking ALTERs, unsafe defaults) before applying them. It produces a rollback plan automatically and supports staged rollouts behind feature flags. Used in production by three teams with no incidents over 18 months.',
        stack: ['Rust', 'PostgreSQL', 'Tokio', 'sqlparser-rs'],
        date: 'merged on Nov 22',
        commits: 156,
        files: 64,
        previewSeed: 'pgcli',
        links: { github: '#', demo: '#' }
      },
      {
        number: 96,
        title: 'Edge-rendered marketing site framework',
        branch: 'feature/edge-runtime',
        status: 'open',
        label: 'featured',
        description: 'Hybrid SSG/SSR framework targeting the edge with sub-50ms TTFB.',
        longDescription: 'A small, opinionated framework for content-heavy sites. Pages are statically pre-rendered at build time but personalized at the edge using lightweight middleware. Image optimization, route-level caching, and i18n are first-class. Pre-build runs on serverless functions to handle large content stores without exhausting memory.',
        stack: ['TypeScript', 'Cloudflare Workers', 'Vite', 'MDX', 'Hono'],
        date: 'opened on Apr 18',
        commits: 52,
        files: 38,
        previewSeed: 'edgefw',
        links: { github: '#', demo: '#' }
      }
    ]
  },

  /* ---------- CONTACT SECTION ---------- */
  contact: {
    terminalPrompt: '$',
    terminalCommand: 'contact',
    terminalFlag: '--open',
    subtitle: 'Open to new opportunities, freelance work, and interesting collaborations.',
    cards: {
      email: {
        label: 'Email',
        value: 'alex.carter@example.com',
        href: 'mailto:alex.carter@example.com',
        ariaLabel: 'Send email'
      },
      linkedin: {
        label: 'LinkedIn',
        value: 'linkedin.com/in/alex-carter',
        href: 'https://www.linkedin.com',
        ariaLabel: 'LinkedIn profile'
      },
      github: {
        label: 'GitHub',
        value: 'github.com/alex-carter',
        href: 'https://github.com',
        ariaLabel: 'GitHub profile'
      },
      location: {
        label: 'Location',
        value: 'Milan, Italy · Remote'
      }
    },
    cv: {
      title: 'Resume / CV',
      filename: 'francesco-de-marco-cv.pdf',
      fileMeta: 'francesco-de-marco-cv.pdf · ~42 KB',
      buttonText: 'Download CV',
      content: [
        '%PDF-1.4',
        '% Francesco De Marco — Resume / CV (placeholder)',
        '',
        'FRANCESCO DE MARCO',
        'Software Engineer',
        'Pozzuoli, Napoli, Italy · Remote',
        'franc.demarco99@gmail.com · https://github.com/franc-demarco · https://www.linkedin.com/in/de-marco-francesco/',
        '',
        'SUMMARY',
        'Software engineer with 6+ years of experience designing and shipping',
        'production web applications across the JavaScript and Python stacks.',
        '',
        'EXPERIENCE',
        '  Senior Software Engineer — Acme Corp (2022 — Present)',
        '  Software Engineer — Globex (2019 — 2022)',
        '  Junior Developer — Initech (2018 — 2019)',
        '',
        'SKILLS',
        '  Languages: TypeScript, Python, Go, Rust, SQL',
        '  Frameworks: React, Next.js, Node.js, FastAPI, Express',
        '  Infrastructure: AWS, GCP, Docker, Kubernetes, PostgreSQL',
        '',
        'EDUCATION',
        '  Bachelor of Science in Computer Science — Uneìiverità Federico II di Napoli (2024)',
        '',
        '— This is a placeholder CV generated by the portfolio site —'
      ]
    }
  },

  /* ---------- FOOTER ---------- */
  footer: {
    copyrightName: 'Francesco De Marco',
    copyrightTagline: 'Built with care, no frameworks.',
    backToTopText: 'back to top',
    lastCommitPrefix: 'Last commit on'
  },

  /* ---------- BUTTON / GENERIC LABELS ---------- */
  labels: {
    viewSource: 'View source',
    liveDemo: 'Live demo',
    overview: 'Overview',
    techStack: 'Tech Stack',
    openShort: 'open',
    mergedShort: 'merged',
    commitsSuffix: 'commits',
    filesSuffix: 'files'
  }
};
