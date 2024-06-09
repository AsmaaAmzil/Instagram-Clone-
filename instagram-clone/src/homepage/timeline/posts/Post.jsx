import React from "react";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Post.css";
import Body from "./assets/contentInstagram.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ profile, user, postImage, likes, timestamp,description }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header__left">
          <Avatar alt="Profile" src={profile} />
          <span>{user} • {timestamp}</span>
        </div>
        <div className="post__header__right">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="post__body">
        <img src={postImage} alt="content" />
      </div>
      <div className="post__footer">
        <div className="post__footer__up">
          <div className="post__footer__up__left">
            <FavoriteBorderIcon  className="post-icons"/>
            <ChatBubbleOutlineIcon className="post-icons" />
            <TelegramIcon className="post-icons" />
          </div>
          <div className="post__footer__up__right">
            <BookmarkBorderIcon className="post-icons" />
          </div>
        </div>
        <div className="post__footer__down">
          <div>{likes} likes</div>
          <div>
            <span style={{ fontWeight: "bold" }}>{user } </span>
            {description}
          </div>
          <input type="text" placeholder="add comment ..." />
        </div>
      </div>
    </div>
  );
}

export default Post;
