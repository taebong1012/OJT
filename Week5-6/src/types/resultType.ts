export interface resultInterface {
  id: string;
  f?: {
    simple: simpleResultType;
    specific: specificResultType;
  };
  e?: {
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
  wrongCnt: number;
  wrongProblem: Array<number>[];
  wrongImgae: Array<string>[];
};
