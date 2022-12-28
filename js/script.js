let fillArr = (arr) => {
    for (let i = 0; i < 10; i++)
        arr[i] = i + 1;
}

// Put The Images Inside Table

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
        tr.innerHTML += `<td><img src="assets/images/${randomVal + 1}.jpg" alt="${randomVal + 1}.jpg" /></td>`;
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


let progress = document.querySelector('#prog');
let i = 0;
const timer = ()=>
{
	if (i <= 100)
	{
		console.log(i);
		progress.setAttribute('value', i);
		setTimeout(timer, 100);
		i++;
	}
}

timer();
// Make A Counter Before Hdding The Cards:
// let timer = document.querySelector('timer')
// const timer = () =>{
// 	document.write('timer: ');
// 	for (let i = 1; i < 11; i++)
// 		document.write(i);
// }

// timer();

// =========================================================================

for (let i = 0; i < 2; i++)
    putImages();

let checkEquality = (arrRes) => {
    if (arrRes[0].getAttribute('src') == arrRes[1].getAttribute('src'))
    {
        swal.fire({
            title: "Good Job :)",
            icon: "success",
            imageUrl: 'assets/images/win.jpg',
            imageWidth: "90%",
            background: "#FFF",
            color: "#000",
            // timer: "1500",
        })
        winSound.play();
    }
    else
    {
        swal.fire({
            title: "Try Again :(",
            icon: "error",
            imageUrl: 'assets/images/lose.jpg',
            imageWidth: "90%",
            background: "#FFF",
            color: "#000",
            // timer: "1500",
        })
        loseSound.play();
        arrRes[0].style.visibility = 'hidden';
        arrRes[1].style.visibility = 'hidden';
    }
}

// For Dark Mode

let body = document.body;
let toggle = document.querySelector('.toggle-button');
let collectionTd = document.querySelectorAll('td');
let _swal = document.querySelector('.swal');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('bi-sun-fill');
    body.classList.toggle('dark-mode');
    for (let i = 0; i < collectionTd.length; i++)
        collectionTd[i].classList.toggle('light-mode');
});

// =========================================================================

let collection = document.getElementsByTagName('td');
let flag = false, arrRes = [], j = 0,
winSound = new Audio('assets/sounds/winSound.mp3'),
loseSound = new Audio('assets/sounds/loseSound.mp3');

for (let i = 0; collection.length; i++)
{
    collection[i].addEventListener("click",() => {
		// console.log(collection[i].parentNode.rowIndex);
		// console.log(`(${collection[i].parentNode.rowIndex}, ${collection[i].cellIndex})`);
        collection[i].firstChild.style.visibility = 'visible';
        arrRes[j] = collection[i].firstChild;
        if (arrRes.length == 2)
        {
			// This Code To Fix The Success Result When U Click Multiple Times At The Same Image!
			console.log(arrRes[0].parentNode.cellIndex);
			console.log(arrRes[0].parentNode.parentNode.rowIndex);
			if (arrRes[0].parentNode.parentNode.rowIndex == arrRes[1].parentNode.parentNode.rowIndex
				&& arrRes[0].parentNode.cellIndex == arrRes[1].parentNode.cellIndex)
				return ;
			// ---------------------------------------------------------
			setTimeout(checkEquality, 300, arrRes);
			j = -1;
			arrRes = [];
        }
        j++;
    })
}
