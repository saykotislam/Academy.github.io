// Your quiz questions and answers here
const quizData = [
    {
        id: 1,
        question: "তোমার সবথেকে প্রিয় পাঠ্য  বিষয় কোনটি?",
        options: [
            { text: "বিজ্ঞান", score: 10 },
            { text: "সাহিত্য", score: 10 },
            { text: "ইতিহাস", score: 10 },
            { text: "কোনটিই নয়", score: -5 }
        ]
    },
    {
        id: 2,
        question: "তোমার শারীরিক সামর্থ্য কেমন?",
        options: [
            { text: "অত্যন্ত শক্তিশালী", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কিছুটা দুর্বল  ", score: 1 },
            { text: "দুর্বল", score: -5 }
        ]
    },

    {
        id: 3,
        question: "তোমার প্রিয় কাজ কোনটি?",
        options: [
            { text: "বই পড়া", score: 10 },
            { text: "স্পোর্টস", score: 10 },
            { text: "ভ্রমন ", score: -5 },
            { text: "মজার মজার খাবার খাওয়া ও ঘুম", score: -5 }
        ]
    },
    {
        id: 4,
        question: "নিচের কোন জন তোমার প্রিয় ব্যক্তিত্ব?",
        options: [
            { text: "তিনি একজন সাংবাদিক", score: 0  },
            { text: "তিনি একজন মহান নেতা", score: 0 },
            { text: "তিনি একজন বিজ্ঞানী", score: 0 },
            { text: "তিনি একজন সফল ব্যবসায়ী  ", score: 0 },
            { text: "তিনি একজন নামকরা শিল্পী", score: 0 },
            { text: "তিনি একজন বিখ্যাত খেলোয়াড়", score: 0 },
            { text: "তিনি একজন দার্শনিক", score: 0 },
            { text: "তিনি একজন উচ্চ পদস্ত অফিসার", score: 0 }
        ]
    },
    {
        id: 5,
        question: "কোনটি করতে না পারলে তীব্র কষ্ট বোধ হয়?",
        options: [
            { text: "পড়া লেখা", score: 10 },
            { text: "মোবাইল ব্যবহার", score: -5 },
            { text: "খেলাধুলা ", score: 5 },
            { text: "বন্ধুদের সাথে সময় দেওয়া", score: -5 }
        ]
    },
    {
        id: 6,
        question: "তোমার প্রিয় স্থান কোনটি?",
        options: [
            { text: "নিজ বাড়ি", score: 5 },
            { text: "স্কুল", score: 10 },
            { text: "খেলার মাঠ", score: 10 },
            { text: "বন্ধুদের সাথে মজা করার স্থান", score: -5 }
        ]
    },
    {
        id: 7,
        question: "কিসে তোমার বেশি ভয় বা লজ্জা অনুভব হয়?",
        options: [
            { text: "ঊচু স্থানে উঠলে নিচে পড়ে যাওয়ার ভয়", score: -5 },
            { text: "পানিতে পড়ে ডুবে যাওয়ার ভয়", score: -5 },
            { text: "প্রতিযোগিতায় হেরে যাওয়ার লজ্জা", score: 10 },
            { text: "বাবা-মায়ের রাগ", score: 5 }
        ]
    },
    {
        id: 8,
        question: "তোমাকে কেমন পেশায় প্রতিষ্ঠিত দেখতে চান তোমার পিতামাতা?",
        options: [
            { text: "ডাক্তার ", score: 0 },
            { text: "ইঞ্জিনিয়ার", score: 0 },
            { text: "শিক্ষক", score: 0 },
            { text: "সরকারী কর্মকর্তা", score: 0 },
            { text: "শিল্পী", score: 0 },
            { text: "খেলোয়াড়", score: 0 },
            { text: "লেখক", score: 0 },
            { text: "বিচারক", score: 0 },
            { text: "রাজনীতিবিদ", score: 0 },
            { text: "সমাজসেবক", score: 0 },
            { text: "উদ্যোক্তা", score: 0 },
            { text: "গবেষক", score: 0 },
            { text: "সেনা অফিসার", score: 0 }
        ]
    },
    {
        id: 9,
        question: "সুযোগ পেলে ভবিষ্যতে তুমি কোন দেশেটিতে বাস করতে পছন্দ করবে? ",
        options: [
            { text: "আমেরিকা কিংবা কানাডা", score: 0 },
            { text: "মালেশিয়া, নিউজিল্যান্ড কিংবা অস্ট্রেলিয়া", score: 0 },
            { text: "ইউরোপের সমৃদ্ধ কোন দেশ", score: 0 },
            { text: "কোনটিই নয়", score: 10 }
        ]
    },
    {
        id: 10,
        question: "তোমার মাধ্যমিকের ফলাফল কি ছিল?",
        options: [
            { text: "জিপিএ ৫", score: 10 },
            { text: "জিপিএ ৪.৫ এর উপরে", score: 5 },
            { text: "জিপিএ ৪.৫ এর নিচে", score: 0 },
            { text: "এখনও নয় ", score: 0 }
        ]
    },
    {
        id: 11,
        question: "তোমার উচ্চ মাধ্যমিকের ফলাফল কি ছিল?",
        options: [
            { text: "জিপিএ ৫", score: 10 },
            { text: "জিপিএ ৪.৫ এর উপরে", score: 5 },
            { text: "জিপিএ ৪.৫ এর নিচে", score: 0 },
            { text: "এখনও নয় ", score: 0 }
        ]
    },
    {
        id: 12,
        question: "গত বছরে স্কুলের পরীক্ষায় তোমার  ফলাফল কেমন ছিল? (যদি এখনও মাধ্যমিক পরীক্ষা না দিয়ে থাকো তবে এই প্রশ্নটির উত্তর দাও)",
        options: [
            { text: "ক্লাসের প্রথম ৫ জনের মাঝে", score: 10 },
            { text: "ক্লাসের ৬ হতে ১০ জনের মাঝে ", score: 5 },
            { text: "ক্লাসের ১১ হতে ২০ জনের মাঝে  ", score: 0 },
            { text: "ক্লাসের প্রথম ২০ জনের বাইরে ", score: -5 },
            { text: "Go Next...", score: 0 }
        ]
    },
    {
        id: 13,
        question: "বন্ধুরা তোমার মতামত কতটা মেনে চলে?",
        options: [
            { text: "ভালোভাবে মেনে চলে ", score: 10 },
            { text: "মোটামুটি মেনে চলে ", score: 5 },
            { text: "কম মেনে চলে  ", score: 0 },
            { text: "মেনে চলে না ", score: -5 }
        ]
    },
    {
        id: 14,
        question: "পড়ালেখা করতে কতটা আনন্দিত থাকো?",
        options: [
            { text: "অত্যন্ত বেশি ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম আনন্দ", score: 0 },
            { text: "কষ্ট অনুভব হয়", score: -5 }
        ]
    },
    {
        id: 15,
        question: "মনে কর, তোমার অনেক অর্থ রয়েছে,  ভাল উচ্চতা আর খুব ভাল স্বাস্থের অধিকারী তুমি; মনে কর তুমি সব রকমের চাপ থেকে মুক্ত তাই নিজের প্রিয় একটি কাজের মাঝে তুমি জীবন কাটাতে চাও। এমন হলে তুমি কোন পেশাটি বেছে নিবে? ",
        options: [
            { text: "ডাক্তার ", score: 0 },
            { text: "ইঞ্জিনিয়ার", score: 0 },
            { text: "অধ্যাপক", score: 0 },
            { text: "প্রশাসক", score: 0 },
            { text: "শিল্পী", score: 0 },
            { text: "খেলোয়াড়", score: 0 },
            { text: "জার্নালিস্ট", score: 0 },
            { text: "লেখক", score: 0 },
            { text: "বিচারক", score: 0 },
            { text: "রাজনীতিবিদ", score: 0 },
            { text: "সমাজসেবক", score: 0 },
            { text: "উদ্যোক্তা", score: 0 },
            { text: "গবেষক", score: 0 },
            { text: "মোটিভেটর", score: 0 },
            { text: "সেনা অফিসার", score: 0 },
            { text: "বিজ্ঞানী", score: 0 },
        ]
    },
    {
        id: 16,
        question: "কোন সমস্যার বিষয়ে তোমার মনোযোগ দেওয়ার সক্ষমতা কেমন?",
        options: [
            { text: "শক্তিশালী", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম", score: 0 },
            { text: "মনোযোগ দিতে পারি না", score: -5 }
        ]
    },

    {
        id: 17,
        question: "পরিবারের অন্যরা তোমার মতামতকে কতটা গুরুত্ব দেয়?",
        options: [
            { text: "অত্যন্ত বেশি ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম", score: 0 },
            { text: "কেও আমাকে গুরুত্ব দেয় না", score: -5 }
        ]
    }
    ,
    {
        id: 18,
        question: "নতুন কিছু আবিস্কার করতে তোমার কতটা ভালো লাগে?",
        options: [
            { text: "অত্যন্ত বেশি", score: 10 },
            { text: "আগ্রহবোধ করি না", score: -5 },
            { text: "এসবে আমার খুব কম আগ্রহ", score: 5 },
            { text: "মোটামুটি ভাবে চেষ্টা করি ", score: 0 }
        ]
    }
    ,
    {
        id: 19,
        question: "জটিল কোন সমস্যা সমাধান করার সক্ষমতা কেমন?",
        options: [
            { text: "অত্যন্ত বেশি", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "কম", score: 0 },
            { text: "জানা নাই", score: -5 }
        ]
    }
    ,
    {
        id: 20,
        question: "শপিং করতে কেমন আনন্দ হয় তোমার?",
        options: [
            { text: "অত্যন্ত বেশি", score: -5 },
            { text: "মোটামুটি", score: 10 },
            { text: "ভালো লাগে না", score: 1 },
            { text: "শপিং করি না", score: 0 }
        ]
    },
    {
        id: 21,
        question: "অন্যদের সামনে নিজ বক্তব্য উপস্থাপনের সক্ষমতা কেমন বলে তোমার মনে হয়?",
        options: [
            { text: "অত্যন্ত ভাল ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "পারি না", score: -5 },
            { text: "কিছুটা ভয় লাগে", score: 0 }
        ]
    },
    {
        id: 22,
        question: "বিরক্তিকর কোন কাজে ধৈর্য ধরে রাখার সক্ষমতা কেমন বলে তুমি অনুভব কর?",
        options: [
            { text: "অত্যন্ত ভাল", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "নাই", score: -5 },
            { text: "কিছুটা দুর্বল", score: 0 }
        ]
    },
    {
        id: 23,
        question: "চ্যালেঞ্জ গ্রহণ করতে কি তোমার ভালো লাগে?",
        options: [
            { text: "অত্যন্ত ভাল ", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "নাই", score: -5 },
            { text: "খুব কম চ্যলেঞ্জ নিতে পছন্দ করি", score: 0 }
        ]
    },
    {
        id: 24,
        question: "ইংরেজিতে কথা বলার সক্ষমতা তোমার কেমন?",
        options: [
            { text: "অত্যন্ত স্বচ্ছন্দে কথা বলতে পারি", score: 10 },
            { text: "মোটামুটি পারি ", score: 5 },
            { text: "ইংরেজিতে কথা বলার অভ্যাস নাই ", score: -5 },
            { text: "কিছুটা দুর্বল", score: 0 }
        ]
    },
    {
        id: 25,
        question: "নিজের মতামত ইংরেজিতে  লেখার সামর্থ্য কেমন?",
        options: [
            { text: "অত্যন্ত ভাল", score: 10 },
            { text: "মোটামুটি", score: 5 },
            { text: "নাই", score: -5 },
            { text: "কিছুটা দুর্বল", score: 0 }
        ]
    },
    {
        id: 26,
        question: "স্কুল বা কলেজের কোন প্রতিযোগিতায় কি কোন পুরস্কার পেয়েছো? ",
        options: [
            { text: "১ম বা ২য় ", score: 10 },
            { text: "৩য়", score: 5 },
            { text: "নাই", score: -5 },
            { text: "অন্যান্য", score: 0 }
        ]
    },
    {
        id: 27,
        question: "তোমার কয়জন প্রিয় বন্ধু রয়েছে?",
        options: [
            { text: "৫ এর কম", score: 0 },
            { text: "৫ হতে ১৫ এর মাঝে", score: 5 },
            { text: "নাই", score: -5 },
            { text: "১৫ এর অধিক", score: 10 }
        ]
    },
    {
        id: 28,
        question: "নীরবতা কতটা ভালো লাগে তোমার? ",
        options: [
            { text: "অত্যন্ত পছন্দ করি ", score: 10 },
            { text: "নীরবতা অপছন্দ করি", score: 0 },
            { text: "মোটামুটি ভালো লাগে", score: 5 },
            { text: "জানা নাই ", score: -5 }
        ]
    },
    {
        id: 29,
        question: "হৈচৈ আনন্দ করতে তোমার কতটা ভালো লাগে?",
        options: [
            { text: "অত্যন্ত পছন্দ করি", score: 0 },
            { text: "পছন্দ করি না", score: 10 },
            { text: "মোটামুটি ভালো লাগে", score: 5 },
            { text: "জানা নাই", score: -5 }
        ]
    }
    ,
    {
        id: 30,
        question: "রাতে সধারনত কখন ঘুমাও?",
        options: [
            { text: "রাত ১১ টা এর আগে", score: 10 },
            { text: "রাত ১১ টা হতে ১২ টা এর মাঝে", score: 5 },
            { text: "কোন নির্দিষ্ট সময় নাই", score: -5 },
            { text: "রাত ১২ টা এর পরে", score: 0 }
        ]
    },
    {
        id: 31,
        question: "শারীরিক শ্রমের কাজ করার অভ্যাস কেমন?",
        options: [
            { text: "অত্যন্ত পছন্দ করি ", score: 10 },
            { text: "খুব কম ", score: 0 },
            { text: "নাই", score: -5 },
            { text: "মোটামুটি", score: 5 }
        ]
    },
    {
        id: 32,
        question: "তোমার প্রিয় শখ কোনটি?",
        options: [
            { text: "এডভেঞ্চার", score: 5 },
            { text: "বই পড়া ", score: 10 },
            { text: "স্মার্টফোন কিংবা কম্পিউটার ব্যবহার", score: -5 },
            { text: "বন্ধুদের সাথে সময় কাটানো", score: 0 }
        ]
    }
];


const additionalQuizData = [
    //New Questions
    {
        id: 33,
        question: "অবসর সময়ে কোন কাজটি করতে তোমার ভালো লাগে?",
        options: [
            { text: "ছবি আকা,নতুন কিছু লেখালেখি,কিছু একটা উদ্ভাবন করার চেষ্টা বা এইরকম কিছু", score: 0 },
            { text: "কাছে বা দূরে বেড়াতে যাওয়া, বন্ধুদের নিয়ে খেলাধুলা করা", score: 0 },
            { text: "বিভিন্ন প্রকার বই বা ম্যাগাজিন পড়া কিংবা বিভিন্ন ভ্রমণ স্থান সম্পর্কে জানার চেষ্টা", score: 0 },
            { text: "মজাদার খাবারের সন্ধান করা কিংবা সেগুলো বানানোর চেষ্টা ", score: 0 }
        ]
    },
    {
        id: 34,
        question: "কোন বিষয়গুলো তোমাকে সবথেকে বেশি আনন্দিত করে?",
        options: [
            { text: "কোন বিষয়গুলো তোমাকে সবথেকে বেশি আনন্দিত করে", score: 0 },
            { text: "পাজল সমাধান, বুদ্ধির খেলা, কিংবা জটিল কোন সমস্যা সমাধানের মত কিছু করতে পারলে", score: 0 },
            { text: "পরিবার ও বন্ধুদের সাথে আলোচনা করে উপযুক্ত একটি সিদ্ধান্ত নিই ", score: 0 },
            { text: "সমস্যা গুলো মেনে নিয়ে চলি এবং আস্তে ধীরে নানা পদ্ধতিতে সেই টির সমাধান ", score: 0 }
        ]
    },
    {
        id: 35,
        question: "জটিল কোন সমস্যার সম্মুখীন হলে সাধারণত কি করো?",
        options: [
            { text: "গভীর ভাবে চিন্তা করে করে সেই সমস্যার সমাধান বেড় করার চেষ্টা করি", score: 0 },
            { text: "সমস্যাটি নিয়ে যৌক্তিক বিশ্লেষণ করে একটা পরিকল্পনা সাজায়", score: 0 },
            { text: "পরিবার ও বন্ধুদের সাথে আলোচনা করে উপযুক্ত একটি সিদ্ধান্ত নিই ", score: 0 },
            { text: "সমস্যা গুলো মেনে নিয়ে চলি এবং আস্তে ধীরে নানা পদ্ধতিতে সেই টির সমাধান ", score: 0 }
        ]
    },
    {
        id: 36,
        question: "কোন বিষয়গুলো নিয়ে পড়তে, গল্প বা আলোচনা করতে কিংবা চিন্তা ভাবনা করতে তোমার ভালো লাগে?",
        options: [
            { text: "নানা প্রকার শৈল্পিক বা সাহিত্যিক বিষয়", score: 0 },
            { text: "বিজ্ঞানের আবিস্কার, প্রযুক্তি কিংবা যুক্তিবাদী বিষয় ", score: 0 },
            { text: "সমাজ ও দেশের উন্নয়ন, মানুষের অধিকার, পরিবেশ এবং এইরুপ বিষয় ", score: 0 },
            { text: "মানুষের জীবন মানের উন্নয়ন, স্বাস্থ্য, খাদ্য, কিংবা নানাবিধ আনন্দজনক বিষয়", score: 0 }
        ]
    },
    {
        id: 37,
        question: "কোন ধরণের পেশা তোমার সব থেকে প্রিয় বলে অনুভব কর?",
        options: [
            { text: "সৃজনশীল কাজের মাধ্যমে নিজের পরিচয় তুলে ধরা", score: 0 },
            { text: "বিজ্ঞান ও প্রযুক্তি বিষয়ের গবেষণা ", score: 0 },
            { text: "সেবামুলক কাজের মাধ্যমে দেশ ও সমাজের কল্যাণ", score: 0 },
            { text: "বিভিন্ন সমাজ ও দেশের সংস্কৃতি বিষয়ে গবেষণা, কিংবা লেখালেখির মাধ্যমে মানুষকে সচেতন করা", score: 0 }
        ]
    },
    {
        id: 38,
        question: "কোন ধরণের কাজে তুমি স্বেচ্ছা শ্রম দিতে পছন্দ কর?",
        options: [
            { text: "নতুন কোন সংগঠন, সৃজনশীল কিছু কাজ", score: 0 },
            { text: "বৈজ্ঞানিক আবিস্কার কিংবা সমস্যা সমাধানের মত কাজ", score: 0 },
            { text: "সমাজ ব্যবস্থায় গঠন মূলক পরিবর্তনের জন্য কিছু কাজ", score: 0 },
            { text: "নতুন নতুন অভিজ্ঞতা অর্জনের মত কাজ", score: 0 }
        ]
    },
    {
        id: 39,
        question: "কোনটির সাথে তোমার সবথেকে বেশি আত্মিক সংযোগ রয়েছে বলে তুমি অনুভব কর?",
        options: [
            { text: "নতুন কিছু উদ্ভাবন", score: 0 },
            { text: "গনিত", score: 0 },
            { text: "সেবা মূলক কাজ", score: 0 },
            { text: "ভ্রমণ", score: 0 }
        ]
    },
    {
        id: 40,
        question: "তোমার সবথেকে প্রিয় শখের বিষয় কোনটি?",
        options: [
            { text: "সঙ্গীত, সাহিত্য, অংকন, কিংবা আরও কোন শিল্প", score: 0 },
            { text: "যে কোন প্রকার চ্যলেঞ্জিং কাজের মাধ্যমে এডভেঞ্চার করা", score: 0 },
            { text: "দেশের সম্মান ও সামাজিক কল্যাণের বিষয়ে নিয়োজিত হওয়া", score: 0 },
            { text: "দেশ ও বিদেশ সম্পর্কে জানা", score: 0 }
        ]
    },
    {
        id: 41,
        question: "কোন কাজটি তোমার নিকট সবথেকে মূল্যবান অনুভুত হয়?",
        options: [
            { text: "নতুন নতুন সৃষ্টিশীল কাজের মাধ্যমে নিজের পরিচয়কে প্রতিষ্ঠিত করা", score: 0 },
            { text: "যে কোন সমস্যা সমাধানের জন্য সর্বোচ্চ প্রচেষ্টা চালানো", score: 0 },
            { text: "জগতের সকল মানুষের কল্যাণে কাজ করা", score: 0 },
            { text: "নানা দেশ ও নানা মানুষের সাথে মিলে মিশে থাকার দক্ষতা অর্জন করা", score: 0 }
        ]
    },
    {
        id: 42,
        question: "কোনটি অর্জন করলে তুমি নিজেকে সবথেকে সফল অনুভব করবে?",
        options: [
            { text: "যুগান্তকারী কিছু আবিস্কার করার মধ্য দিয়ে নিজেকে পৃথিবীর মানুষের কাছে তুলে ধরতে পারলে", score: 0 },
            { text: "যে কোন পেশাই হোক না কেন, সেখানে সর্বোচ্চ মর্যাদার আসন অর্জন করলে", score: 0 },
            { text: "জগতের সকল মানুষের কল্যাণ ও তাদের অধিকার রক্ষা করার কাজে সফল হলে", score: 0 },
            { text: "আপন অভিজ্ঞতাগুলো পৌঁছে দিয়ে জগতের মানুষকে সচেতন করার কাজে সফল হলে", score: 0 }
        ]
    }
];
// Merge the original quiz data with the additional quiz data
const mergedQuizData = [...quizData, ...additionalQuizData];
const quizContainer = document.getElementById('quiz');
const breakContainer = document.getElementById('break');
const footer = document.getElementById('footer');
const timeDisplay = document.getElementById('time');
const questionNumberDisplay = document.getElementById('current-question');

const userAnswers = []; //array to store user's selected answers

let currentQuestion = 0;
let round = 1;

// Function to load question
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomNumber = Math.random()
        const j = Math.floor(randomNumber * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let i = 0;
/*
function loadQuestion() {
    // Shuffle 
    //const shuffledQuizData = shuffleArray(mergedQuizData);
    const shuffledQuizData = mergedQuizData;

    const currentQuizData = shuffledQuizData[currentQuestion];
    const options = currentQuizData.options.map((option, index) => {
        return `<div class="option" onclick="checkAnswer(${index})">${option.text}</div>`;
    }).join('');

    quizContainer.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <div class="options">${options}</div>
    `;
    questionNumberDisplay.textContent = currentQuestion + 1;
    ++i;
    if (i === 14 || i === 28) {
        timeDisplay.style.display = 'none';
        breakTime();
    }
}
*/
function loadQuestion() {
    const currentQuizData = mergedQuizData[currentQuestion];
    const options = currentQuizData.options.map((option, index) => {
        return `<div class="option" onclick="checkAnswer(${index})">${option.text}</div>`;
    }).join('');

    quizContainer.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <div class="options">${options}</div>
    `;
    questionNumberDisplay.textContent = currentQuestion + 1;
}
/*
//break time
function breakTime() {

    time = 2;

    breakContainer.style.display = 'block';
    quizContainer.style.display = 'none';

    const intervalId = setInterval(() => {
        timeDisplay.style.display = 'none';
        breakContainer.innerHTML = `${time}`;
        time--; // Decrease time by 1 second

        if (time < 0) {
            clearInterval(intervalId); // Stop the timer when it reaches 0
            breakContainer.style.display = 'none';
            quizContainer.style.display = 'block';
            breakContainer.innerHTML = `Next round will start soon...`;
            startTimer(30);
            loadQuestion()
            ++round;
        }
    }, 1000);

}*/


// Function to start timer
let isTimeRunning = true;
function startTimer(time) {
    const intervalId = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--; // Decrease time by 1 second
        if (time < 0) {
            clearInterval(intervalId); // Stop the timer when it reaches 0

            showResult();
        }
    }, 1000);
}

// Function to check answer
function checkAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex; // Storeselected answer
    currentQuestion++;
    if (currentQuestion < mergedQuizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to start the quiz
function startQuiz() {
    document.querySelector('.landing-page').style.display = 'none'; // Hide landing page
    document.querySelector('.wrapper').style.display = 'block'; // Show quiz section
    loadQuestion(); // Load the first question
    startTimer(600); // Start the timer
}

// Function to handle form submission and show landing page
function showLandingPage(event) {
    event.preventDefault(); // Prevent form submission
    const introSection = document.querySelector('.intro-section');
    introSection.style.display = 'none'; // Hide intro section
    const landingPage = document.querySelector('.landing-page');
    landingPage.style.display = 'flex'; // Show landing page
}
// Add an event listener to the form for form submission
document.getElementById('userInfoForm').addEventListener('submit', showLandingPage);

// Function to calculate score for a question
function calculateScore(questionIndex) {
    const selectedOptionIndex = userAnswers[questionIndex];
    const selectedOption = mergedQuizData[questionIndex].options[selectedOptionIndex];
    return selectedOption?.score;
}

// Function to calculate score based on selected options from additional questions
function calculateFavoredOccupation() {
    const optionCounts = {};
    additionalQuizData.forEach(question => {
        const selectedOptionIndex = userAnswers[question.id - 1]; // Question ID starts from 1
        if (selectedOptionIndex !== undefined) {
            const selectedOption = question.options[selectedOptionIndex];
            optionCounts[selectedOption.text] = (optionCounts[selectedOption.text] || 0) + 1;
        }
    });

    // Find the most selected option
    let maxOptionCount = 0;
    let favoredOption = '';
    for (const optionText in optionCounts) {
        if (optionCounts[optionText] > maxOptionCount) {
            maxOptionCount = optionCounts[optionText];
            favoredOption = optionText;
        }
    }

    return favoredOption;
}




function showResult() {

    document.getElementById('footer').style.display = 'none';
    let totalScore = 0;
    for (let i = 0; i < mergedQuizData.length; i++) {
        totalScore += calculateScore(i) ? calculateScore(i) : 0;
    }

    const optionClickCounts = {};
    additionalQuizData.forEach(question => {
        const selectedOptionIndex = userAnswers[question.id - 1]; // Question ID starts from 1
        if (selectedOptionIndex !== undefined) {
            const selectedOption = question.options[selectedOptionIndex];
            optionClickCounts[selectedOption.text] = (optionClickCounts[selectedOption.text] || 0) + 1;
        }
    });

    const userName = document.getElementById('name').value;
    const userPhone = document.getElementById('phone').value;
    // Logic to check score and option clicks
    if (totalScore >= 145) {
        const optionLessThan6 = Object.values(optionClickCounts).some(count => count < 6);
        if (optionLessThan6) {
            // Display message with Restart Button
            quizContainer.innerHTML = ` প্রিয় ${userName} , তোমার মাঝে অফুরন্ত সম্ভাবনা রয়েছে।কিন্তু তোমার দেওয়া উত্তরগুলোতে কিছু  অসামঞ্জস্যতা পরিলক্ষিত হচ্ছে। তুমি এই এসেসমেন্ট সিটগুলো পুনরায় পূরণ কর।আমরা তোমাকে সহযোগিতা করতে চাইছি তবে আমাদের দেওয়া প্রশ্নগুলোর উত্তর দেওয়ার সময় তুমি নিজের অন্তরে উপস্থিত হওয়া প্রথম অনুভুতিটি দিয়ে পুনরায় উত্তর দাও। তুমি শুধু প্রশ্নগুলো পড়বে আর নিজের জন্য সবথেকে সত্য মনে হওয়া উত্তরটি বেছে নিবে। মনে রেখ, এখানে সঠিক কিংবা ভুল উত্তর বলে কিছু নেই, তুমি শুধু সততার সাথে আপন মনের প্রথম অনুভূতি থেকে উত্তরগুলো বেছে নেবে। <br> 
            <button onclick="location.reload()" class="dbtn">Restart</button>`;
        } else {
            /**advice**/

            var oc="ইঞ্জিনিয়ার";
            quizContainer.innerHTML = `অনেক অনেক অভিনন্দন প্রিয় ${userName}, তুমি ঠিক পথেই এগিয়ে চলেছ। তোমার পেশাগত লক্ষ্য, তোমার জীবন যাপন এবং দৈনিন্দন অভ্যাসগুলো সঠিক ও পরিপূর্ণভাবে সামঞ্জস্যপূর্ণ। একজন সফল ${oc} হওয়ার জন্য সবথেকে উপযুক্ত তুমি তাই এই পেশাটিই তোমার লক্ষ্য হওয়া উচিত। এই লক্ষ্যটি অর্জন করলে তুমি নিজ পেশাতে একজন কিংবদন্তী সৃজনশীল মানুষ হতে পারবে। প্রিয় কাজে প্রিয় পেশায় তুমি সুখী মানুষদের একজন হয়ে জীবনকে অনেক বেশি উপভোগ করতে পারবে। ${oc} হওয়ার এই লক্ষ্য পূরণে তোমার মাঝে যে প্রবল অনুশক্তি ও সম্ভাবনা রয়েছে তা অর্জন করার জন্য তোমাকে নিচের পরামর্শগুলো মেনে চলতে অনুরোধ করছি। লক্ষ্য পূরণে তোমার প্রতি মহান স্রষ্টার পক্ষ হতে আসুক অফুরন্ত সাহায্য আর মানব কল্যাণের পথে তুমি এগিয়ে চল- এই দোয়া রইল। 
            <button " class="download-pdf-button dbtn" onclick="downloadPDF()">Download PDF</button>`;
        }
    } else {
        const optionMoreThan6 = Object.values(optionClickCounts).some(count => count >= 6);
        if (optionMoreThan6) {
            //advice
            // Display message  with download button
            quizContainer.innerHTML = ` প্রিয় ${userName}, তোমার মাঝে অফুরন্ত সম্ভাবনা রয়েছে। অনেক ক্ষেত্রে তুমি অত্যন্ত শক্তিশালী কিন্তু তোমার পেশাগত লক্ষ্যের সাথে তোমার জীবন যাপন এবং দৈনিন্দন অভ্যাসগুলো বেশ কিছুটা অসামঞ্জস্যপূর্ণ। তবে দুর্বলতাগুলো সহজেই কাটিয়ে ওঠার সব সামর্থ্য ও সম্ভাবনা তোমার মাঝেই রয়েছে। জীবন লক্ষ্য পূরণে তোমার মাঝে যে সুপ্ত শক্তি ঘুমিয়ে রয়েছে তাকে জাগিয়ে তুলতে হবে তোমাকেই। আমরা তোমাকে নিচের পরামর্শগুলো মেনে চলার জন্য অনুরোধ করছি; তোমার দৈনিন্দন জীবন যাপন ও অভ্যাসের মাঝে এই পরিবর্তনগুলো আনতে পারলে নিশ্চিত ভাবেই তুমি আপন লক্ষে সফল হবে। তোমার প্রতি মহান স্রষ্টার সাহায্য সামনেই অপেক্ষা করছে, তুমি শুধু চেষ্টা করে যাও আন্তরিকতার সাথে। মানবকল্যাণের পথে তুমি এগিয়ে চল- এই দোয়া রইল।
            <button  class="download-pdf-button dbtn" onclick="downloadPDF()">Download PDF</button>`;
        } else {
            var ocu= "বিচারক";
            // Display message  with download button
            quizContainer.innerHTML = ` প্রিয় ${userName}, তোমার মাঝে অফুরন্ত সম্ভাবনা রয়েছে এবং তুমি চেষ্টা করলে নিশ্চিতভাবেই একজন অত্যন্ত সফল ${ocu} হতে পারবে। একজন সফল ${ocu} হওয়ার জন্য সবথেকে উপযুক্ত তুমি তাই এই পেশাটিই তোমার লক্ষ্য হওয়া উচিত। এই লক্ষ্যটি অর্জন করলে তুমি নিজ পেশাতে একজন কিংবদন্তী সৃজনশীল মানুষ হতে পারবে। প্রিয় কাজে প্রিয় পেশায় তুমি সুখী মানুষদের একজন হয়ে জীবনকে অনেক বেশি উপভোগ করতে পারবে। ${ocu} হওয়ার এই লক্ষ্য পূরণে তোমার মাঝে যে প্রবল অনুশক্তি ও সম্ভাবনা রয়েছে তা অর্জন করার জন্য তোমাকে নিচের পরামর্শগুলো মেনে চলতে অনুরোধ করছি। লক্ষ্য পূরণে তোমার প্রতি মহান স্রষ্টার পক্ষ হতে আসুক অফুরন্ত সাহায্য আর মানব কল্যাণের পথে তুমি এগিয়ে চল- এই দোয়া রইল।
            <button  class="download-pdf-button dbtn" onclick="downloadPDF()">Download PDF</button>`;
        }
    }
}


function downloadPDF() {
    const userName = document.getElementById('name').value;
    const userPhone = document.getElementById('phone').value;
    const uniqueNumber = Math.floor(Math.random() * 1000000); // Generate a random number
    const fileName = `${userName}_${userPhone}_${uniqueNumber}_Certificate.pdf`;

    const element = document.getElementById('wrapper');

    // Create a copy of the element to modify for PDF generation
    const elementCopy = element.cloneNode(true);
    const downloadButton = elementCopy.querySelector('.download-pdf-button');
    if (downloadButton) {
        downloadButton.parentNode.removeChild(downloadButton);
    }

    // Add styling to the container
    elementCopy.style.position = 'relative';
    elementCopy.style.padding = '20px';
    elementCopy.style.border = '1px solid #ccc';
    elementCopy.style.borderRadius = '8px';
    elementCopy.style.backgroundColor = '#fff';
    elementCopy.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';

    // Add header
    const headerDiv = document.createElement('div');
    headerDiv.style.textAlign = 'center';
    headerDiv.style.fontSize = '24px';
    headerDiv.style.fontWeight = 'bold';
    headerDiv.style.color = 'darkblue';
    headerDiv.textContent = 'Life Science Academy';
    elementCopy.insertBefore(headerDiv, elementCopy.firstChild);

    // Add unique number to PDF content
    const uniqueNumberDiv = document.createElement('div');
    uniqueNumberDiv.style.position = 'absolute';
    uniqueNumberDiv.style.top = '10px';
    uniqueNumberDiv.style.right = '10px';
    uniqueNumberDiv.style.fontSize = '14px';
    uniqueNumberDiv.textContent = `ID: ${uniqueNumber}`;
    elementCopy.appendChild(uniqueNumberDiv);

    // Add copyright footer
    const footerDiv = document.createElement('div');
    footerDiv.style.position = 'absolute';
    footerDiv.style.bottom = '10px';
    footerDiv.style.left = '50%';
    footerDiv.style.transform = 'translateX(-50%)';
    footerDiv.style.fontSize = '12px';
    footerDiv.textContent = `© ${new Date().getFullYear()} Life Science Academy`;
    elementCopy.appendChild(footerDiv);

    // Generate PDF using html2pdf library
    html2pdf()
        .from(elementCopy)
        .set({ filename: fileName }) // Set the filename
        .save();
}
