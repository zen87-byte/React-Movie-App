import React, {useEffect, useState} from 'react';
import axios from "axios";

const Trending = () =>{
    const [trending, setTrending] = useState([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/movie/popular`,{
            params:{
                api_key: process.env.REACT_APP_API_KEY
            }
        }).then((res)=>{
            console.log(res);
        })
    })

    return(
        <div className="trending"></div>
    )
}

export default Trending
