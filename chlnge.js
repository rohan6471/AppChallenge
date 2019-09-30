const calc = (radius) => {
    return Math.PI * radius * radius;
}
document.querySelector('#calculate').addEventListener('click', () => {
    const radius = parseInt(document.querySelector("#radius").value)
    const result = `${calc(radius)}`
    document.querySelector("#result").innerHTML = result;
})  