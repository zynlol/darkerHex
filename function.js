module.exports = function darker(color, amount) {
    const clamp = (val) => Math.min(Math.max(val, 0), 0xFF)
    const fill = (str) => ('00' + str).slice(-2)

    const num = parseInt(color.substr(1), 16)
    const red = clamp((num >> 16) + amount)
    const green = clamp(((num >> 8) & 0x00FF) + amount)
    const blue = clamp((num & 0x0000FF) + amount)
    return '#' + fill(red.toString(16)) + fill(green.toString(16)) + fill(blue.toString(16))

}

//Color; Hex
//amount; Darkness opacity (-25)
