import { useEffect, useState } from "react";
import "./App.css";

import FormPage from "./pages/pages/formpage/form.page";
import NotFoundPage from "./pages/pages/notfound/notfound";
import LIstViewPage from "./pages/pages/listviewpage/listview.page";
import PopUp from "./components/popup.componant/popup ,componant";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("ToDoTtems")) || []
  );
  // const [currentpage, changepage] = useState("form");
  const [popup, changepopup] = useState(false);
  const [deleteornot, changedelete] = useState(false);

  const [iddelete, changeid] = useState();

  const addItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
    // sorturgrnt(newItems);
  };

  // const sorturgrnt=(Items)=>{
  //   const newItems = [...Items].sort((a, b) => (a.urgent > b.urgent ? -1 : 1));
  //   setItems(newItems);
  // }

  const deletefun = (id) => {
    changeid(id);
    if (deleteornot === true) {
      const new_items = items.filter((item) => item.id !== id);
      setItems(new_items);
      changedelete(false);
      changepopup(false);
    } else {
      changepopup(true);
    }
  };

  const handleClose = () => {
    changepopup(false);
  };

  const handledelete = () => {
    changepopup(false);
    changedelete(true);
    deletefun(iddelete);
  };

  const sort = (lola) => {
    const newItems = [...lola].sort((a, b) => (a.isDone > b.isDone ? 1 : -1));

    setItems(newItems);
    // sorturgrnt(newItems);
  };

  const donefun = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, isDone: true } : item
    );

    setItems(newItems);
    sort(newItems);
  };

  // useEffect(() => {
  //   {
  // items.length === 0 ? (changepage("form")) : (changepage("listview"));
  //   }
  // }, []);

  return (
    <div className="App">
      {localStorage.setItem("ToDoTtems", JSON.stringify(items))}
      <BrowserRouter>
        <Header />
        {/* changepage={changepage} page={currentpage} /> */}

        <div className="appbody">
          {/* <Form addItem={addItem} />
        <br/>
        <hr/>
        <List items={items} ondelete={deletefun} /> */}

          <Routes>
            {console.log(items.length===0 )}
            {items.length === 0 ? (
              <Route path="/" element={<Navigate to="/add" />} />
            ) : (
              <Route path="/" element={<Navigate to="/view" />} />
             
            )}
            <Route path="/add" element={<FormPage addItem={addItem} />} />
            <Route
              path="/view"
              element={
                <LIstViewPage
                  items={items}
                  ondelete={deletefun}
                  done={donefun}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          {/* ///////////////////////////////// */}

          {/* {currentpage === "form" && <FormPage addItem={addItem} />}
        {currentpage === "listview" && (
          <LIstViewPage items={items} ondelete={deletefun} done={donefun} />
        )} */}

          {console.log(deleteornot, popup)}

          {popup && (
            <PopUp
              className="popup"
              handleClose={handleClose}
              handledelete={handledelete}
            />
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
