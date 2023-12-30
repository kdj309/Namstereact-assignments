import { Link } from "react-router-dom";
import Restrocard from "./Restrocard";

const RestroDiv = ({restrotorender,lastref}) => {
  return (
  <div className="restrocontainer" data-testid="restrocontainer" >
    {restrotorender?.map((restroitem,index) => {
      // console.log(restroitem);
      // info.id
      if (restrotorender.length==index+1) {
        return  <Link ref={lastref} key={restroitem.info.id} to={`/restrorants/${restroitem.info.id}`}><Restrocard  item={restroitem} /></Link> 
      }else{
        return <Link key={restroitem.info.id} to={`/restrorants/${restroitem.info.id}`}><Restrocard  item={restroitem} /></Link> 
      }
    })}
  </div>)
};

export default RestroDiv;
