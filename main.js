
var quotes =[
    {quote : " 'The best revenge is massive success.' ",
    author : "--Frank Sinatra"
},
    {quote : " 'It's not what happens to you, but how you react to it that matters.' ",
    author : "--Epictetus"
},
    {quote : " 'You miss 100% of the shots you don't take.' ",
    author : "--Wayne Gretzy"
},
    {quote : " 'Resentment is like drinking poison and waiting for your enemies to die.' ",
    author : "--Nelson Mandela"
},
    {quote : " 'Do not take life too seriously. You will not get out alive.' ",
    author : "--Elbert Hubbard"
},
    {quote : " 'I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.' ",
    author : "--Maya Angelou"
},
    {quote : " 'A friend is someone who knows all about you and still loves you.' ",
    author : "--Elbert Hubbard"
},
    {quote : " 'To live is the rarest thing in the world. Most people exist, that is all.' ",
    author : "--Oscar Wilde"
},
    {quote : " 'Live as if you were to die tomorrow. Learn as if you were to live forever.' ",
    author : "--Mahatma Gandhi"
},
    {quote : " 'We accept the love we think we deserve.' ",
    author : "--Stephen Chbosky"
} ]

function viewQuote (){

    var num = Math.floor(Math.random() * quotes.length)
    console.log(num)

    document.getElementById("quote").innerHTML = quotes[num].quote;
    document.getElementById("author").innerHTML = quotes[num].author;

}
