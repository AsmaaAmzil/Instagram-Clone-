import React from "react";
import "./Navigation.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import {useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";



function Navigation() {
  const user=useSelector(state=>state.data.user.user);
  const dispatch=useDispatch();
  function handelLogout(){
    dispatch(logoutUser());
    signOut(auth);
  }

  return (
    <div className="navigation">
      <img className="navigation__logo" src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="ist" />
      <div className="navigation__buttons">
        <button className="navigation__buttons__button">
          <HomeIcon/>
          <span>Home</span>
        </button>
        <button className="navigation__buttons__button">
          <SearchIcon/>
          <span>Search</span>
        </button>
        <button  className="navigation__buttons__button">
          <ExploreIcon/>
          <span>Explore</span>
        </button>
        <button className="navigation__buttons__button">
          <SlideshowIcon/>
          <span>Reels</span>
        </button>
        <button  className="navigation__buttons__button">
          <ChatIcon/>
          <span>Messages</span>
        </button>
        <button  className="navigation__buttons__button">
          <FavoriteBorderIcon/>
          <span>Notifications</span>
        </button>
        <button className="navigation__buttons__button">
          <AddCircleOutlineIcon/>
          <span>Create</span>
        </button>
        <button  className="navigation__buttons__button">
          <Avatar>
            {user.username? user.username.charAt(0).toUpperCase():'B'}
          </Avatar>
          <span>
            
            <button onClick={handelLogout} className="logout__button">
              Logout
            </button>
          </span>
        </button>
      </div>
      <div className="navigation__more">
        <button className="navigation__buttons__button">
          <MenuIcon/>
        <span>More</span>
        </button>
        
      </div>
    </div>
  );
}

export default Navigation;
