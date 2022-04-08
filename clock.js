/**
 * DOM ELements selections
 */

const hour = document.querySelector('.hour')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

/**
 * Styles
 * transform: rotate(calc(30deg * 2))
 */

const colorPicker = [
    "rgb(221, 81, 0)",
    "rgb(4, 43, 153)",
    "rgb(192, 175, 18)"
]

setInterval(()=>{
    const date = new Date()
    let hour_ = date.getHours()
    let minutes_ = date.getMinutes()
    let seconds_ = date.getSeconds()

    hour_ = hour_ < 12 ? hour_ : hour_ - 12
    hour.style.transform = `translateX(-50%) translateY(calc(-50% - var(--height)/2)) rotate(calc(30deg * ${hour_}))`
    minutes.style.transform = `translateX(-50%) translateY(calc(-50% - var(--height)/2)) rotate(calc(30deg * ${(minutes_ / 60) * 12}))`
    seconds.style.transform = `translateX(-50%) translateY(calc(-50% - var(--height)/2)) rotate(calc(30deg * ${(seconds_ / 60) * 12}))`

    document.querySelectorAll('span').forEach(span => {
        span.style.color = 'white'
    })
    document.querySelector(`[data-tile='${Math.floor((seconds_ / 60) * 12)}']`).style.color = colorPicker[2]
    document.querySelector(`[data-tile='${Math.floor((minutes_ / 60) * 12)}']`).style.color = colorPicker[1]
    document.querySelector(`[data-tile='${hour_}']`).style.color = colorPicker[0]
}, 1000)

/**
 * Minutes = 0 - 59
 * 
 */