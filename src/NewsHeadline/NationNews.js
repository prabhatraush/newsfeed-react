import React from 'react';

import FeedList from '../components/FeedList';


function NationNews() {
  return (
    
    <div className="App">
        <h2 className="feed-head" >Nation News</h2>
        <FeedList Source='jansatta/' newsUrl='nation' feedsTitle='Entertainment News'/>   
        <FeedList Source='news18/' newsUrl='nation' feedsTitle='Entertainment News'/> 
        <FeedList Source='abplive/' newsUrl='nation' feedsTitle='Nation News'/>
        <FeedList Source='indiatv/' newsUrl='nation' feedsTitle='Breaking News'/>
    </div>
  );
}

export default NationNews;
