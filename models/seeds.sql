USE beer_db;

INSERT INTO beers
    (style, description)
VALUES
    ("Brown Ale", "Ah, the noble Brown Ale. There's a lot of diversity within the style, but one constant is a strong, malty center. We picked this one for you because you seem to prefer something with just a touch of sweetness, so we hope you'll find the notes of toffee and caramel particularly delightful."),
    ("IPA", "If you find that you're into IPA's, you're not alone. As one of the most popular styles of beer in the United States and worldwide, this fan favorite is known for dominant hops balanced against a fair bit of malty sweetness. We picked this for you because we think you'll enjoy the pleasant bitterness characteristic of the IPA style."),
    ("Pale Ale", "A true staple of American beer styles, the Pale Ale is the foodie's favorite due to its simple flavor profile which lends itself well to pairing with a variety of foods from clams to chili dogs. There's a lot of diversity within the single category, but this extremely drinkable style is characterized by balanced hops and malts with earthy notes like flower and pine. We think you'll like it because you seem to have either a very broad palate or a taste for mild flavors."),
    ("Porter", "Difficult to classify by taste, porters are best described as \"dark\" both in color and flavor. Rich flavors of mocha, licorice, and caramel lend to its malty, sweet profile. It's hard to say much more than that simply because of the sheer diversity within the style, but we recommended it for you because of the smooth drinking experience and mellow characters."),
    ("Stout", "Lovers of richly-flavored, high-gravity (very strong) beers need look no further than Stout. Though technically a class of porter, stout stands apart with its bold flavors and silky mouthfeel. We think you'll enjoy diving into one of our favorite styles because many of them feature notes of coffee, chocolate, and molasses that pair perfectly with the often noticeable sweetness in comparison with other beers."),
    ("American Wheat", "Among of the most approachable and versatile styles stands one of the oldest beers still around today - wheat beer. While the original variants offer notes of banana and clove, the American version omits them due to the type of yeast used in production in favor of a refreshing, slightly hoppier finish. We think you'll like it because it plays nicely with lighter dishes such as seafood and salad."),
    ("German-Style Pilsner", "Perhaps one of the most iconic beers of the modern world, Pilsner stands tall and golden with its hops coming to center-stage without becoming overly bitter. This pale and light-bodied brew makes a refreshing companion in warmer months, and we think you'll enjoy it along with a nice dinner of chicken and shellfish."),
    ("German-Style Bock", "Light carbonation, sweet malty goodness, and a smooth finish... what's not to love? For those who aren't crazy about the hoppy flavor of some other popular brews, the practically ancient Bock style may just be the longest-standing beer to date. We think you'll enjoy the toasty, nutty flavor this German classic brings to the table.");

INSERT INTO questions
    (question)
VALUES
    ("You're at a restaurant and you've been offered a free dessert. What would you most likely choose?"),("Rate how much you agree with the following: I prefer sweet-scented candles to earthy ones like floral or pine"),("Imagine your ideal beer-drinking scene... what's the scene?"),("Rate how much you agree with the following: I prefer to have one or two good drinks than to down several brews in a single sitting."),("Rate how much you agree with the following: I typically would rather have a meal that's hearty and complex than something light and simple.");

    INSERT INTO answers
        (question_id,a1,a2,a3,a4,a5)
    VALUES (1,"Orange Julius","Triple Chocolate Cake","Salted Caramel Cheesecake","Creme Brulee","Are these the only choices?"),
    
    (2,"Absolutely not.", "Not so much...", "I don't really care", "Eh I guess...", "YES."),

    (3,"Cozy winter night", "Cool evening in Autumn", "Scene? Doesn't matter. Give me the beer.", "Perfect Spring weather", "Warm Summer night"),
    
    (4,"It's like you don't know me at all", "I mean... maybe three?", "Depends...", "Sounds about right.", "I will nurse one drink all night long."),
    
    (5,"EVERY TIME", "I usually like a good meal.", "Depends on how I feel.", "I usually eat pretty light.","I don't think that could be more wrong.");
