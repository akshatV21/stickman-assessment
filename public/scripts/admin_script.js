const showPdfButtons = document.querySelectorAll("[data-id]")

showPdfButtons.forEach(button => {
  const id = button.getAttribute("data-id")
  button.addEventListener("click", async e => {
    const request = await fetch(`/api/pdf/generate/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/pdf",
      },
    })
    const response = await request.arrayBuffer()
    console.log(response)
    downloadPdf(response, id)
  })
})

const downloadPdf = (pdfBuffer, id) => {
  const blob = new Blob([pdfBuffer], { type: "application/pdf" })
  const link = window.URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = link
  a.download = `${id}.pdf`
  a.click()
}
