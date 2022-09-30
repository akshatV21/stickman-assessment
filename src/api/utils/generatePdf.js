const puppeteer = require("puppeteer")

const generatePdf = async id => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(`http://localhost:8080/pdf/${id}`)
  const pdf = await page.pdf({ format: "A4" })
  await browser.close()
  return pdf
}

module.exports = generatePdf
