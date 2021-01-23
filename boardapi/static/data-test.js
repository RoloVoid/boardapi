var BaseURL = ''
window.onload=function get() {
  var getRequest = new XMLHttpRequest()
  getRequest.open('GET', BaseURL + '/board')
  getRequest.send()
  getRequest.onreadystatechange = function () {
    if (getRequest.readyState == 4) {
      if (getRequest.status == 200) {
        document.getElementById('test').innerHTML = getRequest.responseText;
        document.getElementById('test1').innerHTML = JSON.parse(getRequest.responseText);
      }
    }
  }
}