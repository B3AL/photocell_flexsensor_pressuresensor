let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    if (value > 400) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showNumber(value)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showNumber(value)
    }
})
