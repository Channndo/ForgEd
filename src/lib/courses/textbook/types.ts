export interface TextbookLaw {
  name: string;
  year?: string;
  summary: string;
}

export interface TextbookCitation {
  source: string;
  url?: string;
  note?: string;
}

export interface TextbookSection {
  id: string;
  title: string;
  paragraphs: string[];
  laws?: TextbookLaw[];
  bulletPoints?: string[];
  citations?: TextbookCitation[];
}

export interface TextbookChapter {
  id: string;
  number: number;
  title: string;
  subtitle?: string;
  sections: TextbookSection[];
  /** What learners should be able to do after this chapter */
  learningObjectives?: string[];
  /** End-of-chapter synthesis */
  chapterSummary?: string;
  /** Core ideas to remember */
  keyConcepts?: string[];
  /** Why this chapter matters at work */
  realWorldRelevance?: string;
}

export interface TextbookIntro {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface TextbookBundle {
  slug: string;
  intro: TextbookIntro;
  chapters: TextbookChapter[];
}
