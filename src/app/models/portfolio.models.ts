export interface NavLink {
  label: string;
  fragment: string;
}

export interface ProjectTag {
  name: string;
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: ProjectTag[];
  link: string;
  linkLabel?: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export type TechCategoryIcon = 'frontend' | 'backend' | 'data' | 'ai';

export interface TechCategory {
  title: string;
  icon: TechCategoryIcon;
  techs: TechItem[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  icon: 'briefcase' | 'research';
}
