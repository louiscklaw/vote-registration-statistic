import React from 'react';

import FooterLink from './FooterLink'

import './Footer.css'

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <h2><strong>2019年正式登記冊</strong></h2>
            <ul>
              <li>
                <FooterLink
                  FaIcon="fas fa-link"
                  LinkHref="立法會 選區登記 選民年齡組別及性別分佈"
                  LinkText="立法會 選區登記 選民年齡組別及性別分佈"
                />
              </li>
              <li>Vestibulum errato isse</li>
            </ul>
          </div>
          <div className="column is-half">
            <h2><strong>Credits</strong></h2>
            <ul>
              <li>
                <FooterLink
                  FaIcon="fas fa-link"
                  LinkHref="https://bulmathemes.com"
                  LinkText="bulmathemes.com"
                />
              </li>
              <li>
                <FooterLink
                  FaIcon="fas fa-link"
                  LinkHref="https://bulma.io"
                  LinkText="bulma.io"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="columns">
          <div className="column is-full">
          <div className="content has-text-centered">
          <p>

            <a href="https://louiscklaw.github.io">louiscklaw.github.io</a>
          </p>
          <div className="control level-item social-links">
            <ul >
              <li>
                <i className="fab fa-facebook-square fa-2x "></i>
              </li>
              <li>
                <i className="fa-2x fab fa-linkedin"></i>
              </li>
              <li>
                <i class="fa-2x fab fa-slack"></i>
              </li>
              <li>
              <i class="fab fa-github-square fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-telegram fa-2x "></i>
              </li>
            </ul>

          </div>
          {/* <div className="control level-item">
            <a href="https://github.com/BulmaTemplates/bulma-templates">
              <div className="tags has-addons">
                <span className="tag is-dark">Bulma Templates</span>
                <span className="tag is-info">MIT license</span>
              </div>
            </a>
          </div> */}
        </div>
          </div>
        </div>
      </div>
    </footer>
  )
}