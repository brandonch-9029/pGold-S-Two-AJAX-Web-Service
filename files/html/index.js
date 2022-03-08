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
    ${description}
    `
    document.getElementById('artist1').innerHTML = `
    <button class="btn btn-danger btn-lg" type="button" onclick='updateArtistInfo("one")'>${artistOne}</button>
    `
    document.getElementById('artist2').innerHTML = `
    <button class="btn btn-primary btn-lg" type="button" onclick='updateArtistInfo("two")'>${artistTwo}</button>
    `
    document.getElementById('artist3').innerHTML = `
    <button class="btn btn-warning btn-lg" type="button" onclick='updateArtistInfo("three")'>${artistThree}</button>
    `
}

async function getPeriodInfo (period) {
    const response = await fetch('http://localhost:3000/static/json/periods.json')
    const data = await response.json()
    description = data[period][0].keyinfo
    artistOne = data[period][0].keyartists[0].name
    artistTwo = data[period][0].keyartists[1].name
    artistThree = data[period][0].keyartists[2].name
    return {description, artistOne, artistTwo, artistThree}
}

function updateArtistInfo (artistIndex) {
    if (artistIndex == "one") {
        console.log("clicked on first artist");
    }
    if (artistIndex == "two") {
        console.log("clicked on second artist");
    }
    if (artistIndex == "three") {
        console.log("clicked on third artist");
    }
}

getPeriods()