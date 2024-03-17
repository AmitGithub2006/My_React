import { useEffect, useState } from "react";
import axios from "axios";

function Json() {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const [data, setData] = useState([]);
  const [isDataUpdated, setIsDataUpdated] = useState(false);
    useEffect(() => {
      axios.get("/todo").then((res) => {
        setId(res.data.length + 1);
        setData(res.data);
      });
    }, [isDataUpdated]);

  return (
    <>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter Your Text here"
      />

      <button
        onClick={() => {
          axios.post("/todo", { id: id, todoText: text }).then((res) => {
            setIsDataUpdated(!isDataUpdated);
          });
        }}
      >
        Add
      </button>
      <div>
        {data.map((todo) => {
          return <h1>{todo.todoText}</h1>;
        })}
      </div>
    </>
  );
}
export default Json;
