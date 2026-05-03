document.getElementById("inner").addEventListener("click", alert("You clicked inner."))
document.getElementById("outer").addEventListener("click", alert("You clicked outer."))

document.addEventListener("DOMContentLoaded", () => {
document.getElementById("first").addEventListener("click", () => {alert("Lorem Ipsum was clicked.")})
document.getElementById("second").addEventListener("click", () => {alert("You clicked the milk story.")})
document.getElementById("third").addEventListener("click", () => {alert("You clicked on assignment requirements.")})
})
