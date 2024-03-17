var count = 0;
var btn = document.getElementById("btn");


btn.onclick= function(){
    for(var i=1; i<7; i++){
        let elem = document.getElementsByName(i+"quest");
        
        for(var j = 0; j<elem.length;j++){
            if(elem[j].checked && elem[j].value=="*"){
                count++;
            }
        } 
    }
    alert("Количество правильных ответов: " + count);
    var res = document.getElementById("res");
    res.innerHTML= "Правильных ответов: " +count;
    count=0;
}
