const inpTask = document.getElementById("inpTask")
const btnAdd = document.getElementById("btnAdd")
const ulList = document.getElementById("ulList")
const btnAll = document.getElementById("btnAll")
const btnComplited = document.getElementById("btnComplited")
const btnUncomplited = document.getElementById("btnUncomplited")
    //izveidot addEventListener funkciju kas izveido jaunu task ar del pogu un chekbox
btnAdd.addEventListener("click", addTaskFun)

function addTaskFun() {
    const task = document.createElement("li") //izveidoju task
    const btnDeliteTask = document.createElement("button") //izveidoju del pogu
    const chekbox = document.createElement("input") //izveidoju input
    chekbox.type = "chekbox" //parveidoju par chexbox
    btnDeliteTask.textContent = "Delite" //iedvu text btn del
    task.textContent = inpTask.value //task valu iedveu input.value
    task.appendChild(chekbox)
    ulList.appendChild(task) //visus pieskiru ka list bernus
    task.appendChild(btnDeliteTask)
    inpTask.value = "" //notiriju input lai var raksti nakamo task
    console.log("clicked")
}
//tris pogas kas katra klausas klikski un  filtre tos uzdevumu kurus vaig all,complited,uncolplited
// btnAll.addEventListener("click", showAllTasks)
// btnComplited.addEventListener("click", showComplitedTasks)
// btnUncomplited.addEventListener("click", showUncomplitedTasks)