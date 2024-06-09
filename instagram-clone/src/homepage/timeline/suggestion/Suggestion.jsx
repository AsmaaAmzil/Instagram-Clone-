import React from "react";
import "./Suggestion.css";
import { Avatar } from "@mui/material";
import SuggestionButton from "./suggestion__buttons/SuggestionButton";
import { useSelector } from "react-redux";

function Suggestion({suggestion }) {
  const user=useSelector(state=>state.data.user.user);
  return (
    <div className="suggestion">
      <div className="suggestion__switch">
        <div className="suggestion__switch__left">
       <Avatar>
        {
          user.username? user.username.charAt(0).toUpperCase() :'B'
        }
       </Avatar>

          <span>{user.username?user.username:'asmaa__hi'}</span>
        </div>
        <div className="suggestion__switch__right">
          <button>Switch</button>
        </div>
      </div>
      <div className="suggestion__separator">
        <div>Suggested for you</div>
        <div>See all</div>
      </div>
      <div className="suggestion__buttons">
        {
          suggestion.map((sug)=>{
            return <SuggestionButton profile={sug.profile} user={sug.user}/>
          })
        }
      </div>
    </div>
  );
}

export default Suggestion;
