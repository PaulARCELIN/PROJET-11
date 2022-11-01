import Banner from "../components/Banner"
import LocationList from "../components/LocationList"
import img from "../assets/BannerHome.png"

function Home() {
   
   return (<div>
        <Banner img={img} texte="Chez vous, partout et ailleurs" />
        <LocationList />
    </div>)
}

export default Home