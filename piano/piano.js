const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const WhiteKeys = document.querySelectorAll('.key.Whites')
const BlackKeys = document.querySelectorAll('.key.Blacks')

keys.forEach(key => {
    key.addEventListener('mousedown', () => playNote(key))
    key.addEventListener('mouseup', () => stopNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const WhiteKeysIndex = WHITE_KEYS.indexOf(key)
    const BlackKeysIndex = BLACK_KEYS.indexOf(key)

    if (WhiteKeysIndex > -1) playNote(WhiteKeys[WhiteKeysIndex])
    if (BlackKeysIndex > -1) playNote(BlackKeys[BlackKeysIndex])
})

document.addEventListener('keyup', e => {
    if (e.repeat) return
    const key = e.key
    const WhiteKeysIndex = WHITE_KEYS.indexOf(key)
    const BlackKeysIndex = BLACK_KEYS.indexOf(key)

    if (WhiteKeysIndex > -1) stopNote(WhiteKeys[WhiteKeysIndex])
    if (BlackKeysIndex > -1) stopNote(BlackKeys[BlackKeysIndex])
})


function playNote(key) {
    let noteAudio = document.getElementById(key.dataset.note)
    if (key.dataset.note = "SI") {
        noteAudio.currentTime = 0.9
    noteAudio.play()
    }
    else{
        noteAudio.currentTime = 0.5
    noteAudio.play()

    }
    
    key.classList.add('active')
}

function stopNote(key) {
    let noteAudio = document.getElementById(key.dataset.note)
    noteAudio.pause();
    noteAudio.currentTime = 0;
    key.classList.remove('active')
    
}