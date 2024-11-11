import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return <div>{id}번째 일기</div>;
};
export default Diary;
