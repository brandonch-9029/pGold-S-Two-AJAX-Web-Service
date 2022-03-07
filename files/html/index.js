async function getPeriods () {
    const response = await fetch('http://localhost:3000/static/json/periods.json')
    const data = await response.json()
    console.log(data)
    createPeriodList(data)
}

getPeriods()

function createPeriodList (periodList) {
    document.getElementById('periodDrop').innerHTML = `
    <select>
        ${Object.keys(periodList).map(function (period) {
            return `<option>${period}</option>`
        }).join('')}
    </select>
    `
}