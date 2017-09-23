let getBunch = function()
{    
    let bunch = [];
    let add_flower = function (type, number) {
      if (type.decorativeness){
        let added = false;
        bunch.map(function(elem){
           if (elem.name == type.name){
               elem.count += number;
               added = true;
        }
    });
        
        if (added == false){
            type.count = number;
            bunch.push(type)
            console.log(type.count + " " + type.name + "s added to the bunch.")
        }
        return bunch;
        
    }
     else {
         console.log("Can not add " + type.name + " to the bunch.")
     }

    };

    let get_bunch_info = function(){
        let info = "Mixed bunch of ";
    
       bunch.map(function(elem){
        info += elem.count + " " + elem.name + "s, ";
        return info;
        });
        info = info.substring(0, info.length - 2) + ".";
        console.log(info);
    };

    let get_bunch_price = function(){
        let price = 0;
    
       bunch.map(function(elem){
       
         price += elem.count * elem.price * 100 / 100;
         return price;
        });
       
        console.log("This bunch costs " + price + "$.");
    };
    let get_bunch = function () {
        return bunch;

    };

    return {add_flower: add_flower,
        // sub_flower: sub_flower,
        get_bunch: get_bunch,
        get_bunch_info: get_bunch_info,
        get_bunch_price: get_bunch_price
    };
}
let mixedBunch = getBunch();

module.exports.mixedBunch = mixedBunch;