const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const navLinks = document.querySelectorAll('.nav-link')
const infos = document.querySelectorAll('.info')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () =>
    container.classList.remove('show-nav')
  )
})

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
