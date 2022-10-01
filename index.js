const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  const bg = `${className}`;
  return (
    <div className={bg}>
      <h1 className="text">{text}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="box-1" text="Small" />
      <Box className="box-2" text="Medium" />
      <Box className="box-3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
