import {
  Code2,
  FileCode2,
  Palette,
  Blocks,
  Database,
  Server,
  GitBranch,
  Globe,
  Package,
  Layout,
  Boxes,
  Workflow,
  Cloud,
  MessageSquare,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
}

export const skillsData: Skill[] = [
  { name: "HTML", icon: Layout, color: "#E34F26" },
  { name: "CSS", icon: Palette, color: "#1572B6" },
  { name: "TypeScript", icon: FileCode2, color: "#3178C6" },
  { name: "JavaScript", icon: FileCode2, color: "#F7DF1E" },
  { name: "React.js", icon: Code2, color: "#61DAFB" },
  { name: "Node.js", icon: Server, color: "#339933" },
  { name: "Express.js", icon: Server, color: "#000000" },
  { name: "MongoDB", icon: Database, color: "#47A248" },
  { name: "Tailwind CSS", icon: Palette, color: "#38B2AC" },
  { name: "Bootstrap", icon: Palette, color: "#7952B3" },
  { name: "Material UI", icon: Palette, color: "#0081CB" },
  { name: "Daisy UI", icon: Palette, color: "#1AD1A5" },
  { name: "Socket.io", icon: MessageSquare, color: "#010101" },
  { name: "JWT", icon: Package, color: "#000000" },
  { name: "Git", icon: GitBranch, color: "#F05032" },
  { name: "GitHub", icon: GitBranch, color: "#181717" },
  { name: "Redux", icon: Workflow, color: "#764ABC" },
  { name: "Redux Toolkit", icon: Workflow, color: "#764ABC" },
  { name: "Zustand", icon: Boxes, color: "#443E38" },
  { name: "Cloudinary", icon: Cloud, color: "#3448C5" },
  { name: "REST API", icon: Globe, color: "#FF5733" },
  { name: "Next.js", icon: Blocks, color: "#000000" },
];
