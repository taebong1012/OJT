import { userProfileType } from "@/types/userType";
import { getCookieId } from "@/utils/getSetCookie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUserProfileData = () => {
  /** cookie에서 로그인 사용자 ID 가져오기 */
  const id = getCookieId();

  const getUserProfileData = async (): Promise<userProfileType> => {
    const response = await axios.get(`/userinfo/${id}`);
    return response.data;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["userProfileData"],
    queryFn: getUserProfileData,
    // refetchOnMount: false,
  });

  return { isLoading, error, data };
};

export default useUserProfileData;
