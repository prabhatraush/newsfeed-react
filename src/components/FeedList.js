import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';

import Feed from './Feed';


const BaseUrl = process.env.REACT_APP_API;

function FeedList(props){

    const [feeds, setFeeds] = useState([]); 
    const [error, setError] = useState(false);

    const {Source, newsUrl, feedsTitle }= props;

    const Feeds = styled.div`
        .feedlist{
            display: grid;
            grid-auto-columns: 1fr 1fr 1fr;
            grid-template-areas: 'feed feed feed';

            @media screen and (max-width:1000px){
                grid-auto-columns: 1fr 1fr;
                grid-template-areas: 'feed feed';
            }

            @media screen and (max-width:680px){
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
                    const  date = new Date(feed.isoDate);
                    date.setHours(date.getHours()-5);
                    date.setMinutes(date.getMinutes()-30);
                    return  <a key={feed.guid} rel="noopener noreferrer" target="_blank" href={feed.link} ><Feed feed={feed} time={date}/> </a>
            }): ""}
            </div>
            : <div className="loader"><ScaleLoader /></div>
            }
        
    </Feeds>
}

export default FeedList;