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
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    btb += 1
    radio.sendValue("btB", btb)
})
let btb = 0
let bta = 0
let bloqueio = 0
bta = 0
btb = 0
radio.setGroup(1)
