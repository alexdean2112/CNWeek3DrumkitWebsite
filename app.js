const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")

const button = document.getElementsByTagName("button")

button[0].addEventListener("click", () => {
    boom.play()
})
button[1].addEventListener("click", () => {
    clap.play()
})
button[2].addEventListener("click", () => {
    hihat.play()
})
button[3].addEventListener("click", () => {
    kick.play()
})
button[4].addEventListener("click", () => {
    openhat.play()
})
button[5].addEventListener("click", () => {
    ride.play()
})
button[6].addEventListener("click", () => {
    snare.play()
})
button[7].addEventListener("click", () => {
    tink.play()
})
button[8].addEventListener("click", () => {
    tom.play()
})

document.addEventListener("keypress", (event) => {
    if (event.key === "a") {
        boom.play()
    }
    else if (event.key === "s") {
        clap.play()
    }
    else if (event.key === "d") {
        hihat.play()
    }
    else if (event.key === "f") {
        kick.play()
    }
    else if (event.key === "g") {
        openhat.play()
    }
    else if (event.key === "h") {
        ride.play()
    }
    else if (event.key === "j") {
        snare.play()
    }
    else if (event.key === "k") {
        tink.play()
    }
    else if (event.key === "l") {
        tom.play()
    }
})
