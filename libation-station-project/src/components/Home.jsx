import oldFashioned from '../assets/Oldfashioned.jpeg'

const Home = () => {
    return (
        <div className="home">
        
        
        
        <p className="welcome">Welcome to The Libation Station! 
        <br/><br/>
        Here at The Libation Station, we are passionate about mixology and everything related to the art of crafting delightful libations.
        <br/><br/>
        Discover an extensive collection of cocktail recipes, from timeless classics to innovative concoctions that push the boundaries of flavor. Our expertly curated library will awaken your taste buds and empower you to master the art of mixology in the comfort of your own home.</p>
        <img src= {oldFashioned} alt="" className="landing-image"/>
       </div> 
    )
}

export default Home