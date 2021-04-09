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
    what.setAttribute('src' , '\\assets\\images\\what-are-you-5c3e8a.jpg')
    document.querySelector('.result').appendChild(what);

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
    console.log(yes)
    document.querySelector('.result').appendChild(yes);

    const treat = document.createElement('img')
    treat.setAttribute('src' , '\\assets\\images\\treat.jpeg')
    document.querySelector('.result').appendChild(treat);

    
    const treatAudio = document.createElement('audio')
    document.querySelector('.result').appendChild(treatAudio);
    
    const treatAudioSource = document.createElement('source')
    treatAudioSource.setAttribute('src', '\\assets\\audio\\treat-yo-self.mp3')
    
    treatAudio.appendChild(treatAudioSource);
    treatAudio.setAttribute('autoplay', 'true');
    
  
    
    
  }
  
});
