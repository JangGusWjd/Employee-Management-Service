import "./StaffCollection.css";
import Staff from "./Staff";

const StaffCollection = ({ staffInfo }) => {
  return (
    <div className="StaffCollection">
      {staffInfo.map((info) => (
        <Staff staffInfo={info} key={info.id} />
      ))}
    </div>
  );
};

export default StaffCollection;
