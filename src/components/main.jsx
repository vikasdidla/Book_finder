import React, { useState } from "react";
import Card from "./card";
import axios from "axios";
import "./style.css"

const Main=()=>{
    const [search , setSearch]=useState("");
    const [booksData ,setBookData]=useState([]);
    const searchBook= (event)=>{
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAp4gz8JG7o-whbvGVvVyCflvD3B7ZGoN8'+'&maxResults=40')
            .then(res=>setBookData(res.data.items || []))
            .catch(err=>console.log(err))
    }
    return(
        <div className="cointainer">
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like <br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={event=>setSearch(event.target.value)}
                        />
                        <button onClick={()=>searchBook()}>Search</button>
                    </div >
                    <img className="img" src="./images/bg1.jpeg" alt="image not found"/>
                   </div>
            </div>
            <div className="cointainer2">
                <Card book={booksData}/>
            </div>
        
        </div>
    )
}
export default Main