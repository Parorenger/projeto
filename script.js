function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  let img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/foto-clara-circular.png")
    img.setAttribute(
      "alt",
      "Foto de Marcos Santana sorrindo na Liberdade, usando óculos escuros e blusa clara."
    )
  } else {
    img.setAttribute("src", "assets/foto-circular.png")
    img.setAttribute(
      "alt",
      "Foto de Marcos Santana sorrindo, usando terno e gravata e camisa branca e fundo amarelo."
    )
  }
}
