var robot = require( 'robotjs' )

var INTERVAL = 1000 * 45 // ms

require( 'onwakeup' )( function () {
  console.log( '================================' )
  console.log( '== COMPUTER AWOKE FROM SLEEP ==' )
  console.log( '== ' + ( new Date() )+ ' ==' )
  console.log( '================================' )
} )

console.log( 'robot-keep-awake started' )
setInterval(function () {
  robot.keyTap( 'shift' )
  console.log( 'tapped shift: ' + ( new Date() ) )
}, INTERVAL)
