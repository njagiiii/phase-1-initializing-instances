// Write your code here
  class Breakfast{
    constructor(food,drink){
        this.food = food,
        this.drink = drink
    }
  }

  const food = new Breakfast('eggs');
  const drink = new Breakfast('juice');

  class Lunch{
    constructor(salad,soup,drink){
        this.salad = salad,
        this.soup =soup,
        this.drink =drink
    }
  }
  const salad =new Lunch ('side salad')
  const soup =new Lunch ('broccoli cheddar soup')
  const Drink =new Lunch ('iced tea')
  
  class Dinner{
    #dessert;
    constructor(salad,soup,entree,dessert){
        this.#dessert = dessert,
        this.salad = salad,
        this.soup =soup,
        this.entree = entree
       
    }
  };

  const Salad = new Dinner ('balsamic salad');
  const Soup = new Dinner ('consomme');
  const Entree = new Dinner ('filet mignon');
  const Dessert= new Dinner ('cheesecake');
  
  