import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faBullseye, faHouse, faImage, faListCheck, faNewspaper } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
    const [randomStatement, setRandomStatement] = useState("");

            const statements = [
                "The only way to do great work is to love what you do!",
                "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time!",
                "Challenges are what make life interesting. Overcoming them is what makes life meaningful!",
                "It is not the mountain we conquer but ourselves!"
            ];

            useEffect(() => {
                const newStatement = statements[Math.floor(Math.random() * statements.length)];
                setRandomStatement(`"${newStatement}"`);
            }, []);
    return (
        <div className="navbar">
            <div className="navbar-profile">
                <div className="profile-picture">AR</div>
            </div>

            <div className="account-profile">
            <FontAwesomeIcon icon={faHouse} style={{ marginRight: '5px'}}/> 
                <div classNmae='my-account'>My Account</div>
            </div>

            <div className='applications-profile'>
            <FontAwesomeIcon icon={faNewspaper} style={{ marginRight: '5px'}} /> 
                <div className='applications'>Applications</div>
            </div>

            <div className='roles-saved'>
            <FontAwesomeIcon icon={faBookmark} style={{ marginRight: '5px'}}  /> 
                <div className='saved-roles'>Saved Roles</div>
            </div>

            <div className='list-of-todo'>
            <FontAwesomeIcon icon={faListCheck} style={{ marginRight: '5px'}} />
                <div className='to-do-list'>To-Do List</div>
            </div>

            <div className='tracker'>
            <FontAwesomeIcon icon={faBullseye} style={{ marginRight: '5px'}}  /> 
                <div className='goal-tracker'>Goal Tracker</div>
            </div>

                <div className="random-message">
                {randomStatement}
                </div>
            </div>
            );


};

export default Navbar;