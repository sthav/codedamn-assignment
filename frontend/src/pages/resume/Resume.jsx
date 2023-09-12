/* eslint-disable react/no-unescaped-entities */
import "./Resume.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import { useSelector } from 'react-redux';


const Resume = () => {

    const sectionVisible = useSelector((state) => state.visibility.sectionVisible);
    return (
        <>
            <div className="nav">
                <Navbar />
            </div>
            <div className="resume">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="resumecontainer">
                    <div className="top">
                        <div className="cover">
                            <span>Edit cover</span>
                        </div>
                        <img src="../../../public/assets/man.png" alt="" />
                        <div className="desc">

                            <div>
                                <span>Anna Cheng</span><span>Pro</span><span>Looking for job</span>
                            </div>
                            <div>
                                <span>Full stack dev at Codeit</span><span>|</span><span>Harvard-22</span>
                            </div>
                            <div>
                                <span>Mumbai, India</span>
                            </div>
                            <br />
                            <div>
                                <span>HTML 5</span><span>CSS 3</span><span>Javascript</span><span>React</span><span>Python</span><span>C++</span><span>Mongo</span>
                            </div>
                        </div>
                    </div>
                    <div className="about">
                        <h2>About me</h2>
                        <div className="abt">
                            <span>A self-driven, versatile, reliable, diligent individual who is calm and cheerful with a team-minded approach to work and getting things done</span>
                            <span>A student who is passionate and with a keen eye for desgin...</span>
                            <span>Read more</span>
                        </div>

                    </div>

                    <div className="workex">
                        <h2>Work experience</h2>

                        <div className="x1">
                            <span>Front-end developer at google</span>
                            <span>London</span>
                            <span>This role would be great for a web developer with 3+ years experience in desgining and developing responsive websites. This position requires a profound understanding of the development process, using front-end technologies including HTML5, CSS3, Javascript, Jquery, PHP/WordPress.</span>
                        </div>
                        <div className="x2">
                            <span>junior Front-end developer at meta</span>
                            <span>New york</span>
                            <span className="sp">This role would be great for a web developer with 3+ years experience in desgining and developing responsive websites.</span>
                        </div>
                    </div>


                    {
                        sectionVisible ? (
                            <>
                                <div className="Edu">
                                    <h2>Education</h2>
                                    <div className="edu1">
                                        <span>Harvard university</span>
                                        <span>Bachelor degree, CS</span>
                                        <span> Emory admissions Fellow; assisted Dean of admissions with student applications and emory's marketting strategy in the roll out of the university's new website</span>
                                    </div>
                                    <div className="edu2">
                                        <span>Mister Bim High School</span>
                                        <span>Atlanta, GA</span>
                                    </div>
                                </div>
                            </>
                        ) : null
                    }


                    <div className="interests">
                        <h2>Interests</h2>
                        <div className="in">
                            <span>Semantics</span>
                            <span>TED Talks</span>
                            <span>Udemy</span>
                            <span>Behavioral</span>
                            <span>Economics</span>
                        </div>

                    </div>
                    <div className="lang">
                        <h2>Languages</h2>
                        <div className="lan">
                            <span>English</span>
                            <span>Mandarin</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume