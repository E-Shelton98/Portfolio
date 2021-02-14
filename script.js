const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const infos = document.querySelectorAll('.info')
const formInput = document.querySelectorAll('.form-input')
const formSubmit = document.querySelector('.send-form')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

window.addEventListener('scroll', checkInfo)

function checkInfo() {
  const triggerBottom = (window.innerHeight / 5) * 4

  infos.forEach((info) => {
    const infoTop = info.getBoundingClientRect().top

    if (infoTop < triggerBottom) {
      info.classList.add('show')
    }
  })
}

formSubmit.addEventListener('click', () => {
  console.log(formInput.value)
  alert('Email Sent!')
})
