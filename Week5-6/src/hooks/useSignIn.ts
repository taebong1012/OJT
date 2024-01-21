import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { signInUserType } from "@/types/userType";

const useSignIn = (signInUserData: signInUserType) => {
  /** 로그인 진행 api */
  const postSignIn = async () => {
    try {
      await axios.post("/signin", signInUserData);
    } catch (error) {
      throw error;
    }
  };

  const { isError, isSuccess, mutate } = useMutation({
    mutationFn: postSignIn,
    onSuccess: () => {},
    onError: () => {},
  });

  return { isError, isSuccess, signInMutate: mutate };
};

export default useSignIn;
