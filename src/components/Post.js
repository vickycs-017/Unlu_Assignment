import React, { useState } from "react";


const Post = ({ post, loading }) => {
    // console.log(post);
    const [searchEvent, setSearchEvent] = useState("");

    if(loading){
        return <h2>loading...</h2>
    }

    return (
        <>
        <header>
                <input 
                className="search" 
                type="text" 
                placeholder="Search..." 
                onChange = {(event) => {
                    setSearchEvent(event.target.value);
                }}
                />
        </header>
        <div className="event-container">

            {post.filter((EventDetail) => {
                if(searchEvent === ""){
                    return EventDetail;
                }
                else if(EventDetail.event_name.toLocaleLowerCase().includes(searchEvent.toLocaleLowerCase())){
                    return EventDetail;
                }
            }).map(post => {
                return <div key={post.id} className="feed">
                    <img src= {post.thumbnail_image} alt="load" className="thumbnail" />
                    <div className="event-info">
                        {post.event_name}
                    </div>
                </div>
            })}
                
        </div>
        </>
    )
}

export default Post;