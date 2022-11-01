import '../styles/Banner.css'

function Banner({img, texte}) {
    return(<div className='banner'>
        <img src={img} alt='Bannière' className='banner-img'></img>
        <p className='banner-text'>{texte}</p>
    </div>)
}

export default Banner