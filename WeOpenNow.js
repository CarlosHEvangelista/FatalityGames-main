date = new Date()
getHours = date.getHours()
span = document.querySelector('#HowToFindUs span')
getDay = date.getDay()

if (getHours >= 9 && getHours <= 18) {
  span.innerHTML = 'ABERTO'
  span.style.color = 'blueviolet'
  span.style.fontSize = '4rem'
} else {
  span.innerHTML = 'FECHADO'
  span.style.color = 'red'
  span.style.fontSize = '4rem'
}

if (getDay === 0) {
  span.innerHTML = 'FECHADO'
  span.style.color = 'red'
  span.style.fontSize = '4rem'
}

if (getDay === 6 && getHours >= 17) {
  span.innerHTML = 'FECHADO'
  span.style.color = 'red'
  span.style.fontSize = '4rem'
}
