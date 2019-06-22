const $provision = $('#provision').text();
const $secure = $('#secure').text();
const $run = $('#run').text();
const $connect = $('#connect').text();

// hide elements on start of page

$('.secure').css("display", "none");
$('.run').css("display", "none");
$('.connect').css("display", "none");
$('.terraform-img').addClass(`terraform-active`);
//handle clicks

$('#provision').on('click', function () {
    console.log($provision)
    $('.provision').css("display", "block");
    $('.secure').css("display", "none");
    $('.run').css("display", "none");
    $('.connect').css("display", "none");

    $('.consul-img').removeClass(`consul-active`);
    $('.vault-img').removeClass(`vault-active`);
    $('.nomad-img').removeClass(`nomad-active`);
    $('.terraform-img').addClass(`terraform-active`);
});

$('#secure').on('click', function () {
    console.log($secure)
    $('.provision').css("display", "none");
    $('.secure').css("display", "block");
    $('.run').css("display", "none");
    $('.connect').css("display", "none");

    $('.consul-img').removeClass(`consul-active`);
    $('.vault-img').addClass(`vault-active`);
    $('.nomad-img').removeClass(`nomad-active`);
    $('.terraform-img').removeClass(`terraform-active`);
});

$('#run').on('click', function () {
    console.log($run)
    $('.provision').css("display", "none");
    $('.secure').css("display", "none");
    $('.run').css("display", "block");
    $('.connect').css("display", "none");

    $('.consul-img').removeClass(`consul-active`);
    $('.vault-img').removeClass(`vault-active`);
    $('.nomad-img').addClass(`nomad-active`);
    $('.terraform-img').removeClass(`terraform-active`);
});

$('#connect').on('click', function () {
    console.log($connect)
    $('.provision').css("display", "none");
    $('.secure').css("display", "none");
    $('.run').css("display", "none");
    $('.connect').css("display", "block");

    $('.consul-img').addClass(`consul-active`);
    $('.vault-img').removeClass(`vault-active`);
    $('.nomad-img').removeClass(`nomad-active`);
    $('.terraform-img').removeClass(`terraform-active`);
});

