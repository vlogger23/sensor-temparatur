basic.forever(function () {
    if (input.temperature() < 1) {
        basic.showIcon(IconNames.No)
        music.playMelody("C5 B A G F E D C ", 500)
    } else {
        basic.clearScreen()
    }
})
