
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

export {
  helloworld,
  chopLongString,
  randomId
}