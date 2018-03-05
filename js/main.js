$(function () {

    mix();
    var btnRest = document.querySelector(".btnRest");
    // btnRest.style.opacity = 0;

    $('.block').click(function () {
        if(this.classList.contains('finish')) {  //выход если найдено совпадение
            return false;
        }
        $(this).toggleClass('within-opas');      // показать скрыть цвет

        var colElems = document.querySelectorAll(".within-opas");
        if(colElems.length == 2){
            var colorOne = colElems[0].querySelector("div .within").style.backgroundColor;
            var colorTwo = colElems[1].querySelector("div .within").style.backgroundColor;
            if(colorOne == colorTwo){
                colElems[0].classList.add('finish');
                colElems[1].classList.add('finish');
                $('.block').removeClass('within-opas');
            }
        }
        else if(colElems.length > 2){
            $('.block').removeClass('within-opas');
            $(this).toggleClass('within-opas');
        }

        restFunc();                              // проверка выиграш
    });

// сортировка
    function mix() {
        var colors = ["red","red","blue","blue","green","green","yellow","yellow"];
        colors.sort(compareRandom);
        console.log(colors);
        for (var i = 1; i <= 8; i++){
            document.querySelector(".tiles" + i).firstChild.style.backgroundColor = colors[i-1];
        }
        //перемешивание массива
        function compareRandom() {
            return Math.random() - 0.5;
        }
    };
// кнопка сортировки
    $('.btnSort').click(function () {
        mix();
    });
// кнопка повтора
    $('.btnRest').click(function () {
        $('.block').removeClass('finish');
        $('.block').removeClass('within-opas');
        btnRest.style.opacity = 0;
    });
// проверка все ли поля открыты
    function restFunc() {
        var restart = document.querySelectorAll(".finish");
        console.log(restart.length);
        if(restart.length == 8)
            btnRest.style.opacity = 1;
        else
            btnRest.style.opacity = 0;
    };

});