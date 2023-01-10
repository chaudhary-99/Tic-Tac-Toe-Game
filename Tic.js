let arr = [true, true, true, true, true, true, true, true, true];
let start = true;

let count = { value: 2, };

function win() {
    let colu = document.getElementsByClassName('col');
    console.log(colu);
    let col = Array.from(colu);
    let winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

    winner.forEach(e => {
        if ((col[e[0]].textContent === col[e[1]].textContent) && 
        (col[e[1]].textContent === col[e[2]].textContent) &&
            (col[e[0]].textContent !== "")) {
            console.log("tt");
            document.querySelector(".Game").textContent = "WIN";
            start = false;

        }
    })


}

function xyz(e) {
    if (start) {
        if (count.value == 2 && arr[e - 1]) {
            arr[e - 1] = false;
            document.getElementById(e).innerText = "1";
            count.value--;
        }
        else if (count.value == 1 && arr[e - 1]) {
            arr[e - 1] = false;
            document.getElementById(e).innerText = "0";
            count.value--;
        }

        if (count.value == 0) {
            count.value = 2;
        }
        win();

    }
}

function resetgame(){
    let colu = document.querySelectorAll('.col');
    for(let i=0;i<9;i++){
        colu[i].innerText ="";
    }
    arr = [true, true, true, true, true, true, true, true, true];
    start=true;
    count.value = 2;
}
