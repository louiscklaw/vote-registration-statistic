'use strict';

const functions = require( 'firebase-functions' );

const cors = require( 'cors' )( {
  origin: true,
} );
const fetch = require('node-fetch')

const MAX_CSV_REPLY_ROW = 10

function chopReply(reply_in, max_chop_len){
  if (reply_in.toString().length > max_chop_len){
    let skipping_text = `${reply_in.toString().length - max_chop_len} skipped`
    return reply_in.toString().slice(0, max_chop_len)+'...('+skipping_text+')'
  }else{
    return reply_in
  }
}

function chopCSVReply(csv_reply_in, max_row){
  let csv_split = csv_reply_in.split('\n')
  console.log('csv_split.length', csv_split.length)
  if (csv_split.length > max_row){
    console.log('max_row', max_row)
    console.log('csv_split',csv_split)
    console.log('result',csv_split.slice(0, 5))


    return [1,2,3,4,5].slice(0, 5).join('')
  }else{
    return csv_reply_in
  }
}

exports.helloWorld = functions.https.onRequest( ( req, res ) => {
  if ( req.method === 'PUT' ) {
    return res.status( 403 ).send( 'Forbidden!' );
  }

  return cors( req, res, () => {
    res.status( 200 ).send( 'Hello from Firebase!' );
  } )

} );

exports.getCSV = functions.https.onRequest( ( req, res ) => {
  let csv_url_path = req.query.q
  let max_row = Math.min(req.query.max_row, MAX_CSV_REPLY_ROW)
  fetch( csv_url_path)
    .then(res => res.text())
    .then( res_text => {
      return cors( req, res, () => {
        res.status( 200 ).send(
          chopCSVReply(res_text, max_row)
         );
      } )

    } )
    .catch( error => {
      console.log( error );
    } );
} )

exports.getJSON = functions.https.onRequest( ( req, res ) => {
  let csv_url_path = req.query.q
  fetch( csv_url_path)
    .then(res => res.text())
    .then( res_text => {
      return cors( req, res, () => {
        res.status( 200 ).send( res_text );
      } )
    } )
    .catch( error => {
      console.log( error );
    } );
} )