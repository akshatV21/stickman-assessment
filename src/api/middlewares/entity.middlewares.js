const validateEntityPostRequest = async (req, res, next) => {
  const { name, number } = req.body

  if (!name) return res.status(400).json({ success: false, message: "Please provide name!" })
  if (!number) return res.status(400).json({ success: false, message: "Please provide number!" })

  req.entity = { name, number }
  next()
}

module.exports = { validateEntityPostRequest }
