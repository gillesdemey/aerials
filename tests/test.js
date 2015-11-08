var test = require('tape')
var aerials = require('../index')

test('random aerial', function (t) {
  t.plan(1)

  aerials.get(function (err, aerial) {
    if (err) throw err
    t.ok(aerial, 'random aerial')
  })
})

test('random aerial with options', function (t) {
  t.plan(2)

  aerials.get({ 'city': 'San Francisco', 'timeOfDay': 'day' }, function (err, aerial) {
    if (err) throw err
    t.equal(aerial.city, 'San Francisco')
    t.equal(aerial.timeOfDay, 'day')
  })
})

test('best aerial', function (t) {
  t.plan(1)

  aerials.get('b4-3', function (err, aerial) {
    if (err) throw err
    t.deepEqual(aerial, {
      url: 'http://a1.phobos.apple.com/us/r1000/000/Features/atv/AutumnResources/videos/b4-3.mov',
      type: 'video',
      id: 'b4-3',
      timeOfDay: 'day',
      city: 'San Francisco'
    })
  })
})
