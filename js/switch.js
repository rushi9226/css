const mouth = document.querySelector(".mouth")
const lefteye = document.querySelector(".eye1")
const righteye = document.querySelector(".eye2")
const switchbtn = document.querySelector(".switchbtn")
const tongue = document.querySelector(".tongue")

const allElements = [mouth,lefteye,righteye,switchbtn,tongue]

switchbtn.addEventListener("click",happyface)

function happyface() {
	allElements.forEach(element =>{elem=element.classList.toggle("happy")})
}