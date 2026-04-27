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
    subtitle: 'Software Engineer · iOS · FileMaker · Swift.',
    readmeFilename: 'README.md',
    aboutTitle: 'About Me',
    bio: [
      "I'm a software engineer with hands-on experience building production software across iOS and enterprise FileMaker platforms. I care about clean architecture, reliable API integrations, and delivering real value to clients.",
      "I work primarily with Swift, FileMaker, and PHP — from SwiftUI apps with MVVM architecture to fleet-management modules, data synchronization pipelines, and custom dashboard visualizations.",
      "Author of FMProKit, an open-source Swift package bridging FileMaker and Swift applications, adopted across multiple projects and reaching 45 GitHub stars."
    ],
    topicTags: [
      'Swift',
      'iOS',
      'SwiftUI',
      'FileMaker',
      'PHP',
      'PostgreSQL',
      'Flutter',
      'REST APIs'
    ],
    ctaText: 'View My Work'
  },

  /* ---------- PROJECTS / PULL REQUESTS ---------- */
  projects: {
    sectionTitle: 'Projects',
    items: [
      {
        number: 45,
        title: 'FMProKit — FileMaker Swift Package',
        branch: 'main',
        status: 'open',
        label: 'open',
        description: 'Open-source Swift package bridging FileMaker and Swift via OData and Data API.',
        longDescription: 'Architected and published FMProKit, an open-source Swift package enabling seamless bi-directional communication between FileMaker databases and Swift applications via OData and Data API protocols. Features full CRUD support, async/await concurrency, and Generics-based data abstraction. Adopted across multiple Apple Developer Academy projects and reached 45 GitHub stars.',
        stack: ['Swift', 'Swift Package Manager', 'FileMaker', 'OData', 'Data API', 'async/await'],
        date: 'last pushed Jun 2024',
        stars: 45,
        commits: 13,
        previewUrl: 'https://user-images.githubusercontent.com/129211821/235753747-12615a14-c8e9-4429-9874-55c55ad18a9d.png',
        links: { github: 'https://github.com/CoderlyStudio/FMProKit', demo: '#' }
      },
      {
        number: 38,
        title: 'Itineris — Fleet Management Modules',
        branch: 'release/fleet-v2',
        status: 'merged',
        label: 'merged',
        description: 'Core fleet-management modules for automotive clients within the Itineris platform.',
        longDescription: 'Developed and maintained the core modules of the Itineris software at Keeneight, focusing on fleet management for automotive industry clients. Engineered API integrations with external services including Jira, optimized data retrieval by aggregating complex datasets into JSON for dynamic JavaScript charts and dashboards, and managed SQL databases via the MBS plugin.',
        stack: ['FileMaker', 'SQL', 'MBS Plugin', 'PHP', 'JavaScript', 'REST API', 'Jira API'],
        date: 'merged on Feb 2026',
        previewSeed: 'itineris',
        links: { github: '#', demo: '#' }
      },
      {
        number: 21,
        title: 'iOS App — Campania Region Initiative',
        branch: 'feature/mvvm-arch',
        status: 'merged',
        label: 'merged',
        description: 'iOS app with MVVM architecture for a joint initiative with the Campania Region.',
        longDescription: 'Spearheaded iOS development for a joint initiative with the Campania Region at the Apple Developer Academy. Defined and implemented a robust MVVM architecture to ensure a scalable and maintainable codebase. Designed a custom FileMaker database and established seamless bi-directional communication with the iOS app using the FMProKit Swift package.',
        stack: ['Swift', 'SwiftUI', 'MVVM', 'FileMaker', 'FMProKit', 'Agile'],
        date: 'merged on Jun 2023',
        previewSeed: 'campania',
        links: { github: '#', demo: '#' }
      }
    ]
  },

  /* ---------- CONTACT SECTION ---------- */
  contact: {
    terminalPrompt: '$',
    terminalCommand: 'contact',
    terminalFlag: '--open',
    subtitle: 'Open to new opportunities, and interesting collaborations.',
    cards: {
      email: {
        label: 'Email',
        value: 'franc.demarco99@gmail.com',
        href: 'mailto:franc.demarco99@gmail.com',
        ariaLabel: 'Send email'
      },
      linkedin: {
        label: 'LinkedIn',
        value: 'linkedin.com/in/de-marco-francesco',
        href: 'https://www.linkedin.com/in/de-marco-francesco/',
        ariaLabel: 'LinkedIn profile'
      },
      github: {
        label: 'GitHub',
        value: 'github.com/franc-demarco',
        href: 'https://github.com/franc-demarco',
        ariaLabel: 'GitHub profile'
      },
      location: {
        label: 'Location',
        value: 'Naples, Italy · Remote'
      }
    },
    cv: {
      title: 'Resume / CV',
      filename: 'Francesco De Marco - Software Engineer - CV.pdf',
      fileMeta: 'Francesco De Marco - Software Engineer - CV.pdf · ~101 KB',
      buttonText: 'Download CV',
      url: 'assets/Francesco De Marco - Software Engineer - CV.pdf'
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
