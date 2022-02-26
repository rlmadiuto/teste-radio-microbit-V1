function explode () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
}
function shakeshake () {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        # # # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        # # # # #
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        # # # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        # # # # #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        # # # # #
        . # # # #
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        # # # # #
        . # # # #
        # # # # #
        . # # # #
        # . # . #
        `)
    basic.showLeds(`
        # # # # #
        . # # # #
        # # # # #
        . # # # #
        # . # # #
        `)
    basic.showLeds(`
        # # # # #
        . # # # #
        # # # # #
        . # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
    explode()
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(50)
    if (9 == receivedNumber) {
        radio.sendValue("fim", 1)
    } else {
        radio.sendNumber(receivedNumber + 1)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    bta += 1
    radio.sendValue("btA", bta)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    bta = 0
    btb = 0
    radio.sendValue("limpa", 1)
    shakeshake()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("C")
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    btb += 1
    radio.sendValue("btB", btb)
})
radio.onReceivedValue(function (name, value) {
    if (name == "btA") {
        basic.showIcon(IconNames.Heart)
        basic.pause(10)
        basic.showNumber(value)
    }
    if (name == "btB") {
        basic.showIcon(IconNames.Heart)
        basic.pause(10)
        basic.showNumber(value)
    }
    if (name == "fim") {
        explode()
        if (value == 1) {
            radio.sendValue("fim", 0)
        }
    }
    if (name == "limpa") {
        basic.clearScreen()
        bta = 0
        btb = 0
        shakeshake()
    }
})
let btb = 0
let bta = 0
let bloqueio = 0
bta = 0
btb = 0
radio.setGroup(1)
