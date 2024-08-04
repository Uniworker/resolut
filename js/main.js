if (document.readyState == 'interactive') {
  document.body.classList.add('sr-only')
  document.documentElement.style.backgroundColor = '#2F2F2F'
  var loader = document.createElement('div')
  loader.style.cssText = `position:absolute;
                          left:50%;
                          top:50%;
                          border-left: 4px solid #D0B194;
                          border-top: 4px solid #D0B194;
                          border-radius: 50%;
                          height: 64px;
                          width: 64px;
                          animation: spin 1s infinite linear`
  document.documentElement.append(loader)
  setTimeout(() => {
    document.body.dataset.loaded = true
    document.documentElement.style.background = 'none'
    loader.remove()
    document.body.classList.remove('sr-only')
  }, 2000);
  document.addEventListener('DOMContentLoaded', main)
} else {
  main()
}

function main() {
  var page = window.location.pathname
  var lang = document.getElementById('lang')
  lang.addEventListener('change', (e) => {
    if (page === 0 || page === '/' || page.match(/^\/?index/)) {
      if (e.currentTarget.value === 'ENG') window.location.assign('http://127.0.0.1:5500/index.html')
      else window.location.assign('http://127.0.0.1:5500/eng/index.html')
    } else {
      if (e.currentTarget.value === 'RU') window.location.assign('http://127.0.0.1:5500/eng/index.html')
      else window.location.assign('http://127.0.0.1:5500/index.html')
    }
  })
  var modalMenu = document.querySelector('.dialog-back')
  document.addEventListener('click', (e) => {
    document.querySelector('.menu__btn').classList.remove('active')
    modalMenu.dataset.active = 'false'
    modalMenu.style.display = 'none'
    if(e.target.hasAttribute('type', 'burger')) {
      e.target.classList.add('active')
      modalMenu.dataset.active = 'true'
      modalMenu.style.display = 'block'
      //modalMenu.parentNode.style.filter = 'blur(5px)'
    }
  })
}
