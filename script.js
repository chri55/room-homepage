id = 0;
const heroItems = [
  {
    index: 0,
    title: "Discover innovative ways to decorate",
    body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    img: "./images/desktop-image-hero-1.jpg",
  },
  {
    index: 1,
    title: "We are available all across the globe",
    body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    img: "./images/desktop-image-hero-2.jpg",
  },
  {
    index: 2,
    title: "Manufactured with the best materials",
    body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    img: "./images/desktop-image-hero-3.jpg",
  },
];

const toggleMenu = () => {
  document.querySelector(".main__hero__nav__links").classList.toggle("menu-open");
}

const toggleBackground = (value) => {
  id += value;
  if (id < 0) id += 3;
  id %= 3;
  currItem = heroItems[id];
  const hero = document.querySelector(".main__hero");
  hero.style.backgroundImage = `linear-gradient(to right, #0005 0%, #0005 100%), url(${currItem.img})`;

  document.querySelector(".main__tagline--header").innerHTML = currItem.title;
  document.querySelector(".main__tagline--body").innerHTML = currItem.body;
}