const Btn = (props) => {
  return (
    <button className={props.propcss} onClick={props.propfunc}>
      {props.propname}
    </button>
  );
};

export default Btn;
<div className="shadow-lg"></div>