
const setcolor = (e) => {
  const color = e.dataset.color
  const sample = e.querySelector('.sample')
  sample.style.backgroundColor = color
  return e
}
const setlabel = (e) => {
  const hex = e.dataset.color
  const rgb = e.querySelector('.sample').style.backgroundColor
  e.querySelector('.label').innerText = hex
  e.querySelector('.rgb').innerText = rgb
  return e
}

const random_hex = () => {
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += (16 * Math.random() | 0).toString(16)
  }
  return color
}

const copy = (data) => {
  const parent = document.createElement('div');
  const e = document.createElement('span')
  e.innerText = data
  parent.appendChild(e)
  document.body.appendChild(parent)
  
  document.getSelection().selectAllChildren(parent)
  document.execCommand("Copy")

  document.body.removeChild(parent)
}

export { setcolor, setlabel, random_hex, copy}
