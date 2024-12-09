document.addEventListener('DOMContentLoaded', () => {
    const fisicoBtn = document.getElementById('fisicoBtn');
    const juridicoBtn = document.getElementById('juridicoBtn');
    const formFisico = document.getElementById('formFisico');
    const formJuridico = document.getElementById('formJuridico');

    // Exibe o formulário de cliente físico
    fisicoBtn.addEventListener('click', () => {
        formFisico.style.display = 'block';
        formJuridico.style.display = 'none';
    });

    // Exibe o formulário de cliente jurídico
    juridicoBtn.addEventListener('click', () => {
        formJuridico.style.display = 'block';
        formFisico.style.display = 'none';
    });
});
