let tbody = document.querySelector(".details-container")
let data = [
    {name: "Nelle Chambers" , country: "Russian Federation"},
    {name: "Aretha Adkins" , country: "Sweden"},
    {name: "Chester Molina" , country: "United States"},
    {name: "Valentine Berry" , country: "Russian Federation"},
    {name: "Mayank Gupta" , country: "India"},
    {name: "Dolan Griffith" , country: "Spain"},
    {name: "Timothy Buck" , country: "Australia"},
    {name: "Violet Mckenzie" , country: "Philippines"},
    {name: "Imani James" , country: "Spain"},
    {name: "Amos Hammond" , country: "Spain"},
    {name: "Vivien George" , country: "Brazil"},
];
for(let i=0; i<data.length; i++){
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${data[i].name}</td>
    <td>${data[i].country}</td>
    `
    tbody.appendChild(newRow);
}
let input = document.querySelector("input");
let tableData = [...document.querySelectorAll(".details-container tr")]
function filterTable(searchStr){
    const filteredData = tableData.filter((ele)=> ele.firstElementChild.innerText.toLowerCase().includes(searchStr.toLowerCase()))
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    for(let i=0; i<filteredData.length; i++){
        let newRow = document.createElement("tr");
        newRow.innerHTML = `
        <td>${filteredData[i].firstElementChild.innerText}</td>
        <td>${filteredData[i].lastElementChild.innerText}</td>
        `
        tbody.appendChild(newRow);
    }
}
input.addEventListener('input', (e)=>{
    let searchStr = e.target.value;
    filterTable(searchStr);
})

