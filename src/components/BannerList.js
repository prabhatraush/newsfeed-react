import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Slider from 'react-slick';

import FeedBanner from './FeedBanner';

const BaseUrl = 'https://newsbulletin.herokuapp.com/';

function BannerList(props){

    const settings = {
      dots:true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      adaptiveHeight:true

      };

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
          <Slider {...settings}>
          {feeds.length>0 
                ? feeds.map((feed)=>{
                return  <a key={feed.guid} rel="noopener noreferrer" target="_blank" href={feed.link} ><FeedBanner feed={feed}/> </a>
            }): ""}
          </Slider>
        </div>
      );
}

export default BannerList;