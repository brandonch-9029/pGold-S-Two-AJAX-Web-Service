async function getPeriods () {
    const response = await fetch('http://localhost:3000/static/json/periods.json')
    const data = await response.json()
    console.log(data)
    createPeriodList(data)
}

function createPeriodList (periodList) {
    document.getElementById('periodDrop').innerHTML = `
    <select class="form-select form-select-sm fw-bold" onchange='loadPeriodName(this.value)'>
        ${Object.keys(periodList).map(function (period) {
            return `<option>${period}</option>`
        }).join('')}
    <select>
    `
}

async function loadPeriodName (period) {
    let infoString = await getPeriodInfo(period)
    document.getElementById('periodInfo').innerHTML = `
    ${infoString}
    `
}

async function getPeriodInfo (period) {
    const response = await fetch('http://localhost:3000/static/json/periods.json')
    const data = await response.json()
    infoString = data[period][0].keyinfo

    console.log(data[period][0].keyartists[0])

    return infoString
}

getPeriods()