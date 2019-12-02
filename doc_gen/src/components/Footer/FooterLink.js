import React from 'react';

export default (props) => {
  return (
    <div >
      <a href={props.LinkHref} style={{display: "inline-flex"}}>
        {props.LinkText}
        <div className="footer-fa-icon" style={{margin:"0 5px"}}>
          <i className={props.FaIcon}></i>
        </div>
      </a>

    </div>
  )
}