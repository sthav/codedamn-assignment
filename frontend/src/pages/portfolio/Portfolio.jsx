import "./Portfolio.scss"
import Sidebar from "../../components/sidebar/Sidebar";
// import ProjectCard from "../../components/projectcard/ProjectCard";
import Navbar from "../../components/navbar/Navbar";





const Portfolio = () => {
    return (
        <>
            <Navbar />
            <div className="portfolio">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="projectport">
                    <h1>Projects</h1>
                    {/* <div className="projects">
                    <ProjectCard />
                    </div> */}
                    <div className="container">
                        <div className="item">
                            <img src="../../../public/assets/pokey.png" alt="" />
                            <h3><a href="https://pokedex-omega-eosin.vercel.app/" target="_blank" rel="noreferrer">Pokedex</a></h3>
                        </div>
                        <div className="item">
                            <img src="../../../public/assets/bookbook.png" alt="" />
                            <h3><a href="https://hotel-booking-ten.vercel.app/" target="_blank" rel="noreferrer">book-a-hotel</a></h3>
                        </div>
                        <div className="item">
                            <img src="../../../public/assets/stealthhhh.png" alt="" />
                            <h3><a href="https://stealth-project-ten.vercel.app/" target="_blank" rel="noreferrer">File manager</a></h3>
                        </div>
                        <div className="item">
                            <img src="../../../public/assets/laundry.png" alt="" />
                            <h3><a href="https://github.com/sthav/Laundry-app-React-native" target="_blank" rel="noreferrer">React-Native_Laundry</a></h3>
                        </div>
                        <div className="item">
                            <img src="../../../public/assets/workout.png" alt="" />
                            <h3><a href="https://github.com/sthav/Fitness-app-React-Native" target="_blank" rel="noreferrer">React-native_Fitness</a></h3>
                        </div>
                        <div className="item">
                            <img src="../../../public/assets/socailmedia.png" alt="" />
                            <h3><a href="https://github.com/sthav/Practice_social" target="_blank" rel="noreferrer">Social Media </a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio