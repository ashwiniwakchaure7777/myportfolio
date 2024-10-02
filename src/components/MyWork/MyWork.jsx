import React from 'react'
import "./MyWork.css";
import mywork_data from "../../mywork_data.js";
import { useNavigate } from 'react-router-dom';

const MyWork = () => {

    const navigate = useNavigate();

    const handleClick = (link) => {
        // Check if the link is external (starts with "http") or internal
        if (link.startsWith('http')) {
            window.open(link, '_blank'); // Open external links in a new tab
        } else {
            navigate(link); // Navigate to internal routes
        }
    }

    return (
        <div id='work' className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src='./theme_pattern.svg' alt='theme_pattern' />
            </div>
            <div className="mywork-container">
                {
                    mywork_data.map((work, index) => {
                        return <img key={index} onClick={() => handleClick(work.link)} src={work.w_img} alt='' />
                    })
                }
            </div>
            <div className="mywork-showmore">
                <p>Show more</p>
                <img src='./arrow_icon.svg' alt='' />
            </div>
        </div>
    )
}

export default MyWork;
