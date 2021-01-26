const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require(`./seedHelpers`);
const Campground = require("../models/campground");
const axios = require("axios").default;

mongoose.connect("mongodb+srv://our-first-user:3VKSIVoTJ9iXM0mh@cluster0.mg4rs.mongodb.net/<dbname>?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 200; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    let img = `https://source.unsplash.com/collection/483251`;

    const camp = new Campground({
      author: "600fb361589175354df36c9f",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: await axios
            .get("https://source.unsplash.com/collection/483251")
            .then((res) => {
              const img = "https://images.unsplash.com" + res.request.path;
              //console.log(img);
              return img;
            })
            .catch((err) => {
              console.log("ERROR!", err);
            }),
          filename: "YelpCamp",
        },
      ],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto reprehenderit quidem unde fugiat. Maiores at quam velit a perspiciatis ratione minima facere, architecto dolore blanditiis. Obcaecati dolorem atque delectus magni.`,
      price: price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
