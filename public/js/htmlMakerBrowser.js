const create = (tag, options) => {
  if (!tag) {
    tag = 'div'
  }
  const elem = document.createElement(tag)
  if (options.classes) {
    const c = options.classes
    elem.className = c.constructor === Array ? c.join(' ') : c.constructor === String ? c : ''
  }
  if (options.id && options.id.constructor === String) {
    elem.setAttribute('id', options.id)
  }
  if (options.styles) {
    elem.setAttribute('style', options.styles)
  }
  if (options.children) {
    for (let i = 0; i < options.children.length; i++) {
      elem.appendChild(options.children[i])
    }
  }
  return elem
}

const div = (options) => {
  return create('div', options)
}

const p = (options) => {
  return create('p', options)
}

const text = (string) => document.createTextNode(string)

const htmlMaker = {
  create,
  div,
  p,
  text
}
// module.exports = { create, div }
