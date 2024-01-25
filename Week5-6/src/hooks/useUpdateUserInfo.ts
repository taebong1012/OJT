import useGradeResults from "@/hooks/useGradeResults";
import useUserProfileData from "@/hooks/useUserInfo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useUpdateUserInfo = () => {
  const queryClient = useQueryClient();

  /** 원래 있던 사용자 데이터 수정해서 넣기 */
  const { data } = useUserProfileData();

  const { data: gradeResultData } = useGradeResults();

  /** 사용자 성취도 업데이트 */
  const postUserInfo = async () => {
    let sum = 0;
    let cnt = 0;
    if (gradeResultData && data) {
      /** E등급의 성취도가 있다면  */
      if (gradeResultData.E.simple && gradeResultData.E.simple.achievement) {
        sum += gradeResultData.E.simple.achievement;
        cnt++;
      }

      /** F등급의 성취도가 있다면 */
      if (gradeResultData.F.simple && gradeResultData.F.simple.achievement) {
        sum += gradeResultData.F.simple.achievement;
        cnt++;
      }

      data.acheivement = sum / cnt;
    } else {
      throw new Error("ERR post user Info: NO ORIGIN USER DATA");
    }

    await axios.post("/userinfo", data);
  };

  /** useMutation으로 요청 */
  const { isError, isSuccess, mutate } = useMutation({
    mutationFn: postUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfileData"] });
    },
    onError: () => {
      console.error("ERR: update Result failed");
    },
  });

  return { isError, isSuccess, userAchievementMutate: mutate };
};

export default useUpdateUserInfo;
