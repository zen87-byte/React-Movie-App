import Navbar from "../Navbar";
import Container from "../Container";
import "../../App.css"

const HomePage = () =>{
    return(
        <div className="home-wrapper">
            <Navbar/>
            <Container category="Trending"/>
        </div>
    )
}

export default HomePage;