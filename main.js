
var firstinput = 0
var secondinput = 0
var oper = ""

function DisplayNums(num) {
	var x = document.getElementById("display").value
	document.getElementById("display").value = x + num
}

function AddNums() {
	if(firstinput === 0) {
		firstinput = Number(document.getElementById("display").value)
	} else {
		firstinput += Number(document.getElementById("display").value)
	}
	oper = "add"
	ClearOut()
}

function SubtractNums() {
	if(firstinput === 0) {
		firstinput = Number(document.getElementById("display").value)
	} else {
		firstinput -= Number(document.getElementById("display").value)
	}
	oper = "sub"
	ClearOut()
}

function MultiplyNums() {
	if(firstinput === 0) {
		firstinput = Number(document.getElementById("display").value)
	} else {
		firstinput *= Number(document.getElementById("display").value)
	}
	oper = "mul"
	ClearOut()
}

function DivideNums() {
	if(firstinput === 0) {
		firstinput = Number(document.getElementById("display").value)
	} else {
		firstinput /= Number(document.getElementById("display").value)
	}
	oper = "div"
	ClearOut()
}

function ClearOut() {
	document.getElementById("display").value = ""
}

function ClearButton() {
	location.reload()
}

function Calculate() {
	var x = Number(document.getElementById("display").value)
	if(oper === "add") {
		document.getElementById("display").value = firstinput + x
	} else if(oper === "sub"){
		document.getElementById("display").value = firstinput - x
	} else if(oper === "mul"){
		document.getElementById("display").value = firstinput * x
	} else if(oper === "div") {
		document.getElementById("display").value = firstinput / x
	} else {
		document.getElementById("display").value = "Error"
	}


}