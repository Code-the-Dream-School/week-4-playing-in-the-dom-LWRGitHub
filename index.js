//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here
const q1 = () => {
    let newElement1 = document.querySelector('#a-1');
    newElement1.innerHTML = "<div>x</div>";
    newElement1.className = 'square';
    newElement1.addEventListener("click", (e) => {
        newElement1.innerHTML == 'x' ? newElement1.innerHTML = "o" :newElement1.innerHTML = "x";
    });
}

q1();


//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];

const q2 = () => {
    let newElement2 = document.querySelector('#a-2');
    let colorOption = '';

    for(let i = 0; i < colors.length; i++){
        colorOption += `<option value="${colors[i]}">${colors[i]}</option>`;
    }

    newElement2.innerHTML = `<select id="colorTag" name="colorTag">${colorOption}</select><button>Remove</button>`;



    let optionToRemove = document.querySelector('select');
    let button = document.querySelector('button');

    button.addEventListener("click", (e) => {
        let output = optionToRemove.value; 
        document.querySelector(`option[value='${output}']`).remove();
    });
}

q2();


//resolve // QUESTION 2 here






//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)

const q3 = () => {
    const volume_sphere = radius => {
        let volume;
        radius = Math.abs(radius);
        volume = (4/3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4);
        document.getElementById('volume').value = volume;
        return ;
    }

    const calcSurface = radius => {
        radius = Math.abs(radius);
        let surface = 4*Math.PI*Math.pow(radius, 2);
        document.getElementById('area').value = surface;
        return ;
    }

    const calculate_sphere = (e) =>{
        
        let radius = document.getElementById('radius').value;
        calcSurface(radius);
        volume_sphere(radius);
        
        return ;
    }

    document.querySelector('#submit').addEventListener( 'click', e => {
        e.preventDefault();
        calculate_sphere();
    }); // this execute the volume_sphere function each time the calculate (submit) button is clicked
}

q3();


//------------------------Question 4 ---------------------------
//Now in this Exercise we want you to create 3 buttons wich clicks actions are going to hide the respective question above with their aswer and if they are hidden then the click option should be display the question with their respective aswer
// append the 3 buttons to the element with the 'id = a-4' as childrens

const a4 = document.getElementById('a-4');
a4.innerHTML = `<button id="hideQ1">Hide Q1</button><button id="hideQ2">Hide Q2</button><button id="hideQ3">Hide Q3</button>`;

// const q1Button = document.getElementById('hideQ1');
// const q2Button = document.getElementById('hideQ2');
// const q3Button = document.getElementById('hideQ3');

const button = document.querySelectorAll('button');
console.log(button);

for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', e => {
        if(button[i].id == `hideQ1`){
            document.querySelector('#a-1').parentNode.style.visibility == '' ? document.querySelector('#a-1').parentNode.style.visibility = 'hidden' : document.querySelector('#a-1').parentNode.style.visibility = '' ;
        } else if(button[i].id == `hideQ2`){
            document.querySelector('#a-2').parentNode.style.visibility == '' ? document.querySelector('#a-2').parentNode.style.visibility = 'hidden' : document.querySelector('#a-2').parentNode.style.visibility = '' ;
        } else if(button[i].id == `hideQ3`){
            document.querySelector('#a-3').parentNode.style.visibility == '' ? document.querySelector('#a-3').parentNode.style.visibility = 'hidden' : document.querySelector('#a-3').parentNode.style.visibility = '' ;
        } 
    });
}

// q1Button.addEventListener('click', e => {
//     console.log('button.id');
// });
// q1Button.addEventListener('click', e => {
//     console.log('button.id');
// });


//resolve // QUESTION 4 here
