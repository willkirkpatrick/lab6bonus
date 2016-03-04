var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
            return val;
        },

		// Collections --- Complete Functions Below
		each : function(list, iterator) { 
             if (Array.isArray(list)) { 
                 for (var i = 0; i < list.length; i++) {     
                iterator(list[i], i, list);
                }
                }else { 
               var x;
                for (x in list) {
               iterator(list[x], x, list);
                }
            }
        }, 

		filter : function(list, test) {
            var newArray = []
             for (var i = 0; i < list.length; i++) {
               if (test(list[i]) === true) {
                    newArray.push(list[i]);
               }
            }
            
            return newArray;
        },

		reject : function(list, test) {
             var newArray = []
              for (var i = 0; i < list.length; i++) {
                if (!test(list[i])) {
                    newArray.push(list[i]);
               }
            }
             return newArray;
        },

		map : function(list, iterator) {
            var newArray = [];
            for (var i = 0; i < list.length; i++) {
                 var x = iterator(list[i]);
                newArray.push(x);
            }
            return newArray;
        },

		pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
		},
		reduce : function(list, iterator, accumulator) {
                  for (var i = 0; i < list.length; i++) {
                    if (accumulator === undefined) {
                        accumulator = list[i];
                    }
                    accumulator = iterator(list[i], accumulator);
                 }
                return accumulator;
        },
		every : function(list, iterator) {
           if (iterator === undefined) {
               iterator = this.identity;
           }
            
            for (var i = 0; i < list.length; i++) {
                if (iterator(list[i]) == false) {
                    return false;
                } 
                
            }
            return true;
        },

		some : function(list, iterator) {
            if (iterator === undefined) {
               iterator = this.identity;
           } else {
               
           }
            for (var i = 0; i < list.length; i++) {
                if (iterator(list[i]) == true) {
                    return true;
                } 
             } 
            return false;
        },
		contains : function(list, target) {
              var x;
                for (x in list) {
                    if (list[x] == target) {
                        return true;
                    } 
                }
                return false;
        },

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {
            console.log(array);
            var newArray = [];
            function checkNum(number) {
                return number !== selectElement; 
            }
            while (newArray.length < array.length) {
                var ranNum = Math.floor(Math.random() * array.length);
                var selectElement = array[ranNum];
                console.log(ranNum);
                console.log(selectElement);
                if (newArray.every(checkNum)) {
                    
                    newArray.push(selectElement);
                    console.log(newArray);
                }
            }
            return newArray;
        },

		invoke : function(list, methodName, args) {},

		sortBy : function(list, iterator) {},

		// Objects --- Complete Functions Below
		extend : function(obj) {},

		defaults : function(obj) {},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {},

		indexOf : function(array, target){},

		uniq : function(array) {},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {},

		memoize : function(func) {},

		delay : function(func, wait) {}
	}
})();




