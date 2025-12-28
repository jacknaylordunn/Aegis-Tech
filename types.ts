export interface Product {
  id: string;
  name: string;
  tagline: string;
  status: 'Live' | 'Beta' | 'In Development';
  description: string;
  logo?: string;
  heroImage: string;
  screenshots: string[];
  features: FeatureSection[];
  links: {
    label: string;
    url: string;
    primary?: boolean;
  }[];
}

export interface FeatureSection {
  title: string;
  description: string;
  points: string[];
}
