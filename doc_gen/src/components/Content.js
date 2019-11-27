import React from 'react';

import AHref from './AHref'

import Card from './Card'

// import Intro from './Intro'
// import Tile from './Tile'
// import TileThirdColumn from './TileThirdColumn'

export default () => {
  return (
    <section className="container">
      <div className="columns features">
        <div className="column is-4">
          <Card>
            <h4>2019年正式登記冊</h4>
            <p>
              各立法會選區登記<br/>
              選民年齡組別及性別分佈
            </p>

            <p>
            <AHref LinkText="下載 JSON" LinkHref="https://raw.githubusercontent.com/louiscklaw/vote-registration-statistic/master/2019PR_sex_and_age_lc.json" /><br/>
            <AHref LinkText="下載 PDF" LinkHref="https://github.com/louiscklaw/vote-registration-statistic/raw/master/2019PR_sex%20and%20age_LC_c.pdf" /><br/>
            <AHref LinkText="資料來源" LinkHref="https://www.voterregistration.gov.hk/chi/statistic2019.html" />

          </p>

          </Card>
        </div>
        <div className="column is-4">
          <Card>
            <h4>2019年正式登記冊</h4>
            <p>
              各立法會選區登記<br/>
              各區議會登記選民的年齡組別及性別分佈
            </p>

            <p>
            <AHref LinkText="下載 JSON" LinkHref="https://raw.githubusercontent.com/louiscklaw/vote-registration-statistic/master/2019PR_sex_and_age_dc.json" /><br/>
            <AHref LinkText="下載 PDF" LinkHref="https://github.com/louiscklaw/vote-registration-statistic/raw/master/2019PR_sex%20and%20age_DC_c.pdf" /><br/>
            <AHref LinkText="資料來源" LinkHref="https://www.voterregistration.gov.hk/chi/statistic2019.html" />

          </p>

          </Card>
        </div>
      </div>
      {/* <Intro /> */}
      {/* <div className="sandbox">
        <div className="tile is-ancestor">
          <Tile />
          <Tile />
          <TileThirdColumn />
        </div>
      </div> */}
    </section>
  )



}