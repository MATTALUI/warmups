// 🐾🐾🐾 PART TWO 🐾🐾🐾

var parseRequest = function (inputString) {
  // console.log(inputString);
  let headers = {}
  for (let i = 1; i < inputString.split('\n').length; i++){
    if (inputString.split('\n')[i].indexOf(':') > -1){
    headers[inputString.split('\n')[i].split(':')[0]] = inputString.split('\n')[i].split(':')[1];
  }
  }
  let response = {
    verb: inputString.split(' ')[0],
    path: inputString.split(' ')[1],
    protocol: inputString.split(' ')[2].split('\n')[0],
    headers: headers
  }
  if (inputString.split(' ')[0] === 'POST'){
    response.body = {};
    let body = inputString.split('\n')[inputString.split('\n').length-1].split('&')
    console.log(body);
    for (let i = 0; i < body.length; i++){
      response.body[body[i].split('=')[0]] = body[i].split('=')[1];
    }
  }
  return response;
} // END FUNCTION

module.exports = {
  parseRequest: parseRequest,
  attendance: "wordy wordy"
}
