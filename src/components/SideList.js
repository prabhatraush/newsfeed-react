import React, {useState, useEffect} from 'react';
import axios from 'axios';

import FeedSide from './FeedSide';

const BaseUrl = 'https://newsbulletin.herokuapp.com/';

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
                return  <a key={feed.guid} rel="noopener noreferrer" target="_blank" href={feed.link} ><FeedSide feed={feed}/> </a>
            }): ""}
        </div>
      );
}

export default SideList;