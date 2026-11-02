export type Work = {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  tech: string[];
  period: string;
  links: {
    site: string;
    github: string;
  };
  highlights: string[];
  hasDetail: boolean;
};
