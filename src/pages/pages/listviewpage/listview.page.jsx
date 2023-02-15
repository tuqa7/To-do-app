import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect, useState } from "react";
import List from "../../../components/list/list.component";


const LIstViewPage = (props) => {
  const [time, settime] = useState(new Date());

  const handletime = () => {
    console.log("set a new time ...");
    settime(new Date());
  };

  useEffect(() => {
    console.log("welcome to list view items !");
    

    // const interval1=setInterval(() => {
    //   console.log("set a new time ...")
    //   settime(new Date());
    // }, 1000);

    //or

    const interval1 = setInterval(handletime, 1000);

    return () => {
      clearInterval(interval1);
      console.log("clear time");

      console.log("bye bye from list view items !");
    };
  }, []);
  return (
    <div className="flex">
      <h3>{time.toLocaleTimeString()}</h3>
      {props.items.length > 0 ? (
        <List items={props.items} ondelete={props.ondelete} done={props.done} />
      ) : (
        <div>there is no items added !</div>
      )}
    </div>
  );
};
export default LIstViewPage;
