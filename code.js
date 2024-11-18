// generowanie faktów

function generateFact() {
    $.getJSON("https://meowfacts.herokuapp.com/", function (data) {
        var fact = data.data[0];
        var factHtml = `
        <div class="fact">
            <p>${fact}</p>
        </div> `;

        $('#facts').append(factHtml);
    });
};

$(document).ready(function () {
    $('#generateFactButton').on('click', function () {
        $('#facts').html('');
        generateFact();
    });
});


generateFact();


// generowanie galerii

function generateGallery() {
    $.getJSON("https://api.thecatapi.com/v1/images/search?limit=6", function (data) {
        for (let i = 0; i < data.length; i++) {
            $('#gallery > div > img:eq(' + i + ')').attr('src', data[i].url);
        }
    });
};


$(document).ready(function () {
    $('#generateGalleryButton').on('click', function () {
        generateGallery()
    });
});


$(document).ready(function () {
    $(document).keydown(function () {
        if (event.key == 'G' || event.key == 'g') {
            $('#facts').html('');
            generateGallery();
            generateFact();
        }
    })
});


generateGallery();



$(document).ready(function () {
    $("#loadPage1").click(function () {
        $("#my-content").load("strona1.html");
        return false
    });
});

$(document).ready(function () {

    $("#loadPage2").click(function () {
        $('#my-content').load("strona");
        $("#my-content").load("strona2.html");
        return false

    });

});

$(document).ready(function () {

    $("#loadPage3").click(function () {
        $('#my-content').load("strona");
        $("#my-content").load("strona3.html");
        return false

    });

});



//kotwica

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});


//dark mode
$(function () {
    $('#darkMode').click(function () {
        $('.toggleDarkMode').toggleClass('darkMode');
        $('#card').toggleClass('bg-dark');
        $('.nav-link').toggleClass('text-body-secondary text-light');
        $('.navbar-brand').toggleClass('text-light');
        $('nav').toggleClass('bg-white bg-black');
        $('#icon').toggleClass('text-white text-black')
        $('.navbar-toggler-icon').toggleClass('text-white')
    });
});
