
export const filterByCategory = (products, category) => {
  if (category === 'All') {
    return products;
  }
  return products.filter(product => product.category === category);
};

const product = [
  {
    id: 1,
    title: "Wireless Heaphone",
    description: ["High-quality sound with noise cancellation P47 Wireless Over-Ear Headphones", "Active Noise Cancellation, Retractable Cable, Condenser Microphone", "Universal Phone Control, 3.5mm Jack, Type-C Charging, Non-Waterproof, for Gaming, Adult - Black."],
    price: 18000,
    category: "Electronics",
    image: "/images/Headphones.avif",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Smartwatch",
    description: ["Fitness POEDAGAR New Men's Watch With Luminous Calendar", "Trendy For Students, Cool And Hot Sale Quartz Wristwatch."],
    price: 25000,
    category: "Accessories",
    image: "/images/wristwatch.webp",
    rating: 4.3,
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    description: ["ZEALOT S32 10W Wireless Speaker Portable Subwoofer", "TWS Supports Dual Pairing, 1800mAh Battery, 8 Hours of Gaming Time Loud Stereo Sound, Boombox Style Bass Cannon. Charging Cable and Auxiliary Line, Compatible with Memory Card / USB Insertion, Support Mobile Phones/Tablets/TVs/Computers, Suitable for Cars/Stages/Home Theater."],
    price: 20000,
    category: "Electronics",
    image: "/images/bluetoothspeaker.jpeg",
    rating: 4.4,
  },
  {
    id: 4,
    title: "Running Shoes",
    description: ["Comfortable and lightweight for daily runs", "Men's Slip-On Sneakers - Breathable Running Shoes with Geometric & Letter Print for Gym & Casual Attire."],
    price: 25500,
    category: "Footwear",
    image: "/images/RunningShoes.avif",
    rating: 4.6,
  },
  {
    id: 5,
    title: "Backpack",
    description: ["Multifunctional Men's Bag For Daily Commuting Multi-layer Large Capacity.", " Computer Protection Layered Backpack Lightweight for Going Out and Traveling Fashionable Simple Backpack, Eonothem."],
    price: 16000,
    category: "Accessories",
    image: "/images/Bag2.webp",
    rating: 4.2,
  },
  {
    id: 6,
    title: "Gaming Mouse",
    description: ["HXSJ 2.4G Wireless Gaming Mouse with RGB Lighting.", "Rechargeable Battery, Honeycomb Design, USB Plug & Play, Right-Handed Comfort - White, Gaming Mouse Wireless."],
    price: 7000,
    category: "Electronics",
    image: "/images/mouse.webp",
    rating: 4.7,
  },
  {
    id: 7,
    title: "Treasure Island",
    description: ["Treasure Island - A Classic Adventure Story for Young Adults Who Love Action and Thrillers."],
    price: 8000,
    category: "Books",
    image: "/images/sure.webp",
    rating: 4.8,
  },
  {
    id: 8,
    title: "Sunglasses",
    description: ["UV protection with sleek design.", "Retro Fashion Punk Steam Style Glasses, Square Metal Frame Men's and Women's Glasses, Party Decorative Eyewear" ],
    price: 13000,
    category: "Accessories",
    image: "/images/sunglasse.avif",
    rating: 4.0,
  },
  {
    id: 9,
    title: "Office Chair",
    description: ["Ergonomic chair with lumbar support.", "Non-Slip Seat Pad, Posture Correction.", "for Back and Coccyx, Black and White", "Ergonomic Chair|Modern Office Chair|Durable Build Quality",
],
    price: 50000,
    category: "Accessories",
    image: "/images/chair.webp",
    rating: 4.5,
  },
  {
    id: 10,
    title: "Water Bottle",
    description: ["Reusable and BPA-free for daily use.", "Large-Capacity Frosted Plastic Water Bottle - Durable, Lightweight & Portable with Scale for Outdoor Sports and Office Use"],
    price: 4000,
    category: "Accessories",
    image: "/images/waterbottles.avif",
    rating: 4.3,
  },

  {
    id: 11,
    title: "Footwear",
    description: ["Men's Casual & Business Faux Shoes - Sleek", "Durable Microfiber with Rubber Sole for All Seasons Comfortable and stylish footwear for all occasions."],
    price: 25000,
    category: "Footwear",
    image: "/images/footwears.jpeg",
    rating: 4.1,
  },

  {
    id: 12,
    title: "Body care",
    description: ["Elegant and long-lasting fragrance.", "Luxury Eau de Parfume for Men and Women - Perfect for Special Occasions or Daily Wear."],
    price: 20000,
    category: "Fashion",
    image: "/images/perf.webp",
    rating: 4.3,
  },

  {
    id: 13,
    title: "Shirt",
    description: ["Stylish and comfortable shirt for wear.", "Men'S Breathable Casual Turnover Short Sleeve T-shirt", "Simple Carved Pattern, Lightweight and Stylish, Suitable for Summer Outings."],
    price: 10000,
    category: "Clothing",
    image: "/images/T-shirt.jpg",
    rating: 4.2,
  },

  {
    id: 14,
    title: "Laptop",
    description: ["1 Laptop 39.62cm Intel N95 FHD IPS Auusda 39.62cm Laptop, Intel N95, 16GB DDR4, 512GB SSD", "FHD IPS Display, Fingerprint Reader, HD Webcam, Mini HDTV, with USB 3.0, Wi-Fi 802.11B/G/N, 8000Mah Battery, for Students, 110V/220V British Plug High-performance laptop for work and play."],
    price: 250000,
    category: "Electronics",
    image: "/images/laptop.jpeg",
    rating: 4.6,
  },

  {
    id: 15,
    title: "Smartphone",
    description:["Latest model with advanced features.", "USB cable, 1080P Video, Night Mode, Face Recognition, Wi-Fi Enabled, 4G"],
    price: "price differs based on model",
    category: "Electronics",
    image: "/images/Phone.jpeg",
    rating: 4.8,
  },
  {
    id: 16,
    title: "Food",
    description: ["Manual Meat and Vegetable Mixer - Versatile Stainless Steel Kitchen Tool for Food Preparation", "Hand-Cranked with Table Clamp Non-Electric Ideal for Home or Commercial Use Mixer for Food"],
    price: 10000,
    category: "Food",
    video: "/videos/grinder.mp4",
    rating: 4.2,
  },
  
  {
  id: 17,
  title: "Shirt",
  description: ["Men's Casual Rose Print Short Sleeve Shirt - Polyester, Button-Up with Asymmetrical Hem", "Summer Fashion, Black & White with Floral Design, Elegant Flower Print Shirt. "],
  price: 14000,
  category: "Clothing",
  image: "/images/milano.webp",
  rating: 4.4,
},

{
  id: 18,
  title: "Clipper",
  description: ["Original Design Multifunctional Hair Clipper Set, Professional Men's Hair Trimmer", "Adjustable Cordless Hair Cutting Machine.", "Professional Hair Clippers And Beard Trimmer Set, Cordless USB Rechargeable."],
  price: 20000,
  category: "Electronics",
  image: "/images/clipper.webp",
  rating: 4.5,
},

{
    id: 19,
    title: "Shadow at Dawn",
    description: ["Productive and mind changing Book.", "Classic Dystopian Novel 1984 by George Orwell Brilliantly Depicts Totalitarian Society."],
    price: 3000,
    category: "Books",
    image: "/images/Books.jpg",
    rating: 4.7,
  },

{
  id: 20,
  title: "Footwear",
  description: ["Men's Mule Shoes Thick Sole Couple Style Warm and Comfortable Spiral Toe Plus Velvet Shoes"],
  price: 12000,
  category: "Footwear",
  image: "/images/New.webp",
  rating: 4.3,
},

{
  id: 21,
  title: "Food",
  description: ["Healthy and nutritious food for daily consumption.", "Organic Whole Grain Oats - High in Fiber, Protein & Essential Nutrients, Perfect for Breakfast or Baking."],
  price: 10000,
  category: "Food",
  image: "/images/food.jpeg",
  rating: 4.2,
},

{
  id: 22,
  title: "Body care",
  description: ["Elegant and long-lasting fragrance.", "Luxury Eau de Parfume for Men and Women - Perfect for Special Occasions or Daily Wear."],
  price: 20000,
  category: "Fashion",
  image: "/images/prod.jpg",
  rating: 4.3,
},

{
  id: 23,
  title: "Shirt",
  description: ["Men's long Sleeve Shirt - Polyester, Button-Up with Asymmetrical Hem.", "Summer Fashion, Black & White with Floral Design, Elegant Flower Print Shirt. "],
  price: 7000,
  category: "Clothing",
  image: "/images/long.jpg",
  rating: 4.4,
},

{
  id: 24,
  title: "Shirt",
  description: ["Men'S Breathable Casual Turnover Short Sleeve T-shirt, Simple Carved Pattern, Lightweight and Stylish, Suitable for Summer Outings."],
  price: 8000,
  category: "Clothing",
  image: "/images/slev.jpg",
  rating: 4.4,
},

{
  id: 25,
  title: "Shirt",
  description: ["Men's Casual Rose Print Short Sleeve Shirt - Polyester, Button-Up with Asymmetrical Hem", "Summer Fashion, Black & White with Floral Design, Elegant Flower Print Shirt. "],
  price: 14000,
  category: "Clothing",
  image: "/images/tops.webp",
  rating: 4.4,
},

{
  id: 26,
  title: "The help",
  description: ["Three ordinary women are about to take one extraordinary step."],
  price: 3000,
  category: "Books",
  image: "/images/4667024.jpg",
  rating: 4.7,
},

{
  id: 27,
  title: "The leader in you",
  description: ["The Art of Leadership English Edition [US] by Carnegiehe Art of Leadership English Edition [US] by Carnegie"],
  price: 3000,
  category: "Books",
  image: "/images/leader.webp",
  rating: 4.7,
},

{
  id: 28,
  title: "Treasure Island",
  description: ["Treasure Island - A Classic Adventure Story for Young Adults Who Love Action and Thrillers."],
  price: 3000,
  category: "Books",
  image: "/images/BOOKS.jpeg",
  rating: 4.7,
},

{
  id: 29,
  title: "Footwear",
  description: ["vmi Men's Open-Toe EVA Slides - Comfortable", "Non-Slip Casual Sandals with Arch Support, Red & White, All-Season Outdoor Footwear."],
  price: 8500,
  category: "Footwear",
  image: "/images/sum.webp",
  rating: 4.1,
},


];



export default product;