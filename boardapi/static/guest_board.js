function getAll(){
    var BaseURL = ''
    var getRequest = new XMLHttpRequest()
    getRequest.open('GET',BaseURL + '/boards/all')
    getRequest.send()
    getRequest.onreadystatechange = function() {
        if(getRequest.readyState == 4){
            if(getRequest.status == 200) {
                var x = getRequest.response;
                var comments = eval('(' + x + ')');
                var boards = new Array()
                for (y in comments) {
                    boards.push(eval('(' + y + ')'))
                }
                for (var i = 0, len = boards.length; i<len; i++) {
                    var id = '<div class="id">'+boards[i]["id"]+'</div>';
                    var nickname = '<div class="id" overflow="auto">'+boards[i]["nickname"]+'</div>';
                    var text = '<div class="id" overflow="auto">'+boards[i]["text"]+'</div>';
                    var date ='<div class="id" overflow="auto">'+ boards[i]["date"]+'</div>';
                    var last = '<div class="id" overflow="auto">'+boards[i]["last"]+'</div>';
                    var boardmark = '<div overflow="auto"'+' id='+String(i)+'></div>>'
                    document.getElementById("text").innerHTML += boardmark;
                    document.getElementById(String(i)).innerHTML += id;
                    document.getElementById(String(i)).innerHTML += nickname;
                    document.getElementById(String(i)).innerHTML += date;
                    document.getElementById(String(i)).innerHTML += text;
                    document.getElementById(String(i)).innerHTML += last;
                }
            }
        }
    }
}
getAll()