//Задание 3
let N = 3;

function RanBool(max) {
    if(Math.floor(Math.random() * max) == 1)
        return true;
    else
        return false;
}

let trying = 3;
let cnt = 3;

function green(sosi){
    if(trying != 0){
        sosi.style.background = 'green';
        trying--;
    }
    else
        alert("Попытки исчерпаны");
    document.getElementById('soska').innerHTML = 'Количество попыток: ' + trying;
}

function red(sosi){
    if(trying != 0){
        sosi.style.background = 'red';
        trying--;
    }
    else
        alert("Попытки исчерпаны");
    document.getElementById('soska').innerHTML = 'Количество попыток: ' + trying;
}

function create(N){
    let ht = "";
    
    for(let i = 0; i < N; i++){
        ht += "<div style = 'width: 320px; height: 100px; display:inline-block;'>";
        for(let j = 0; j < N;j++){
            if(cnt != 0){
                if(RanBool(2)){
                    ht += "<div id = 'green' onclick=green(this) style = 'width: 100px; height: 100px; display:inline-block; cursor: pointer;border: 1px dashed Gray; background-color: yellow'></div>";
                }
                else
                    ht += "<div id = 'red' onclick=red(this) style = 'width: 100px; height: 100px; display:inline-block; cursor: pointer;border: 1px dashed Gray; background-color: yellow'></div>";
                cnt--;
            }
            else
                ht += "<div id = 'red' onclick=red(this) style = 'width: 100px; height: 100px; display:inline-block; cursor: pointer;border: 1px dashed Gray; background-color: yellow'></div>";
        }
        ht += "</div>";
    }
    
    document.getElementById('box').innerHTML = ht;
    
    document.getElementById('soska').innerHTML = 'Количество попыток: ' + trying;
}

create(N);