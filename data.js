export const complexes = [
  { id: "north-park", name: "Северный Парк", class: "Бизнес-класс", address: "Москва, Северный район, ул. Парковая, 12", coords: [55.8558, 37.5173], cover: "https://source.unsplash.com/random/800x1000/?modern-house", hero: "https://source.unsplash.com/random/1600x1000/?modern-house", desc: "Клубный дом у парка: панорамные окна, тихий двор, своя оранжерея." },
  { id: "river-quarter", name: "Речной Квартал", class: "Комфорт-класс", address: "Москва, Набережная, ул. Речная, 4", coords: [55.7358, 37.6373], cover: "https://source.unsplash.com/random/800x1000/?apartment", hero: "https://source.unsplash.com/random/1600x1000/?apartment", desc: "Малоэтажные дома на набережной: террасы, вода, велодорожки." },
  { id: "atlas", name: "Атлас", class: "Премиум", address: "Москва, Центр, ул. Атласная, 1", coords: [55.7558, 37.6173], cover: "https://source.unsplash.com/random/800x1000/?luxury,house", hero: "https://source.unsplash.com/random/1600x1000/?luxury,house", desc: "Клубный дом в центре: 9 этажей, консьерж, приватный лифт." },
  { id: "sosny", name: "Сосны", class: "Загородный", address: "Московская обл., Сосновый бор, 7", coords: [55.9158, 37.4173], cover: "https://source.unsplash.com/random/800x1000/?cottage", hero: "https://source.unsplash.com/random/1600x1000/?cottage", desc: "Таунхаусы в лесу: свой вход, терраса, парковка у дома." },
];

const apartmentSeeds = {
  "north-park": [
    { num: "101", rooms: 1, area: 42, floor: 3, pricePerM2: 310000, tag: "Свободна" },
    { num: "102", rooms: 2, area: 64, floor: 7, pricePerM2: 320000, tag: "Свободна" },
    { num: "103", rooms: 2, area: 71, floor: 9, pricePerM2: 330000, tag: "Бронь" },
  ],
  "river-quarter": [
    { num: "201", rooms: 1, area: 38, floor: 1, pricePerM2: 240000, tag: "Свободна" },
    { num: "202", rooms: 2, area: 58, floor: 2, pricePerM2: 250000, tag: "Свободна" },
    { num: "203", rooms: 2, area: 62, floor: 3, pricePerM2: 255000, tag: "Свободна" },
  ],
  "atlas": [
    { num: "301", rooms: 1, area: 46, floor: 2, pricePerM2: 480000, tag: "Свободна" },
    { num: "302", rooms: 2, area: 70, floor: 3, pricePerM2: 500000, tag: "Свободна" },
    { num: "303", rooms: 2, area: 78, floor: 4, pricePerM2: 510000, tag: "Бронь" },
  ],
  "sosny": [
    { num: "401", rooms: 2, area: 66, floor: 1, pricePerM2: 210000, tag: "Свободна" },
    { num: "402", rooms: 3, area: 88, floor: 1, pricePerM2: 220000, tag: "Свободна" },
    { num: "403", rooms: 3, area: 94, floor: 2, pricePerM2: 225000, tag: "Бронь" },
  ],
};

// Функция генерации случайной ссылки на картинку (с привязкой к номеру квартиры)
const getRandomImg = (width, height, tag) => {
  // Используем сервис Picsum для надежности (он не блокируется в РФ так сильно, как Unsplash)
  // И добавляем случайное число в конец ссылки, чтобы картинка менялась при обновлении
  const randomId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/seed/${tag}-${randomId}/${width}/${height}`;
};

export const apartments = complexes.flatMap((c) =>
  apartmentSeeds[c.id].map((s) => {
    const id = `a${s.num}`;
    return {
      id, 
      complexId: c.id, 
      complexName: c.name, 
      num: s.num, 
      rooms: s.rooms, 
      area: s.area, 
      floor: s.floor, 
      pricePerM2: s.pricePerM2, 
      price: s.area * s.pricePerM2, 
      tag: s.tag,
      title: `${s.rooms}-комнатная, ${s.area} м²`, 
      coords: c.coords, 
      address: c.address,
      
      // Генерируем случайные картинки
      photos: [
        getRandomImg(800, 600, `interior-${s.num}-1`),
        getRandomImg(800, 600, `interior-${s.num}-2`),
        getRandomImg(800, 600, `interior-${s.num}-3`)
      ],
      plan: getRandomImg(800, 600, `plan-${s.num}`),
    };
  })
);

export const formatPrice = (value) => new Intl.NumberFormat("ru-RU").format(Math.round(value)) + " ₽";