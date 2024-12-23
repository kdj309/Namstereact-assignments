import { Link } from "react-router-dom";
import Restrocard from "./Restrocard";

const RestroDiv = ({restrotorender,lastref}) => {

  return (
  <div className="restrocontainer" >
    {restrotorender?.map((restroitem,index) => {
      console.log(restroitem)
      if (restrotorender.length==index+1) {
        return  <Link ref={lastref} key={restroitem.id} to={`/restrorants/${restroitem.id}`}><Restrocard  item={restroitem} /></Link> 
      }else{
        return <Link key={restroitem.id} to={`/restrorants/${restroitem.id}`}><Restrocard  item={restroitem} /></Link> 
      }
    })}
  </div>)
};

export default RestroDiv;
