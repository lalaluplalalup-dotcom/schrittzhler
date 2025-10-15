input.onGesture(Gesture.Shake, function () {
    if (is_ready == 1) {
        schrittzähler += 1
        basic.showNumber(schrittzähler)
        if (schrittzähler == 5) {
            music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
        }
    }
})
let schrittzähler = 0
let is_ready = 0
let countdown = 5
is_ready = 0
for (let Index = 0; Index <= countdown; Index++) {
    basic.showNumber(countdown - Index)
    basic.pause(100)
}
music.playTone(262, music.beat(BeatFraction.Whole))
is_ready = 1
schrittzähler = 0
