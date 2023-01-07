import React, {useState, useEffect} from 'react';
import axios from 'axios';

import FeedSide from './FeedSide';

const BaseUrl = process.env.REACT_APP_API;

function SideList(props){

    const [feeds, setFeeds] = useState([]); 
    const [error, setError] = useState(false);

    const {Source, newsUrl, feedsTitle }= props;

    useEffect( ()=> {
        async function fetchNews() {
            const fetchedFeeds = await axios.get(BaseUrl+''+Source+''+newsUrl);
            if(!feeds){
                setError(true);
            }
            setFeeds(fetchedFeeds.data.newsFeeds.filter((feed,i)=> feed && i<12));
            
        }

        fetchNews();
    },[]);

      return (
        <div>
          {feeds.length>0 
                ? feeds.map((feed)=>{
                    const  date = new Date(feed.isoDate);
                    date.setHours(date.getHours()-5);
                    date.setMinutes(date.getMinutes()-30);
                    return  <a key={feed.guid} rel="noopener noreferrer" target="_blank" href={feed.link} ><FeedSide feed={feed} time={date}/> </a>
            }): ""}
        </div>
      );
}

export default SideList;