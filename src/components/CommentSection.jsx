import React, { useContext } from "react";
import { DataContext } from "../utils/fetchData";

const CommentSection = () =>{
    const reviews = useContext(DataContext);
    console.log("Comment nih bossss", reviews)
    return(
        <>
            {reviews.map((item, index)=>(
                <div className="author-comment" key={index}>
                    <div className="author-photo">
                        <img src={`${process.env.REACT_APP_POSTER_PATH}${item.author_details.avatar_path}`} alt="" />
                    </div>
                    <div className="author-content">
                        <h4>{`${item.author}`}</h4>
                        <p>{`${item.content}`}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CommentSection