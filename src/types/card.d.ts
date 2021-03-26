interface ICardHeading {
    fields: string[];
    delimiter: string;
  }
  
  interface ICardAvatar {
    source: string;
  }
  
  interface ICardFieldData {
    label: string;
    fields: string[];
    delimiter: string;
  }
  
  interface ICardMetadata {
    heading: ICardHeading;
    avatar: ICardAvatar;
    labelWidth: number;
    content: ICardFieldData[][];
  }