input.onButtonPressed(Button.A, function () {
    カウンター += 1
})
input.onButtonPressed(Button.B, function () {
    if (カウンター > 3) {
        カウンター = 3
    }
    if (カウンター <= 3 && カウンター >= 1) {
        player += 1
        for (let index = 0; index < カウンター; index++) {
            if (x == 4) {
                led.unplot(x, y)
                x = 0
                y += 1
            } else {
                led.unplot(x, y)
                x += 1
            }
        }
    }
    if (!(led.point(4, 4))) {
        if (player / 2 == 0) {
            basic.showString("player1 win")
        } else {
            basic.showString("player2 win")
        }
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        カウンター = 0
        x = 0
        y = 0
    }
    カウンター = 0
})
let y = 0
let x = 0
let player = 0
let カウンター = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
カウンター = 0
player = 0
x = 0
y = 0
