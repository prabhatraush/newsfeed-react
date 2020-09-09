import React from 'react';
import styled from 'styled-components';

import FeedList from '../components/FeedList';
import BannerList from '../components/BannerList';
import SideList from '../components/SideList';

function Home() {

  const FeedSection = styled.div`
    display:grid;
    grid-auto-columns: 3fr 1fr;
    grid-template-areas: 'latest-feed sports-feed';

    @media screen and (max-width:647px){
      grid-auto-columns: 1fr;
      grid-template-areas: 'latest-feed' 'sports-feed';
    }

  `;

  return (
    
    <div className="App">
      <div>
        <BannerList Source='abplive/' newsUrl='nation' feedsTitle='Nation News'/>
      </div>
      <FeedSection>
        <div className="latest-feed">
          <h2 className="feed-head" >Latest News</h2>
          <FeedList Source='indiatv/' newsUrl='breaking' feedsTitle='Latest News'/>
          <FeedList Source='jansatta/' newsUrl='breaking' feedsTitle='Latest News'/>
          <FeedList Source='abplive/' newsUrl='breaking' feedsTitle='Latest News'/>
        </div>
        <div className="sports-feed">
          <h2 className="feed-head" >Sport News</h2>
          <SideList Source='jansatta/' newsUrl='sports' feedsTitle='Sports News'/>  
          <h2 className="feed-head" >Entertainment News</h2>
          <SideList Source='indiatv/' newsUrl='entertainment' feedsTitle='Entertainment News'/> 
          <h2 className="feed-head" >Careers News</h2>
          <SideList Source='news18/' newsUrl='careers' feedsTitle='Careers News'/> 
        </div>
      </FeedSection>


    </div>
  );
}

export default Home;
