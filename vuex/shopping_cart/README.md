# Fullstack Vue

## Vuex - Shopping Cart

1. Ensure you have `npm` installed.

2. Install the dependencies

````
npm install
````

3. Boot the app

````
npm run start
````

The Node and Webpack servers are now running - watch the console output for instructions. Your entire application is now available at [http://localhost:8080/](http://localhost:8080/)

4. The final result
![Image text](https://raw.githubusercontent.com/BobJackson/vue-learning/master/vuex/shopping_cart/shopping_cart.png)

5. ES6 Notes  
(1) Destructuring is a feature enabled by ES6 which allows us to pull out a specific key into
a variable from a JavaScript object.
For example, take the following functionality in ES5. First, let’s assume we have an object
like this:  
var obj = { a: 'A', func: function() {} }  
To get access to the func part of the object, we can create a variable:
````
function(obj) {
    var func = obj.func
}
````
In ES6, we can destructure the obj object using the following line:  
````
function({ func }) {}
````
(2)We’re using the object spread operator (i.e. the three dots) to directly ‘copy’ the getters into the
   components computed property. This helper function allows us to define local computed properties
   above mapGetters if we wish to do so.
````
computed: {
    ...mapGetters([
        // map this.productItems to this.$store.getters.productItems
        'productItems'
    ])
}
````
 If we wanted to reference only mapGetters, computed can also
 be written as:
````
computed: mapGetters({
    productItems: 'productItems'
})
````