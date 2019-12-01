import React, { Component } from 'react';

import FaLink from '../Link/FaLink'

export default () => {
  return (
    <div className="footer-container">
      <div className="homepage-link">
        <a href="https://louiscklaw.github.io">louiscklaw.github.io</a>
      </div>

      <div className="social-links">
        <ul>
          <li>
            <FaLink href_in="//www.facebook.com/louiscklaw" fa_class_in="fab fa-facebook-square fa-2x" />
          </li>
          <li>
            <FaLink href_in="//www.linkedin.com/in/louiscklaw" fa_class_in="fa-2x fab fa-linkedin" />
          </li>
          <li>
            <FaLink href_in="//louislabs.slack.com" fa_class_in="fa-2x fab fa-slack" />
          </li>
          <li>
            <FaLink href_in="//github.com/louiscklaw" fa_class_in="fab fa-github-square fa-2x" />
          </li>
          <li>
            <FaLink href_in="//t.me/louislabs" fa_class_in="fab fa-telegram fa-2x" />
          </li>
        </ul>
      </div>
    </div>
  )
}