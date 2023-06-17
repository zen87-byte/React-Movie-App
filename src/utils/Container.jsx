import Cards from "./Cards";
import "./Container.css";

const Container = () =>{
    return(
        <div className="container">
            <div className="top-container">
                <h1>Category</h1>
                <p>See all</p>
            </div>
            <div className="item-container">
                <Cards title="Spider Man"/>
                <Cards title="Spider Man"/>
            </div>
        </div>      
    )
}

export default Container