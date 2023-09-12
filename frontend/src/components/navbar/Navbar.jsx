import "./Navbar.scss";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <div className="logo">
                    <span>codeit</span>
                </div>
            </div>
            <div className="right">
                <div className="search">
                    <SearchRoundedIcon />
                    <input type="text" placeholder="Search" />
                    <span>Courses <ExpandMoreRoundedIcon /></span>
                </div>
                <div className="icons">
                    <div className="zap">
                        <BoltOutlinedIcon />
                        <span>2</span>
                    </div>
                    <div className="notifications">
                        <NotificationsNoneRoundedIcon />
                        <span>1</span>
                    </div>
                    <div className="profileimg">
                        <img src="../../../public/assets/man.png" alt="" />
                        <span>5</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
