// Plain JS data module — article shape (for reference, since this file has no TS types):
// { id, category, title, excerpt, author, date, readTime, image, saved }

export const featuredArticle = {
    id: "featured-1",
    category: "Philosophy",
    title: "On the Virtue of Slowness in an Age of Acceleration",
    excerpt:
        "How the ancient philosophers conceived of time, leisure, and the examined life — and what they might counsel us today.",
    author: "Marcus Aldervane",
    date: "XVIII July MMXXVI",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1200&h=800&fit=crop",
};

export const articles = [
    {
        id: "florentine-bankers",
        category: "History",
        title: "The Florentine Bankers and the Birth of the Modern World",
        excerpt:
            "How the Medici family's financial innovations — and their patronage of beauty — made the Renaissance possible.",
        author: "Eleonora Bianchi",
        date: "XIV July MMXXVI",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1544819667-4d6f4e5b1a7d?w=300&h=300&fit=crop",
        saved: true,
    },
    {
        id: "anatomists",
        category: "Sciences",
        title: "What the Anatomists Knew",
        excerpt:
            "The Renaissance dissection theaters of Padua and Bologna gave us modern medicine — and a new philosophy of the body.",
        author: "Dr. Vittoria Sermenti",
        date: "X July MMXXVI",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1578926288207-a90a5366759d?w=300&h=300&fit=crop",
        saved: false,
    },
    {
        id: "montaigne",
        category: "Letters",
        title: "Montaigne and the Art of the Personal Essay",
        excerpt: "Five centuries after his death, the inventor of a literary form remains its undisputed master.",
        author: "Jean-Pierre Lefebvre",
        date: "VI July MMXXVI",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=300&h=300&fit=crop",
        saved: false,
    },
    {
        id: "kepler",
        category: "Sciences",
        title: "The Music of the Spheres: Kepler and the Harmony of the World",
        excerpt:
            "In the Harmonices Mundi, a great scientist attempted to hear the cosmos sing — and was not entirely wrong.",
        author: "Dr. Aldous Pemberton",
        date: "II July MMXXVI",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop",
        saved: true,
    },
];

// Subset of `articles` a user has bookmarked — used on the Saved page.
export const savedArticles = articles.filter((article) => article.saved);

// The signed-in user's own drafts/published pieces — used on the MyWorks page.
export const myWorks = [
    {
        id: "writing-without-audience",
        category: "Letters",
        title: "On Writing Without an Audience",
        date: "XX July MMXXVI",
    },
];

export const categories = ["All Subjects", "Philosophy", "History", "Arts", "Sciences", "Letters", "Politics"];