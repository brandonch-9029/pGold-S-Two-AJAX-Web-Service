async function getPeriods () {
    const response = await fetch('http://localhost:3000/static/json/periods.json')
    const data = await response.json()
    console.log(data)
    romanButtonInitalise(data)
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
    updateArtistInfo('one')
}

async function getPeriodInfo (period) {
    const response = await fetch('http://localhost:3000/static/json/periods.json')
    const data = await response.json()
    description = data[period][0].keyinfo
    artistOne = data[period][0].keyartists[0].name
    artistOneInfo = data[period][0].keyartists[0].info
    artistTwo = data[period][0].keyartists[1].name
    artistTwoInfo = data[period][0].keyartists[1].info
    artistThree = data[period][0].keyartists[2].name
    artistThreeInfo = data[period][0].keyartists[2].info
    return {description, artistOne, artistTwo, artistThree, artistOneInfo, artistTwoInfo, artistThreeInfo}
}

function updateArtistInfo (artistIndex) {
    if (artistIndex == "one") {
        document.getElementById('selectedArtistName').innerHTML = `
        ${artistOne}
        `
        document.getElementById('selectedArtistInfo').innerHTML = `
        ${artistOneInfo}
        `;
    }
    if (artistIndex == "two") {
        document.getElementById('selectedArtistName').innerHTML = `
        ${artistTwo}
        `
        document.getElementById('selectedArtistInfo').innerHTML = `
        ${artistTwoInfo}
        `;
    }
    if (artistIndex == "three") {
        document.getElementById('selectedArtistName').innerHTML = `
        ${artistThree}
        `
        document.getElementById('selectedArtistInfo').innerHTML = `
        ${artistThreeInfo}
        `;
    }
}

function romanButtonInitalise (data) {
    const period = 'Romanesque'
    artistOne = data[period][0].keyartists[0].name
    artistOneInfo = data[period][0].keyartists[0].info
    artistTwo = data[period][0].keyartists[1].name
    artistTwoInfo = data[period][0].keyartists[1].info
    artistThree = data[period][0].keyartists[2].name
    artistThreeInfo = data[period][0].keyartists[2].info

    document.getElementById('artist1').innerHTML = `
    <button class="btn btn-danger btn-lg" type="button" onclick='romanButtonClick("one")'>${artistOne}</button>
    `
    document.getElementById('artist2').innerHTML = `
    <button class="btn btn-primary btn-lg" type="button" onclick='romanButtonClick("two")'>${artistTwo}</button>
    `
    document.getElementById('artist3').innerHTML = `
    <button class="btn btn-warning btn-lg" type="button" onclick='romanButtonClick("three")'>${artistThree}</button>
    `
}

function romanButtonClick (index) {
    if (index == "one") {
        document.getElementById('selectedArtistName').innerHTML = `
        ${artistOne}
        `
        document.getElementById('selectedArtistInfo').innerHTML = `
        ${artistOneInfo}
        `;
    }
    if (index == "two") {
        document.getElementById('selectedArtistName').innerHTML = `
        ${artistTwo}
        `
        document.getElementById('selectedArtistInfo').innerHTML = `
        ${artistTwoInfo}
        `;
    }
    if (index == "three") {
        document.getElementById('selectedArtistName').innerHTML = `
        ${artistThree}
        `
        document.getElementById('selectedArtistInfo').innerHTML = `
        ${artistThreeInfo}
        `;
    }
}








getPeriods()
