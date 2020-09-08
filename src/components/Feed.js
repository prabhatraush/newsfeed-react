import React from 'react';
import { FaClock }  from 'react-icons/fa'

function stripHtml(html)
{
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    console.log(tmp.textContent || tmp.innerText || "");
    return tmp.textContent || tmp.innerText || "";
}

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
            <FaClock/> {new Date(feed.isoDate).toString().substring(0,25)}
        </div>
        <div className="feed-details">
            <div className="feed-title">
                <h2>{feed.title}</h2>
            </div>
            <div class="feed-description">
               {feed.contentSnippet.replace( /(<([^>]+)>)/ig, '')} 
            </div>
        </div>
        
    </div>
}

export default Feed;