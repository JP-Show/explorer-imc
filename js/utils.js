import { Modal } from './modal.js'

export function notNumber(value) {
  return isNaN(value) || value == ''
}

export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
export function showDisplayMesseger(r) {
  Modal.open()
  Modal.text.innerHTML = `Seu IMC é ${r}`
}
