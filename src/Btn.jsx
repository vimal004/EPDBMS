import { Link } from "react-router-dom";
const Btn = (props) => {
  return (
    <button className={props.propcss} onClick={props.propfunc}>
      <Link to={props.proprouter}>{props.propname} </Link> 
    </button>
  );
};

export default Btn;
<div className="shadow-lg"></div>;
