async function sendToBack(ver) {
    console.log("Процесс начат")
    const toSave = {
        ver: ver,
        instituteName: document.getElementById('instituteName').value,
        departmentName: document.getElementById('departmentName').value,
        practiceName: document.getElementById('practiceName').value,
        orderDate: document.getElementById('orderDate').value,
        orderName: document.getElementById('orderName').value,
        currentDate: document.getElementById('currentDate').value,
        supervisorFN: document.getElementById('supervisorFN').value,
        position: document.getElementById('position').value,
        headOfDFN: document.getElementById('headOfDFN').value,
        supervisorCompanyFN: "",
        practicePlaceAndTime: document.getElementById('practicePlaceAndTime').value,
        courseNum: document.getElementById('courseNum').value,
        groupName: document.getElementById('groupName').value,
        directionName: document.getElementById('directionName').value,
        profileName: document.getElementById('profileName').value,
        fileChooser: document.getElementById('formFile').value,
    }

    if (document.getElementById('supervisorCompanyFN')!=null){
        toSave.supervisorCompanyFN=document.getElementById('supervisorCompanyFN').value;
    }
    if (!(
        toSave.instituteName || toSave.departmentName ||
        toSave.practiceName || toSave.orderDate ||
        toSave.orderName || toSave.currentDate ||
        toSave.supervisorFN || toSave.position ||
        toSave.headOfDFN || toSave.supervisorCompanyFN ||
        toSave.practicePlaceAndTime || toSave.courseNum ||
        toSave.groupName || toSave.directionName ||
        toSave.profileName || toSave.fileChooser
    )) {
        $('#errWindow').modal("show");
    }
    else {

        $('#submitWindow').modal("show");
        console.log(toSave)
        console.log("Процесс начат")

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
            $('#submitWindowText').text("Процесс завершен")
            $('#submitWindowHeader').show();
            $('#spinner').hide();
        } catch (e) {
            $('#submitWindowText').text("Ошибка");
            $('#submitWindowHeader').show();
            $('#spinner').hide();
            console.error("error", e);
        }
    }
    }


