async function createForDepartment(ver) {
    console.log(ver + "\n" + "createForDepartment")
    const toSave = {
        ver: ver,
        instituteName: document.getElementById('exampleDataList').value,
        departmentName: document.getElementById('departmentName').value,
        practiceName: document.getElementById('practiceName').value,
        orderDate: document.getElementById('orderDate').value,
        orderName: document.getElementById('orderName').value,
        currentDate: document.getElementById('currentDate').value,
        supervisorFN: document.getElementById('supervisorFN').value,
        position: document.getElementById('position').value,
        headOfDFN: document.getElementById('headOfDFN').value,
        // supervisorCompanyFN: document.getElementById('supervisorCompanyFN').value,
        practicePlaceAndTime: document.getElementById('practicePlaceAndTime').value,
        courseNum: document.getElementById('courseNum').value,
        groupName: document.getElementById('groupName').value,
        directionName: document.getElementById('directionName').value,
        profileName: document.getElementById('profileName').value,
        fileChooser: document.getElementById('fileChooser').value
    }
    console.log(toSave)
    await sendToBack(toSave)
}
async function createForCompany(ver) {
    console.log(ver + "createForCompany")
    const toSave = {
        ver: ver,
        instituteName: document.getElementById('exampleDataList').value,
        departmentName: document.getElementById('departmentName').value,
        practiceName: document.getElementById('practiceName').value,
        orderDate: document.getElementById('orderDate').value,
        orderName: document.getElementById('orderName').value,
        currentDate: document.getElementById('currentDate').value,
        supervisorFN: document.getElementById('supervisorFN').value,
        position: document.getElementById('position').value,
        headOfDFN: document.getElementById('headOfDFN').value,
        supervisorCompanyFN: document.getElementById('supervisorCompanyFN').value,
        practicePlaceAndTime: document.getElementById('practicePlaceAndTime').value,
        courseNum: document.getElementById('courseNum').value,
        groupName: document.getElementById('groupName').value,
        directionName: document.getElementById('directionName').value,
        profileName: document.getElementById('profileName').value,
        fileChooser: document.getElementById('fileChooser').value
    }
    console.log(toSave)
    await sendToBack(toSave)
}

async function sendToBack(toSave) {
    const url = "http://localhost:8080/"
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(toSave)
        });
    } catch (e) {
        console.error("error", e);
    }
}

