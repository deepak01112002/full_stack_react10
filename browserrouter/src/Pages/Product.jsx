import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    men: false,
    women: false,
    jewelry: false,
    electronics: false
  });
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.checked
    });
  };

  let filteredData = products

     if(filter.men || filter.women || filter.jewelry || filter.electronics){
      filteredData = filteredData.filter((el)=>{
      
        if(filter.men && el.category == "men's clothing") {
         return true;
        }
        if(filter.women && el.category == "women's clothing" ){
         return true;
        }
        if(filter.jewelry && el.category == "jewelery" ){
         return true;
        }
        if(filter.electronics && el.category == "electronics" ){
         return true;
        }
 
      })

     }


     if(sortOption){
       filteredData = filteredData.sort((a,b)=>{
           if(sortOption == "asc"){
              return a.price - b.price;
           }else if(sortOption == "desc") {
               return b.price - a.price;
           }else if(sortOption == "atoz"){
               return b.title.localeCompare(a.title)
           }
        })
     }
   
     if(searchTerm){
      filteredData = filteredData.filter((el)=>{
           return el.title.toLowerCase().includes(searchTerm.toLowerCase())
      })


     }

    


   
  



  return (
    <>
      <div>
        <input type="checkbox" name="men" onChange={handleFilterChange} /> Men
        <input type="checkbox" name="women" onChange={handleFilterChange} /> Women
        <input type="checkbox" name="jewelry" onChange={handleFilterChange} /> Jewelry
        <input type="checkbox" name="electronics" onChange={handleFilterChange} /> Electronics
      </div>
      <div>
          <select name="" id="" onChange={(e)=>setSortOption(e.target.value)}>
              <option value="">Sort</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
              <option value="atoz">A to Z</option>
          </select>
      </div>
      <div>
         <input type="text" onChange={(e)=>setSearchTerm(e.target.value)} />
      </div>
      <div>
        {filteredData.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h1>{product.title}</h1>
            </Link>
            <img src={product.image} alt="" width="150px" height="150px" />
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
