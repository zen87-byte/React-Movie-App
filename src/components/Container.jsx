import Cards from "./Cards";
import "../App.css";

const Container = ({category}) =>{
    return(
        <div className="container">
            <div className="top-container">
                <h3>{category}</h3>
                <a href="#">View all <i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>
            <div className="item-container">
                <Cards/>
            </div>
        </div>      
    )
}

export default Container