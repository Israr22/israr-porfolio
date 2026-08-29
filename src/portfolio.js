/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Mohd Israr",
  title: "Hi all, I am Mohd Israr",
  subTitle: emoji(
    "Results-driven Full Stack Developer 🚀 with 4+ years of experience building CRM integrations, workflow automation systems, and SaaS applications using PHP, Laravel, JavaScript, Angular, Vue.js, PostgreSQL, and REST APIs. Specialized in HubSpot CRM integrations, payment gateway automation, webhooks, and scalable backend architecture."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xv_MwKjdyQgBeesvWpnPiTPvsm7QkegL/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Israr22",
  whatsapp: "https://wa.me/+919027909482",
  linkedin: "https://www.linkedin.com/in/mohdisrar/",
  gmail: "israrraza942001@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER FOCUSED ON CRM INTEGRATIONS, PAYMENT AUTOMATION, AND SCALABLE SAAS",
  skills: [
    emoji(
      "⚡ Build CRM and SaaS platforms with HubSpot integrations, webhooks, and workflow automation"
    ),
    emoji(
      "⚡ Integrate payment gateways including Stripe, PayPal, Authorize.Net, Razorpay, PayU, and Adyen"
    ),
    emoji(
      "⚡ Connect third-party platforms such as QuickBooks, AWS S3, AWS SNS, and cloud services to streamline operations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "hubspot",
      fontAwesomeClassname: "fab fa-hubspot"
    },
    {
      skillName: "stripe",
      fontAwesomeClassname: "fab fa-stripe"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Global Institute of Management & Technology",
      logo: require("./assets/images/gimtLogo.png"),
      subHeader: "Master of Computer Application (MCA)",
      duration: "2022 - 2024",
      desc: "Greater Noida, India"
    },
    {
      schoolName: "Mangalmay Institute of Management & Technology",
      logo: require("./assets/images/mangalmayLogo.png"),
      subHeader: "Bachelor of Computer Application (BCA)",
      duration: "2019 - 2022",
      desc: "Greater Noida, India"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "85%"
    },
    {
      Stack: "CRM Integration",
      progressPercentage: "90%"
    },
    {
      Stack: "Payment Gateway Integration",
      progressPercentage: "85%"
    },
    {
      Stack: "REST APIs & Webhooks",
      progressPercentage: "90%"
    },
    {
      Stack: "Databases",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud (AWS)",
      progressPercentage: "80%"
    },
    {
      Stack: "Workflow Automation",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Cedcoss Technologies",
      companylogo: require("./assets/images/makewebbetterLogo.png"),
      date: "Apr 2025 – Present",
      desc: "MakeWebBetter · Lucknow, India · Full-Time",
      descBullets: [
        "Developed scalable CRM and SaaS payment automation solutions for the HubSpot FormPay Integration platform using PHP, JavaScript, MongoDB, REST APIs, Webhooks, and HubSpot CRM.",
        "Integrated Stripe, PayPal, Authorize.Net, Razorpay, PayU, and Adyen with HubSpot forms to automate payment collection, contact sync, subscriptions, and onboarding.",
        "Implemented webhook-based workflow automation for real-time CRM updates, payment tracking, transaction management, and automated customer communication.",
        "Optimized backend services, third-party API integrations, and database operations to improve scalability, reliability, and user experience for global clients."
      ]
    },
    {
      role: "Software Engineer",
      company: "Techcompiler",
      companylogo: require("./assets/images/techcompilerLogo.png"),
      date: "Apr 2022 – Apr 2025",
      desc: "Techcompiler Data System Pvt. Ltd. · Noida, India · Full-Time",
      descBullets: [
        "Developed and maintained CRM-driven Driver Training Management Systems using Laravel, Vue.js, PostgreSQL, AWS S3, and AWS SNS.",
        "Integrated QuickBooks, cloud storage, SMS/email notifications, and third-party APIs to automate operational workflows and invoice generation.",
        "Built scalable REST APIs and optimized database queries, improving response times by 40% and enhancing system performance.",
        "Designed secure authentication and role-based authorization systems for multi-user platforms and enterprise workflows."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
  projects: [
    {
      node: {
        id: "nova-s3-multipart-upload",
        name: "nova-s3-multipart-upload",
        description:
          "A Laravel Nova resource tool to upload files directly to Amazon S3. Upload, download, and delete single, multiple, small, or large files.",
        url: "https://github.com/Israr22/nova-s3-multipart-upload",
        forkCount: 0,
        stargazers: {totalCount: 1},
        diskUsage: 1024,
        primaryLanguage: {name: "PHP", color: "#4F5D95"}
      }
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PRODUCTION PLATFORMS I HELPED BUILD AND SCALE",
  projects: [
    {
      image: require("./assets/images/certifiedSafeDriverLogo.png"),
      projectName: "Certified Safe Driver",
      projectDesc:
        "Driver Training Management System supporting 50+ companies, 30+ instructors, and 500+ students with automated workflows, AWS S3 document management, QuickBooks invoicing, and SMS/email notifications. Built with Laravel, Vue.js, PostgreSQL, and Bootstrap.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://certifiedsafedriver.com/"
        }
      ]
    },
    {
      image: require("./assets/images/formpayLogo.png"),
      projectName: "FormPay by MakeWebBetter",
      projectDesc:
        "CRM automation platform for secure payment collection through HubSpot forms. Webhook-based sync with Stripe, PayPal, Authorize.Net, Razorpay, PayU, and Adyen for payment tracking and customer management. Tech: PHP, JavaScript, HubSpot CRM, REST APIs, Docker, MongoDB.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://makewebbetter.com/hubspot-formpay-integration/"
        },
        {
          name: "HubSpot Marketplace",
          url: "https://ecosystem.hubspot.com/marketplace/listing/formpay-754041"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [],
  display: false
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9027909482",
  email_address: "israrraza942001@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
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
  isHireable,
  resumeSection
};
