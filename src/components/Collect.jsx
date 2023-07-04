import men from "../assets/images/mens.png";
function Collect(props) {
  return (
    <div>
      <div>
        <img width={200} src={props.icon} alt="" />
        <div>
          <p className="text-gray">{props.category}</p>
        </div>

        <h3 className="font-bold">{props.collection}</h3>
        <h4 className="">{props.shop}</h4>
        <h5>{props.react}</h5>
      </div>
    </div>
  );
}
export default Collect;
