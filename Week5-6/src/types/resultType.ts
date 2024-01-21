export interface resultType {
  id: string;
  f?: {
    simple: {
      acheivement: number;
      date: string;
      time: string;
    };
    specific: {
      wrongCnt: number;
      wrongProblem: Array<number>[];
      wrongImgae: Array<string>[];
    };
  };
  e?: {
    simple: {
      acheivement: number;
      date: string;
      time: string;
    };
    specific: {
      wrongCnt: number;
      wrongProblem: Array<number>[];
      wrongImgae: Array<string>[];
    };
  };
}
