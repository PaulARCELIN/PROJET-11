import Banner from "../components/Banner"
import LocationList from "../components/LocationList"
import img from "../assets/BannerHome.png"
import Footer from "../components/Footer"

function Home() {
   
   return (<div>
        <Banner img={img} texte="Chez vous, partout et ailleurs" />
        <LocationList />
        <Footer />
    </div>)
}

export default Home