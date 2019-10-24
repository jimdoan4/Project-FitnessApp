require("dotenv").config();
const mongoose = require("mongoose");
//Requiring Models
const Exercise = require('../models/Exercise.js');
const Recipe = require('../models/Recipe.js');

//Exercise information to seed to MongoDB
const pushUp = new Exercise({
     fitnessImg: "https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/styles/full_node_image_1090x614/public/media/1109-feet-elevated-pushup.jpg?itok=urXPS8Lq",
     type: "CHEST",
     equipment: "No Equipment",
     difficulty: "Intermediate",
     instruction: "Starting Position: Kneel on an exercise mat or floor and bring your feet together behind you."
});

const back = new Exercise({
    fitnessImg: "http://c2h4.net/wp-content/uploads/2019/06/onlyfitness_cardio_1706x1280Px_43.jpg",
    type: "BACK",
    equipment: "No Equipment",
    difficulty: "Intermediate",
    instruction: "Starting Position: Kneel on an exercise mat or floor and bring your feet together behind you."
});


const shoulders = new Exercise({
    fitnessImg: "https://www.onlyfitness.ch/-/media/OnlyFitness/Images/Home/1706x1280-4_3/onlyfitness_functional_1706x1280Px_43.jpg?mw=1280&crop=1&la=de-CH&hash=49ADFA9F291604CBB62315EDFEC0A74A",
    type: "SHOULDERS",
    equipment: "No Equipment",
    difficulty: "Intermediate",
    instruction: "Starting Position: Kneel on an exercise mat or floor and bring your feet together behind you."
});


const legs = new Exercise({
    fitnessImg: "https://cdn.newsapi.com.au/image/v1/29b133ac13b2dcd80f31916d1ec13837?width=1024",
    type: "LEGS",
    equipment: "No Equipment",
    difficulty: "Intermediate",
    instruction: "Starting Position: Kneel on an exercise mat or floor and bring your feet together behind you."
});


//Recipe information to seed to MongoDB
const bakedChicken = new Recipe({
    recipeImg: "http://www.gimmesomeoven.com/wp-content/uploads/2015/05/Oven-Baked-Chicken-Breast-Recipe-3.jpg",
    ingredient: "4 tablespoons canola oil, divided\
    2 tablespoons lemon juice\
    3 tablespoons Hidden Valley Original Ranch® Seasoning and Salad Dressing Mix, divided\
    1-1/2 teaspoons ground cumin\
    1/2 teaspoon chili powder\
    1/2 teaspoon crushed red pepper flakes, optional",
    recipeDescription: "Give sizzling chicken fajitas a tangy twist by adding ranch dressing mix to the marinade. They have so much flavor, it's almost hard to believe how quickly they come together!",
    cookingTime: "Prep: 20 min. + marinating Cook: 10 min.",
    recipeName: "Ranch Chicken Fajitas"
});

const pineappleChicken = new Recipe({
    recipeImg: "https://www.tasteofhome.com/wp-content/uploads/0001/01/Pineapple-Grilled-Chicken_EXPS_FT19_45180_F_0613_1-696x696.jpg",
    ingredient: "4 boneless skinless chicken breasts, pounded to even thickness and brined in saltwater (*see easy instructions below)",
    recipeDescription: "A trip to Hawaii is easy with this juicy grilled pineapple chicken. Simply give it a quick marinade, fire up the grill and let it sizzle. We love this low-carb recipe! ",
    cookingTime: "Prep: 10 min. + marinating Grill: 10 min.",
    recipeName: "Grilled Pineapple Chicken"
});

const paoChicken = new Recipe({
    recipeImg: "https://www.tasteofhome.com/wp-content/uploads/2019/07/Better-Than-Takeout-Spicy-Peanut-Chicken_EXPS_FT11_116185_F_0611_1-696x696.jpg",
    ingredient: "4 boneless skinless chicken breasts, pounded to even thickness and brined in saltwater (*see easy instructions below)",
    recipeDescription: "My family loves the kung pao chicken from our favorite Chinese restaurant. But in less time than it takes for the delivery guy to arrive, we can be digging into a steaming platter of this copycat recipe!",
    cookingTime: "Prep: 25 min. Cook: 15 min.",
    recipeName: "Kung Pao Chicken"
});

const cornChicken = new Recipe({
    recipeImg: "https://www.tasteofhome.com/wp-content/uploads/0001/01/Chipotle-Chicken-Soup-with-Cornmeal-Dumplings_EXPS_TOHCA19_41103_C03_14_6B_rms-696x696.jpg",
    ingredient: "4 boneless skinless chicken breasts, pounded to even thickness and brined in saltwater (*see easy instructions below)",
    recipeDescription: "I combined two of my favorite soup recipes to come up with this filling soup that has a Tex-Mex flair. The cornmeal dumplings are the perfect finishing touch.",
    cookingTime: "30 Minutes",
    recipeName: "Chipotle Chicken Soup with Cornmeal Dumplings"
});

Recipe.deleteMany({})
    .then(() => bakedChicken.save())
    .then(() => paoChicken.save())
    .then(() => pineappleChicken.save())
    .then(() => cornChicken.save())
    .then(() => console.log("Successful Save"))

Exercise.deleteMany({})
    .then(() => pushUp.save())
    .then(() => legs.save())
    .then(() => back.save())
    .then(() => shoulders.save())
    .then(() => console.log("Successful Save"))
    .then(() => mongoose.connection.close());


 