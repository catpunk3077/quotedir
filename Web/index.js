let about = document.querySelector('.about');
let random = document.querySelector('.random');
let q = document.getElementById('q');

$.getJSON('./data/quotes.json', function(data){
    var index = Math.floor(Math.random()*data.quotes.length);
    q.innerHTML = "<h1>" + data.quotes[index].quote + "</h1>" +"<p>" + data.quotes[index].author + "</p>";
});

about.addEventListener('click', function()
{
    q.innerHTML = "<h1>Howdy Everyone!!</h1> <br> <h2>This Website just load random quotes thing. Thank for visting.</h2> <br> <h2>FOAMMY97</h2>";
});

random.addEventListener('click', function()
{
    $.getJSON('./data/quotes.json', function(data){
    var index = Math.floor(Math.random()*data.quotes.length);
    q.innerHTML = "<h1>" + data.quotes[index].quote + "</h1>" +"<p>" + data.quotes[index].author + "</p>";
    });
});
