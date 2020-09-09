import React from 'react';
import { FaClock }  from 'react-icons/fa';
import  styled from 'styled-components';

function Feed(props){

    const {feed} = props;

    const Container = styled.div`
        background:#ffffff;
        max-width: 400px;
        box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
        display: flex;
        flex-direction: column;
        margin:20px;
        border-radius: 10px;
        transition: transform .2s;

        .feed-img{
            overflow: hidden;

            img{
              height: 175px;
              width: 100%;
              border-radius: 10px 10px 0 0;
            }
        }

        .feed-time{
            font-size:8px;
            font-weight:700;
            color: #e26352;
            text-align: right;
            padding: 15px 5px;
            margin-top:-40px;
            
            span{
                background:#ffffff;
                padding: 4px 6px;
                border-radius: 15px;
                box-shadow: 0 1px 6px #20212447;
            }
        }

        .feed-details{
            padding: 20px;
            padding-bottom:10px;
              
            .feed-title{
              h2{
                color: #13a897;
                font-size: 15px;
              }
            }
        
            .feed-description{
              padding:20px 0px;
              height:75px;
              font-size: 13px;
              color: #454545;
              overflow-y: scroll;
              font-weight:700;
            }
        }

        &:hover {
            transform: scale(1.06);
        }

    `;
    
    return <Container>
        <div className="feed-img">
            { feed.imageUrl 
                ? <img src={feed.imageUrl} alt={feed.title}/>
                : ""
            }
        </div>

        <div className="feed-time">
            <span><FaClock/> {new Date(feed.isoDate).toString().substring(0,25)}</span>
        </div>
        <div className="feed-details">
            <div className="feed-title">
                <h2>{feed.title}</h2>
            </div>
            <div className="feed-description">
               {feed.contentSnippet.replace( /(<([^>]+)>)/ig, '')} 
            </div>
        </div>
        
    </Container>
}

export default Feed;