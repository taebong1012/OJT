export interface resultInterface {
  id: string;
  F: {
    simple: simpleResultType;
    specific: specificResultType;
  };
  E: {
    simple: simpleResultType;
    specific: specificResultType;
  };
}

export type simpleResultType = {
  achievement: number;
  date: string;
  time: string;
};

export type specificResultType = {
  wrongImage: Array<string | null>;
};
