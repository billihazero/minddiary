const EmotionItem = ({ id, img, name, onclick, isSelected }) => {
  const handleOnClick = () => {
    onclick(id);
  };
  return (
    <div className="EmotionItem" onClick={handleOnClick}>
      <img alt={`emotion${id}`} src={img} />
      <span>{name}</span>
    </div>
  );
};
export default EmotionItem;
