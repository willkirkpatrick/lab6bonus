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
               if (test(list[i])) {
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
            // console.log(accumulator);
            //      for (var i = 0; i < list.length; i++) {
            //         if (accumulator == 0) {
            //             accumulator = list[i];
            //             console.log(accumulator);
            //         }
            //         accumulator = iterator(list[i], accumulator);
            //         console.log(accumulator);
            //         return accumulator;
            //     }
                
            console.log(list);
            console.log(iterator);
            console.log(accumulator);
            if (accumulator === undefined) {
                accumulator = list[0];
            }
            
            accumulator = accumulator + list.forEach(iterator(list));
            console.log(accumulator);
            return accumulator; 
        },
		every : function(list, iterator) {
            // console.log(list);
            // console.log(iterator);
        },

		some : function(list, iterator) {},

		contains : function(list, target) {},

		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {},

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




