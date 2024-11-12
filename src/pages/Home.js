import Editor from "../component/Editor";

const Home = () => {
  return (
    <div>
      <Editor
        onSubmit={() => {
          alert("제출해버림 ~");
        }}
      />
    </div>
  );
};

export default Home;
