import React from 'react';

import FeedList from '../components/FeedList';


function CareersNews() {
  return (
    
    <div className="App">
        <h2 className="feed-head" >Careers News</h2>   
        <FeedList Source='news18/' newsUrl='careers' feedsTitle='Entertainment News'/> 
    </div>
  );
}

export default CareersNews;
