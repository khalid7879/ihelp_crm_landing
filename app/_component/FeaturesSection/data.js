// data.js

export const menuItems = [
  { id: "contact", label: "Contact", icon: "👤" },
  { id: "leads", label: "Leads", icon: "🟢" },
  { id: "calendars", label: "Calendars", icon: "🗓️" },
  { id: "reporting", label: "Reporting", icon: "📊" },
  { id: "team", label: "Team Management", icon: "👥" },
  { id: "integrations", label: "Integrations", icon: "🔗" },
  { id: "security", label: "Security", icon: "🔒" },
];

export const sectionData = [
  {
    id: "contact",

    dynamicContent: {
      title: "Contacts",
      content:
        '"We’ve been using IhelpBD CRM for over two years, and it has significantly improved our search accuracy and response times. The platform enabled us to build a highly reliable CRM database for the medical sector, while remaining intuitive and easy to use with minimal complexity."',
      author: "Stan K.",
    },
    cards: [
      {
        id: 1,
        title: "Contact Profile",
        desc: "Centralize and manage all customer contact data in one CRM—names, addresses, phone numbers, emails, notes, files, tasks, and activity history—for complete visibility and control.",
        image: "/images/contact-1.svg",
      },
      {
        id: 2,
        title: "Contact Syncing",
        desc: "Any updates made to your contacts in CRM automatically sync with Google—ensuring real-time, two-way data consistency across platforms.",
        image: "/images/contact-2.svg",
      },
      {
        id: 3,
        title: "Contact Search",
        desc: " Quickly find specific contacts using keyword-based search across names, details, notes, and activity records.",
        image: "/images/contact-3.svg",
      },
      {
        id: 4,
        title: "Unlimited Groups",
        desc: "Group, tag, and organize contacts into custom lists—CRM adapts to your preferred contact management structure.",
        image: "/images/contact-4.svg",
      },
      {
        id: 5,
        title: "Email Logging",
        desc: "Automatically log all email communications in your CRM by securely connecting with Google, Microsoft, or IMAP—ensuring complete visibility across every customer interaction.",
        image: "/images/contact-5.png",
      },
      {
        id: 6,
        title: "Contact activity Logs",
        desc: "Automatically capture and timestamp every contact activity—including notes, completed tasks, meetings, and emails—within a complete, chronological CRM activity history.",
        image: "/images/contact-6.svg",
      },
      {
        id: 7,
        title: "Form Builder",
        desc: "Easily create lead intake forms, application forms, and more with our simple form builder—automatically generating new leads directly in your CRM.",
        image: "/images/contact-7.png",
      },
      {
        id: 8,
        title: "Unlimited Custom Contact Field",
        desc: "Automatically log every contact interaction—notes, completed tasks, meetings, and emails—with date and time stamps for a complete CRM activity history.",
        image: "/images/contact-8.svg",
      },
    ],
  },
  {
    id: "leads",

    dynamicContent: {
      title: "Leads",
      content:
        '"After implementing the Lead Management features in IhelpBD CRM, our lead conversion rate increased by 50%. The visual sales pipeline has been a complete game-changer for our team."',
      author: "Faria S., Sales Manager",
    },
    cards: [
      {
        id: 9,
        title: "Lead Tracking",
        desc: "Track every lead from initial contact to final invoice—managing the entire sales journey in one CRM.",
        image: "/images/lead-1.svg",
      },
      {
        id: 10,
        title: "Lead Scoring",
        desc: "Effortlessly manage your sales pipeline—customizeEffortlessly manage your sales pipeline—customize stages for any process, track lead progress, and view the status of every deal at a glance. stages for any process, track lead progress, and view the status of every deal at a glance.",
        image: "/images/lead-2.svg",
      },
      {
        id: 11,
        title: "Unlimited Custom Pipeline fields",
        desc: "Customize pipeline fields to track every step of your process and capture all relevant information for each lead or deal.",
        image: "/images/lead-1.svg",
      },
    ],
  },
  {
    id: "calendars",

    desc: "Stay organized with integrated scheduling and reminders.",
    dynamicContent: {
      title: "Calendars & Scheduling",
      content:
        '"UP COMING"',
      author: "",
    },
    cards: [
      {
        id: 12,
        title: "Individual team member calendars",
        desc: "Each team member can manage personal and work calendars separately within iHELP CRM for better organization and work-life clarity.",
        image: "/images/call-1.svg",
      },
      {
        id: 13,
        title: "Sub-calendars (personal or private!)",
        desc: "Create color-coded sub-calendars for projects, tasks, and personal to-dos to stay organized and keep your schedule clear and clutter-free.",
        image: "/images/call-2.svg",
      },
      {
        id: 14,
        title: "Event Reminders",
        desc: "Receive email or text notifications before events begin (available in the US, Canada, and the UK), so you stay prepared without last-minute surprises.",
        image: "/images/call-3.svg",
      },
      {
        id: 15,
        title: "Shared Team Calendars",
        desc: "Easily schedule meetings with multiple team members to streamline coordination and improve team collaboration.",
        image: "/images/call-4.svg",
      },
      {
        id: 16,
        title: "Seamless Google and Outlook Calendar Sync for Unified Scheduling",
        desc: "Easily schedule meetings with multiple team members.",
        image: "/images/call-5.svg",
      },
    ],
  },
  {
    id: "reporting",

    dynamicContent: {
      title: "Reporting & Insights",
      content:
        '"Clear, detailed reports at a glance help me make fast, data-driven decisions with confidence"',
      author: "Shakil K.",
    },
    cards: [
      {
        id: 17,
        title: "Sales Funnel Report",
        desc: "Analyze performance at every stage of the sales funnel with clear, actionable CRM insights.",
        image: "/images/report-2.svg",
      },
      {
        id: 18,
        title: "Activity Reports",
        desc: "Track team productivity and task completion rates in real time to improve accountability and operational efficiency.",
        image: "/images/Report-1.svg",
      },
      {
        id: 19,
        title: "Task Reports",
        desc: "View all follow-ups and to-dos in a single report to plan and prioritize your week or month more effectively.",
        image: "/images/reporttask.svg",
      },
      {
        id: 20,
        title: "One-Click data exports",
        desc: "Export contacts, reports, and all CRM data into easy-to-read spreadsheets for analysis, sharing, and compliance.",
        image: "/images/Export.svg",
      },
    ],
  },
  {
    id: "team",

    dynamicContent: {
      title: "Team Collaboration",
      content:
        '“The team management features keep everyone aligned and ensure tasks are delegated and executed efficiently across the organization.”',
      author: "Shuvro D.",
    },
    cards: [
      {
        id: 21,
        title: "Contact & Lead Assignment",
        desc: "Assign leads and contacts to team members in one click, ensuring clear ownership, focus, and faster follow-up.",
        image: "/images/team-1.svg",
      },
      {
        id: 22,
        title: "Company Branding",
        desc: "Customize your CRM with your company logo and brand color theme to deliver a consistent, on-brand experience across your team.",
        image: "/images/team-2.svg",
      },
      {
        id: 23,
        title: "Mobile Access",
        desc: "iHELP CRM’s web-based CRM works seamlessly on mobile devices, giving your entire team secure access anytime—no downloads or installations required.",
        image: "/images/team-3.png",
      },
      {
        id: 24,
        title: "Task and Event Assignments",
        desc: "Assign tasks, set deadlines, and schedule events directly in your CRM to streamline team workflow and boost productivity.",
        image: "/images/team-4.svg",
      },
      {
        id: 25,
        title: "Visibility and Access Permissions",
        desc: "Control team access in your CRM with precision—grant read-only, no access, or full edit permissions based on each user’s role and needs.",
        image: "/images/team-5.svg",
      },
    ],
  },
  {
    id: "integrations",

    dynamicContent: {
      title: "Seamless Integration",
      content:
        '"Integrating our existing tools with iHELP CRM was seamless—the integrations are robust, reliable, and enhance our workflow efficiency."',
      author: "Nadia T.",
    },
    cards: [
      {
        id: 26,
        title: "Calendars",
        desc: "Sync iHELP CRM with Google and Outlook calendars to manage all your events and meetings in one centralized place.",
        image: "/images/inte-1.svg",
      },
      {
        id: 27,
        title: "Marketing Automation",
        desc: "Connect with popular marketing platforms.",
        image: "/images/inte-3.svg",
      },
      {
        id: 28,
        title: "Email Marketing",
        desc: "UP COMING",
        image: "/images/inte-4.svg",
      },
      {
        id: 29,
        title: "26 More +API",
        desc: "Extend iHELP CRM’s capabilities with a wide range of tools tailored to your business or write your own with our API.",
        image: "/images/inte-6.svg",
      },
    ],
  },
  {
    id: "security",

    dynamicContent: {
      title: "Security & Privacy",
      content:
        '"I trust this platform with our data. The security protocols are top-notch and give me peace of mind."',
      author: "Omar H., CTO",
    },
    cards: [
      {
        id: 30,
        title: "Two-Factor Authentication",
        desc: "Enhance your account protection with an additional layer of security.",
        image: "/images/sec-1.svg",
      },
      {
        id: 31,
        title: "Google login",
        desc: "Ensure data safety with automatic daily CRM backups and effortless restore options.",
        image: "/images/sec-2.svg",
      },
      {
        id: 32,
        title: "Temporarily Lock Out Users",
        desc: "Administrators can immediately block access if a teammate’s account is compromised or misused, ensuring your CRM remains secure.",
        image: "/images/sec-3.png",
      },
      {
        id: 33,
        title: "256-bit Encryption Everywhere ",
        desc: "All data transfers in iHELP CRM are protected with modern encryption to ensure security and privacy.",
        image: "/images/sec-4.svg",
      },
    ],
  },
];
