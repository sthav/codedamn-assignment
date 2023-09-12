import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Socials.scss";


const Socials = () => {
    return (
        <>

            <div className="nav">
                <Navbar />
            </div>
            <div className="socials">

                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="socialsin">
                    <div className="socialsform">
                        <label htmlFor="">GitHub</label>
                        <input type="text" placeholder="enter git url" name="" id="" />
                        <label htmlFor="">Linkedin</label>
                        <input type="text" placeholder="Linkedin profile URL" name="" id="" />
                        <label htmlFor="">Facebook</label>
                        <input type="text" placeholder="Facebook profile URL" name="" id="" />
                        <label htmlFor="">Instagram</label>
                        <input type="text" placeholder="instagram profile URL" name="" id="" />
                        <label htmlFor="">Dribble</label>
                        <input type="text" placeholder="Dribble profile URL" />
                        <label htmlFor="">Behance</label>
                        <input type="text" placeholder="Behance profile URL" />
                    </div>
                    <div className="socialsbtn">
                        <button style={{ color: 'black', background: 'whitesmoke' }}>Cancel</button>
                        <button style={{ color: 'white', background: 'lightblue' }}>Save changes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Socials