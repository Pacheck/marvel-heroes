export type CharacterProp = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    available: number;
    items: Series[];
  };
};

type Series = {
  resourceURI: string;
  name: string;
};
