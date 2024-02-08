document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-calcular');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const campoA = document.getElementById('campo1');
        const campoB = document.getElementById('campo2');
        const errorMessage = document.querySelector('.error-message');
        const successMessage = document.querySelector('.success-message');

        // Resetando as mensagens de erro e sucesso
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        // Validando se os campos estão preenchidos com números
        if (campoA.value === '' || campoB.value === '') {
            errorMessage.innerText = 'Preencha este campo.';
            errorMessage.style.display = 'block';
            return;
        }

        // Convertendo os valores dos campos para números inteiros
        const numA = parseInt(campoA.value);
        const numB = parseInt(campoB.value);

        // Validando se os campos estão corretos especificamente
        if (numB <= numA) {
            errorMessage.innerText = 'O número do campo 2 deve ser maior que o número do campo 1.';
            errorMessage.style.display = 'block';
            return;
        }

        // Se todas as validações passarem, exibir mensagem de sucesso
        successMessage.innerText = 'Parabéns! Está correto.';
        successMessage.style.display = 'block';
    });
});
