import React from "react";
import "./Timeline.css";
import Suggestion from "./suggestion/Suggestion";
import Post from "./posts/Post";
import {useState} from 'react';

function TimeLine() {
  
  const [suggestion,setSuggestion]=useState([
    { 
      
      user: "redian_",
      profile:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      
      user: "johndoe",
      profile:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
     
    },
    {
      
      user: "mariussss",
      profile:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    },
    {
      
      user: "kobee_18",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
     
    },
  ]);
  const [posts, setPosts] = useState([
    { 
      profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
      timestamp: "2d",
      description:"sdfghjkl,nbazertyuiopjkl",
    },
    {
      profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      user: "johndoe",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 432,
      timestamp: "2d",
      description:"azertyuiopmljhgfdsxcvbnazertyuiovfbsdfghdfgh",
    },
    {
      profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      user: "mariussss",
      postImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      likes: 140,
      timestamp: "2d",
      description:"azertyuiopmljhgfdsxcvbnazertyuiovfbsdfghdfgh",
    },
    {
      profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      user: "kobee_18",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGCAaQ5u1TMTij5ELPWi5-VPtlSqELw-R6lj0EpYmNcGt56kOQaCokzS0IK81MOSphlkw&usqp=CAU",
      likes: 14,
      timestamp: "2d",
      description:"azertyuiopmljhgfdsxcvbnazertyuiovfbsdfghdfgh",
    },
  ]);


  return (
    <div className="timeline">
      <div className="timeline__left">
        {posts.map((post)=>{
          return(<Post
            profile={post.profile} 
            user={post.user} 
            postImage={post.postImage} 
            likes={post.likes} 
            timestamp={post.timestamp}
            description={post.description}
            />)
        })}
         </div>
      <div className="timeline__right">
        <Suggestion suggestion={suggestion} />
      </div>
    </div>
  );
}

export default TimeLine;
