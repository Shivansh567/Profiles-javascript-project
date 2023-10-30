// local reviews data
const reviews = [
  {
    id: 1,
    name: "Jethalal Champaklal Gada",
    job: "Gada Electronics",
    img: "https://wallpaperaccess.com/full/5669862.jpg",
    text: "I m Jethalal Champaklal Gada . I m the owner of a shop at goregaon east . my shop name is gada electronics",
  },
  {
    id: 2,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 5,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const random = document.querySelector(".random-btn");

let count = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(count);
});

next.addEventListener("click", function () {
  count++;
  if (count >= reviews.length) {
    count = 0;
  }
  showPerson(count);
});

prev.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = reviews.length - 1;
  }
  showPerson(count);
});

random.addEventListener("click", function () {
  count = Math.floor(Math.random() * reviews.length);
  showPerson(count);
});
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
