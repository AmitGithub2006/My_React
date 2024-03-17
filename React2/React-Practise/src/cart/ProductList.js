import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import { useNavigate } from "react-router-dom";

function ProductList(props) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getWatchData() {
      const res = await axios.get(
        `https://avish-test-api.herokuapp.com/watches`
      );
      console.log(res.data);
      setPosts(res.data);
    }
    getWatchData();
  }, []);

  const handleLogout = () => {
    navigate("/");
    props.setLoggedInUser(false);
  };

  return (
    <>
      <button onClick={handleLogout}>Logout</button>
      <div className="product_div">
        <div className="container">
          {posts.map((post) => (
            <div className="individual product_item_div">
              <img src={post.urlImg} className="product_img" />
              <h4 className="product_name">{post.Name}</h4>
              <span id="oldPrice">₹{post.price}</span>
              <span id="offerPrice">₹{post.offerPrice}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
