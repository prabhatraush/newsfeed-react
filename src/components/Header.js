import React,{useState} from 'react';
import  { Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa'

function Header()
{
    const [toggle, setToggle]= useState(true);
    const [active, setActive] = useState(true);

    return <div>
        
        <div className="Header">
            <div className="logo">
                <img src="logo192.png" alt="prabhu" />
            </div>
            {
                toggle &&
                <div className="menu-items">
                    <div className={active ?"item active":"item"}><Link to="/">Home</Link></div>
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
                < FaAlignRight />
            </div>
        </div>
    </div>
}

export default Header;