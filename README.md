# Aerial

Get a random aerial video à la Apple TV.

## Installation

`npm i --save aerials`

`var aerials = require('aerials')`

## Usage

### **options**

* video_url — **string** (ie. 'b4-3')

### `get(options, callback)`

A random aerial video

```javascript
aerials.get(function (err, aerial) {
  if (err) throw err
  console.log('random aerial:', aerial)
})
```

A random aerial video of San Franscisco at night

```javascript
aerials.get({ 'city': 'San Francisco', 'timeOfDay': 'night' }, function (err, aerial) {
  if (err) throw err
  console.log('random aerial in San Francisco at day:', aerial)
})
```

The best aerial video

```javascript
aerials.get('b4-3', function (err, aerial) {
  if (err) throw err
  console.log('best aerial:', aerial)
})
```

### **options**

* id — **string** (ie. 'b4-3')
* city — **string** (ie. 'San Francisco')
* timeOfDay — **string** (either '**day**' or '**night**')

## License
MIT
