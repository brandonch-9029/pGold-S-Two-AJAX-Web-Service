async function getPeriods () {
    const response = await fetch('http://localhost:3000/static/json/periods.json')
    const data = await response.json()
    console.log(data)
    createPeriodList(data)
}

getPeriods()

function createPeriodList (periodList) {
    document.getElementById('periodDrop').innerHTML = `
    <select onchange='loadPeriodName(this.value)'>
        ${Object.keys(periodList).map(function (period) {
            return `<option>${period}</option>`
        }).join('')}
    </select>
    `
}

async function loadPeriodName (period) {
    document.getElementById('periodName').innerHTML = `
    ${period}
    `
    let infoString = await getPeriodInfo(period)
    document.getElementById('periodInfo').innerHTML = `
    ${infoString}
    `
}

async function getPeriodInfo (period) {
    const response = await fetch('http://localhost:3000/static/json/periods.json')
    const data = await response.json()
    infoString = data[period][0].keyinfo
    return infoString
}
