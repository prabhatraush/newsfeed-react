import React,{useState} from 'react';
import  { Link} from 'react-router-dom';
import {FaAlignRight, FaTimes} from 'react-icons/fa';
import styled from 'styled-components';

function Header()
{
    const [toggle, setToggle]= useState(false);

    const Head = styled.div`
        display: flex;
        justify-content: space-between;
        background: #0f8370;
        padding-left: 100px;

        .logo{
            background:#ffffff;
            border-radius: 50px;

            img{
                height:70px;
                padding:10px;
            }
        }

        .menu-items{
            display: flex;
            justify-content: space-between;
            padding: 20px;
        
            .item{
              margin:0 2px;
              padding:10px 0px;
              font-size:17px;
              font-weight: 700;
              border-radius:5px;
        
                a{
                    padding:10px 20px;

                    &:hover{
                        color: #cacaca;
                        background: #c22237;
                        cursor: pointer;
                    }
                }
            }
        }

        .mob-menu-items{
            flex-direction: column;
            position: absolute;
            background:#000000ea;
            width:100%;
            left:0;
            top:114px;
            z-index: 1000;
            display:none;

            .item{
              border-bottom: 1px solid #ffffff;
              padding:10px 20px;
              a{
                color:#ffffff;
              }
            }
        }

        .mb-icon{
            padding: 10px 20px;
            align-self: center;
            display: none;
        }

        @media screen and (max-width: 890px){
            padding:10px;

            .menu-items{
                display: none;
            }

             .mob-menu-items, .mb-icon{
                display:block;
            }
        }
        
    `;

    return <Head>
            <div className="logo">
                <img src="logo192.png" alt="prabhu" />
            </div>
            {
                toggle ?
                <div className="mob-menu-items">
                    <div className="item"><Link to="/">Home</Link></div>
                    <div className="item"><Link to="/nation">Nation</Link></div>
                    <div className="item"><Link to="/international">International</Link></div>
                    <div className="item"><Link to="/sports">Sports</Link></div>
                    <div className="item"><Link to="/entertainment">Entertainment</Link></div>
                    <div className="item"><Link to="/careers">Careers</Link></div>
                </div>
                :
                <div className="menu-items">
                    <div className="item"><Link to="/">Home</Link></div>
                    <div className="item"><Link to="/nation">Nation</Link></div>
                    <div className="item"><Link to="/international">International</Link></div>
                    <div className="item"><Link to="/sports">Sports</Link></div>
                    <div className="item"><Link to="/entertainment">Entertainment</Link></div>
                    <div className="item"><Link to="/careers">Careers</Link></div>
                </div>
            }
            <div className="mb-icon" onClick={()=>{
                setToggle(!toggle)
            }}>
                {toggle ? <FaTimes/>:< FaAlignRight />}
            </div>
        </Head>
}

export default Header;