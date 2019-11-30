'use strict';

const functions = require( 'firebase-functions' );

const cors = require( 'cors' )( {
  origin: true,
} );
const fetch = require('node-fetch')

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