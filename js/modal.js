export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  text: document.querySelector('.modal-wrapper h1'),
  btClose: document.querySelector('.bt-close'),

  open() {
    this.wrapper.classList.add('open')
  },
  close() {
    this.wrapper.classList.remove('open')
  }
}

window.addEventListener('keydown', e => {
  e.key == 'Escape' ? Modal.close() : ''
})
Modal.btClose.onclick = () => Modal.close()
