export const skillDetails = [
  {
    listType: "Programming Languages",
    listData: ["JavaScript", "TypeScript", "Java", "HTML", "CSS", "Shell-Script", "PostgreSQL", "MySQL"]
  },
  {
    listType: "IT Constructs",
    listData: ["Data Structures and Algorithms (DSA)", "Object-Oriented Programming (OOPS)", "Design Pattern", "DBMS", "Server Driven Architecture"]
  },
  {
    listType: "Frameworks",
    listData: ["Spring Boot", "ExpressJs", "React"]
  },
  {
    listType: "Technologies",
    listData: ["Docker", "Kafka", "Git", "Github Action", "Github Copilot"]
  },
  {
    listType: "Testing",
    listData: ["JUnit", "React Testing Library", "JavaScript Unit Testing", "Mocha", "Cypress", "Taiko"]
  },
  {
    listType: "Familiar With",
    listData: ["Kotlin", "Clojure", "Python", "AWS Cloud", "RestAPI"]
  }
];

export const educationDetails = [
  {
    date: "2021-2024",
    degree: "BCA, Computer Applications",
    university: "Algappa University",
    cgpa: "7.6"
  },
  {
    date: "2017-2019",
    degree: "Diploma Engineering, Mechanical Production",
    university: "Govt Polytechnic, Jaipur",
    cgpa: "7.6"
  }

]

export const timelineData = [
  {
    date: 'July 2023 - Present',
    title: 'Software Development : Consultant',
    company: 'ThoughtWorks',
    techStack: "Java, ReactJs, Kotlin, SpringBoot, MongoDB, Kafka, Kubernetes, Docker, Microservices, Agile Methodology, TDD, Knowledge Sharing",
    description: "As a Full Stack Developer, I played a pivotal role in developing and deploying scalable applications,\n" +
      "utilizing a range of frontend and backend technologies. My expertise in frontend development encompassed\n" +
      "React and Redux, while on the backend, I leveraged Java, Kotlin, and Spring Boot to build robust and efficient\n" +
      "server-side solutions. I was actively involved in implementing Agile methodologies and Test-Driven Development\n" +
      "(TDD), which significantly enhanced our code quality and maintainability. This approach led to a 30% reduction\n" +
      "in bug reports and improved integration efficiency across our microservices architecture.\n" +
      "In my role, I contributed effectively as part of an 8-member team, employing Docker, Kafka, and Kubernetes for\n" +
      "containerization and streamlined deployment processes. My efforts in enhancing user experience were notable;\n" +
      "I improved user-friendliness by up to 10% through diligent bug identification and resolution.\n" +
      "This involved direct interaction with users, gathering their feedback, and implementing targeted solutions to\n" +
      "refine the overall user experience and functionality of our applications.\n"
  },
  {
    date: 'OCT 2022 - JUL 2023',
    title: 'Software Developer : Grade Consultant',
    company: 'Thoghtworks',
    techStack: "TypeScript, Postgres, Backend Development, Api Development, Data Migration",
    description: "Migration for product provisioning service - Contributed to the migration of a legacy system for product provisioning, ensuring zero downtime and no impact on existing customers."
  },
  {
    date: 'FEB 2021 - SEPT 2022',
    title: 'Software Developer : STEP Intern',
    company: 'Thoughtworks',
    techStack: "NodeJs, HTML, CSS, Shell Script",
    description: "Scotland Yard: Built the web version of the multiplayer game Scotland Yard using vanilla JS for frontend and expressJS for backend. Adopted industry best practices like pair programming, team collaboration, TDD, code reviews, and clean coding practices, fostering a strong foundation in Agile software development."
  },
];

// add some additional details to last 2 section.

export const projectDataList = [
  {
    title: "Scotland Yard",
    link: "https://subhashydv.github.io/blog/2022/08/scotland-yard/",
    about: "Scotland yard is board game in which detectives tries to catch robber based on robber log. Players can move around streets of London representing board map. This strategic game emphasizes teamwork and dedication, all brought to life through real-time interactions and a browser-based interface.",
    description: "Scotland yard is board game in which detectives tries to catch robber based on robber log. Players can move around streets of London representing board map. It was published in 1983 and received the Spiel des Jahres award in same year.",
    keyContributions: [
        "Built the web version of the multiplayer game Scotland Yard using vanilla JS for frontend and expressJS for backend.",
      "Designed and developed a responsive website that enhanced the user experience across devices.",
      "Adopted industry best practices like pair programming, team collaboration, TDD, " +
      "code reviews, and clean coding practices, fostering a strong foundation in Agile software development",
      "Completed the project within 30 days, leading to showcase the quick development."
    ],
    techStack: "VanillaJs, NodeJs, ExpressJs, Redis",
    techStackList: ["VanillaJs", "NodeJs", "ExpressJs", "Redis", "Git"]
  },
  {
    title: "ToDo Web App",
    link: "https://github.com/subhashydv/DailyDo",
    about: "A simple yet powerful To-Do web application designed to help users manage daily tasks efficiently. The application allows users to add, delete, and mark tasks as complete, with all changes reflected in real-time. Built using a lightweight tech stack with a focus on clarity, responsiveness, and clean UI/UX.",
    description: "This project is a full-stack to-do list web application built from scratch using Vanilla JavaScript (no frameworks), HTML, and CSS for the front end, and Node.js with Express.js on the back end. ",
    keyContributions: [
      "Developed the front-end interface using HTML, CSS, and Vanilla JavaScript with interactive DOM manipulation and form handling.",
      "Built a RESTful API using Node.js and Express.js to handle task creation, retrieval, updating, and deletion.",
      "Implemented dynamic rendering of task items using JavaScript without any front-end framework.",
        "Managed data persistence through in-memory and file integration."
    ],
    techStack: "VanillaJs, NodeJs, ExpressJs, GIT",
    techStackList: ["VanillaJs", "NodeJs", "ExpressJs", "Git"]
  },
  {
    title: "Timesheet Autofill",
    link: "https://github.com/subhashydv/Timesheet-AutoFill",
    about: "A simple tool which is designed to automate the process of filling out timesheets by executing a pre-configured script at scheduled intervals using cron jobs. It eliminates the need for manual entry by auto-filling work logs based on predefined templates, ensuring timely and consistent submission.",
    description: "This project is a simple tool which runs on background to fill timesheet automatically by scheduling cronjob. It uses the data defined from user while setup to enhance user experience. By integrating with the client’s timesheet portal and running silently in the background, the tool helps improve productivity, reduce human error, and ensure compliance with submission deadlines.",
    keyContributions: [
      "Developed the tool using Taiko and JavaScript for browser automation.",
      "Used AppleScript to interact with system to launch consent popup",
      "Implemented a cron job to schedule the autofill task at regular intervals.",
      "Ensured tool automatically keep doing checkout until user active on the system.",
      "Enhanced user experience by showing a popup when password gets expired, prompting the user to update it.",
    ],
    techStack: "JavaScript, Taiko, dotEnv, Git",
    techStackList: ["JavaScript", "Taiko", "dotEnv", "Git"]
  }
];