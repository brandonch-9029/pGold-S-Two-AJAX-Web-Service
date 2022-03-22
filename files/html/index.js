async function getPeriods () {
    const response = await fetch('http://localhost:3000/periods')
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
    document.getElementById('selectedPeriodWork').innerHTML = `
    <img src="http://localhost:3000/static/images/period/romanesque.jpg" class="img-fluid">
    `
    document.getElementById('selectedPeriodWorkName').innerHTML = `
    The Temptation of Christ by the Devil
    `
    document.getElementById('selectedArtistWork').innerHTML = `
    <img src="http://localhost:3000/static/images/artist/romanesque-1.jpg" class="img-fluid">
    `
    document.getElementById('selectedArtistWorkName').innerHTML = `
    Apse of Sant Climent, Taüll
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
    document.getElementById('selectedPeriodWork').innerHTML = `
    <img src="${periodImageLink}" class="img-fluid">
    `
    document.getElementById('selectedPeriodWorkName').innerHTML = `
    ${periodImageName}
    `
    updateArtistInfo('one')
}

async function getPeriodInfo (period) {
    const response = await fetch('http://localhost:3000/periods')
    const data = await response.json()
    const linkData = await getArtLinks()
    description = data[period][0].keyinfo
    periodImageName = linkData[period][0].periodWork[0].name
    periodImageLink = linkData[period][0].periodWork[0].link
    artistOne = data[period][0].keyartists[0].name
    artistOneInfo = data[period][0].keyartists[0].info
    artistOneImageName = linkData[period][0].artistWork[0].name
    artistOneImageLink = linkData[period][0].artistWork[0].link
    artistTwo = data[period][0].keyartists[1].name
    artistTwoInfo = data[period][0].keyartists[1].info
    artistTwoImageName = linkData[period][0].artistWork[1].name
    artistTwoImageLink = linkData[period][0].artistWork[1].link
    artistThree = data[period][0].keyartists[2].name
    artistThreeInfo = data[period][0].keyartists[2].info
    artistThreeImageName = linkData[period][0].artistWork[2].name
    artistThreeImageLink = linkData[period][0].artistWork[2].link
    return {description, periodImageLink, periodImageLink, artistOne, artistTwo, artistThree, artistOneInfo, artistTwoInfo, artistThreeInfo, artistOneImageName, artistOneImageLink, artistTwoImageName, artistTwoImageLink, artistThreeImageName, artistThreeImageLink}
}

function updateArtistInfo (artistIndex) {
    if (artistIndex == "one") {
        document.getElementById('selectedArtistName').innerHTML = `
        ${artistOne}
        `
        document.getElementById('selectedArtistInfo').innerHTML = `
        ${artistOneInfo}
        `
        document.getElementById('selectedArtistWork').innerHTML = `
        <img src="${artistOneImageLink}" class="img-fluid">
        `
        document.getElementById('selectedArtistWorkName').innerHTML = `
        ${artistOneImageName}
        `;
    }
    if (artistIndex == "two") {
        document.getElementById('selectedArtistName').innerHTML = `
        ${artistTwo}
        `
        document.getElementById('selectedArtistInfo').innerHTML = `
        ${artistTwoInfo}
        `
        document.getElementById('selectedArtistWork').innerHTML = `
        <img src="${artistTwoImageLink}" class="img-fluid">
        `
        document.getElementById('selectedArtistWorkName').innerHTML = `
        ${artistTwoImageName}
        `;
    }
    if (artistIndex == "three") {
        document.getElementById('selectedArtistName').innerHTML = `
        ${artistThree}
        `
        document.getElementById('selectedArtistInfo').innerHTML = `
        ${artistThreeInfo}
        `
        document.getElementById('selectedArtistWork').innerHTML = `
        <img src="${artistThreeImageLink}" class="img-fluid">
        `
        document.getElementById('selectedArtistWorkName').innerHTML = `
        ${artistThreeImageName}
        `;
    }
}

async function romanButtonInitalise (data) {
    const period = 'Romanesque'
    const linkData = await getArtLinks()
    artistOne = data[period][0].keyartists[0].name
    artistOneInfo = data[period][0].keyartists[0].info
    artistTwo = data[period][0].keyartists[1].name
    artistTwoInfo = data[period][0].keyartists[1].info
    artistThree = data[period][0].keyartists[2].name
    artistThreeInfo = data[period][0].keyartists[2].info
    artistOneImageName = linkData[period][0].artistWork[0].name
    artistOneImageLink = linkData[period][0].artistWork[0].link
    artistTwoImageName = linkData[period][0].artistWork[1].name
    artistTwoImageLink = linkData[period][0].artistWork[1].link
    artistThreeImageName = linkData[period][0].artistWork[2].name
    artistThreeImageLink = linkData[period][0].artistWork[2].link

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
        `
        document.getElementById('selectedArtistWork').innerHTML = `
        <img src="${artistOneImageLink}" class="img-fluid">
        `
        document.getElementById('selectedArtistWorkName').innerHTML = `
        ${artistOneImageName}
        `;
    }
    if (index == "two") {
        document.getElementById('selectedArtistName').innerHTML = `
        ${artistTwo}
        `
        document.getElementById('selectedArtistInfo').innerHTML = `
        ${artistTwoInfo}
        `
        document.getElementById('selectedArtistWork').innerHTML = `
        <img src="${artistTwoImageLink}" class="img-fluid">
        `
        document.getElementById('selectedArtistWorkName').innerHTML = `
        ${artistTwoImageName}
        `;
    }
    if (index == "three") {
        document.getElementById('selectedArtistName').innerHTML = `
        ${artistThree}
        `
        document.getElementById('selectedArtistInfo').innerHTML = `
        ${artistThreeInfo}
        `
        document.getElementById('selectedArtistWork').innerHTML = `
        <img src="${artistThreeImageLink}" class="img-fluid">
        `
        document.getElementById('selectedArtistWorkName').innerHTML = `
        ${artistThreeImageName}
        `;
    }
}

function addUserData (ev) {
    ev.preventDefault()
    let user = {
        userName: document.getElementById('userInputName').value,
        userEmail: document.getElementById('userInputEmail').value,
        userMessage: document.getElementById('userInputText').value
    }
    document.forms[0].reset()
    console.log(user)
    let url = 'http://localhost:3000/submit'
    let req = new XMLHttpRequest
    req.open('POST', url, true)
    req.setRequestHeader('Content-Type',"application/json; charset=UTF-8")
    req.send(JSON.stringify(user))
}

async function getArtLinks () {
    const response = await fetch('http://localhost:3000/artlinks')
    const linkData = await response.json()
    return linkData
}

getPeriods()

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userSubmitBtn').addEventListener('click', addUserData)
})
