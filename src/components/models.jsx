import React from "react";
import"./style.css"

const Models=({show,item,onClose})=>{
    if(!show){
        return null;
    }
    const CoversBook=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <div className="over">
            <div className="over-inner">
                <button className="close" onClick={onClose}>Close</button>
                <div className="inner-box">
                    <img src={CoversBook} alt="image not found" />
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4>
                        <a href={item.volumeInfo.previewLink}><button>More</button></a>
                    </div>
                </div>
                <h4 className="Description">{item.volumeInfo.description}</h4>
            </div>
        </div>
    )
}
export default  Models