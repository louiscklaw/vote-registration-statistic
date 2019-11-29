import React from 'react';

import FooterLink from './FooterLink'

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
        <div className="content has-text-centered">
          <p>
            <a className="icon" href="https://louiscklaw.github.io">louiscklaw.github.io</a>
          </p>
          <div className="control level-item">
            <ul style={{display: "inline"}}>
              <li>facebook ?</li>
              <li>linkedin ?</li>
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
    </footer>
  )
}