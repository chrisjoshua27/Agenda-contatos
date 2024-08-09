const form = document.getElementById('formularioContato');
const tableBody = document.getElementById('corpoContato');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('nome').value;
    const phone = document.getElementById('celular').value;

    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);
    
    nameCell.textContent = name;
    phoneCell.textContent = phone;

    form.reset();
});
