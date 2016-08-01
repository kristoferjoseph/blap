module.exports = function blap(res, req, next) {
  res.blap = function(state) {
    state = state || {}
    state.path = req.path
    state.serverState = JSON.stringify(state)
    res.render('blapper', state)
  }
  next()
}
