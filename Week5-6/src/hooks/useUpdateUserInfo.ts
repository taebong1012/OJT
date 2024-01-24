import useUserProfileData from "@/hooks/useUserInfo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useUpdateUserInfo = (curAchievement: number) => {
  const queryClient = useQueryClient();

  /** 원래 있던 사용자 데이터 수정해서 넣기 */
  const { data } = useUserProfileData();

  /** 사용자 성취도 업데이트 */
  const postUserInfo = async () => {
    let average = 0;
    if (data) {
      if (data.acheivement === 0) {
        average = curAchievement;
      } else {
        average = (data.acheivement + curAchievement) / 2;
      }

      data.acheivement = average;
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
