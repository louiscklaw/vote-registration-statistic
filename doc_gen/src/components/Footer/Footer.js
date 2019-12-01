import React from 'react';

import FooterLink from './FooterLink'

import FooterSocialLink from './FooterSocialLink'
import FooterMiddle from './FooterMiddle'
import FooterRight from './FooterRight'

import './Footer.css'

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third">
            <FooterSocialLink />
          </div>
          <div className="column is-one-third">
            <FooterMiddle />
          </div>
          <div className="column is-one-third">
            <FooterRight />

          </div>
        </div>

      </div>
    </footer>
  )
}