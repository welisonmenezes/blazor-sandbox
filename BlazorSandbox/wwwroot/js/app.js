﻿RunPickdate = function () {
    if ($('.datepicker').length) {
        $('.datepicker').mask('99/99/9999');
        var pick = $('.datepicker').pickadate({
            monthsFull: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
            monthsShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
            weekdaysFull: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
            weekdaysShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
            today: 'hoje',
            clear: 'limpar',
            close: 'fechar',
            format: 'dd/mm/yyyy',
            formatSubmit: 'yyyy/mm/dd',
            clear: 'limpar',
            selectMonths: true,
            selectYears: 100,
            max: true,
            editable: true,
            onClose: () => {
                document.querySelector('.datepicker').dispatchEvent(new Event('change', { 'bubbles': true }));
            }
        });
    }
}