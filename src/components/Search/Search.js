import React, { useEffect, useState } from 'react'
import Cards from '../cards/Cards';
import Axios from "../axios/Axios"
import "./search.css"
const Search = () => {
    const [searchString, setSearchString] = useState("");
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fechData = async()=>{
            try {
            const res = await Axios(searchString);
            // console.log(res);
            setData(res);
        } catch (error) {
            console.log(error);
        }
        }
        fechData();
        
    },[searchString]);
  return (
    <>
     <div className='searchContainer'>
        <h1>Movie Search</h1>
        <input type="text" className='search' value={searchString} onChange={(e)=>setSearchString(e.target.value)}/>
    </div>
    <Cards data={data}/>
    </>
  )
}

export default Search