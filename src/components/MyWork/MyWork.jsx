import React from 'react'
import "./MyWork.css";
import mywork_data from "../../mywork_data.js";

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src='./theme_pattern.svg' alt='theme_pattern' />
        </div>
        <div className="mywork-container">
            {
                mywork_data.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt=''/>
                })
            }
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src='./arrow_icon.svg' alt=''/>
        </div>
    </div>
  )
}

export default MyWork