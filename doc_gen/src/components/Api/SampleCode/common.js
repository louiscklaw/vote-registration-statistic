import React from 'react';

function getCodeText( code_in ) {
  return (<code>{code_in}</code>)
}

function getHrefLink( link_in ) {
  return (<a href={link_in}>{link_in}</a>)
}

function PrettyJson(json_in){
  return JSON.stringify(json_in, null , 1);
}

function PrettyApiJsonResponse(json_response_in, length_to_trunc=300){
  let json_string_length = JSON.stringify(json_response_in).length

  if(json_response_in === null || json_response_in === undefined ){
    return 'waiting for result'
  }else{
      if (json_string_length > length_to_trunc){
        return PrettyJson(json_response_in).substring(0,length_to_trunc)+'...'
      }else{
        return PrettyJson(json_response_in)
      }
  }
}
export  {
  PrettyJson,
  PrettyApiJsonResponse,
  getCodeText,
  getHrefLink
}