function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag de img
  const img = document.querySelector("#profile img")

  // substitui a imagem
  if(html.classList.contains("light")) {
    //se tiver light mode, adiciona a imagem light
    img.setAttribute("src", "./assets/avatar/avatar-light.png")
    img.setAttribute(
      "alt",
      "Avatar de Tainá, usando camisa preta e óculos escuros"
    )
  } else {
    //se tiver sem light mode, mantém a padrão
    img.setAttribute("src", "./assets/avatar/avatar-dark.png")
    img.setAttribute(
      "alt",
      "Avatar de Tainá, usando camisa preta, óculos e acenando"
    )
  }
}

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }