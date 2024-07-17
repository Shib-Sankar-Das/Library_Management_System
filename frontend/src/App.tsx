import React from "react";
import "./App.css";
import { z } from "zod";
import { BookCopyModel } from "./zod_schemas/BookCopy";
import BookView from "./Components/BookView";
const App: React.FC = () => {
  const [Data, SetData] = React.useState<z.infer<typeof BookCopyModel>>([]);
  React.useEffect(()=>{
    fetch("api/view-book/All")
      .then((res) => res.json())
      .then((data) => {
        const DATA = BookCopyModel.safeParse(data);
        (DATA.success)?SetData(DATA.data):console.error(DATA.error);
      });
  },[])
  return (
    <div className="grid grid-flow-row grid-cols-2 justify-center align-middle">
      {Data.map((item) => (<BookView key={item._id} {...item} />))}
    </div>
  );
};
export default App;
