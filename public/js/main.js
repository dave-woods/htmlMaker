/* global htmlMaker */
const hook = document.getElementById('hook')
hook.appendChild(htmlMaker.div({
  classes: 'one two',
  children: [
    htmlMaker.div({
      styles: 'background-color: red; width: 50px; height: 50px;'
    }),
    htmlMaker.p({
      children: [
        htmlMaker.text('This is a test paragraph')
      ]
    })
  ]
}))
