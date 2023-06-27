import { useParams } from "react-router-dom";

const AllPage = () =>{
    const { category } = useParams();
    console.log(category);
    return(
        <div className="wrapper">
            <h1>{category}</h1>
            <p>ANJAAYYY</p>
        </div>
    )
}

export default AllPage;