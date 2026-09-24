export interface SlideDocument {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'sheet' | 'link';
  size?: string;
  date: string;
  url?: string;
  description: string;
}

export interface SlideData {
  id: number;
  editorialIndex: string;
  kicker: string;
  title: string;
  subtitle: string;
  primaryTag: string;
  heroImage: string;
  imageCaption: string;
  corePillars: {
    title: string;
    description: string;
    metrics?: string;
  }[];
  keyInsights: string[];
  presenterNotes: string;
  graphicType: 'corridor-map' | 'value-chain' | 'talent-hub' | 'action-matrix' | 'strategic-pillars';
  customImages?: string[];
  documents?: SlideDocument[];
}
