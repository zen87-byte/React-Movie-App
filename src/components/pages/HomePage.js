import Navbar from "../Navbar";
import Container from "../Container";
import "../../App.css"

const HomePage = () =>{
    return(
        <div className="wrapper">
            <Navbar/>
            <Container category="Trending"/>
            <Container category="Top Rated"/>
            <Container category="Recommendation"/>
        </div>
    )
}

export default HomePage;