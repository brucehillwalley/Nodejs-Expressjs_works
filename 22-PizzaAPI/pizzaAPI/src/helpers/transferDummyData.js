"use strict";
/*-------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
/*
    $ npm i axios lodash
*/

const axios = require("axios");
// const lodash = require("lodash");

const User = require("../models/user");
const Pizza = require("../models/pizza");
const Topping = require("../models/topping");
const Order = require("../models/order");
/*-------------------------------------------------------*/
//_ MyLodash Class: I don't use lodash package anymore
class MyLodash {
  constructor() {}
  static sample(arr) {
    if (!arr || !arr.length) {
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  static random(min, max) {
    if (min === undefined || max === undefined) {
      throw new Error("Both min and max values are required.");
    }
    if (min > max) {
      throw new Error("min must be less than or equal to max.");
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

// console.log(MyLodash.random(0,5));
/*-------------------------------------------------------*/


const dummyToppings = [
  "Pepperoni",
  "Sucuk",
  "Pastırma",
  "Ham",
  "Salami",
  "Sausage",
  "Meatball",
  "Lamb",
  "Chicken",
  "Tuna",
  "Mushroom",
  "Onion",
  "Pepper",
  "Tomato",
  "Olive",
  "green",
  "Corn",
  "Peas",
  "Artichoke",
  "Broccoli",
  "Spinach",
  "Eggplant",
  "Pumpkin",
  "Mozzarella",
  "Cheddar",
  "Parmesan",
  "Feta",
  "White_cheese",
  "Kashar_cheese",
  "Gouda",
  "Emmental",
  "Gruyere",
  "Pineapple",
  "Jalapeno",
  "Pistachio",
  "Juniper",
  "Caper",
  "Pickled_mushroom",
  "Olive_oil",
  "Pesto_sauce",
  "Barbecue_sauce",
];
// console.log(MyLodash.sample(dummyToppings));
/*-------------------------------------------------------*/

// Functions to transfer dummy data to the database

//? USERS...........................................................
const transferUsersCollection = async () => {
  const { data } = await axios.get(`https://dummyjson.com/users`);
  const dummyUsers = data.users;

  dummyUsers.forEach(async (user) => {
    await User.create({
      ...user,
      password: user.password + "*123",
    });
  });
  console.log(
    `${dummyUsers.length} users successfully transferred to the database.`
  );
};

//? TOPPINGS.........................................................
const transferToppingsCollection = async (arrayToppings) => {
  arrayToppings.forEach(async (topping) => {
    await Topping.create({
      name: topping,
    });
  });
  console.log(
    `${arrayToppings.length} toppings successfully transferred to the database.`
  );
};

//? PIZZAS...........................................................
const transferPizzasCollection = async () => {
  // Define a base pizza price (adjust as needed)
  const basePrice = 20.0;

  // Function to generate random toppings based on the number of toppings
  async function getRandomToppings(numToppings) {
    const toppings = [];
    for (let i = 0; i < numToppings; i++) {
      const randomIndex = MyLodash.random(0, dummyToppings.length - 1);
      const randomTopping = dummyToppings[randomIndex];

      //  to find Topping ObjectId by name
      const toppingId = await Topping.findOne({ name: randomTopping }).select(
        "_id"
      );
      if (toppingId) {
        toppings.push(toppingId._id);
      } else {
        console.warn(
          `Topping '${randomTopping}' not found in database. Skipping...`
        );
      }
    }
    return toppings;
  }

  const pizzas = [];
  for (let i = 0; i < 20; i++) {
    const name = `Pizza ${i + 1}`;
    const numToppings = MyLodash.random(1, 4); // Random toppings between 1 and 4
    const toppingIds = await getRandomToppings(numToppings);
    const price = basePrice + toppingIds.length * 3.0; // Increase price slightly per topping

    pizzas.push({ name, price, toppingIds });
  }

  // Insert pizzas into the database in batches (optional for performance)
  // collection a 10'ar 10'ar ekleme yapar
  // Pizaları toplu olarak ekleyerek, onları tek tek eklemekle karşılaştırıldığında potansiyel olarak performansı artırabilirsiniz. Bunun nedeni, Mongoose'un her toplu işlem için veritabanına tek bir istek gönderebilmesi ve ağ yükünü azaltmasıdır.
  const insertBatchSize = 10;
  for (let i = 0; i < pizzas.length; i += insertBatchSize) {
    const pizzaBatch = pizzas.slice(
      i,
      Math.min(i + insertBatchSize, pizzas.length)
    ); //Eğer i + insertBatchSize, pizzas.length'dan büyükse,  pizzas.length döndürülerek dizinin boyutunun dışına çıkılmaz.
    await Pizza.insertMany(pizzaBatch);
  }

  console.log(
    `${pizzas.length} pizzas successfully transferred to the database.`
  );
};

//? ORDERS...........................................................
async function transferOrdersCollection() {
  const users = await User.find();
  const pizzas = await Pizza.find();

  for (let i = 0; i < 20; i++) {
    const randomPizza = MyLodash.sample(pizzas);
    await Order.create({
      userId: MyLodash.sample(users)._id,
      pizzaId: randomPizza._id,
      size: MyLodash.sample(["Small", "Medium", "Large", "XLarge"]),
      quantity: MyLodash.random(1, 4),
      price: randomPizza.price,
    });
  }
  console.log(
    `${await Order.find().countDocuments()} orders successfully transferred to the database.`
  );
}
/*-------------------------------------------------------*/

//? DROP DATABASE....................................................
async function cleanCollections() {
  try {
    const { mongoose } = require("../configs/dbConnection");
    await mongoose.connection.dropDatabase();
    console.log("- Database and all data DELETED!");
  } catch (error) {
    console.log("- ERROR: Database and all data NOT DELETED", error);
  }
}
/*-------------------------------------------------------*/

module.exports = async () => {
 
  await cleanCollections();
  try {
    await transferUsersCollection();
    await transferToppingsCollection(dummyToppings);
    await transferPizzasCollection();
    await transferOrdersCollection();
  } catch (error) {
    console.log("- ERROR: Transfer Failed ", error);
  }
};
