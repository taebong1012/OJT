import { signInUserType } from "@/types/userType";
import axios from "axios";
import { useMutation } from "react-query";

const useSignIn = (signInUserData: signInUserType) => {
  const postSignIn = async () => {
    try {
      const response = await axios.post("/signin", signInUserData);
      console.log("로그인 성공");
      return response.data;
    } catch (error: any) {
      console.log("로그인 실패");
      throw new Error(
        error.response?.data?.message || "로그인에 실패했습니다."
      );
    }
  };

  const { mutate, data, isLoading, isError, error } = useMutation(postSignIn, {
    onSuccess: (data) => {
      console.log("data: ", data);
    },
    onError: () => {},
  });

  return { mutate, data, isLoading, isError, error };
};

export default useSignIn;
