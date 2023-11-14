$(document).ready(function () {
    //---------Параметры---------//

    //---------Tooltips---------//
    //Цвет подсказки
    let tooltipColor = '#e74c3c';
    //Позиция подсказки (справа/слева)
    let tooltipPosition = 'left';
    //Имя
    let tooltipName = "";
    //Телефон
    let tooltipPhone = "+213XXXXXXXXX";

    //---------Phone mask---------//
    // Код страны
    let phoneCode = '+213';
    // Максимальное количество цифр в номере (без учёта +)
    let MaxLengthPhoneNumber = 18;


    // logic tooltips
    let tooltipStyle = '<style>.input-group{position:relative; margin: auto; max-width: 300px;}.input-group input{width:100%;box-sizing:border-box;text-align: right;}.input-group:before{z-index:99;content:attr(data-content)"";position:absolute;top:-15px;' + tooltipPosition + ':0;background:' + tooltipColor + ';color:#fff;border-radius:5px;padding:3px 5px;font-family: Arial;font-size: 14px}.tooltip-hide.input-group:before{display: none;}</style>';
    $(document).ready(function () {
        $(document.body).append(tooltipStyle);
        $('.input-group').click(function () {
            let $input = $(this).find('input[name]');
            let currentInput = $input.attr('name');
            switch (currentInput) {
                case 'name':
                    $(this).attr('data-content', tooltipName);
                    break
                case 'phone':
                    $(this).attr('data-content', tooltipPhone);
                    $input.addClass('only-phone');
                    $(this).on("keydown", function (t) {
                        46 == t.keyCode || 8 == t.keyCode || 9 == t.keyCode || 27 == t.keyCode || 187 == t.keyCode || 65 == t.keyCode && !0 === t.ctrlKey || 35 <= t.keyCode && t.keyCode <= 39 || (t.keyCode < 48 || 57 < t.keyCode) && (t.keyCode < 96 || 105 < t.keyCode) && t.preventDefault()
                    });
                    break
            }
            $(this).removeClass('tooltip-hide');
        })
    });


    // logic mask
    let mask = {
        phoneInputs: $('input[name="phone"]'),

        init: function () {
            $(this.phoneInputs).attr("maxlength", (MaxLengthPhoneNumber + 1));

            if (this.phoneInputs) {
                $(this.phoneInputs).attr('pattern', '(\\+)[0-9]{5,18}');
                $(this.phoneInputs).on('focusin', function () {
                    let code = phoneCode;
                    this.value = !(this.value.length > code.length) ? code : this.value;
                });
                $(this.phoneInputs).on('input', function () {
                    let code = phoneCode;
                    this.value.indexOf(code) && (this.value = code);
                });
            }
        },
    };
    mask.init();
});
