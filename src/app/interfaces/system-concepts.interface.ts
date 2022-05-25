export interface sectionContents {
  title?: string;
  target?: string;
}

export interface ISystemConcepts {
  sectionHeading?: string;
  sectionTarget?: string;
  sectionContents?: [ sectionContents ]
}
