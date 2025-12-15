import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
}

export interface ComparisonRow {
  feature: string;
  cosmic: string | boolean;
  vscode: string | boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Extension {
  name: string;
  description: string;
  downloads: string;
  author: string;
  icon: LucideIcon;
  color: string;
}