input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("start_stop")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("reverse_direction")
})
radio.setGroup(0)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
