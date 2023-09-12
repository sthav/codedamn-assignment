import { Link } from "react-router-dom";
import "./Sidebar.scss";
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';

const Sidebar = () => {
    return (
        <div className="sidebarin">
            <div className="wrapper">
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><span><TrackChangesRoundedIcon /> Profile</span></Link>
                <Link to='/socials' style={{ textDecoration: 'none', color: 'inherit' }}><span><TrackChangesRoundedIcon /> Socials</span></Link>
                <Link to='/portfolio' style={{ textDecoration: 'none', color: 'inherit' }}><span><TrackChangesRoundedIcon /> Portfolio</span></Link>
                <Link to='/resume' style={{ textDecoration: 'none', color: 'inherit' }}><span><TrackChangesRoundedIcon /> Resume</span></Link>
            </div>
        </div>
    )
}

export default Sidebar