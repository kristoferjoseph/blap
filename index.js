module.exports = function blap(req, res, next) {
  res.blap = function(state) {
    state = state || {}
    state.path = req.path
    state.serverState = JSON.stringify(state)
    res.render('blapper', state)
  }
  next()
}
