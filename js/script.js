import { AlertError } from './alert-error.js'
import { calculateIMC, notNumber, showDisplayMesseger } from './utils.js'

const btCalc = document.querySelector('#btCalc')
const inpWeight = document.querySelector('#inpWeight')
const inpHeight = document.querySelector('#inpHeight')

btCalc.addEventListener('click', e => {
  e.preventDefault()
  const weight = inpWeight.value
  const height = inpHeight.value

  const booleanEntryWAndH = notNumber(weight) || notNumber(height)

  if (booleanEntryWAndH) {
    AlertError.open()
    return
  }
  AlertError.close()
  const result = calculateIMC(weight, height)

  showDisplayMesseger(result)
})

inpWeight.addEventListener('input', e => {
  e ? AlertError.close() : ''
})
inpHeight.addEventListener('input', e => {
  e ? AlertError.close() : ''
})
