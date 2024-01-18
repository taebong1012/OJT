import axios from "axios";
import { useQuery } from "react-query";

/** 아이디를 기준으로 이미 사용중인지(false) 아닌지(true)를 리턴
 * @param inputId: 사용자가 입력한 아이디
 */
const getIsPossibleId = async (inputId: string): Promise<boolean> => {
  const { data } = await axios.get(`/checkid/${inputId}`);
  return data;
};

export const usePossibleId = (inputId: string) => {
  return useQuery(["isPossibleId", inputId], () => getIsPossibleId(inputId), {
    enabled: !!inputId,
  });
};
