
function chopLongString(str_in, max_length=50){
  if (str_in.length > max_length){
    return str_in.substring(0,max_length)+'...'
  }else{
    return str_in
  }
}

function helloworld(){
  console.log('helloworld from common.js')
}

function randomId(){
  return [Math.random().toString().slice(2,10)]
}

export {
  helloworld,
  chopLongString,
  randomId
}