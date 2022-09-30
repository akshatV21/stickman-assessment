const registerButton = document.querySelector(".register-button")
const addNumberBtn = document.querySelector(".add-button")
const mainSpanBlock = document.querySelector(".main-span")

// adding new number input field
const addNumberInputField = e => {
  const mainSpan = document.createElement("span")
  const para = document.createElement("p")
  const input = document.createElement("input")

  input.type = "tel"
  input.classList.add("number")
  para.innerText = "NUMBER:"
  mainSpan.append(para, input)
  mainSpanBlock.appendChild(mainSpan)
}

const registerEntity = async () => {
  const name = document.querySelector(".name").value
  const numbers = document.querySelectorAll(".number")

  // making concurrent requests
  let requests = []
  numbers.forEach(number => {
    const request = fetch("/api/entity/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        number: Number(number.value),
      }),
    })

    requests.push(request)
  })

  const responses = await Promise.all(requests)
  responses.forEach(async response => {
    const data = await response.json()
    if (!data.success) {
      alert(data.message)
      return
    }
  })
  alert("Save successfully!")
}

// all event listeners
registerButton.addEventListener("click", registerEntity)
addNumberBtn.addEventListener("click", addNumberInputField)
