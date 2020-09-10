import React from 'react';
import styled from 'styled-components';
import { FaClock }  from 'react-icons/fa'


function FeedBanner(props){

    const {feed, time} = props;

    const Feed = styled.div`
        background-image: url(${feed.imageUrl});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin:0px;

        .added-time{
            text-align: right;
            padding: 20px;
            color: #ffffffea;
            font-size: 17px;
            font-weight: 600;
            color: #e26352;

            span{

                background:#ffffff;
                padding: 5px 10px;
                border-radius: 25px;
                box-shadow: 0 1px 6px #20212447;
            }
        }

        .details{
            text-align: center;
            color: #ffffff;
            background: #00000067;
            padding: 30px;
            margin-top:135px;
            margin-bottom:0px;

            .title{
                
                margin: 0px 30px;
                font-size: 24px;
                font-weight: 700;
            }

            .description{
                
                margin: 0px 30px;
                padding:20px 0;
                font-size: 23px;
                font-weight: 700;

                a{
                    background: #ffffff;
                    color:#e26352;
                    padding:2px 7px;
                    border-radius:20px;
                    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
                 }
            }
        }

        @media screen and (max-width: 768px){

            .added-time{
                font-size: 14px;
            }
    
            .details{
                margin: 90px 5px;
                padding: 10px;
                margin-bottom:0px;
    
                
                .title{
                    font-size: 18px;
                }
    
                .description{
                    padding:10px;
                    font-size: 16px;

                   
                }
            }

        }

    `;
    
    return <Feed>
        <div className="added-time">
            <span><FaClock/> {time.toString().substring(0,21)}</span>
        </div>
        <div className="details">
            <div className="title">
                <h2>{feed.title}</h2>
            </div>
            <div className="description">
               {feed.contentSnippet.replace( /(<([^>]+)>)/ig, '')} . .  
               <a key={feed.guid} rel="noopener noreferrer" target="_blank" href={feed.link} >और पढ़ें</a>
            </div>
        </div>
        
    </Feed>
}

export default FeedBanner;