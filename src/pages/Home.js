import Editor from "../component/Editor";
import EmotionItem from "../component/EmotionItem";

const Home = () => {
  return (
    <div>
      <Editor
        initData={{
          date: new Date().getTime(),
          emotionId: 1,
          content: "이전에 작성했던 일기",
        }}
        onSubmit={() => {
          alert("제출해버림 ~");
        }}
      />
    </div>
  );
};

export default Home;
