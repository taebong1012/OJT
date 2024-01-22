import { resultInterface } from "@/types/resultType";
import { getCookieId } from "@/utils/getSetCookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGradeResults = () => {
  /** cookie에서 로그인 사용자 ID 가져오기 */
  const id = getCookieId();

  const getGradeResults = async (): Promise<resultInterface> => {
    const response = await axios.get(`/result/${id}`);
    return response.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["gradeResults"],
    queryFn: getGradeResults,
  });

  return {
    isLoading,
    error,
    data,
  };
};

export default useGradeResults;
