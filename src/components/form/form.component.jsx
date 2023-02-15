import { useState } from "react";
import { useNavigate} from "react-router-dom";

import Catergories from "../../data/data";
import "./form.css";
const Form = (props) => {
  
  const [title, changetitle] = useState("Run");
  const [category, changecategory] = useState("");
  const [urgent, changeUrgent] = useState(false);

  const navegate = useNavigate();

  const handleNav = () => {
    navegate({ pathname: "/view" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: new Date(),
      isDone: false,
      title: event.target.title.value,
      category: event.target.category.value,
      urgent: event.target.urgent.checked,
    };

    if (category === "") {
      alert("Enter a category");
      return;
    }

    props.addItem(newItem);

    changetitle("");
    changecategory("");
    changeUrgent(false);
    handleNav();
  };

  const handletilte = (event) => {
    let title = event.target.value;
    title = title.replace(".", " ");
    title = title.replace("-", " ");
    changetitle(title);
  };

  return (
    <div className="body">
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <label htmlFor="tilte" title="title">
            Title :{" "}
          </label>
          <input
            placeholder="Title"
            name="title"
            type="text"
            value={title}
            onChange={handletilte}
          />
        </div>
        <div className="row">
          <label htmlFor="category" title="category">
            Category :{" "}
          </label>
          <select
            name="category"
            placeholder="Category"
            value={category}
            onChange={(event) => changecategory(event.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            {Catergories.map((item, index) => (
              <option key={index} value={item.value}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          <input
            name="urgent"
            type="checkbox"
            checked={urgent}
            onChange={(event) => changeUrgent(event.target.checked)}
          />
          <label>Urgent</label>
        </div>

        <input className="button row" type="submit" value="Add to List" />
      </form>
    </div>
  );
};

export default Form;
