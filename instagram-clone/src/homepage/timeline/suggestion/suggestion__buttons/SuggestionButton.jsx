import React from 'react';
import './SuggestionButton.css'
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';

function SuggestionButton({profile,user}) {
  return (
    <div className='suggestionbutton'>
      <div className="suggestionbutton__left">
        <Avatar src={profile}/>
        <div className='suggestionbutton__left__info'>
          <span>{user}</span>
          <span>Suggested for you</span>
        </div>
      </div>
      <div className="suggestionbutton__right">
        <button style={{color:blue}}>Follow</button>
      </div>
    </div>
  )
}

export default SuggestionButton
