import React, { useContext } from "react";
import { DataContext } from '../utils/fetch'

const ContextComponent = () => {
    const data = useContext(DataContext);

    return (
        <>
            {data.map((item, index) => (
                <div key={index} className="ContextData" >
                    <p>{item.release_date}</p>
                </div>
            ))}
        </>
    )
}

export default ContextComponent;
