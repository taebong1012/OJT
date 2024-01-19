import { useParams } from "react-router-dom";

const Result = () => {
  const { grade } = useParams<{ grade: string }>();

  return <div>{grade}등급 결과 페이지</div>;
};

export default Result;
