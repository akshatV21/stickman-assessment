const puppeteer = require("puppeteer")

const generatePdf = async id => {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] })
  const page = await browser.newPage()
  await page.goto(`https://stickman-assessment.herokuapp.com/pdf/${id}`)
  const pdf = await page.pdf({ format: "A4" })
  await browser.close()
  return pdf
}

module.exports = generatePdf
