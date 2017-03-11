 var button = document.getElementById("counter");
 var counter = 0;
 
 button.onclick = funtion () {
        var span = document.getElementById("count");
        counter = counter + 1;
        span.innerHtml = counter.toString();
 };