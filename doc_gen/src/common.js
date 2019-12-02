import React, { Component } from 'react';
import Highlight from 'react-highlight.js'

function chopLongString(str_in, max_length=50){

  if (str_in === null ){
    return str_in
  }else{
    if (str_in.length > max_length){
      let remaining_text = str_in.length - max_length
      let remaining_printout = (remaining_text) > 10 ? remaining_text+' remaining' : ''
      // return str_in.substring(0,max_length)+'......'
      return `${str_in.substring(0,max_length)}...( ${remaining_printout} ) ... `
    }else{
      return str_in
    }
  }
}

function helloworld(){
  console.log('helloworld from common.js')
}

function randomId(){
  return [Math.random().toString().slice(2,10)]
}

function highlightSomething(obj_in, format_use){
  return(
    <Highlight language={format_use}>
      {obj_in}
    </Highlight>
  )
}

function highlightPlaintext(text_in){
  return highlightSomething(text_in, 'plaintext')
}

function highlightJson(text_in){
  return highlightSomething(JSON.stringify(text_in, null, 1), 'json')
}

function highlightJavascript(text_in){
  return highlightSomething(text_in, 'javascript')
}

function highlightErrorText(err_text_in, firebase_test_link){

  return (
    <div>
      {highlightSomething(err_text_in, 'plaintext')}
      <a href={firebase_test_link}>try fetching using firebase</a>
    </div>
  )
}

function checkDevelop(){
  if (process.env.NODE_ENV === 'development') {
    console.log('develop environment')

    return true
  }else{
    return false
  }
}

function debugLog(text_in){
  if(checkDevelop()){
    console.log(text_in)
  }
}

export {
  helloworld,
  chopLongString,
  randomId,
  highlightPlaintext,
  highlightJson,
  highlightJavascript,
  highlightErrorText,
  checkDevelop,
  debugLog
}