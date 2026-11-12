export type WorkImage = {
  src: string;
  alt: string;
  label: string;
  title: string;
};

export type Work = {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  images?: WorkImage[];

  tech: string[];
  period: string;

  overview?: {
    developmentType?: string;
    role?: string;
    features?: string[];
  };

  links: {
    site?: string;
    github?: string;
  };
  highlights: string[];
  hasDetail: boolean;
};
