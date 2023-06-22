import FetchData from "../utils/fetch";
import Corousel from "./Corousel";

import "../App.css";

const Container = () =>{
    return(
        <>        
            <div className="container">
                <div className="top-container">
                    <h3>Popular</h3>
                    <a href="#">View all <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <div className="item-container">
                    <FetchData endpoint="popular">
                        <Corousel/>
                    </FetchData>
                </div>
            </div>      
            <div className="container">
                <div className="top-container">
                    <h3>Upcoming</h3>
                    <a href="#">View all <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <div className="item-container">
                    <FetchData endpoint="upcoming">
                        <Corousel/>
                    </FetchData>
                </div>
            </div>      
            <div className="container">
                <div className="top-container">
                    <h3>Top Rated</h3>
                    <a href="#">View all <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
                <div className="item-container">
                    <FetchData endpoint="top_rated">
                        <Corousel/>
                    </FetchData>
                </div>
            </div>         
        </>
    )
}

export default Container