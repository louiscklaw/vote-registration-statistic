import React from 'react';

import "./Tags.css"

let color_map = {
  csv:'rgba(26, 188, 156, 0.5)',
  xls:'rgba(46, 204, 113, 0.5)',
  xlsx:'rgba(52, 152, 219, 0.5)',
  xml:'rgba(155, 89, 182, 0.5)',
  json:'rgba(52, 73, 94, 0.5)',
  jpeg:'rgba(22, 160, 133, 0.5)',
  gml:'rgba(39, 174, 96, 0.5)',
  zip:'rgba(41, 128, 185, 0.5)',
  kml:'rgba(142, 68, 173, 0.5)',
  geojson:'rgba(44, 62, 80, 0.5)',
  gfs:'rgba(241, 196, 15, 0.5)',
  rss:'rgba(230, 126, 34, 0.5)',
  mdb:'rgba(231, 76, 60, 0.5)',
  gtfs:'rgba(236, 240, 241, 0.5)',
  xsd:'rgba(149, 165, 166, 0.5)',
  png:'rgba(243, 156, 18, 0.5)',
  geotiff:'rgba(211, 84, 0, 0.5)',
  xsls:'rgba(192, 57, 43, 0.5)',
  fgdb:'rgba(189, 195, 199, 0.5)',
  kmz:'rgba(127, 140, 141, 0.5)',
  asc:'rgba(52, 152, 219, 0.5)',
  rtcm:'rgba(155, 89, 182, 0.5)',
  rinex:'rgba(52, 73, 94, 0.5)',
  ics:'rgba(22, 160, 133, 0.5)',
  obj:'rgba(39, 174, 96, 0.5)',
  osgb:'rgba(41, 128, 185, 0.5)',
  cesium3dtiles:'rgba(142, 68, 173, 0.5)'
}

export default ({tag_text}) => {
  return(
    <span
      style={{backgroundColor: color_map[tag_text.toLowerCase()]}} className="tag">
      <a href={"/by_tags/"+tag_text}>{tag_text}</a>
    </span>
  )
}