import { Link } from "react-router-dom";
import Restrocard from "./Restrocard";

const RestroDiv = ({restrotorender,lastref}) => {
  return (
  <div className="restrocontainer" >
    {restrotorender?.map((restroitem,index) => {
      if (restrotorender.length==index+1) {
        return  <Link ref={lastref} key={restroitem.data.data.uuid} to={`/restrorants/${restroitem.data.data.sla.restaurantId}`}><Restrocard  item={restroitem} /></Link> 
      }else{
        return <Link key={restroitem.data.data.uuid} to={`/restrorants/${restroitem.data.data.sla.restaurantId}`}><Restrocard  item={restroitem} /></Link> 
      }
    })}
  </div>)
};

export default RestroDiv;
