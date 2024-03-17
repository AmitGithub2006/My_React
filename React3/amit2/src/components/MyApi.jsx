import React, { useState, useEffect } from "react";
import axios from "axios";

function MyApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://frozen-harbor-02472.herokuapp.com/table`).then((res) => {
    //   console.log(res.data);
      setData(res.data);
    }, []);
  });
  return (
    <>
      {data.map((datas) => {
        return (
            <>
        <h1>{datas.name}</h1>
        <img src={datas.imgUrl} alt="player"/>
        </>
        )
})}
    </>
  );
}

export default MyApi;
