let mixedBunch = require('./MixedBunch.js').mixedBunch;
let inherit = require('./inherit.js').inherit;
// Pattern 5
// This module creares two types of flowers: bunch flowers and non-bunch flowers

// Parent Flower Constructor
function Flower (name, price) {}
Flower.prototype.name = 'unknown';
Flower.prototype.price = 'unknown';
Flower.prototype.decorativeness = false;


// Child Constructor - Bunch flowers
function F_type() {}
inherit(F_type, Flower);
F_type.prototype.decorativeness = true;
// Special method for simple bunches
F_type.prototype.getSimpleBunch = function (number){
        console.log("Bunch of " + number + " " + this.name + "s :: Price = " + this.price * number + " $");
            }

// Child Constructor - Non-Bunch flowers
function P_type() {}
inherit(P_type, Flower);



// Flowers for the Flower shop
let r_rose = new F_type();
r_rose.name = "red rose";
r_rose.price = 2;

let w_tulip = new F_type();
w_tulip.name = "white tulip";
w_tulip.price = 1.34;

let cactus = new P_type();
cactus.name = "cactus";
cactus.price = 35.51;



// Examples to execute
mixedBunch.add_flower(r_rose, 2);
mixedBunch.add_flower(r_rose, 2);
mixedBunch.add_flower(w_tulip, 5);
mixedBunch.add_flower(cactus, 5);
mixedBunch.get_bunch();
mixedBunch.get_bunch_info();
mixedBunch.get_bunch_price();
mixedBunch.get_bunch();
r_rose.getSimpleBunch(30);
