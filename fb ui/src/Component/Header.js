import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import TelegramIcon from '@material-ui/icons/Telegram'
import NotificationIcons from '@material-ui/icons/Notifications'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
const   Header = () => {
    return (
        <div className="home_header">
            <div className="home_left">
                <Link to="/">
                    <img  id="facebook" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="facebook logo" className="header_logo" />
                    
                </Link>
            </div>
            <div className="header_serach">
                <input type="text" placeholder="search" />
                <SearchIcon className="header_serach"/>
            </div>
            <div className="header_icon">
                <section>
                    <Avatar className="header-avatar" alt="" src="" />
                    <h3 className="header-name">Lavanya</h3>
                </section>
                <h3 className="header_dash">|</h3>
                <section>
                    <h3 className="header_name">Home</h3>
                </section>
                <h3 className="header_dash">|</h3>
                <section>
                <h3 className="header_name">Friends</h3>
                </section>
                <h3 className="header_dash">|</h3>
                <section>
                <h3 className="header_name">Create</h3>
                </section>
                <h3 className="header_dash">|</h3>
                <section>
                    <GroupAddIcon />
                </section>
                <h3 className="header_dash">|</h3>
                <section>
                    <TelegramIcon />
                </section>
                <h3 className="header_dash">|</h3>
                <section>
                    <NotificationIcons />
                </section>
                <h3 className="header_dash">|</h3>
                <section>
                    <AssignmentIndIcon />
                </section>
                <h3 className="header_dash">|</h3>
                <section>
                    <div className="dropdown">
                        <ArrowDropDownIcon className="dropdown" />
                        <div className="dropdown-content">
                            <a href="/"><p>logout</p></a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Header
