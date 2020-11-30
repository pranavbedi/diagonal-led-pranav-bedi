function plot () {
    led.plot(x, y)
    x_diag = x
    y_diag = y
    for (let index = 0; index < 4; index++) {
        x_diag += 1
        y_diag += -1
        led.plot(x_diag, y_diag)
    }
    basic.pause(time)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    time = time * 0.85
})
input.onButtonPressed(Button.B, function () {
    time = time * 1.15
})
let y_diag = 0
let x_diag = 0
let y = 0
let x = 0
let time = 0
time = 100
x = 0
y = 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        plot()
        y += 1
    }
    for (let index = 0; index < 5; index++) {
        plot()
        x += 1
    }
    x = 0
    y = 0
})
