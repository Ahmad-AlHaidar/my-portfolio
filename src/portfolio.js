/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

const publicUrl = process.env.PUBLIC_URL || "";

// Media assets (icons & animations loaded from public folder)
const mediaAssets = {
  flutterIcon: `${publicUrl}/icons/flutter.svg`,
  dartIcon: `${publicUrl}/icons/dart.svg`,
  greetingAnimation: `${publicUrl}/lottie/mobile-greeting.json`,
  skillsAnimation: `${publicUrl}/lottie/mobile-skills.json`,
  ulutechLogo: `${publicUrl}/company-logos/ulutech.png`,
  smartlifeLogo: `${publicUrl}/company-logos/smartlife.png`,
  htcIraqLogo: `${publicUrl}/company-logos/htc-iraq.svg`,
  freelancerLogo: `${publicUrl}/company-logos/freelancer.png`
};

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmad",
  title: "Hi all, I'm Ahmad",
  subTitle: emoji(
    `Highly skilled Flutter developer with 5+ years of experience designing and building responsive, user-friendly mobile applications. Proficient in leveraging the Flutter framework to create visually appealing, cross-platform applications for both iOS and Android. Strong understanding of Dart, state management solutions, and RESTful APIs to enhance application performance and user experience.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RHZoBcDxmUhbRjFo5yDC31Gto_0ac7Z4/view?usp=share_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
//  github: "https://github.com/AhmadHHaidar",
  github: "https://github.com/Ahmad-AlHaidar",
  linkedin: "https://www.linkedin.com/in/ahmad-al-haidar-985b7822a",
  gmail: "homamhaidar95@gmail.com",
  gitlab: "https://gitlab.com/ahmadalhaidar88",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FLUTTER DEVELOPER WHO BUILDS CROSS-PLATFORM MOBILE APPLICATIONS",
  skills: [
    emoji(
      "⚡ Develop highly interactive and responsive mobile applications for iOS and Android"
    ),
    emoji(
      "⚡ Build scalable apps using Bloc pattern, TDD architecture, and clean code practices"
    ),
    emoji(
      "⚡ Integrate RESTful APIs, Firebase services, and real-time features seamlessly"
    ),
    emoji(
      "⚡ Write comprehensive tests including Bloc, Widget, and Integration tests"
    ),
    emoji(
      "⚡ Optimize performance with lazy loading, asynchronous programming, and efficient state management"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Flutter",
      skillIcon: mediaAssets.flutterIcon
    },
    {
      skillName: "Dart",
      skillIcon: mediaAssets.dartIcon
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "REST API",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Bloc",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Testing",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "Trello",
      fontAwesomeClassname: "fab fa-trello"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Faculty of Information Engineering - University of Aleppo",
      logo: require("./assets/images/university-aleppo.jpeg"),
      subHeader: "Bachelor's degree, Information Technology",
      duration: "",
      desc: "GPA: 74.5%",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Flutter/Dart",
      progressPercentage: "100%"
    },
    {
      Stack: "Code with AI",
      progressPercentage: "95%"
    },
    {
      Stack: "Firebase",
      progressPercentage: "95%"
    },
    {
      Stack: "RESTful APIs",
      progressPercentage: "95%"
    },
    {
      Stack: "Testing (Unit/Widget/Integration)",
      progressPercentage: "80%"
    },
    {
      Stack: "Jira",
      progressPercentage: "90%"
    },
    {
      Stack: "CI/CD",
      progressPercentage: "85%"
    },
    {
      Stack: "QML C++",
      progressPercentage: "55%"
    },
    {
      Stack: "Kotlin",
      progressPercentage: "55%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Flutter Mobile Developer",
      company: "Smart Life",
      companylogo: mediaAssets.smartlifeLogo,
      date: "01/2025 - Present",
      desc: "Developed and maintained multiple Flutter applications including CRM, HR, POS, and dashboard solutions in Aleppo.",
      descBullets: [
        "Modified the CRM web project and CRM application, and worked on HR and POS applications",
        "Added Firebase Crashlytics, Firebase Analytics, and push notifications",
        "Added flavor configurations and handled C++ files within the POS Flutter project",
        "Leveraged the Bloc pattern for robust and maintainable state management",
        "Optimized performance with lazy loading, asynchronous programming, and RESTful API integration",
        "Built applications with real-time actions to speed up user response"
      ]
    },
    {
      role: "Flutter Mobile Developer (Freelance)",
      company: "Freelancer",
      companylogo: mediaAssets.freelancerLogo,
      date: "Freelance",
      desc: "Delivered end-to-end Flutter solutions for independent clients, from architecture and development to store deployment.",
      descBullets: [
        "Built Cvium App — a resume and recommendation letter builder published on Google Play",
        "Developed Brand Al-Souq — a dual-app fabric marketplace with separate merchant and buyer applications",
        "Implemented merchant dashboards with purchase analytics, filtering, campaigns, offers, and push notifications",
        "Built the buyer app with product browsing, ordering, delivery address selection, and product suggestion requests",
        "Published the buyer app on Google Play and the Apple App Store; the merchant app is used internally"
      ]
    },
    {
      role: "Flutter Mobile Developer",
      company: "HTC IRAQ",
      companylogo: mediaAssets.htcIraqLogo,
      date: "08/2024 - 01/2025",
      desc: "Developed high-quality Flutter applications remotely with a focus on responsive design and cross-device compatibility.",
      descBullets: [
        "Conducted thorough testing and debugging of applications across various devices and operating systems",
        "Designed high-quality, efficient code that runs on different screen sizes with one codebase",
        "Participated in code reviews and contributed to best practices for code quality and scalability",
        "Created engaging and responsive user interfaces in close collaboration with the design team"
      ]
    },
    {
      role: "Flutter Mobile Developer",
      company: "ULUTECH",
      companylogo: mediaAssets.ulutechLogo,
      date: "08/2021 - 09/2024",
      desc: "Building Flutter applications remotely using TDD architecture for structured, scalable, and testable code.",
      descBullets: [
        "Build applications using the TDD architecture, which makes code structured, scalable, and testable",
        "Building the three test types (Bloc Test, Widget Test, and Integration Test)"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Flutter and mobile applications I have designed and built",
  projects: [
    {
      image: "",
      projectName: "Smart HR",
      projectDesc:
        "An application to manage employees, their vacations and salaries, track their work, display contracts, handle mail, and show working hours with dynamic charts.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=org.smartlife.slifehr&pcampaignid=web_share"
        }
      ]
    },
    {
      image: "",
      projectName: "Smart Dashboard",
      projectDesc:
        "An application to display custom charts about resources, employees, or statistics. Includes user behavior tracking and multiple flavor-based versions.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.smartlife.erpdashboard&pcampaignid=web_share"
        }
      ]
    },
    {
      image: "",
      projectName: "Smart POS",
      projectDesc:
        "A POS application built on pre-defined C++ files. Works offline with a synchronization system to upload data when internet is available. Includes sales invoices, returns, reports, and quick selling.",
      footerLink: []
    },
    {
      image: "",
      projectName: "Mercato Bl",
      projectDesc:
        "An application that facilitates medication management between warehouses and customers, providing instant access to important information and transactions.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.mercatoadmin"
        }
      ]
    },
    {
      image: "",
      projectName: "Mercato Payment Collector",
      projectDesc:
        "Used by sales representatives to facilitate payment collection from customers, giving sellers control over undelivered payments and buyers a record of all transactions.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.paymentcollector"
        }
      ]
    },
    {
      image: "",
      projectName: "Alpha Store",
      projectDesc: "A local E-commerce platform with basic features and functionalities.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.sadek.alpha_store"
        }
      ]
    },
    {
      image: "",
      projectName: "HUMY Customer",
      projectDesc:
        "The driver app from the Humy series serving homemade food. Includes Bloc tests and integration tests.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.nbs.alphameal"
        }
      ]
    },
    {
      image: "",
      projectName: "Brand Al-Souq",
      projectDesc:
        "A fabric marketplace with two Flutter apps: a merchant app (internal) for managing fabric categories, products, purchase statistics, filtering, marketing campaigns, offers, user management, and notifications; and a buyer app (iOS & Android) for browsing products, placing orders, selecting delivery addresses, and requesting unavailable products from merchants.",
      footerLink: [
        {
          name: "Google Play",
          url: "https://play.google.com/store/apps/details?id=com.BoshiBuyre.HomDev"
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/tr/app/%D8%A8%D8%B1%D8%A7%D9%86%D8%AF-%D8%A7%D9%84%D8%B3%D9%88%D9%82/id6761701068"
        }
      ]
    },
    {
      image: "",
      projectName: "Cvium App",
      projectDesc:
        "Helps users create resumes and letters of recommendation with customizable templates.",
      footerLink: [
        {
          name: "Play Store",
          url: "https://play.google.com/store/apps/details?id=com.cvium.templates.resume.builder&pli=1"
        }
      ]
    },
    {
      image: "",
      projectName: "Food Manager App",
      projectDesc:
        "A Windows application using Flutter for restaurant chain administration. Responsive design for mobile, tablet, and laptop with adaptive interface layouts.",
      footerLink: []
    },
    {
      image: "",
      projectName: "Todo App (Kotlin)",
      projectDesc:
        "A task management application for scheduling and organizing daily tasks with local storage for data persistence without internet connection.",
      footerLink: []
    },
    {
      image: "",
      projectName: "Weather App (Kotlin)",
      projectDesc:
        "A weather application providing real-time updates, forecasts, and detailed climatic information by entering a country name, with responsive design across devices.",
      footerLink: []
    },
    {
      image: "",
      projectName: "Chat App (Kotlin)",
      projectDesc:
        "A real-time chat application using Firebase for backend support, enabling users to create accounts, initiate conversations, and exchange messages securely.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Professional certifications and courses that strengthened my mobile development expertise.",

  achievementsCards: [
    {
      title: "The Complete Flutter Development Bootcamp with Dart",
      subtitle:
        "Comprehensive Flutter and Dart training covering mobile app development fundamentals and best practices.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Flutter Bootcamp",
      footerLink: []
    },
    {
      title: "Flutter & Dart - The Complete Guide",
      subtitle:
        "In-depth course on Flutter framework, Dart programming, and building production-ready mobile applications.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Flutter Complete Guide",
      footerLink: []
    },
    {
      title: "Learn Android 14 App Development",
      subtitle:
        "From beginner to advanced Android developer. Build apps like Trello, 7Min Workout, and Weather App.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Android Development",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/share/p/1C5mApnWXG/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+963992669315",
  email_address: "homamhaidar95@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  mediaAssets,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
