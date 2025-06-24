export const CustomInput = ({ picture, head, text }) => {
  return (
    <div>
      <div>
        <img src={picture}></img>
      </div>
      <div>{head}</div>
      <div>{text}</div>
    </div>
  );
};
