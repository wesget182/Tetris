document.querySelector('#button-id').addEventListener('click', function(){
  
  const expenses = document.querySelector('#expenses').value.split('').filter(el => el !== "$").join('')
  const income = document.querySelector('#income').value.split('').filter(el => el !== "$").join('')
  const price = document.querySelector('#price').value.split('').filter(el => el !== "$").join('')
  const savings = document.querySelector('#savings').value.split('').filter(el => el !== "$").join('')
  
  console.log(expenses.split('').filter(el => el !== "$").join(''))
  console.log(income)
  console.log(price)
  console.log(savings)

  if ((income - expenses - price) < savings){
    const no = document.createElement('p')
    no.innerHTML = 'WHAT ARE YOU THINKING?!?!'
    no.style.display = "inline"
    no.style.fontSize = "100px"
    document.querySelector('.col-md-4').appendChild(no);

    const what = document.createElement('img')
    what.setAttribute('src' , '\\assets\\images\\what.gif')
    document.querySelector('.col-md-4').appendChild(what);

    const whatAudio = document.createElement('audio')
    document.querySelector('.result').appendChild(whatAudio);
    
    const whatAudioSource = document.createElement('source')
    whatAudioSource.setAttribute('src', '\\assets\\audio\\what.mp3')
    whatAudio.appendChild(whatAudioSource);
    whatAudio.setAttribute('autoplay', 'true');
  }

  if ((income - expenses - price) >= savings){
    const yes = document.createElement('p')
    
    yes.innerHTML = 'TREAT YO SELF!!!'
    yes.style.fontSize = "100px"
    document.querySelector('.col-md-4').appendChild(yes);

    const treat = document.createElement('img')
    treat.setAttribute('src' , '\\assets\\images\\treat.gif')
    document.querySelector('.col-md-4').appendChild(treat);

    
    const treatAudio = document.createElement('audio')
    document.querySelector('.result').appendChild(treatAudio);
    
    const treatAudioSource = document.createElement('source')
    treatAudioSource.setAttribute('src', '\\assets\\audio\\treat-yo-self.mp3')
    
    treatAudio.appendChild(treatAudioSource);
    treatAudio.setAttribute('autoplay', 'true');
    
  
    
    
  }
  
});
