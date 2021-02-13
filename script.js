const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const formInput = document.querySelectorAll('.form-input')
const formSubmit = document.querySelector('.send-form')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

formSubmit.addEventListener('click', () => {
  console.log(formInput.value)
  alert('Email Sent!')
})
