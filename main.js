document.querySelector('#button-id').addEventListener('click', function(){
  
  const expenses = document.querySelector('#expenses').value
  const income = document.querySelector('#income').value
  const price = document.querySelector('#price').value
  const savings = document.querySelector('#savings').value
  
  console.log(expenses)
  console.log(income)
  console.log(price)
  console.log(savings)

  if ((income - expenses - price) < savings){
    const no = document.createElement('p')
    no.innerHTML = 'WHAT ARE YOU THINKING?!?!'
    console.log(no)
    document.querySelector('.result').appendChild(no);

    const what = document.createElement('img')
    what.setAttribute('src' , '\\images\\pics\\what.gif')
    document.querySelector('.result').appendChild(what);
  }

  if ((income - expenses - price) >= savings){
    const yes = document.createElement('p')
    yes.innerHTML = 'TREAT YO SELF!!!'
    console.log(yes)
    document.querySelector('.result').appendChild(yes);

    const treat = document.createElement('img')
    treat.setAttribute('src' , '\\images\\pics\\treat.gif')
    document.querySelector('.result').appendChild(treat);
  }
  
});
