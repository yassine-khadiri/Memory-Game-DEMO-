let fillArr = (arr) => {
    for (let i = 0; i < 10; i++)
        arr[i] = i + 1;
}

let putImages = () => {
    let table = document.querySelector("table");
    let tr, randomVal, counterTd = 0;
    let arr = [];
    tr = document.createElement('tr');
    fillArr(arr);
    let i = 0, checker = true;
    while (i < 10)
    {
        do {
            randomVal = Math.floor(Math.random() * 10);
        }while (arr[randomVal + 1] == -1);
        arr[randomVal + 1] = -1;
        tr.innerHTML += `<td><img src="../assets/images/${randomVal + 1}.jpg" alt="${randomVal + 1}.jpg" /></td>`;
        counterTd++;
        if (counterTd == 5)
        {
            table.appendChild(tr);
            tr = document.createElement('tr');
            counterTd = 0;
        }
        // if (i == 9 && checker)
        // {
        //     i = -1;
        //     fillArr(arr);
        //     // break;
        //     checker = false;
        // }
        i++;
    }
}

for (let i = 0; i < 2; i++)
    putImages();

let checkEquality = (arrRes) => {
    if (arrRes[0].getAttribute('src') == arrRes[1].getAttribute('src'))
    {
        swal.fire({
            title: "Good Job :)",
            icon: "success",
            imageUrl: '../assets/images/win.jpg',
            imageWidth: "90%",
            background: "#1282a2",
            // timer: "1500",
            className: "swal"
        })
    }
    else
    {
        swal.fire({
            title: "Try Again :(",
            icon: "error",
            imageUrl: '../assets/images/lose.jpg',
            imageWidth: "90%",
            background: "#1282a2",
            color: "white",
            // timer: "1500",
            className: "swal"
        })
        arrRes[0].style.visibility = 'hidden';
        arrRes[1].style.visibility = 'hidden';
    }
}

let collection = document.getElementsByTagName('td');
let flag = false, arrRes = [], winSound, loseSound, j = 0;

winSound = new Audio;
winSound = '../assets/sounds/winSound.mp3';
for (let i = 0; collection.length; i++)
{
    collection[i].addEventListener("click",() => {
        collection[i].firstChild.style.visibility = 'visible';
        arrRes[j] = collection[i].firstChild;
        if (arrRes.length == 2)
        {
            setTimeout(checkEquality, 500, arrRes);
            j = -1;
            arrRes = [];
        }
        j++;
        console.log(j);
    })
}

