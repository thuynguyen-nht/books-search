const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = [
    {
        authors: "Suzanne Collins",
        description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
        image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
        title: "The Hunger Games",
        date: new Date(Date.now())
    },
    {
        authors: "Robin DiAngelo",
        description: "In this “vital, necessary, and beautiful book” (Michael Eric Dyson), antiracist educator Robin DiAngelo deftly illuminates the phenomenon of white fragility and “allows us to understand racism as a practice not restricted to ‘bad people’ (Claudia Rankine). Referring to the defensive moves that white people make when challenged racially, white fragility is characterized by emotions such as anger, fear, and guilt, and by behaviors including argumentation and silence. These behaviors, in turn, function to reinstate white racial equilibrium and prevent any meaningful cross-racial dialogue. In this in-depth exploration, DiAngelo examines how white fragility develops, how it protects racial inequality, and what we can do to engage more constructively.",
        image: "https://images-na.ssl-images-amazon.com/images/I/817VE4lKPzL.jpg",
        link: "https://www.google.com/books/edition/White_Fragility/abZdDwAAQBAJ?hl=en&gbpv=0",
        title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
        date: new Date(Date.now())
    },
    {
        authors: "Ann Whitford Paul",
        description: "If animals kissed good night like we do...how would they do it? Giraffe and his calf would stretch their necks high, Wolf and his pup would kiss and then HOWL, and Sloth and her baby would move sooooo sloooowwwww. And across the animal kingdom, every creature would share love in a unique way.",
        image: "https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._SY498_BO1,204,203,200_.jpg",
        link: "https://www.google.com/books/edition/If_Animals_Kissed_Good_Night/5yUEAwAAQBAJ?hl=en&gbpv=0",
        title: "If Animals Kissed Good Night",
        date: new Date(Date.now())
    },
    {
        authors: "Michael Todd",
        description: "A candid, inspiring guide to finding lasting love and sustaining a healthy relationship by getting real about your goals—based on the viral, multi-million-view sermon series about dating, marriage, and sex",
        image: "https://images-na.ssl-images-amazon.com/images/I/41GMfml84gL._SX331_BO1,204,203,200_.jpg",
        link: "https://www.google.com/books/edition/Relationship_Goals/_pyyDwAAQBAJ?hl=en&gbpv=0",
        title: "Relationship Goals: How to Win at Dating, Marriage, and Sex",
        date: new Date(Date.now())
    },
    {
        authors: "Tara Westover",
        description: "An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University",
        image: "https://images-na.ssl-images-amazon.com/images/I/41+aN7ZbS9L._SX327_BO1,204,203,200_.jpg",
        link: "https://www.google.com/books/edition/Educated/2ObWDgAAQBAJ?hl=en&gbpv=0",
        title: "Educated: A Memoir",
        date: new Date(Date.now())
    },
    {
        authors: "Paulo Coelho",
        description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams.",
        image: "https://images-na.ssl-images-amazon.com/images/I/516c6gUQLaL._SX329_BO1,204,203,200_.jpg",
        link: "https://www.google.com/books/edition/The_Alchemist_25th_Anniversary/0asInwEACAAJ?hl=en",
        title: "The Alchemist, 25th Anniversary: A Fable About Following Your Dream",
        date: new Date(Date.now())
    },

];

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
