import Restrocard from "./Restrocard";

const RestroDiv = ({restrotorender}) => (
  <div className="restrocontainer">
    {restrotorender.map((restroitem) => (
      <Restrocard key={restroitem.data.id} item={restroitem} />
    ))}
  </div>
);

export default RestroDiv;
