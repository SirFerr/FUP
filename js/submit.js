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
        position: document.getElementById('position').value,
        positionCompany:"",
        headOfDFN: document.getElementById('headOfDFN').value,
        supervisorCompanyFN: "",
        practicePlaceAndTime: document.getElementById('practicePlaceAndTime').value,
        courseNum: document.getElementById('courseNum').value,
        groupName: document.getElementById('groupName').value,
        directionName: document.getElementById('directionName').value,
        profileName: document.getElementById('profileName').value,
        fileChooser: document.getElementById('formFile').value,
    }
    if (toSave.groupName=="SWAG"){
        $('#easterEgg').modal('show')
    }
    if (document.getElementById('supervisorCompanyFN')!=null){
        toSave.supervisorCompanyFN=document.getElementById('supervisorCompanyFN').value;
    }
    if (document.getElementById('positionCompany')!=null){
        toSave.positionCompany=document.getElementById('positionCompany').value;
    }
    else toSave.positionCompany="null"
    if ((
        !toSave.instituteName || !toSave.departmentName ||
        !toSave.practiceName || !toSave.orderDate ||
        !toSave.orderName || !toSave.currentDate ||
        !toSave.supervisorFN || !toSave.position ||
        !toSave.headOfDFN || !toSave.supervisorCompanyFN ||
        !toSave.practicePlaceAndTime || !toSave.courseNum ||
        !toSave.groupName || !toSave.directionName ||
        !toSave.profileName || !toSave.fileChooser ||
    !toSave.positionCompany)) {
        $('#errWindow').modal("show");
    }
    else {
        $('#submitWindowText').text("Процесс начат")
        $('#submitWindowHeader').hide();
        $('#spinner').show();
        $('#submitWindow').modal("show");
        console.log(toSave)
        const url = "http://localhost:8080/api/test"
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(toSave)
            })
            if (response.ok)
            {
                $('#submitWindowText').text("Процесс завершен")
                $('#submitWindowHeader').show();
                $('#spinner').hide();
            }
            else {
                $('#submitWindowText').text("Ошибка");
                $('#submitWindowHeader').show();
                $('#spinner').hide();
            }

        } catch (e) {
            $('#submitWindowText').text("Ошибка");
            $('#submitWindowHeader').show();
            $('#spinner').hide();
            console.error(e);
        }
    }
    }
