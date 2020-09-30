input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    しきい値 += 5
    basic.showNumber(しきい値)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    しきい値 += -5
    basic.showNumber(しきい値)
})
let しきい値 = 0
しきい値 = 10
basic.forever(function () {
    if (input.lightLevel() < しきい値) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
basic.forever(function () {
    basic.showNumber(input.lightLevel())
})
