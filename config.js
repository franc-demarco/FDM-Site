/* ============================================================
   SITE CONFIGURATION
   Edit any value below to update the portfolio site.
   No need to touch index.html.
   ============================================================ */

window.SITE_CONFIG = {

  /* ---------- PAGE META ---------- */
  meta: {
    title: 'Francesco De Marco — Software Engineer Portfolio',
    description: 'Personal software engineer portfolio — projects, experience, and contact information.'
  },

  /* ---------- NAVIGATION ---------- */
  nav: {
    brand: 'francesco-de-marco / portfolio',
    links: {
      about: 'about',
      projects: 'projects',
      experience: 'experience',
      education: 'education',
      certificates: 'certificates',
      contact: 'contact'
    }
  },

  /* ---------- HERO SECTION ---------- */
  hero: {
    avatarUrl: 'assets/FDM.jpg',
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

      /*
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
      
      */
    ]
  },

  /* ---------- EXPERIENCE SECTION ---------- */
  experience: {
    sectionTitle: 'Experience',
    items: [
      {
        company: 'Keeneight',
        role: 'Software Engineer',
        location: 'Naples, ITA',
        period: 'Aug 2024 — Feb 2026',
        companyUrl: 'https://keeneight.com',
        linkedinUrl: 'https://www.linkedin.com/company/keeneight/',
        bullets: [
          'Client Requirements & Development: managed direct client communications to gather technical requirements, implementing tailored features in FileMaker for the Itineris software to deliver customized solutions and streamline workflows.',
          'Critical Module Management: developed and maintained the core modules of the Itineris software, focusing on fleet management for automotive industry clients to ensure high reliability and operational efficiency.',
          'API Integration & Data Synchronization: engineered API integrations connecting the proprietary Itineris software with external web services (e.g., Jira), enabling efficient data sync and eliminating inconsistencies across platforms.',
          'Database Management: managed SQL databases within FileMaker, leveraging the MBS plugin to execute complex queries and maintain a robust data architecture.',
          'Data Optimization & Visualization: optimized data retrieval by aggregating complex datasets into JSON, powering custom JavaScript scripts to render dynamic charts and statistical dashboards.'
        ]
      },
      {
        company: 'Apple Developer Academy — Pier Programme',
        role: 'iOS Developer',
        location: 'Naples, ITA',
        period: 'Jul 2022 — Jun 2023',
        companyUrl: 'https://developeracademy.unina.it',
        linkedinUrl: '',
        bullets: [
          'iOS Architecture: spearheaded iOS development for a joint initiative with the Campania Region, defining and implementing a robust MVVM architecture to ensure a scalable and maintainable codebase.',
          'Database & Backend Integration: designed a custom FileMaker database and established seamless, bi-directional communication with the iOS application leveraging the FMProKit Swift package.'
        ]
      }
    ]
  },

  /* ---------- EDUCATION SECTION ---------- */
  education: {
    sectionTitle: 'Education',
    items: [
      {
        institution: 'Università di Napoli Federico II',
        degree: 'Bachelor of Science · Computer Science',
        location: 'Naples, ITA',
        period: 'Sep 2018 — Jul 2024',
        description: 'Computer science fundamentals: algorithms and data structures, operating systems, databases, software engineering, and computer networks.'
      },
      {
        institution: 'Apple Developer Academy',
        degree: 'iOS Development Programme',
        location: 'Naples, ITA',
        period: 'Sep 2021 — Jun 2022',
        description: 'iOS development with Swift / SwiftUI, cross-functional collaboration using Agile methodologies, with a strong business-oriented approach to product design.'
      }
    ]
  },

  /* ---------- CERTIFICATES SECTION ---------- */
  certificates: {
    sectionTitle: 'Certificates',
    viewButtonText: 'See certification',
    items: [
      {
        name: 'CCNA: Introduction to Networks',
        issuer: 'Cisco',
        year: '',
        badgeUrl: 'assets/CCNAITN__1_.png',
        url: 'https://www.credly.com/badges/7ff689e4-fad9-408b-986e-b0756aca0983'
      },
      {
        name: 'Network Defense',
        issuer: 'Cisco',
        year: '',
        badgeUrl: 'assets/NetworkDefense_v1_091721.png',
        url: 'https://www.credly.com/badges/0ba3e6ec-f46e-4dd6-b5bc-64e6c91e8ba3'
      },
      {
        name: 'Introduction to Cybersecurity',
        issuer: 'Cisco',
        year: '',
        badgeUrl: 'assets/I2CS__1_.png',
        url: 'https://www.credly.com/badges/23953573-553d-4f05-a881-9993dfde2b58'
      },
      {
        name: 'Cyber Threat Management',
        issuer: 'Cisco',
        year: '',
        badgeUrl: 'assets/CTM.png',
        url: 'https://www.credly.com/badges/342ed71c-01f5-4378-b51d-68b69bca970a'
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
        value: 'Pozzuoli, Naples, Italy'
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
    copyrightTagline: 'Built with Claude Code prompting.',
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
