import React from 'react';

import FeedList from '../components/FeedList';


function SportsNews() {
  return (
    
    <div className="App">
        <h2 className="feed-head" >Sports News</h2>
        <FeedList Source='abplive/' newsUrl='sports' feedsTitle='Nation News'/>
        <FeedList Source='jansatta/' newsUrl='sports' feedsTitle='Entertainment News'/>   
        <FeedList Source='news18/' newsUrl='sports' feedsTitle='Entertainment News'/> 
        <FeedList Source='indiatv/' newsUrl='sports' feedsTitle='Breaking News'/>
    </div>
  );
}

export default SportsNews;
