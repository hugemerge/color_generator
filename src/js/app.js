import { setcolor, setlabel, random_hex, copy } from './util'

const palettes = document.querySelectorAll('.palette')
const change = document.getElementById("change")
const title = document.getElementById('title')

const clear = () => {
  Array.from(palettes)
    .map(setcolor)
    .map(setlabel)
}

change.addEventListener('click', () => {
  palettes.forEach(palette => {
    const is_locked = palette.querySelector('[name="lock"]').checked
    if (!is_locked) {
      palette.dataset.color = random_hex()
    }
  })
  clear()
})

title.addEventListener('click', () => {
  title.style.color = random_hex();
  let colors = "";
  palettes.forEach(palette => {
    colors += palette.dataset.color + '\n'
  })
  copy(colors)
})

clear()
