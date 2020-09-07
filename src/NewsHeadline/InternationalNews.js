import React from 'react';

import FeedList from '../components/FeedList';


function InternationalNews() {
  return (
    
    <div className="App">
        <h2 className="feed-head" >International News</h2>
        <FeedList Source='abplive/' newsUrl='international' feedsTitle='International News'/>
        <FeedList Source='jansatta/' newsUrl='international' feedsTitle='International News'/>   
        <FeedList Source='news18/' newsUrl='international' feedsTitle='International News'/> 
        <FeedList Source='indiatv/' newsUrl='international' feedsTitle='International News'/>
    </div>
  );
}

export default InternationalNews;
