// Course text transcribed from the menu PDFs linked in src/data/links.js.
// Dinner: BaanLao_New-Menu_v1-4.pdf. Tea: Afternoon-Tea.pdf.
// Ligatures in the dinner PDF (ﬁ, ﬀ) are written as the letters they stand for.
// Lines that the PDF wraps are joined with a space. Duplicate paints at the
// same position (a second "SOUP", a second "Blue Lotus Tea") are listed once.

export const dinner = {
  title: 'FROM THAILAND WITH LOVE',
  dek: 'Celebrating My Most Cherished Memories of Home – Chef Nutcha Phanthoupheng',
  courses: [
    {
      name: 'AMUSE BOUCHE',
      dishes: [
        { name: 'Thai Dumpling with Organic Chicken' },
        { name: 'Rice Cracker with Yellow Curry' },
        { name: 'Wild Pepper Leaf Wrap in Carved Carrot' },
        { name: 'Golden Pastry with Catfish and Sour Mango' },
        { name: 'Grass-Fed Water Buffalo on Pineapple Spoon' },
      ],
    },
    {
      name: 'APPETIZERS',
      dishes: [
        { name: 'Coconut Mousse with Dungeness and Caviar' },
        { name: 'Duck Larb' },
        { name: 'Miyazaki A5 BMS 12 Wagyu' },
      ],
    },
    {
      name: 'SOUP',
      dishes: [{ name: 'Coconut Soup with Truffle Pearls' }],
    },
    {
      name: 'PALATE CLEANSER',
      dishes: [{ name: 'Lemongrass Pandan Elixir' }],
    },
    {
      name: 'MAINS',
      dishes: [
        { name: 'Blue Crab in Green Curry', with: 'Crispy Wild Pepper Leaf, Vermicelli, Cabbage' },
        { name: 'Japanese Tiger Prawn with Lobster Tom Yum', with: 'Wolffia Pearls, Seaweed Caviar' },
        { name: 'Water Buffalo Shank and Massaman Curry', with: 'Basil Rice, Kabocha Squash, Pommes Purée' },
      ],
    },
    {
      name: 'PALATE CLEANSER',
      dishes: [{ name: 'Sour Mango Sorbet and Anchovy Sauce' }],
    },
    {
      name: 'DESSERTS',
      dishes: [
        { name: 'Smoked Ice Cream with Bamboo Sticky Rice' },
        { name: 'Petit Fours' },
        { name: 'Seasonal Fruit' },
        { name: 'Blue Lotus Tea' },
      ],
    },
  ],
  // Printed under the heading BEVERAGE PAIRINGS. Heaven and Experience are
  // not named as pairings. Figures have no currency symbol in the PDF.
  experienceLines: ['The Baan Lao Heaven 300', 'The Baan Lao Experience 150'],
  pairings: [
    'Wine Private Collection 395',
    'Wine Premium 120',
    'Sake Samurai Reserve 140',
    'Sake Premium 90',
    'Cocktail 130',
    'Mocktail 110',
    'Gong Fu Cha Tea Ultimate 100',
    'Gong Fu Cha Tea Premium 75',
    'Caffeine Free Tea Ultimate 90',
    'Caffeine Free Tea Premium 65',
  ],
};

export const tea = {
  title: 'AFTERNOON TEA THAI EXPERIENCE',
  services: [
    {
      name: 'Arun / Dawn: Savoury, Sour & Spicy',
      dishes: [
        { th: 'ข้าวเกรียบปากหม้อ', en: 'Khao Kriap Pak Mo Stir-Fried Organic Chicken Breast with Steam Rice Paper Dumpling' },
        { th: 'ยำแซลมอนฟู', en: 'Yum Salmon Fu Thai Crispy Wild Sockeye Salmon Salad in Crispy Golden Pastry' },
        { th: 'ก๋วยเตี๋ยวลุยสวน', en: 'Kuai Tiao Lui Suan Rice Noodle Butterfly Pea Salad Roll with Thai Herbal Sauce' },
      ],
    },
    {
      name: 'AThit / Sun: Salty, Savoury & Spicy',
      dishes: [
        { th: 'ถุงทองเนื้อควาย', en: 'Thung Thong Nuea Kwai Stir Fried Water Buffalo Money Bag' },
        { th: 'ข้าวจี่เนื้อย่าง', en: 'Khao Chi Nuea Yang Grilled Coconut Sticky Rice with Marinated Beef Tenderloin with Tomato Thai Chilli Sauce' },
        { th: 'ทอดมันกุ้ง', en: 'Thot Man Kung Crispy Mangrove Prawn Cake' },
        { th: 'เต้าหู้ทอด', en: 'Tao Hu Thot Deep Fried Organic Soft Tofu with Wild Seaweed Caviar' },
        { th: 'ไก่สะเต๊ะ', en: 'Gai Sa Tay Homemade Brioche and Grilled Yellow Curry Organic Chicken Breast' },
      ],
    },
    {
      name: 'Bulan / Moon: Sweet & Sour',
      dishes: [
        { th: 'ข้าวเหนียวมะม่วง', en: 'Khao Niao Ma Muang Sweet Mango with Coconut Milk Sticky Rice' },
        { th: 'ไข่เต่าเผือกสังขยาใบเตย', en: 'Khai Tao Phueak Sang Kha Ya Bai Toei Deep Fried Taro Ball with Pandan Coconut Custard' },
        { th: 'ผลไม้รวมสลัก', en: 'Phon La Mai Ruam Sa Lak Hand Carved Seasonal Fruit' },
      ],
    },
  ],
  upgrade: [
    'Regular Premium or Ultimate Tea Experience',
    'You may upgrade your Tea Experience with our Premium or Ultimate substitutions',
  ],
  pairings: [
    'Premium Gong Fu Cha Tea Pairing $25.00',
    'Ultimate Gong Fu Cha Tea Pairing $45.00',
    'Premium Caffeine Free Tea Pairing $20.00',
    'Ultimate Caffeine Free Tea Pairing $30.00',
  ],
};
