window.addEventListener("load", () => {
    let form = document.getElementById("form-file");
    console.log(form);
    form.addEventListener('submit', upload, false);

    let file = document.getElementById("file");
    file.addEventListener("change", () => {
        let submit = document.getElementById("submit");
        submit.style.visibility = "visible";
    }, true);
}, true);


function upload(e) {
    e.stopPropagation();
    e.preventDefault();


    let
        progress = document.querySelector('progress'),
        formData = new FormData(),
        file     = e.target.elements[0].files[0],
        ajax     = new XMLHttpRequest();

    ajax.upload.onprogress = (e) => {
        let percent = e.loaded / e.total;
        console.log(e.loaded, e.total);
        progress.style.visibility = "visible";
        progress.setAttribute('max', event.total);
        progress.value = event.loaded;
    }

    ajax.onload = ajax.onerror = function() {
        console.log("kek");
        let newRow = document.createElement("div");
        newRow.className = "view-row";
        console.log(file);
        let viewField = document.createElement("div");
        viewField.className = "view-field";
        viewField.innerHTML = file.name;
        let viewContent = document.createElement("div");
        viewContent.className = "view-content";
        let fileDel = document.createElement("a");
        fileDel.className = "file-del";
        fileDel.href = "/file/delete?filename=" + file.name + "&path=/teacher";
        let fa = document.createElement("i");
        viewContent.appendChild(fileDel);
        newRow.appendChild(viewField);
        newRow.appendChild(viewContent);

        let grid = document.getElementsByClassName("file-wrap")[0];
        console.log();
        grid.appendChild(newRow);

        console.log(this.status);
        if (this.status == 200) {

        } else {

        }
    }

    formData.append('file', file);
    formData.append('idExercise', id);
    ajax.open("POST", "/file/teacher");
    ajax.setRequestHeader('Accept', 'application/json, text/javascript, */*, q=0.01');
    ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    ajax.send(formData);

}
