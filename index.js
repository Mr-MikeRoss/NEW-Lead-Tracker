//arrays
let myLeads = []

//Dom Interacter
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")

//Dom Event Listeners
inputBtn.addEventListener("click", function() {
    if (inputEl.value === myLeads[myLeads.length - 1]) {
        return
    } 
    myLeads.push(inputEl.value)
    console.log(myLeads)
})