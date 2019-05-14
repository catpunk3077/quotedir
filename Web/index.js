let about = document.querySelector('.about');
let random = document.querySelector('.random');
let q = document.getElementById('q');

quotes = {
    "quotes":[
        {
            "quote": "You will never find time for anything. If you want time, you must make it.",
            "author": "Charles Brixton"
        },

        {
            "quote": "Life is too important to be taken seriously.",
            "author": "Oscar Wlide"
        },

        {
            "quote": "Life is a question and how we live it is our answer.",
            "author": "Gary Keller"
        },

        {
            "quote": "The mind is everything. What you think you become.",
            "author": "Buddha"
        },

        {
            "quote": "We must use time wisely and forever realize that the time is always ripe to do right.",
            "author":"Nelson Mandela"
        },

        {
            "quote": "Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it you can never get it back.",
            "author": "Harvey Mackay"
        },

        {
            "quote": "If not now, when?",
            "author": "Unknown"
        },

        {
            "quote": "Love yourself enough to work harder.",
            "author": "Unknown"
        },

        {
            "quote": "Self-knowledge is the beginning of self-improvement.",
            "author": "Baltasar Gracian"
        },

        {
            "quote": "I would really love to go to Thailand as so many people have told me how wonderful it is.",
            "author": "Pixie Lott"
        },

        {
            "quote": "If money is your hope for independence you will never have it. The only real security that a man will have in this world is a reserve of knowledge, experience, and ability.",
            "author": "Henry Ford"
        },

        {
            "quote": "Beware of false knowledge; it is more dangerous than ignorance.",
            "author": "George Bernard Shaw"
        },

        {
            "quote": "A people without the knowledge of their past history, origin and culture is like a tree without roots.",
            "author": "Marcus Garvey"
        },

        {
            "quote": "Be kind, for everyone you meet is fighting a battle you know nothing about.",
            "author": "Wendy Mass"
        },

        {
            "quote": "Dreams are like stars. You may never touch them, but if you follow them they will lead you to your destiny.",
            "author": "Liam James"
        },

        {
            "quote": "Logic will get you from A to B. Imagination will take you everywhere.",
            "author": "Albert Einstein"
        },

        {
            "quote": "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
            "author": "Paulo Coelho"
        },

        {
            "quote": "Jealousy... is a mental cancer.",
            "author": "B.C.Forbes"
        },

        {
            "quote": "There is no challenge more challenging than the challenge to improve yourself.",
            "author": "Unknown"
        },

        {
            "quote": "I cries over hundred times to go the sucessed.",
            "author": "Channarong Nopkum"
        },
    ]

}

let index = Math.floor(Math.random()*20);
q.innerHTML = "<h1>" + quotes.quotes[index].quote + "</h1>" +"<p>" + quotes.quotes[index].author + "</p>";

about.addEventListener('click', function()
{
    q.innerHTML = "<h1>Howdy Everyone!!</h1> <br> <h2>This Website just load random quotes thing. Thank for visting.</h2> <br> <h2>FOAMMY97</h2>";
});

random.addEventListener('click', function()
{
    let index = Math.floor(Math.random()*7);
    q.innerHTML = "<h1>" + quotes.quotes[index].quote + "</h1>" +"<p>" + quotes.quotes[index].author + "</p>";
});



