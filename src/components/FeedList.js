import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';

import Feed from './Feed';


const BaseUrl = 'https://newsbulletin.herokuapp.com/';

function FeedList(props){

    const [feeds, setFeeds] = useState([]); 
    const [error, setError] = useState(false);

    const {Source, newsUrl, feedsTitle }= props;

    const Feeds = styled.div`
        .feedlist{
            display: grid;
            grid-auto-columns: 1fr 1fr 1fr;
            grid-template-areas: 'feed feed feed';

            @media screen and (max-width:800px){
                grid-auto-columns: 1fr 1fr;
                grid-template-areas: 'feed feed';
            }

            @media screen and (max-width:500px){
                grid-auto-columns: 1fr;
                grid-template-areas: 'feed';
            }
           
        }
        

    `;

    useEffect( ()=> {
        async function fetchNews() {
            const fetchedFeeds = await axios.get(BaseUrl+''+Source+''+newsUrl);
            if(!feeds){
                setError(true);
            }
            // console.log(fetchedFeeds);
            setFeeds(fetchedFeeds.data.newsFeeds.filter((feed,i)=> feed && i<12));
            
        }

        fetchNews();
    },[]);

    console.log(feeds, new Date()-2);

    return <Feeds>
            {/* <h2 className="feed-head">{feedsTitle ? feedsTitle :""}</h2> */}
            { feeds.length>0 ?
            <div className="feedlist"> 
               
            {feeds.length>0 
                ? feeds.map((feed)=>{
                return  <a key={feed.guid} rel="noopener noreferrer" target="_blank" href={feed.link} ><Feed feed={feed}/> </a>
            }): ""}
            </div>
            : <div className="loader"><ScaleLoader /></div>
            }
        
    </Feeds>
}

export default FeedList;