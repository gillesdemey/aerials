'use strict'

var nets = require('nets')
var _ = require('lodash')

var Aerials = function () {
  this.videos_url = 'http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/entries.json'
}

Aerials.prototype.get = function (opts, cb) {
  var self = this

  if (typeof opts === 'string') opts = { id: opts }
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  self._fetch(function (err, videos) {
    if (err) return cb(err)
    cb(null, self._findWithOptions(opts))
  })
}

Aerials.prototype._fetch = function (cb) {
  var self = this

  nets({ url: self.videos_url, json: true }, function (err, resp, body) {
    if (err) return cb(err)
    self.videos = mapVideos(body)
    return cb(null, self.videos)
  })
}

Aerials.prototype._findWithOptions = function (opts) {
  var self = this
  if (!self.videos) throw new Error('no videos found')

  var results = self.videos
  var filters = _.pick(opts, ['city', 'timeOfDay', 'id'])

  results = filters ? _.filter(results, filters) : results

  return _.sample(results)
}

function mapVideos (data) {
  return _(data)
    .map('assets')
    .flatten()
    .map(function (video) {
      video.city = video.accessibilityLabel
      delete video.accessibilityLabel
      return video
    })
    .value()
}

var aerials = new Aerials()
module.exports = aerials
