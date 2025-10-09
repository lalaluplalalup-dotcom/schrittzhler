input.onGesture(Gesture.Shake, function () {
    schrittzähler += 1
    basic.showNumber(schrittzähler)
    if (schrittzähler == 5) {
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
        radio.sendNumber(schrittzähler)
    }
})
let schrittzähler = 0
schrittzähler = 0
radio.setGroup(1)
basic.showNumber(schrittzähler)
basic.forever(function () {
	
})
