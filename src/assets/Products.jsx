import NEW1 from './new1.png'
import NEW2 from './new2.png'
import NEW3 from './new3.png'
import NEW4 from './new4.jpg'
import NEW5 from './new5.png'
import FLOWER1 from './6.png'
import FLOWER2 from './7.jpg'
import FLOWER3 from './rose.jpg'
import FLOWER4 from './pure1.jpg'
import SHIRT1 from './shirt1.jpg'
import SHIRT2 from './shirt2.jpg'
import SHIRT3 from './shirt3.jpg'
import PHONE1 from './samsung1.jpg'
import PHONE2 from './samsung2.jpg'
import PHONE3 from './product_06.jpg'
import PHONE4 from './black.png'
import JEAN1 from './orange.jpg'
import JEAN2 from './tower.png'

const all_products = [
  {
          id: 1,
          name: 'new vase',
          img: NEW1,
          new_price: 100.00,
          old_price: 110.00
      },
      {
          id: 2,
          name: 'new vase',
          img: NEW2,
          new_price: 100.00,
          old_price: 110.00
      },
      {
          id: 3,
          name: 'new vase',
          img: NEW3,
          new_price: 100.00,
          old_price: 110.00
      },
      {
          id: 4,
          name: 'Beautiful flower',
          img: NEW4,
          new_price: 100.00,
          old_price: 110.00
      },
      {
          id: 5,
          name: 'flower',
          img: NEW5,
          new_price: 100.00,
          old_price: 110.00
      },
  {
    
    id: 6,
    name: 'Clear Emerald Flower',
    category: 'Flower',
    img: FLOWER1,
    old_price: 10.90,
    new_price: 12.10,
    description:
      'This elegant Clear Emerald Flower is a radiant botanical piece that adds a touch of nature and luxury to any setting. Its shimmering emerald-green petals glisten under natural light, creating a soothing visual centerpiece. Perfect for home decor, gifts, or ceremonial displays, it embodies freshness and elegance. Its long-lasting blooms and subtle fragrance make it ideal for uplifting the mood of any room, whether used in solitude or as part of a larger bouquet. A must-have for flower lovers and those who appreciate delicate, ornamental beauty.'
  },
  {
    id: 7,
    name: 'Elizabeth Vine',
    category: 'Flower',
    img: FLOWER2,
    old_price: 12.90,
    new_price: 13.10,
    description:
      'The Elizabeth Vine is a gracefully trailing flower known for its timeless charm and vibrant green foliage. With soft violet blooms and a refined aroma, this floral masterpiece brings a vintage yet fresh ambiance to any environment. Named after royalty, it symbolizes elegance and resilience. It is best placed in decorative vases or hanging baskets where its flowing leaves can cascade beautifully. Ideal for romantic settings, special occasions, or everyday aesthetic elevation, the Elizabeth Vine is a botanical treasure that never fails to impress.'
  },
  {
    id: 8,
    name: 'Rose flower',
    category: 'Flower',
    img: FLOWER3,
    old_price: 14.0,
    new_price: 17.70,
    description:
      'Our Rose flower selection features a classic and timeless bloom beloved across cultures for its rich symbolism of love and passion. This particular variety boasts deep red petals with velvety texture, making it a romantic centerpiece for any bouquet. Its intoxicating scent fills the room, bringing warmth and elegance. Perfect for anniversaries, Valentine’s Day, or simply expressing affection, these roses are cultivated with care to ensure lasting freshness. A staple in floral arrangements and an unforgettable gift.'
  },
  {
    id: 9,
    name: 'Sun flower',
    category: 'Flower',
    img: FLOWER4,
    old_price: 8.05,
    new_price: 9.70,
    description:
      'This cheerful Sun Flower is a burst of sunshine captured in floral form. Known for its bright yellow petals and tall, proud stems, it instantly lights up any room or garden. Symbolizing loyalty and happiness, sunflowers are popular for celebrations and get-well wishes. Their broad faces follow the sun throughout the day, giving them a dynamic, life-filled quality. Ideal for rustic decor or vibrant floral mixes, these flowers are as energetic as they are beautiful.'
  },
  {
    id: 10,
    name: 'Multi colored shirt',
    category: 'shirt',
    img: SHIRT1,
    old_price: 5.05,
    new_price: 6.70,
    description:
      'This multi-colored shirt blends a spectrum of bright hues into a fashion-forward garment suitable for both casual outings and expressive events. Crafted from breathable fabric, it offers both comfort and a bold aesthetic. The dynamic color palette makes it a standout choice for individuals seeking to add personality and fun to their wardrobe. Whether paired with jeans or shorts, this shirt brings joyful vibes and a trendy flair. Its stylish cut and durability ensure it remains a wardrobe staple for seasons to come.'
  },
  {
    id: 11,
    name: 'Round necked latex shirts',
    category: 'shirt',
    img: SHIRT2,
    old_price: 3.05,
    new_price: 4.09,
    description:
      'This round-necked latex shirt combines comfort and contemporary style in a minimalistic silhouette. The smooth latex finish adds a subtle shine that elevates everyday wear into something special. It hugs the body in a flattering way while remaining breathable and easy to care for. Great for layering or wearing solo, this shirt fits effortlessly into a casual or urban-chic wardrobe. Its versatility and modern appeal make it ideal for those who enjoy a sleek, polished look.'
  },
  {
    id: 12,
    name: 'Wite Polo shirt',
    category: 'shirt',
    img: SHIRT3,
    old_price: 1.05,
    new_price: 1.70,
    description:
      'The White Polo Shirt is a timeless classic designed for comfort and effortless style. With its soft cotton fabric, ribbed collar, and short sleeves, it’s perfect for both semi-formal and casual occasions. The minimal design allows for easy pairing with jeans, chinos, or shorts. This polo shirt is lightweight, breathable, and durable—ideal for warm weather or layering under jackets. Whether for school, sports, or a smart-casual office look, it remains a wardrobe essential for all ages.'
  },
  {
    id: 13,
    name: 'Samsung Oxygen',
    category: 'phone',
    img: PHONE1,
    old_price: 5000,
    new_price: 6000.70,
    description:
      'Samsung Oxygen is a high-performance smartphone built for users who demand speed, clarity, and functionality. It features an expansive AMOLED display, robust processor, and high-resolution camera system. Designed for multitasking and entertainment, it supports fast charging and has a long-lasting battery. Whether for gaming, photography, or work, the Oxygen offers a smooth, lag-free experience. Its sleek, modern design is complemented by Samsung’s signature software optimizations. Ideal for tech enthusiasts looking for power and reliability.'
  },
  {
    id: 14,
    name: 'Gallaxy s20 pro',
    category: 'phone',
    img: PHONE2,
    old_price: 7000,
    new_price: 7000.90,
    description:
      'The Galaxy S20 Pro is Samsung’s flagship device that redefines mobile performance. It boasts a professional-grade camera system, including 8K video, ultra-wide lens, and up to 100x zoom. Its 120Hz display delivers silky-smooth visuals, perfect for gaming and video. With 5G connectivity, a high-capacity battery, and top-tier processors, this phone is future-ready. Whether streaming, shooting, or scrolling, the S20 Pro provides a seamless experience in a sleek, premium package.'
  },
  {
    id: 15,
    name: 'Iphone 14',
    category: 'phone',
    img: PHONE3,
    old_price: 9000,
    new_price: 12000.90,
    description:
      'The iPhone 14 is Apple’s iconic smartphone reimagined with powerful enhancements. It features a super retina XDR display, enhanced battery life, and an advanced dual-camera system with night mode and cinematic video. Built with the latest A-series chip, it ensures ultra-fast performance and energy efficiency. Seamless iOS integration, robust security features, and a sleek, durable design make the iPhone 14 a leading choice for both tech lovers and everyday users. It’s innovation, refined.'
  },
  {
    id: 16,
    name: 'Iphone x',
    category: 'phone',
    img: PHONE4,
    old_price: 5000,
    new_price: 5000.20,
    description:
      'iPhone X represents a turning point in smartphone design, offering a borderless OLED screen, Face ID technology, and wireless charging. It was Apple’s first device to eliminate the home button, ushering in a new era of gesture-based interaction. Though no longer the latest, the iPhone X remains a reliable and stylish option for users seeking a premium Apple experience without breaking the bank. It balances performance, design, and software support impressively.'
  },
  {
    id: 17,
    name: 'Boss corner',
    category: 'jeans',
    img: JEAN1,
    old_price: 1.20,
    new_price: 5.20,
    description:
      'Boss Corner jeans are a stylish and rugged option designed for comfort and longevity. These jeans feature a tapered fit, classic wash, and reinforced seams, making them suitable for daily wear. Whether paired with sneakers or boots, they add a masculine edge to any outfit. The denim is soft yet durable, allowing ease of movement while maintaining a structured silhouette. Ideal for casual outings, these jeans deliver quality and timeless appeal at an accessible price.'
  },
  {
    id: 18,
    name: 'Faded Denim Jeans',
    category: 'jeans',
    img: JEAN2,
    old_price: 2.70,
    new_price: 3.20,
    description:
      'Faded Denim Jeans offer a relaxed yet fashionable look with their light wash and subtle distressing. They bring a vintage vibe to modern wardrobes and work well with both neutral and colorful tops. These jeans are made with stretch-infused fabric that enhances comfort while retaining shape. The classic five-pocket design and mid-rise fit suit a variety of body types. Whether for casual Fridays, weekend hangouts, or laid-back travel, these jeans provide style and comfort in equal measure.'
  }
]

export default all_products