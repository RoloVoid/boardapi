var BaseURL = ''
window.onload=function getLoginUser(){
    var getRequest = new XMLHttpRequest()
    getRequest.open('GET',BaseURL + '/username')
    getRequest.send()
    getRequest.onreadystatechange = function() {
        if(getRequest.readyState == 4){
            if(getRequest.status == 200){
                var x= getRequest.response;
                var y= eval("("+x+")");
                document.getElementById("username").innerHTML=x["username"];
            }
            else{
                console.log(getRequest.responseText)
            }
        }
    }
}
function getInfo(){
    var getRequest = new XMLHttpRequest()
    getRequest.open('GET',BaseURL + "/userinfo")
    getRequest.send()
    getRequest.onreadystatechange = function(){
        if(getRequest.readyState ==4 ) {
            if(getRequest.status == 200 ) {
                var x = getRequest.response;
                var y = eval("("+x+")");
                var username = y["username"];
                var nickname = y["nickname"];
                var age = y["age"];
                var gender = y["gender"];
                document.getElementById("alert").innerHTML=""
                document.getElementById("username0").innerHTML=username;
                document.getElementById("nickname").innerHTML=nickname;
                document.getElementById("age").innerHTML=age;
                document.getElementById("gender").innerHTML=gender;
            }
            else{
                console.log(getRequest.responseText)
            }
        }
    }
}
getInfo()
function change(){
    var postRequest = new XMLHttpRequest()
    postRequest.open('POST',BaseURL + '/userinfo/modification')
    postRequest.send()
    window.onload=function(){
        var gender=document.getElementById("gender1").value
    }
    var postData = {
        nickname: document.getElementById("nickname1").value ,
        age: document.getElementById("age1").value ,
        gender: gender ,
        password: document.getElementById("password1").value
    }
    postRequest.setRequestHeader("Content-type","application/json")
    postRequest.send(JSON.stringify(postData))
    postRequest.onreadystatechange = function(){
        if (postRequest.readyState ==4){
            if(postRequest.status == 200){
                var x = postRequest.response;
                var y = eval("("+x+")");
                console.log(y["message"])
                document.getElementById("nickname1").innerHTML=""
                document.getElementById("age1").innerHTML=""
                document.getElementById("gender1").innerHTML=""
                document.getElementById("password1").innerHTML=""
                getInfo()
            }
            else{
               document.getElementById("alert").innerHTML=postRequest.responseText
            }
        }
    }
}

function logout(){
    var postRequest = new XMLHttpRequest()
    postRequest.open("POST", BaseURL + '/userinfo/logout') 
    var postData = {
         username: document.getElementById("username").value
    }
    postRequest.setRequestHeader("Content-type", "application/json")
    postRequest.send(JSON.stringify(postData))
    postRequest.onreadystatechange = function() {
        if (postRequest.readyState == 4) {
            if (postRequest.status == 200) { 
                console.log(postRequest.responseText)
                document.getElementById("alert").innerHTML=""
                window.location.href="/"
            } else { 
                document.getElementById("alert").value=postRequest.responseText
            }
      }
   }
}