// localStorage of an array
// import React, { useState, useEffect } from "react";

// function LocalStorage() {
//   const getLocalItems = () => {
//     let list = localStorage.getItem("lists");
//     console.log(list);

//     if (list) {
//       return JSON.parse(localStorage.getItem("lists"));
//     } else {
//       return [];
//     }
//   };

//   const [items, setItems] = useState("");
//   const [data, setData] = useState(getLocalItems());

//   const btnHandle = () => {
//     if (!items) {
//     } else {
//       setData([...data, items]);
//       setItems("");
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem("lists", JSON.stringify(data));
//   }, [data]);

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter a list..."
//         value={items}
//         onChange={(e) => setItems(e.target.value)}
//       />
//       <button onClick={btnHandle}>Add</button>
//     </>
//   );
// }

// export default LocalStorage;

// localStorage of an object
import React, { useState, useEffect } from "react";

function Logout() {
  const getLocalItems = () => {
    let list = localStorage.getItem("lists");
    console.log(list);

    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };

  const [items, setItems] = useState("");
  const [quan, setQuan] = useState("");
  const [data, setData] = useState(getLocalItems());

  const btnHandle = () => {
    if (!items) {
    } else {
      setData([...data, {items: items.fruit, quantity: quan.quantity}]);
      setItems("");
    }
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <input
        type="text"
        placeholder="Enter fruit name"
        value={items.fruit}
        onChange={(e) => setItems({"fruit" : e.target.value})}
      />
      <input
        type="number"
        placeholder="Enter quantity..."
        value={quan.quantity}
        onChange={(e) => setQuan({"quantity" : e.target.value})}
      />
      <button onClick={btnHandle}>Add</button>
    </>
  );
}

export default Logout;
