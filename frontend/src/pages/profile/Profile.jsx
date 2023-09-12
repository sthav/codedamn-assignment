/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import "./Profile.scss"
import axios from "axios"
import Navbar from "../../components/navbar/Navbar"
import Switchco from "../../components/switchco/Switchco"

import { useDispatch, useSelector } from 'react-redux';
import { toggleSectionVisibility } from "../../redux/visibilitySlice"

const Profile = () => {

    const [data, setData] = useState([]);
    const [tempData, setTempData] = useState([]);
    const [changed, setChanged] = useState(false);
    const [error, setError] = useState();

    const dispatch = useDispatch();
    const sectionVisible = useSelector((state) => state.visibility.sectionVisible)


    const handleToggleSectionVisibility = () => {
        dispatch(toggleSectionVisibility());
    };

    const getData = async () => {
        const response = await fetch("http://localhost:8000/api/user/");
        const result = await response.json()
        console.log("result...", result);
        if (!response.ok) {
            setError(result.error)
        }
        if (response.ok) {
            setData(result);
            setTempData(result);
            setError("");
        }
    }

    console.log("data", data)
    console.log("temp", tempData)

    useEffect(() => {
        getData();
    }, []);



    const updateData = async (userId) => {
        const url = `http://localhost:8000/api/user/${userId}`; // Replace with your API endpoint
        try {
            const response = await fetch(url, {
                method: "PATCH", // Use PATCH or PUT based on your API's requirements
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tempData), // Send the updated data in the request body
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            const updatedUser = await response.json();
            console.log("Updated user data:", updatedUser);

            // You can update the state or take other actions as needed
            // For example, update 'data' state with the updated data
            setData(updatedUser);
            setChanged(false);
        } catch (error) {
            console.error("Error updating user data:", error);
            setError(error.message);
        }
    };





    return (
        <div className="maincontainer">
            <div className="nav">
                <Navbar />
            </div>
            <div className="profile-wrapper">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="profile">
                    <div className="top">
                        <img src="../../../public/assets/man.png" alt="" />
                        <button style={{ color: 'white', background: 'lightblue' }}>Upload new picture</button>
                        <button style={{ color: 'black', background: 'whitesmoke' }}>Delete</button>
                    </div>

                    {
                        data.map((d, i) => {
                            return <div key={i} className="form">
                                <label htmlFor="">Display name</label>
                                <input type="text"
                                    defaultValue={d.name}
                                    onChange={(e) => {
                                        setChanged(true)
                                        setTempData({
                                            ...tempData,
                                            name: e.target.value,
                                        });
                                    }}
                                />
                                <label htmlFor="">About</label>
                                <input type="text"
                                    placeholder="enter desc"
                                    defaultValue={d.about}
                                    onChange={(e) => {
                                        setChanged(true)
                                        setTempData({
                                            ...tempData,
                                            about: e.target.value,
                                        });
                                    }}
                                />
                                <label htmlFor="">Profession</label>
                                <input type="text"
                                    placeholder="profession"
                                    defaultValue={d.profession}
                                    onChange={(e) => {
                                        setChanged(true)
                                        setTempData({
                                            ...tempData,
                                            profession: e.target.value,
                                        });
                                    }}
                                />
                                <label htmlFor="">Date of birth</label>
                                <input type="text"
                                    placeholder="DD/MM?YY"
                                    defaultValue={d.dob}
                                    onChange={(e) => {
                                        setChanged(true)
                                        setTempData({
                                            ...tempData,
                                            dob: e.target.value,
                                        });
                                    }}
                                />
                                <label htmlFor="">Gender</label>
                                <input type="text"
                                    placeholder="enter gender"
                                    defaultValue={d.gender}
                                    onChange={(e) => {
                                        setChanged(true)
                                        setTempData({
                                            ...tempData,
                                            gender: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                        })
                    }






                    <div className="visibility">
                        <h2>Section visibility</h2>
                        <span>Select which sections and content</span>

                        <div className="visibilitytokens">
                            <h3>Followers and following</h3>
                            <span>Shows your followers and the users you follow on site</span> <span className="swi"><Switchco /></span>
                            <h3>XP</h3>
                            <span>Hides the XP you have earned</span><span className="swi"><Switchco checked={sectionVisible} onChange={handleToggleSectionVisibility} /></span>
                            <h3>Achievement badges</h3>
                            <span>Shows your relative percentile and proficiency</span><span className="swi"><Switchco /></span>
                        </div>
                    </div>
                    {
                        changed ? (
                            <div className="btnedit">
                                <button onClick={(e) => {
                                    setTempData({ ...tempData })
                                    setChanged(false)
                                }} style={{ color: 'black', background: 'whitesmoke' }}>Cancel</button>
                                <button onClick={() => updateData(tempData[0]._id)} style={{ color: 'white', background: 'lightblue' }}>Save changes</button>
                            </div>
                        ) :
                            null
                    }

                </div>
            </div>
        </div>
    )
}

export default Profile