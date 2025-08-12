import { type JobPost } from '@/types/job-post';

export const MOCK_JOB_POSTS: JobPost[] = [
  {
    id: 'a3f1b2c4-8d9e-4f7a-9b2e-1c4d5e6f7a8b',
    date: new Date('2025-05-30'),
    isBookmarked: false,
    image: '/images/netflix.jpg',
    title: 'Frontend Developer',
    company: 'Netflix',
    experience: 'Senior',
    salary: 120000,
    type: 'Full time',
    work: 'On-site',
    description:
      'Build stunning, interactive interfaces that redefine the streaming experience for millions.',
    tags: ['WebDevelopment', 'ResponsiveDesign', 'React', 'Typescript', 'Remote'],
    companyDescription:
      'With over 250 million subscribers in more than 190 countries, Netflix is the world’s leading streaming entertainment service, offering a vast library of award-winning TV series, films, and documentaries. Driven by innovation and a passion for storytelling, we push the boundaries of technology and content to redefine the future of entertainment. Join us to create seamless, immersive experiences that captivate audiences worldwide!',
    jobInfo: [
      'Architect and develop high-performance, scalable web applications for millions of users.',
      'Enhance UI/UX for seamless streaming across all devices.',
      'Lead technical decisions and collaborate with cross-functional teams.',
      'Ensure performance, security, and accessibility best practices.',
      'Write clean, maintainable code.',
      'Integrate APIs seamlessly with backend teams.'
    ],
    requirements: [
      '5+ years of experience in frontend development.',
      'Expertise in React, TypeScript, JavaScript, and modern web frameworks.',
      'Strong understanding of performance optimization and responsive design.',
      'Experience with state management libraries (Redux, Zustand).',
      'Excellent communication skills and experience mentoring developers.',
      'Strong problem-solving skills and ability to work in a fast-paced environment.'
    ]
  },
  {
    id: 'b7e2c3d4-5f6a-4b8c-9d0e-2f3a4b5c6d7e',
    date: new Date('2025-05-25'),
    isBookmarked: true,
    image: '/images/meta.png',
    title: 'Cloud Engineer',
    company: 'Meta',
    experience: 'Senior',
    salary: 110000,
    type: 'Full time',
    work: 'Remote',
    description:
      "Design and optimize scalable cloud infrastructure to support billions of users across Meta's ecosystem.",
    tags: ['CloudComputing', 'AWS', 'DevOps', 'Kubernetes', 'Hybrid'],
    companyDescription:
      'Meta builds technologies that help people connect, find communities, and grow businesses. With billions of users worldwide, Meta’s platforms include Facebook, Instagram, WhatsApp, and more, all powered by cutting-edge infrastructure and cloud solutions.',
    jobInfo: [
      'Design and implement scalable cloud infrastructure.',
      'Ensure high availability and fault tolerance for global services.',
      'Collaborate with cross-functional teams to optimize performance.',
      'Automate deployment and monitoring processes.',
      'Maintain security and compliance standards.',
      'Troubleshoot and resolve infrastructure issues.'
    ],
    requirements: [
      '5+ years of experience in cloud engineering or related fields.',
      'Expertise in AWS, Kubernetes, and DevOps practices.',
      'Strong scripting skills (Python, Bash, etc.).',
      'Experience with CI/CD pipelines.',
      'Knowledge of networking, security, and distributed systems.',
      'Excellent problem-solving and communication skills.'
    ]
  },
  {
    id: 'c8d9e0f1-2a3b-4c5d-8e9f-0a1b2c3d4e5f',
    date: new Date('2025-05-28'),
    isBookmarked: true,
    image: '/images/uber.png',
    title: 'UI Designer',
    company: 'Uber',
    experience: 'Mid',
    salary: 92000,
    type: 'Part-time',
    work: 'Hybrid',
    description:
      'Create intuitive and visually compelling interfaces that enhance the Uber experience for millions of users.',
    tags: ['UIDesign', 'DesignSystems', 'Figma', 'Prototyping', 'Hybrid'],
    companyDescription:
      'Uber is a global technology company that connects people and things through mobility and delivery services. We design experiences that make transportation and delivery seamless, reliable, and accessible.',
    jobInfo: [
      'Design user interfaces for mobile and web applications.',
      'Collaborate with product managers and engineers to define user needs.',
      'Create wireframes, prototypes, and high-fidelity designs.',
      'Ensure design consistency across platforms.',
      'Conduct user research and usability testing.',
      'Iterate designs based on feedback and analytics.'
    ],
    requirements: [
      '3+ years of experience in UI/UX design.',
      'Proficiency in Figma and other design tools.',
      'Strong understanding of design systems and accessibility.',
      'Experience with prototyping and user testing.',
      'Excellent visual design skills and attention to detail.',
      'Ability to work in a fast-paced, collaborative environment.'
    ]
  },
  {
    id: 'd1e2f3a4-b5c6-4d7e-8f9a-0b1c2d3e4f5a',
    date: new Date('2025-05-20'),
    isBookmarked: false,
    image: '/images/google.png',
    title: 'Software Engineer',
    company: 'Google',
    experience: 'Junior',
    salary: 90000,
    type: 'Full time',
    work: 'Remote',
    description:
      "Develop scalable and innovative software solutions that power Google's products and services worldwide.",
    tags: ['SoftwareEngineering', 'Python', 'Java', 'DistributedSystems', 'Hybrid'],
    companyDescription:
      'Google is a global leader in technology, specializing in internet-related services and products, including search, cloud computing, software, and hardware. Our mission is to organize the world’s information and make it universally accessible and useful.',
    jobInfo: [
      'Develop and maintain scalable backend and frontend systems.',
      'Collaborate with cross-functional teams to deliver high-quality products.',
      'Write clean, efficient, and testable code.',
      'Participate in code reviews and design discussions.',
      'Optimize applications for performance and scalability.',
      'Troubleshoot and debug production issues.'
    ],
    requirements: [
      '1-2 years of experience in software development.',
      'Proficiency in Python, Java, or similar languages.',
      'Understanding of distributed systems and cloud platforms.',
      'Familiarity with version control systems (Git).',
      'Strong problem-solving and analytical skills.',
      'Good communication and teamwork abilities.'
    ]
  },
  {
    id: 'e2f3a4b5-c6d7-4e8f-9a0b-1c2d3e4f5a6b',
    date: new Date('2025-05-31'),
    isBookmarked: false,
    image: '/images/amazon.png',
    title: 'Frontend Developer',
    company: 'Amazon',
    experience: 'Junior',
    salary: 40000,
    type: 'Internship',
    work: 'On-site',
    description:
      "Develop interactive web interfaces, enhance user experiences, and contribute to Amazon's ecosystem.",
    tags: ['Frontend', 'React', 'Javascript', 'UX/UI', 'Internship', 'Remote'],
    companyDescription:
      'Amazon is a global e-commerce and cloud computing leader, offering a wide range of products and services. We innovate to make customers’ lives easier and more convenient, from online shopping to cloud solutions.',
    jobInfo: [
      'Assist in developing and maintaining web applications.',
      'Collaborate with senior developers to implement features.',
      'Write clean, maintainable, and well-documented code.',
      'Participate in code reviews and team meetings.',
      'Test and debug applications.',
      'Learn and apply best practices in frontend development.'
    ],
    requirements: [
      'Currently pursuing or recently completed a degree in Computer Science or related field.',
      'Basic knowledge of HTML, CSS, and JavaScript.',
      'Familiarity with React is a plus.',
      'Eagerness to learn and adapt to new technologies.',
      'Good problem-solving skills.',
      'Ability to work collaboratively in a team environment.'
    ]
  }
];
