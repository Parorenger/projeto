function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  let portfolio = document.getElementById('portfolio');
  let twitter = document.getElementById('xprofile');
  let explorer = document.getElementById('visit-explorer')


  let img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/foto-clara-circular.png")
    img.setAttribute(
      "alt",
      "Foto de Marcos Santana sorrindo na Liberdade, usando óculos escuros e blusa clara."
    )
    // Mudando a lingua dos itens
    portfolio.innerHTML = "Access my portfolio on Github"
    twitter.innerHTML = "Visit my profile on X"
    explorer.innerHTML = "Discover more on Explorer"
    // Fim da mudança de lingua
  } else {
    img.setAttribute("src", "assets/foto-circular.png")
    img.setAttribute(
      "alt",
      "Foto de Marcos Santana sorrindo, usando terno e gravata e camisa branca e fundo amarelo."
    )
    // Mudando a lingua dos itens
    portfolio.innerHTML = "Ver meu portfólio"
    twitter.innerHTML = "Acesse meu perfil no X"
    explorer.innerHTML = "Conheça o Explorer"
    // Fim da mudança de lingua
  }
}
