import useGradeResults from "@/hooks/useGradeResults";
import getTodayDate from "@/utils/getTodayDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type useUpdateResultProps = {
  grade: string | undefined;
  wrongQuestion: Array<string | null>;
  time: string;
  date: string;
};

const useUpdateResult = (resultObject: useUpdateResultProps) => {
  const queryClient = useQueryClient();

  /** 원래 있던 데이터 수정해서 넣기 */
  const { data } = useGradeResults();

  /** 결과 업데이트 */
  const postResult = async () => {
    if (data) {
      if (resultObject.grade === "E" || resultObject.grade === "F") {
        /** simple 데이터 넣기 */
        data[resultObject.grade]!.simple = {
          achievement:
            resultObject.wrongQuestion.filter((element) => element === null)
              .length * 10,
          date: getTodayDate(),
          time: resultObject.time,
        };
        /** specific 데이터 넣기 */
        data[resultObject.grade]!.specific = {
          wrongImage: resultObject.wrongQuestion,
        };
      }
    }

    await axios.post("/result", data);
  };

  /** useMutation으로 요청 */
  const { isError, isSuccess, mutate } = useMutation({
    mutationFn: postResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gradeResults"] });
    },
    onError: () => {
      console.error("ERR: update Result failed");
    },
  });

  return { isError, isSuccess, resultMutate: mutate };
};

export default useUpdateResult;
