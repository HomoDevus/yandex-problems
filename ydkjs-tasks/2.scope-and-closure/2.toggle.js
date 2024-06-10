function toggle(...toggleValues) {
  let callCounter = 0

  return function toggler() {
    console.log(toggleValues[callCounter % toggleValues.length])
    callCounter++
  }
}

let hello = toggle("Hello")
let onOff = toggle("on", "off")
let speed = toggle("slow", "medium", "fast")

hello()
hello()
hello()

onOff()
onOff()
onOff()
onOff()

speed()
speed()
speed()
speed()
speed()
speed()