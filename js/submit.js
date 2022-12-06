async function forDepartment(){
    $('.forCompany').hide()
}
async function forCompany(){
    $('.forCompany').show()
}
async function sendToBack() {
    console.log("Процесс начат")
    const toSave = {
        instituteName: document.getElementById('instituteName').value,
        departmentName: document.getElementById('departmentName').value,
        practiceName: document.getElementById('practiceName').value,
        orderDate: document.getElementById('orderDate').value,
        orderName: document.getElementById('orderName').value,
        currentDate: document.getElementById('currentDate').value,
        supervisorFN: document.getElementById('supervisorFN').value,
        supervisorDegree: document.getElementById('supervisorDegree').value,
        supervisorTitle: document.getElementById('supervisorTitle').value,
        studentPosition: document.getElementById('studentPosition').value,
        supervisorCompanyPosition:"null",
        headOfDFN: document.getElementById('headOfDFN').value,
        headOfDDegree: document.getElementById('headOfDDegree').value,
        headOfDTitle: document.getElementById('headOfDTitle').value,
        supervisorCompanyFN: "null",
        practicePlaceAndTime: document.getElementById('practicePlaceAndTime').value,
        courseNum: document.getElementById('courseNum').value,
        groupName: document.getElementById('groupName').value,
        directionName: document.getElementById('directionName').value,
        profileName: document.getElementById('profileName').value,
        fileChooser: document.getElementById('formFile').value,
    }

    if ($('.forCompany').is(":visible")){
        toSave.supervisorCompanyFN=document.getElementById('supervisorCompanyFN').value;
        toSave.supervisorCompanyPosition=document.getElementById('supervisorCompanyPosition').value;
    }
    if ((
        !toSave.instituteName || !toSave.departmentName ||
        !toSave.practiceName || !toSave.orderDate ||
        !toSave.orderName || !toSave.currentDate ||
        !toSave.studentPosition ||
        !toSave.supervisorFN || !toSave.supervisorTitle || !toSave.supervisorDegree ||
        !toSave.headOfDFN ||   !toSave.headOfDTitle ||  !toSave.headOfDDegree ||
        !toSave.supervisorCompanyFN || !toSave.supervisorCompanyPosition ||
        !toSave.practicePlaceAndTime || !toSave.courseNum ||
        !toSave.groupName || !toSave.directionName ||
        !toSave.profileName || !toSave.fileChooser))
    {
        if (toSave.groupName==="SWAG"){
            $('#submitWindowText').text("TheJadeRabbit, NarkoLord, tesinitsyn, Ferr");
            $('#spinner').hide();
            $('#submitWindowHeader').show();
            $('#submitWindow').modal("show");
        }else {
            console.log(toSave)
            $('#submitWindowText').text("Заполнены не все поля");
            $('#spinner').hide();
            $('#submitWindowHeader').show();
            $('#submitWindow').modal("show");
        }
    }
    else {
        $('#submitWindowText').text("Процесс начат")
        $('#submitWindowHeader').hide();
        $('#spinner').show();
        $('#submitWindow').modal("show");
        const url = "http://localhost:8080/api/test"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(toSave)
        })
        if (response.ok) {
            $('#submitWindowText').text("Процесс завершен")
            $('#spinner').hide();
            $('#submitWindowHeader').show();
        } else {
            console.log(toSave)
            $('#submitWindowText').text("Ошибка");
            $('#spinner').hide();
            $('#submitWindowHeader').show();
        }
    }
}