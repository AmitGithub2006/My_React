import React,{useState, useEffect} from "react";

export default function Search() {
  const [posts, setPosts] = useState(["Apple","Mango", "Grapes", "Banana", "Guava", "Orange"]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const afterFilterData = posts.filter((post) => {
      if(post) {
        return post.toLowerCase().includes(search.toLowerCase())
      }
    })
    setFilteredData(afterFilterData)
  },[search])

  return (
    <div>
      <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
      {filteredData.map((post) => (
        <div>
          <h2>{post}</h2>
        </div>
      ))}
    </div>
  );
}