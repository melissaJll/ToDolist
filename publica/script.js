// script.js

function toggleTarefaStatus(index) {
    var item = document.getElementById('tarefa-' + index);
    var checkbox = item.querySelector('input[type=checkbox]');

    if (checkbox.checked) {
        item.classList.add('tarefa-desativada');
    } else {
        item.classList.remove('tarefa-desativada');
    }
}
