const defaultQuotes = [
    ['The only people who never fail are those who never try.', 'Ilka Chase'],
    ['Failure is just another way to learn how to do something right.', 'Marian Wright Edelman'],
    ['I failed my way to success.', 'Thomas Edison'],
    ['Every failure brings with it the seed of an equivalent success.', 'Napoleon Hill'],
    ['Only those who dare to fail greatly can ever achieve greatly.', 'Robert F. Kennedy'],
    ['Imagination is more important than knowledge.', 'Albert Einstein'],
    ['Do not anticipate trouble or worry about what may never happen. Keep in the sunlight.', 'Benjamin Franklin'],
    ['The art of leadership is saying no, not yes. It is very easy to say yes.', 'Tony Blair'],
    ['To do great things is difficult; but to command great things is more difficult.', 'Friedrich Nietzsche'],
    ['Every artist was first an amateur.', 'Ralph Waldo Emerson'],
    ['There is no happiness except in the realization that we have accomplished something.', 'Henry Ford'],
    ['Life can be pulled by goals just as surely as it can be pushed by drives.', 'Viktor Frankl'],
    ['Success is the child of audacity.', 'Benjamin Disraeli'],
    ['The surest way not to fail is to determine to succeed.', 'Richard Brinsley Sheridan'],
    ['The only medicine for suffering, crime, and all the other woes of mankind, is wisdom.', 'Thomas Huxley']
];

const programmingQuotes = [
    ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 'Martin Fowler'],
    ['You define your own life. Do not let other people write your script.', 'Oprah Winfrey'],
    ['Beware of bugs in the above code; I have only proved it correct, not tried it.', 'Donald E. Knuth'],
    ['Java is to JavaScript what car is to Carpet.', 'Chris Heilmann'],
    ['Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Mondays code.', 'Dan Salomon'],
    ['Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.', 'Antoine de Saint-Exupery'],
    ['Do not worry if it does not work right.  If everything did, you would be out of a job.', 'Moshers Law'],
    ['Should array indices start at 0 or 1?  My compromise of 0.5 was rejected without, I thought, proper consideration.', 'Stan Kelly-Bootle'],
    ['If Java had true garbage collection, most programs would delete themselves upon execution.', 'Robert Sewell'],
    ['Walking on water and developing software from a specification are easy if both are frozen.', 'Edward V Berard'],
    ['There are two ways to write error-free programs; only the third one works.', 'Alan J. Perlis'],
    ['The use of COBOL cripples the mind; its teaching should therefore be regarded as a criminal offense.', 'E.W. Dijkstra'],
    ['In the one and only true way. The object-oriented version of Spaghetti code is, of course,Lasagna code ', 'Benjamin Disraeli'],
    ['In theory, theory and practice are the same. In practice, they are not.', 'Yoggi Berra'],
    ['It is easier to port a shell than a shell script.', 'Larry Wall']
];

const motivationalQuotes = [
    ['Keep your face always toward the sunshine, and shadows will fall behind you.', 'Walt Whitman'],
    ['Experience is the name everyone gives to their mistakes.', 'Oscar Wilde'],
    ['You can be everything. You can be the infinite amount of things that people are.', 'Kesha'],
    ['Not having the best situation, but seeing the best in your situation is the key to happiness.', 'Marie Forleo'],
    ['Believe you can and you are halfway there.', 'Theodore Roosevelt '],
    ['If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.', 'Roald Dahl'],
    ['We generate fears while we sit. We overcome them by action.', 'Dr. Henry Link'],
    ['You are never too old to set another goal or to dream a new dream.', 'C.S. Lewis'],
    ['When we let fear be our master, we cannot be happy and free as a butterfly. But when we choose to trust the journey and embrace love and joy, we are free to fly.', 'Annicken R. Day'],
    ['Perfection is not attainable, but if we chase perfection we can catch excellence.', 'Vince Lombardi'],
    ['A lot of people are afraid to say what they want. That is why they do not get what they want.', 'Madonna'],
    ['The power of imagination makes us infinite.', 'John Muir'],
    ['Never bend your head. Always hold it high. Look the world straight in the eye.', 'Helen Keller'],
    ['The only journey is the one within.', 'Rainer Maria Rilke'],
    ['If my mind can conceive it, if my heart can believe it, then I can achieve it.', 'Muhammad Ali'],
    ['Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.', 'Rabindranath Tagore']
];

const humorQuotes = [
    ['Light travels faster than sound. This is why some people appear bright until you hear them speak.', 'Alan Dundes'],
    ['The difference between stupidity and genius is that genius has its limits', 'Albert Einstein'],
    ['If you think you are too small to make a difference, try sleeping with a mosquito.', 'Dalai Lama'],
    ['A word to the wise ain\'t necessary, it\'s the stupid ones who need advice.', 'Bill Cosby'],
    ['Never miss a good chance to shut up.', 'Will Rogers'],
    ['Life is pleasant. Death is peaceful. It\'s the transition that\'s troublesome.', 'Isaac Asimov'],
    ['If at first you don\'t succeed then skydiving definitely isn\'tfor you.', 'Steven Wright'],
    ['Accept who you are. Unless you\'re a serial killer.', 'Ellen DeGeneres'],
    ['If a book about failures doesn\'t sell, is it a success ?', 'Jerry Seinfeld'],
    ['We are all born mad. Some remain so.', 'Samuel Beckett'],
    ['Laziness is nothing more than the habit of resting before you get tired.', 'Jules Renard'],
    ['We are all here on earth to help others; what on earth the others are here for I don\'t know.', 'W. H. Auden'],
    ['Too much agreement kills a chat.', 'Eldridge Cleaver'],
    ['Comedy is simply a funny way of being serious.', 'Peter Ustinov'],
    ['It\'s always funny until someone gets hurt. Then it\'s just hilarious.', 'Bill Hicks'],
    ['Why do they call it rush hour when nothing moves?', 'Robin Williams']
];

const artQuotes = [
    ['You don\'t take a photograph, you make it.', 'Ansel Adams'],
    ['Culture is the arts elevated to a set of beliefs.', 'Thomas Wolfe'],
    ['Only through art can we emerge from ourselves and know what another person sees.', 'Marcel Proust'],
    ['A picture is a poem without words.', 'Horace'],
    ['Art consists of limitation. The most beautiful part of every picture is the frame.', 'Gilbert K. Chesterton'],
    ['An artist cannot fail; it is a success to be one.', 'Charles Horton Cooley'],
    ['What is art but a way of seeing?', 'Saul Bellow'],
    ['You begin with the possibilities of the material.', 'Robert Rauschenberg'],
    ['Art, in itself, is an attempt to bring order out of chaos.', 'Stephen Sondheim'],
    ['A line is a dot that went for a walk.', 'Paul Klee'],
    ['An empty canvas is a living wonder... far lovelier than certain pictures.', 'Wassily Kandinsky'],
    ['Art is not what you see, but what you make others see.', 'Edgar Degas'],
    ['Art is the only way to run away without leaving home.', 'Twyla Tharp'],
    ['Life beats down and crushes the soul and art reminds you that you have one.', 'Stella Adler'],
    ['The essence of all beautiful art, all great art, is gratitude.', 'Friedrich Nietzsche']
]

window.addEventListener('load', typeofquote('default'))


function typeofquote(type) {
    switch (type) {
        case 'default':
            protoType(defaultQuotes, '#d4e3de', '#581845');
            break;

        case 'programming':
            protoType(programmingQuotes, '#3778c2', '#fff');
            break;

        case 'motivational':
            protoType(motivationalQuotes, '#f4abaa', '#28559a');
            break;

        case 'humor':
            protoType(humorQuotes, '#000', '#f6cf57');
            break;

        case 'art':
            protoType(artQuotes, '#a0d8c1', 'black');
            break;
    }
}

function protoType(type, backgroundColor, textColor) {
    var randomValue = randomValueGenerator(0, type.length);
    document.getElementById("quote-box").innerHTML = type[randomValue][0];
    document.getElementById("quoted-by").innerHTML = type[randomValue][1];

    document.getElementById("background-area").style.background = backgroundColor;
    document.getElementById("background-area").style.color = textColor;
    document.getElementById("quote-box").style.color = textColor;

}

function randomValueGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// document.getElementById("background-area").style.background = "#a0d8c1";