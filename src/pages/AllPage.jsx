import { useParams } from "react-router-dom";

const AllPage = () =>{
    const { id } = useParams();

    return(
        <div className="wrapper">
            <h1>{id}</h1>
            <p>ANJAAYYY</p>
        </div>
    )
}

export default AllPage;