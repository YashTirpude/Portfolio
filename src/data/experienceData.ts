export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export const experienceData: Experience[] = [
  {
    company: "IHSUK Tech",
    position: "Full Stack Developer Intern",
    duration: "June 2025 – September 2025",
    location: "Remote",
    description:
      "Worked as a Full Stack Developer on a production-level AC Service Management System (Fixspire), responsible for building, integrating, and maintaining end-to-end application features across frontend, backend, and database layers.",
    achievements: [
      "Built responsive frontend interfaces and an admin dashboard using React.js to manage 500+ service tickets and customer complaints with real-time updates",
      "Developed 15+ RESTful APIs using Node.js and Express.js for service booking, technician assignment, status updates, and ticket handling",
      "Implemented authentication flows using JWT and Firebase Authentication, securing access for 200+ users across customer and admin portals",
      "Integrated automated email workflows (OTP, login verification, password reset) using Brevo API, processing 1,000+ emails monthly",
      "Designed MongoDB schemas and handled CRUD operations using Mongoose, managing a database of 300+ service records",
      "Optimized PDF generation logic, reducing data processing and conversion time by 81% (from 8s to 1.5-2s)",
      "Implemented data visualization using Chart.js to display service metrics, improving operational insights and decision-making speed by 40%",
      "Led and coordinated a cross-functional team of 5 members (2 designers, 3 developers), assigned tasks, conducted code reviews, and ensured 100% on-time feature delivery",
      "Facilitated daily standup meetings and resolved 50+ technical blockers, guiding the team to successfully implement 20+ new features across client and admin dashboards",
      "Handled 30+ bug fixes, conducted end-to-end testing, and implemented UI improvements that enhanced user experience ratings",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Firebase Authentication",
      "JWT",
      "Brevo Email API",
      "REST APIs",
      "Chart.js",
      "Git",
      "Postman",
      "automation",
    ],
  },
];
