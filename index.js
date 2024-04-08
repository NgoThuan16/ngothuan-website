function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    document.body.appendChild(inputElement);
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    alert("Đã copy STK vào bộ nhớ");
}