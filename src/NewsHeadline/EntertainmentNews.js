import React from 'react';

import FeedList from '../components/FeedList';


function EntertainmentNews() {
  return (
    
    <div className="App">
        <h2 className="feed-head" >Entertainment News</h2>
        <FeedList Source='jansatta/' newsUrl='entertainment' feedsTitle='Entertainment News'/>   
        <FeedList Source='news18/' newsUrl='entertainment' feedsTitle='Entertainment News'/> 
        <FeedList Source='abplive/' newsUrl='entertainment' feedsTitle='Nation News'/>
        <FeedList Source='indiatv/' newsUrl='entertainment' feedsTitle='Breaking News'/>
    </div>
  );
}

export default EntertainmentNews;
