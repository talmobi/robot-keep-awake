var robot = require( 'robotjs' )

var INTERVAL = 5000 // ms

require( 'onwakeup' )( function () {
  console.log( '================================' )
  console.log( '== COMPUTER AWOKED FORM SLEEP ==' )
  console.log( '== ' + ( new Date() )+ ' ==' )
  console.log( '================================' )
} )

console.log( 'robot-keep-awake started' )
setInterval(function () {
  robot.keyTap( 'shift' )
  console.log( 'tapped shift: ' + ( new Date() ) )
}, INTERVAL)
