import img from "../assets/BannerApropos.png"
import Banner from "../components/Banner"
import Collapse from "../components/Collapse"

function Apropos() {
    return (<div>
        <Banner img={img} />
        <Collapse />
    </div>)
}

export default Apropos