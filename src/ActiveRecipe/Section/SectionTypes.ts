export type SectionTypes = {
  displayItems: { info: string }[];
};

export interface SectionListProps extends SectionTypes {
  ordered?: boolean;
  clickable?: boolean;
  heading?: string;
}

export type SectionItemType = {
  info: string;
};

export interface SectionItemProps extends SectionItemType {
  clickable?: boolean;
}
