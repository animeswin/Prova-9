document.addEventListener("DOMContentLoaded", () => {
  const botao = document.querySelector("#botao")
  const nota = document.querySelector("#nota")
  const lista_nota = document.querySelector("#lista_nota")

  botao.addEventListener("click", () => {
    const noteText = nota.value.trim()
    if (noteText) {
      const li = document.createElement("li")
      li.className = "note-item"
      li.innerHTML = `
                ${noteText} 
                <button class="deletar">Excluir</button>
            `

      li.querySelector(".deletar").addEventListener("click", () => {
        lista_nota.removeChild(li)
      })

      lista_nota.appendChild(li)
      nota.value = ""
      nota.focus()
    }
  })
})