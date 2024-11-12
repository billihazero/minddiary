import Button from "../component/Button";

const Home = () => {
  return (
    <div>
      <Button
        text={"기본버튼"}
        onClick={() => {
          alert("default button");
        }}
      />
      <Button
        text={"긍정버튼"}
        type={"positive"}
        onClick={() => {
          alert("positive button");
        }}
      />
      <Button
        text={"부정버튼"}
        type={"negative"}
        onClick={() => {
          alert("negative button");
        }}
      />
    </div>
  );
};

export default Home;
