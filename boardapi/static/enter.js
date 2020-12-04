var BaseURL = ''
function postUser(){
    var postRequest = new XMLHttpRequest()
    postRequest.open('POST',BaseURL+'/session')
    var postData ={
        username: document.getElementById("username").value ,
        password: document.getElementById("password").value
    }
    postRequest.setRequestHeader("Content-type","application/json")
    postRequest.send(JSON.stringify(postData))
    postRequest.onreadystatechange = function(){
        if (postRequest.readyState == 4){
            var x = JSON.parse(postRequest.responseText);
            if (postRequest.status == 200) {
                var x= postRequest.response;
                var y= eval("("+x+")");
                var username = y["username"];
                console.log(y["message"])
                document.getElementById("alert").innerHTML=""
                window.location.href="board"
            } else {
                var x= postRequest.response;
                var y= eval("("+x+")");
                document.getElementById("alert").innerHTML=postRequest.responseText
            }
        }
    }
}
function postNewUser(){
    var postRequest = new XMLHttpRequest()
    postRequest.open("POST",BaseURL + '/register')
    var postData = {
        username: document.getElementById("username").value ,
        password: document.getElementById("password").value
    }
    postRequest.setRequestHeader("Content-type","application/json")
    postRequest.send(JSON.stringify(postData))
    postRequest.onreadystatechange = function(){
        if (postRequest.readyState ==4) {
            var x = JSON.parse(postRequest.responseText);
            if (postRequest.status == 200) {
                var x= postRequest.response;
                var y= eval("("+x+")");
                console.log(y["message"])
                document.getElementById("alert").innerHTML=""
                window.location.href="session"
            } else {
                var x= postRequest.response;
                var y= eval("("+x+")");
                document.getElementById("alert").innerHTML=postRequest.responseText
            }
        }
    }
}