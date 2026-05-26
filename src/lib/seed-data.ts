export type SeedAction = {
  label: string;
  href?: string;
  external?: boolean;
  disabledReason?: string;
};

export type SeedImage = {
  src: string;
  alt: string;
  caption?: string;
  tone?: "green" | "clay" | "sky" | "cream";
};

export const seedData = {
  business: {
    name: "Seed Cafe",
    logo: "/images/seed/logo-placeholder.png",
    tagline: "Brunch, coffee and slow mornings in Colombo.",
    address: "60 Horton Place, Colombo 00700, Sri Lanka",
    shortAddress: "Horton Place, Colombo",
    hours: "Daily, 7.00am - 5.30pm",
    hoursShort: "Open daily 7.00am-5.30pm",
    phoneDisplay: "Phone number to be added",
    phoneHref: "",
  },
  links: {
    instagram: "https://www.instagram.com/seedcafesl",
    facebook: "https://www.facebook.com/seedcafesl",
    maps:
      "https://www.google.com/maps/search/?api=1&query=60%20Horton%20Place%2C%20Colombo%2000700%2C%20Sri%20Lanka",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Vibe", href: "#vibe" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit", href: "#visit" },
  ],
  headerCta: {
    label: "Visit Seed",
    href: "#visit",
  },
  hero: {
    image: {
      src: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=1800&q=85",
      alt: "A bright brunch spread and coffee table at Seed Cafe Colombo",
      caption: "Horton Place mornings",
      tone: "green",
    } satisfies SeedImage,
    eyebrow: "Seed Cafe Colombo",
    headline: "Your Colombo brunch fix.",
    subheadline:
      "Fresh plates, good coffee, smoothie bowls and relaxed mornings in a warm garden-like cafe on Horton Place.",
    actions: [
      { label: "View menu highlights", href: "#menu" },
      {
        label: "Message on Instagram",
        href: "https://www.instagram.com/seedcafesl",
        external: true,
      },
    ] satisfies SeedAction[],
    pills: [
      "Open daily 7.00am-5.30pm",
      "Horton Place, Colombo",
      "Brunch • Coffee • Smoothie Bowls",
    ],
  },
  vibe: {
    eyebrow: "The Seed feeling",
    heading: "A sunny little pause in the middle of Colombo.",
    copy: [
      "Seed is built for the kind of morning that does not need to be rushed: a catchup over coffee, a nourishing bowl after a walk, or a long brunch that turns into an easy afternoon.",
      "The mood is bright, leafy and fresh, with garden corners, healthy plates, smoothie bowls, vegan-friendly options and the familiar comfort of a good Colombo cafe.",
    ],
    images: [
      {
        src: "https://img02.restaurantguru.com/c2b1-Seed-Cafe-Colombo-interior.jpg",
        alt: "Garden-like seating corner at Seed Cafe Colombo",
        caption: "Garden corners",
        tone: "green",
      },
      {
        src: "https://img02.restaurantguru.com/c726-Seed-Cafe-Colombo-design.jpg",
        alt: "Warm cafe interior at Seed Cafe Colombo",
        caption: "Easy catchups",
        tone: "clay",
      },
    ] satisfies SeedImage[],
  },
  experiences: [
    {
      title: "Brunch plates",
      description:
        "Eggs, croissants, bagels and hearty plates made for slow mornings and shared tables.",
      icon: "utensils",
      image: {
        src: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1100&q=85",
        alt: "Brunch plate served at Seed Cafe",
        tone: "cream",
      } satisfies SeedImage,
    },
    {
      title: "Specialty coffee",
      description:
        "A relaxed coffee stop for lattes, iced coffee, matcha and an afternoon reset.",
      icon: "coffee",
      image: {
        src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1100&q=85",
        alt: "Coffee served at Seed Cafe Colombo",
        tone: "clay",
      } satisfies SeedImage,
    },
    {
      title: "Smoothie bowls & fresh drinks",
      description:
        "Colourful bowls, cold-pressed juices, kombucha and fresh sips with a lighter feel.",
      icon: "leaf",
      image: {
        src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=1100&q=85",
        alt: "Smoothie bowl and fresh drink at Seed Cafe",
        tone: "sky",
      } satisfies SeedImage,
    },
    {
      title: "Garden cafe atmosphere",
      description:
        "Warm, leafy and calm, with space for brunch dates, quiet work and easy catchups.",
      icon: "sprout",
      image: {
        src: "https://img02.restaurantguru.com/cadc-Seed-Cafe-Colombo-interior-1.jpg",
        alt: "Fresh cafe plate with garden atmosphere",
        tone: "green",
      } satisfies SeedImage,
    },
  ],
  menu: {
    eyebrow: "Menu highlights",
    heading: "Fresh, brunchy, bright, and made for repeat visits.",
    note: "Menu items may change — follow Seed on Instagram for daily updates.",
    categories: [
      {
        title: "Brunch",
        summary: "Comforting plates, folded eggs, croissants and cafe favourites.",
        items: [
          "Seed of Life Big Breakfast",
          "Folded egg croissant",
          "Chilli crab folded egg croissant",
          "Beef Benny croissant",
          "Pesto chicken bagel burger",
        ],
      },
      {
        title: "Bowls & fresh plates",
        summary: "Colourful bowls and lighter plates with a fresh local feel.",
        items: [
          "Blue spirulina smoothie bowl",
          "Acai pink pitaya bowl",
          "Poke bowl",
          "Vegan-friendly plates",
        ],
      },
      {
        title: "Coffee & drinks",
        summary: "Coffee classics, chilled signatures and bright daily drinks.",
        items: [
          "Latte",
          "Vietnamese iced coffee",
          "Matcha mango",
          "Cold-pressed juices",
          "Kombucha",
        ],
      },
      {
        title: "Sweet treats",
        summary: "A little something for coffee, brunch or the table to share.",
        items: [
          "Biscoff French toast",
          "Banana bread",
          "Date cake",
          "Vegan chocolate tart",
          "Pavlova",
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    heading: "A glimpse of Seed before the next table is ready.",
    images: [
      {
        src: "https://img02.restaurantguru.com/c008-Seed-Cafe-Colombo-design-1.jpg",
        alt: "Slow morning table setting at Seed Cafe",
        caption: "Slow mornings",
        tone: "cream",
      },
      {
        src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85",
        alt: "Brunch plates at Seed Cafe Colombo",
        caption: "Brunch plates",
        tone: "clay",
      },
      {
        src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
        alt: "Coffee at Seed Cafe Colombo",
        caption: "Coffee at Seed",
        tone: "green",
      },
      {
        src: "https://img02.restaurantguru.com/c2b1-Seed-Cafe-Colombo-interior.jpg",
        alt: "Garden corner at Seed Cafe",
        caption: "Garden corners",
        tone: "sky",
      },
      {
        src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85",
        alt: "Fresh smoothie bowl at Seed Cafe",
        caption: "Fresh bowls",
        tone: "green",
      },
      {
        src: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
        alt: "Sweet treat at Seed Cafe Colombo",
        caption: "Sweet things",
        tone: "clay",
      },
    ] satisfies SeedImage[],
  },
  socialProof: {
    eyebrow: "Loved locally",
    heading: "A popular Colombo brunch spot with an easy, garden-cafe rhythm.",
    cards: [
      "Loved for brunch in Colombo",
      "A calm spot for coffee, catchups and working",
      "Fresh plates, good coffee, and a cozy garden feel",
    ],
  },
  visit: {
    eyebrow: "Visit Seed",
    heading: "Find us on Horton Place.",
    copy:
      "Come by for breakfast, brunch, coffee or a fresh afternoon bowl. Seed is open daily from morning until late afternoon.",
    actions: [
      {
        label: "Get directions",
        href: "https://www.google.com/maps/search/?api=1&query=60%20Horton%20Place%2C%20Colombo%2000700%2C%20Sri%20Lanka",
        external: true,
      },
      {
        label: "Message on Instagram",
        href: "https://www.instagram.com/seedcafesl",
        external: true,
      },
      {
        label: "Visit Facebook",
        href: "https://www.facebook.com/seedcafesl",
        external: true,
      },
      {
        label: "Call now",
        href: "",
        disabledReason: "Add the Seed Cafe phone number in src/lib/seed-data.ts",
      },
    ] satisfies SeedAction[],
  },
};
