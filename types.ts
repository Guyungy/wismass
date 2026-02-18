
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface NavItem {
  label: string;
  href: string;
}


export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  img: string;
  summary: string;
  content: string;
  tags?: string[];
  keywords?: string[];
}
