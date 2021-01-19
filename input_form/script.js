const addForm = document.querySelector('#add-form');
let count = 1;

addForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const number = document.querySelector('#number');
  const name = document.querySelector('#name');
  const amount = document.querySelector('#amount');
  const price = document.querySelector('#price');
  const sum = document.querySelector('#sum');

  let divRow = document.createElement('div');
  divRow.className = "row";

  let div1 = document.createElement('div');
  div1.className = "col-sm border";
  div1.innerText = count;
  let div2 = document.createElement('div');
  div2.className = "col-sm border";
  div2.innerText = number.value;
  let div3 = document.createElement('div');
  div3.className = "col-sm border";
  div3.innerText = name.value;
  let div4 = document.createElement('div');
  div4.className = "col-sm border";
  div4.innerText = amount.value;
  let div5 = document.createElement('div');
  div5.className = "col-sm border";
  div5.innerText = price.value;
  let div6 = document.createElement('div');
  div6.className = "col-sm border";
  div6.innerText = sum.value;

  let div7 = document.createElement('div');
  div7.className = "col-sm border";
  let delButton = document.createElement('button');
  delButton.className = 'btn btn-primary btn-sm m-2';
  delButton.innerText = 'Удалить'
  div7.appendChild(delButton);

  delButton.addEventListener('click', (event) => {
    divRow.remove()
    count--
  })

  divRow.appendChild(div1);
  divRow.appendChild(div2);
  divRow.appendChild(div3);
  divRow.appendChild(div4);
  divRow.appendChild(div5);
  divRow.appendChild(div6);
  divRow.appendChild(div7);

  const container = document.querySelector('.container');

  container.appendChild(divRow);

  count++
})
