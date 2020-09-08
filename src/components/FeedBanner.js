import React from 'react';
import styled from 'styled-components';
import { FaClock }  from 'react-icons/fa'


function FeedBanner(props){

    const {feed} = props;

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
            font-size: 20px;
            font-weight: 700;
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
            }
        }

        @media screen and (max-width: 768px){

            .added-time{
                padding: 10px;
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
            <FaClock/> {new Date(feed.isoDate).toString().substring(0,21)}
        </div>
        <div className="details">
            <div className="title">
                <h2>{feed.title}</h2>
            </div>
            <div className="description">
               {feed.contentSnippet.replace( /(<([^>]+)>)/ig, '')} 
            </div>
        </div>
        
    </Feed>
}

export default FeedBanner;