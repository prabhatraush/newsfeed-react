import React from 'react';

function Feed(props){

    const {feed} = props;
    
    return <div className="feed">
        <div className="feed-img">
            { feed.imageUrl 
                ? <img src={feed.imageUrl} alt={feed.title}/>
                : ""
            }
        </div>
        <div className="feed-time">
            {new Date(feed.isoDate).toString().substring(0,25)}
        </div>
        <div className="feed-details">
            <div className="feed-title">
                <h2>{feed.title}</h2>
            </div>
            <div class="feed-description">
               {feed.contentSnippet} 
            </div>
        </div>
        
    </div>
}

export default Feed;