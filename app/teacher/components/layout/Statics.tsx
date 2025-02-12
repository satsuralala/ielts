import { AlignJustify, BookOpen,  FileSliders, Headphones, House, Mic, Pencil, User } from "lucide-react";
export const SKILLS = [
    {
      label: "All skills",
      icon: <AlignJustify size={24} />,
    },
    {
      label: "Listening",
      icon:<Headphones size={24} />,
    },
    {
      label: "Reading",
      icon: <BookOpen size={24}/>,
    },
    {
      label: "Writting",
      icon:<Pencil size={24} />,
    },
    {
      label: "Speaking",
      icon: <Mic size={24} />
    },
  
  ];
  
export const navItems: { [key: string]: string } = {
    "/teacher/dashboard": "My Dashboard",
    "/teacher/lessons": "Lessons",
    "/teacher/tests": "Tests",
    "/teacher/profile": "My Profile",
  };
export const sidebarLinks = [
    {
      href: "/teacher/dashboard",
      label: "My Dashboard",
      icon: <House size={20} />,
    },
    {
      href: "/teacher/lessons",
      label: "Lessons",
      icon: <BookOpen size={20} />,
    },
    { href: "/teacher/tests", label: "Tests", icon: <FileSliders size={20} /> },
    { href: "/teacher/profile", label: "My Profile", icon: <User size={20} /> },
  ];