// 🐾🐾🐾 PART ONE 🐾🐾🐾

var parseRequest = function (inputString) {

  let headers = {}
  for (let i = 1; i < inputString.split('\n').length; i++){
    headers[inputString.split('\n')[i].split(':')[0]] = inputString.split('\n')[i].split(':')[1];
  }
  let response = {
    verb: inputString.split(' ')[0],
    path: inputString.split(' ')[1],
    protocol: inputString.split(' ')[2].split('\n')[0],
    headers: headers
  }
  return response;
}

module.exports = {
  parseRequest: parseRequest,
  attendance: "wordy wordy"
}
