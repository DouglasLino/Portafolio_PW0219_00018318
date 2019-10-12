let carnet_field = document.querySelector("#carnet_field");
let schedule = document.querySelector("#schedule_field");
let late_switch = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");

let datetime = new Date();

let carnet_regex = new RegExp("^[0-9]{8}$");

let tbody = document.querySelector("#table_body");

let addStudent = (obj) =>{

    let new_row = document.createElement("tr");
    new_row.classList.add("table-active");

    new_row.innerHTML = `
        <td>${obj.carnet}</td>
        <td>${obj.schedule}</td>
        <td>${datetime.toLocaleString()}</td>
        <td>${obj.late}</td>
    `
    tbody.appendChild(new_row);
}

let parseLateBool = (value)=>
{
    if(value)
    {
        return "simon"
    }
    else{
        return "nel"
    }
}

submit_btn.addEventListener("click", ()=>{
    let carnet = carnet_field.value;
    let horario = schedule.options[schedule.selectedIndex].text;
    let late = parseLateBool(late_switch.checked);

    let result_obj = 
    {
        "carnet": carnet,
        "schedule": horario,
        "late": late
    }

    if(carnet_regex.test(carnet))
    {
        addStudent(result_obj);
    }
    else{
        alert("Vuelve a intentarlo");
    }
})

carnet_field.addEventListener("keyup",(event)=>
{
    if(event.keyCode == 13)
    {
        submit_btn.click();
    }
})