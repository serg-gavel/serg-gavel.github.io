var startBtn = false,
    errorScreen = false,
    strictBtn = false,
    restartBtn = false,
    // strictMode = false,
    // btnError = false;
    // tempArr = [],
    userArr = [],
    simonArr =[],
    gameLevel = 0,
    loop = 0,
    starting = $('#starting')[0],
    btnSound = $('#sound')[0],
    soundTopLeft = $('#sound1')[0],
    soundTopRight = $('#sound2')[0],
    soundBottomLeft = $('#sound3')[0],
    soundBottomRight = $('#sound4')[0],
    soundError = $('#error')[0],
    topLeftTimer = 0,
    bottomLeftTimer = 0,
    topRightTimer = 0,
    bottomRightTimer = 0;




$(document).ready(function () {

    
    //START BUTTONS
    $('.on-btn').click(function () {
        if (startBtn === false){
            errorScreen = false;
            getRandomIndex();
            // setTimeout(getRandomIndex(),6000);
            btnSound.play();
            if ($(window).width() < 1430) {
                $('.level').text('START').css('font-size','10px').css('padding-top','33px');
            }
            else {
                $('.level').text('START').css('font-size','11px').css('padding-top','41px');
            }
            // setTimeout(function () {
            //     $('.level').text('ON').css('font-size','10px').css('padding-top','33px');
            // },1400);
            $('.upper-lines').css('color','#d50000');
            $('.lower-lines').css('color','#d50000');
            $('.inner-display>p').css('color','#d50000');

            var timer = setInterval(function() {
                starting.play();

                if ($(window).width() < 1430) {
                    smallScreenAdd();
                    // alert('Less than 1430');
                }
                else {
                    bigScreenAdd();
                    // alert('More than 1430');
                }
                clearInterval(timer);
            }, 1000);

            setTimeout(function() {
                if ($(window).width() < 1430) {
                    smallScreenDelete();
                    // alert('Less than 1430');
                }
                else {
                    bigScreenDelete();
                    // alert('More than 1430');
                }

            }, 1600);
            startBtn = true;
            restartBtn = false;
        }
    });
$('.off-btn').click(function () {
    startBtn = false;
    $('.level').text(' ').css('font-size','10px').css('padding-top','33px');
    $('.upper-lines').css('color','rgba(213, 0, 0, 0.24)');
    $('.lower-lines').css('color','rgba(213, 0, 0, 0.24)');
    $('.inner-display>p').css('color','rgba(213, 0, 0, 0.24)');
    btnSound.play();
    gameLevel = 0;
    loop = 0;
    simonArr = [];
    userArr = [];
});
//RESTART & STRICT BUTTONS

$('.restart-btn').click(function () {

    if(startBtn === true){
        btnSound.play();
        if ($(window).width() < 1430) {
            $('.level').text('RESTART').css('font-size','8px').css('padding-top','35px');
        }
        else {
            $('.level').text('RESTART').css('font-size','9px').css('padding-top','42px');
        }
        restartBtn=true;
    }else{
        $('.level').text(' ');
    }
    gameLevel = 0;
});
$('.strict-btn').click(function () {
    if (startBtn === true){
        btnSound.play();
        if ($(window).width() < 1430) {
            $('.level').text('STRICT').css('font-size','10px').css('padding-top','33px');
        }
        else {
            $('.level').text('STRICT').css('font-size','11px').css('padding-top','41px');
        }
        strictBtn = true;
    }else{
        $('.level').text(' ');
    }

});



//ALL BUTTONS
$('.top-left').click(function () {
    if(startBtn === true){
        console.log('top-left');
        soundTopLeft.play();
        userArr.push(1);
        matchArrays(simonArr, userArr);
        console.log(userArr + 'userArr');
        console.log(simonArr + 'simonArr');
    }else{
        console.log('startBtn=false');
    }

});
$('.top-right').click(function () {
    if(startBtn === true){
        console.log('top-right');
        soundTopRight.play();
        userArr.push(2);
        matchArrays(simonArr, userArr);
        console.log(userArr + 'userArr');
        console.log(simonArr + 'simonArr');

    }else{
        console.log('startBtn=false');
    }

});
$('.bottom-left').click(function () {
    if(startBtn === true){
        console.log('bottom-left');
        soundBottomLeft.play();
        userArr.push(3);
        matchArrays(simonArr, userArr);
        console.log(userArr + 'userArr');
        console.log(simonArr + 'simonArr');

    }else{
        console.log('startBtn=false');
    }

});
$('.bottom-right').click(function () {
    if(startBtn === true){
        console.log('bottom-right');
        soundBottomRight.play();
        userArr.push(4);
        matchArrays(simonArr, userArr);
        console.log(userArr + 'userArr');
        console.log(simonArr + 'simonArr');

    }else{
        console.log('startBtn=false');
    }

});



});
///////////OUTSIDE DOCUMENT READY FUNCTIONS//////////////////////////////





// MATCH ARRAYS
function matchArrays(arrOne, arrTwo) {
    if(arrOne.length === arrTwo.length){
        var sameArr = false;
            for (var i=0; i<arrTwo.length; i++){
                if (arrTwo[i] !== arrOne[i]){
                    sameArr = false;
                    onErrorLights();
                    errorScreen = true;
                    gameLevel--;
                    loop = 0;
                    simonArr.pop();
                    userArr = [];
                    getRandomIndex();
                }else{
                    sameArr = true;
                    userArr=[];
                    loop = 0;
                    btnLightsTimer();
                }
            }

        if (sameArr === false){
            console.log('sameArr === false');
        }else{
            getRandomIndex();
            console.log('sameArr === true');
        }
    }

}


//GET RANDOM INDEX ARRAY FUNCTION

function getRandomIndex() {
    setTimeout(function () {
        var numbers = Math.floor(Math.random() * (4 - 1)) + 1;
        gameLevel++;

        console.log(gameLevel + ' level');

        simonArr.push(numbers);
        console.log(numbers + ' numbers');
        btnLightsTimer();
    },1500)
    // $('.level').append(gameLevel);
}


//ADD AND REMOVE CLASSES FUNCTIONS
function smallScreenAdd() {
    $('.top-left').removeClass('top-left').addClass('top-left-active');
    $('.top-right').removeClass('top-right').addClass('top-right-active');
    $('.bottom-left').removeClass('bottom-left').addClass('bottom-left-active');
    $('.bottom-right').removeClass('bottom-right').addClass('bottom-right-active');
}
function smallScreenDelete() {
    $('.top-left-active').removeClass('top-left-active').addClass('top-left');
    $('.top-right-active').removeClass('top-right-active').addClass('top-right');
    $('.bottom-left-active').removeClass('bottom-left-active').addClass('bottom-left');
    $('.bottom-right-active').removeClass('bottom-right-active').addClass('bottom-right');
   if(errorScreen === true){
       if ($(window).width() < 1430) {
           $('.level').text('ERROR').css('font-size','10px').css('padding-top','33px');
       }
       else {
           $('.level').text('ERROR').css('font-size','11px').css('padding-top','41px');
       }
   }else{
       if ($(window).width() < 1430) {
           $('.level').text('ON').css('font-size','10px').css('padding-top','33px');
       }
       else {
           $('.level').text('ON').css('font-size','13px').css('padding-top','39px');
       }
   }
    setTimeout(function () {
        $('.level').text(gameLevel).css('font-size','14px').css('padding-top','29px');
    },1000);
}
function bigScreenAdd() {
    $('.top-left').removeClass('top-left').addClass('top-left-active-big');
    $('.top-right').removeClass('top-right').addClass('top-right-active-big');
    $('.bottom-left').removeClass('bottom-left').addClass('bottom-left-active-big');
    $('.bottom-right').removeClass('bottom-right').addClass('bottom-right-active-big');
}
function bigScreenDelete() {
    $('.top-left-active-big').removeClass('top-left-active-big').addClass('top-left');
    $('.top-right-active-big').removeClass('top-right-active-big').addClass('top-right');
    $('.bottom-left-active-big').removeClass('bottom-left-active-big').addClass('bottom-left');
    $('.bottom-right-active-big').removeClass('bottom-right-active-big').addClass('bottom-right');
    if(errorScreen === true){
        if ($(window).width() < 1430) {
            $('.level').text('ERROR').css('font-size','10px').css('padding-top','33px');
        }
        else {
            $('.level').text('ERROR').css('font-size','11px').css('padding-top','41px');
        }
    }else{
        if ($(window).width() < 1430) {
            $('.level').text('ON').css('font-size','10px').css('padding-top','33px');
        }
        else {
            $('.level').text('ON').css('font-size','13px').css('padding-top','39px');
        }
    }
    setTimeout(function () {
        if ($(window).width() < 1430) {
            $('.level').text(gameLevel).css('font-size','15px').css('padding-top','28px');
        }
        else {
            $('.level').text(gameLevel).css('font-size','18px').css('padding-top','38px').css('margin-left', '-5px');
        }
    },1000);
}

//LIGHT BUTTONS FUNC

function btnLights(num) {
    if(num === 1){
        soundTopLeft.play();
        if ($(window).width() < 1430) {
            $('.top-left').removeClass('top-left').addClass('top-left-active');
        }
        else {
            $('.top-left').removeClass('top-left').addClass('top-left-active-big');
        }
        topLeftTimer = setInterval(
            function(){
                if ($(window).width() < 1430) {
                    $('.top-left-active').removeClass('top-left-active').addClass('top-left');
                }
                else {
                    $('.top-left-active-big').removeClass('top-left-active-big').addClass('top-left');
                }
                clearInterval(topLeftTimer);
                },800);
    }
    if(num === 2){
        soundTopRight.play();
        if ($(window).width() < 1430) {
            $('.top-right').removeClass('top-right').addClass('top-right-active');
        }
        else {
            $('.top-right').removeClass('top-right').addClass('top-right-active-big');
        }
        topRightTimer = setInterval(
            function(){
                if ($(window).width() < 1430) {
                    $('.top-right-active').removeClass('top-right-active').addClass('top-right');
                }
                else {
                    $('.top-right-active-big').removeClass('top-right-active-big').addClass('top-right');
                }
                clearInterval(topRightTimer);
            },800);
    }
    if(num === 3){
        soundBottomLeft.play();
        if ($(window).width() < 1430) {
            $('.bottom-left').removeClass('bottom-left').addClass('bottom-left-active');
        }
        else {
            $('.bottom-left').removeClass('bottom-left').addClass('bottom-left-active-big');
        }
        bottomLeftTimer = setInterval(
            function(){
                if ($(window).width() < 1430) {
                    $('.bottom-left-active').removeClass('bottom-left-active').addClass('bottom-left');
                }
                else {
                    $('.bottom-left-active-big').removeClass('bottom-left-active-big').addClass('bottom-left');
                }
                clearInterval(bottomLeftTimer);
            },800);
    }
    if(num === 4){
        soundBottomRight.play();
        if ($(window).width() < 1430) {
            $('.bottom-left').removeClass('bottom-left').addClass('bottom-left-active');
        }
        else {
            $('.bottom-left').removeClass('bottom-left').addClass('bottom-left-active-big');
        }
        bottomRightTimer = setInterval(
            function(){
                if ($(window).width() < 1430) {
                    $('.bottom-left-active').removeClass('bottom-left-active').addClass('bottom-left');
                }
                else {
                    $('.bottom-left-active-big').removeClass('bottom-left-active-big').addClass('bottom-left');
                }
                clearInterval(bottomRightTimer);
            },800);
    }
}
//LIGHTING TIMER BUTTONS BLINK

function btnLightsTimer() {
    console.log(loop+" loop HERE"+gameLevel+" --game level" );
    if(gameLevel === 1){
        console.log('gameLevel === 1');
    }else{
        $('.level').text(gameLevel);
    }
    // gameLevel++;
    // btnLightsTimer();
    setTimeout(function(){
        console.log('------------------------------------------------------------------------------------------');
        btnLights(simonArr[loop]);
        loop++;
        if (loop<=simonArr.length) setTimeout(btnLightsTimer(),900);
    },2200);
    // btnLightsTimer();
}

function onErrorLights() {
    var timer = setInterval(function() {
        soundError.play();

        if ($(window).width() < 1430) {
            smallScreenAdd();
            // alert('Less than 1430');
        }
        else {
            bigScreenAdd();
            // alert('More than 1430');
        }
        clearInterval(timer);
    }, 300);

    setTimeout(function() {
        if ($(window).width() < 1430) {
            smallScreenDelete();
            // alert('Less than 1430');
        }
        else {
            bigScreenDelete();
            // alert('More than 1430');
        }

    }, 800);

    // btnLightsTimer();
}