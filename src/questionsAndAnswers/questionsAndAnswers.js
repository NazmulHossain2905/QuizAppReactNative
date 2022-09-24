const allQuestionsAndAnswers = [
  {
    title: 'ইসলামিক কুইজ',
    quiz: true,
    subject: false,
    question: true,
    img: require('../assets/images/mosque.png'),
    islamicQuiz: [
      {
        id: 1,
        questionNo: '১',
        question: 'আমাদের সৃষ্টিকর্তার নাম কি?',
        hint1: 'খোদা',
        hint2: 'God',
        hint3: 'আল্লাহ',
        hint4: 'Lord',
        answer: 'আল্লাহ',
      },
      {
        id: 2,
        questionNo: '২',
        question: 'আল্লাহর কতগুলো নাম রয়েছে?',
        hint1: '৯৯',
        hint2: '১০০',
        hint3: 'একটি',
        hint4: 'অসংখ্য-অগণিত',
        answer: 'অসংখ্য-অগণিত',
      },
      {
        id: 3,
        questionNo: '৩',
        question: 'আমাদের সৃষ্টিকর্তা আল্লাহ্‌ কোথায় আছেন?',
        hint1: 'নির্দিষ্ট কিছু কিছু জায়গায়',
        hint2: 'সর্বত্র বিরাজমান',
        hint3: 'সপ্তাকাশের উপর আরশে আযীমে',
        hint4: 'মানুষের অন্তরে (ক্বলব)',
        answer: 'সপ্তাকাশের উপর আরশে আযীমে',
      },
      {
        id: 4,
        questionNo: '৪',
        question: 'তাওহীদ শব্দের অর্থ কি ?',
        hint1: 'একত্ববাদ',
        hint2: 'বিশ্বাস',
        hint3: 'অনুগত্য',
        hint4: 'একনিষ্ঠতা',
        answer: 'একত্ববাদ',
      },
      {
        id: 5,
        questionNo: '৫',
        question: 'তাওহীদ কত প্রকার?',
        hint1: '১',
        hint2: '২',
        hint3: '৩',
        hint4: '৪',
        answer: '৩',
      },
      {
        id: 6,
        questionNo: '৬',
        question: 'আল্লাহর ৯৯টি নাম মুখস্ত করার ফযীলত কি?',
        hint1: 'প্রতি হরফে ১০ নেকি ।',
        hint2: 'মুখস্ত এবং আমল করলে বিনিময়ে জান্নাত।',
        hint3: 'এর ফজিলত কুরআন-হাদিসে বর্ণিত নয় ।',
        hint4: 'নির্দিষ্ট কোন ফজিলত নাই ।',
        answer: 'মুখস্ত এবং আমল করলে বিনিময়ে জান্নাত।',
      },
      {
        id: 7,
        questionNo: '৭',
        question: '‘মুমিনের কলব আল্লাহর আরশ’ এটা কার কথা?',
        hint1: 'আল্লাহর',
        hint2: 'রাসূলের (স.)',
        hint3: 'মানুষের বানানো মিথ্যা কথা (জাল হাদীছ) ।',
        hint4: 'সাহাবীদের কথা ।',
        answer: 'মানুষের বানানো মিথ্যা কথা (জাল হাদীছ) ।',
      },
      {
        id: 8,
        questionNo: '৮',
        question: 'আল্লাহ কি নিরাকার?',
        hint1: 'হ্যাঁ কারণ তিনি সর্বত্র বিরাজমান ।',
        hint2: 'এ বিষয়ে কুরআনে কিছু বলা হয় নাই ।',
        hint3: 'না কারণ তাঁর অসিত্ব ও সত্তা আছে।',
        hint4: 'উপরের কোনটি সঠিক নয় ।',
        answer: 'না কারণ তাঁর অসিত্ব ও সত্তা আছে।',
      },
      {
        id: 9,
        questionNo: '৯',
        question: 'ঈমান শব্দের অর্থ কি ?',
        hint1: 'একত্ববাদ',
        hint2: 'অনুগত্য',
        hint3: 'একনিষ্ঠতা',
        hint4: 'বিশ্বাস',
        answer: 'বিশ্বাস',
      },
      {
        id: 10,
        questionNo: '১০',
        question: 'ঈমান কি কমে ও বাড়ে (পরিবর্তন হয় )?',
        hint1: 'না',
        hint2: 'হ্যাঁ',
        hint3: 'এ বিষয়ে কুরআন-হাদিসে কিছু বলা নাই ।',
        hint4: 'উপরের কোনটি সঠিক নয় ।',
        answer: 'হ্যাঁ',
      },
      {
        id: 11,
        questionNo: '১১',
        question: 'ঈমানের শাখা কতটি?',
        hint1: 'সত্তরের অধিক',
        hint2: 'একাত্তরের অধিক',
        hint3: 'বায়ান্নোর অধিক',
        hint4: 'শতাধিক',
        answer: 'সত্তরের অধিক',
      },
      {
        id: 12,
        questionNo: '১২',
        question: 'ঈমানের সর্বোচ্চ স্তর কি?',
        hint1: 'নামাজ/সালাত',
        hint2: 'রোজা/সিয়াম',
        hint3: 'কালিমা / লা-ইলাহা ইল্লাল্লাহু',
        hint4: 'হজ্জ',
        answer: 'কালিমা / লা-ইলাহা ইল্লাল্লাহু',
      },
      {
        id: 13,
        questionNo: '১৩',
        question: 'ঈমানের সর্বনিম্ন শাখা কি?',
        hint1: 'টাকা ধার/হাওলাদ/ঋণ দেওয়া',
        hint2: 'রাস্তা থেকে কষ্টদায়ক বস্তু অপসারণ করা',
        hint3: 'সত্য কথা বলা',
        hint4: 'গালি না দেওয়া',
        answer: 'রাস্তা থেকে কষ্টদায়ক বস্তু অপসারণ করা',
      },
      {
        id: 14,
        questionNo: '১৪',
        question: 'ঈমানের স্তম্ভ কয়টি?',
        hint1: '৫',
        hint2: '৬',
        hint3: '৭',
        hint4: '৮',
        answer: '৬',
      },
      {
        id: 15,
        questionNo: '১৫',
        question: 'আল্লাহর ফেরেশতাগণ কিসের তৈরী?',
        hint1: 'আগুনের',
        hint2: 'নূরের',
        hint3: 'মাটির',
        hint4: 'পানি ও বাতাসের',
        answer: 'নূরের',
      },
      {
        id: 16,
        questionNo: '১৬',
        question: 'ফেরেশতাদের সংখ্যা কত?',
        hint1: '২৬ হাজার',
        hint2: '৯২ হাজার',
        hint3: '১ লক্ষ ৩৫ হাজার',
        hint4: 'অসংখ্য ( আল্লাহ ছাড়া কেউ জানে না)',
        answer: 'অসংখ্য ( আল্লাহ ছাড়া কেউ জানে না)',
      },
      {
        id: 17,
        questionNo: '১৭',
        question: 'ওহী নাযিল করার দায়িত্ব কোন ফেরেশতার ছিল?',
        hint1: 'জিবরাঈল (আঃ)',
        hint2: 'ইসরাফীল (আঃ)',
        hint3: 'মালাকুল মওত (আঃ)',
        hint4: 'মীকাঈল (আঃ)',
        answer: 'জিবরাঈল (আঃ)',
      },
      {
        id: 18,
        questionNo: '১৮',
        question: 'কোন ফেরেশতাকে সকল ফেরেশতার সরদার বলা হয়?',
        hint1: 'জিবরাঈল (আঃ)',
        hint2: 'ইসরাফীল (আঃ)',
        hint3: 'মালাকুল মওত (আঃ)',
        hint4: 'মীকাঈল (আঃ)',
        answer: 'জিবরাঈল (আঃ)',
      },
      {
        id: 19,
        questionNo: '১৯',
        question: 'ইসরাফীল (আঃ) এর দায়িত্ব কি?',
        hint1: 'জান কবজ',
        hint2: 'বৃষ্টি বর্ষণ, উদ্ভিদ উৎপাদন',
        hint3: 'শিংগায় ফুৎকার',
        hint4: 'উপরের কোনটি নয়',
        answer: 'শিংগায় ফুৎকার',
      },
      {
        id: 20,
        questionNo: '২০',
        question: 'মীকাঈল (আঃ) এর দায়িত্ব কি?',
        hint1: 'জান কবজ',
        hint2: 'বৃষ্টি বর্ষণ, উদ্ভিদ উৎপাদন',
        hint3: 'শিংগায় ফুৎকার',
        hint4: 'উপরের কোনটি নয়',
        answer: 'বৃষ্টি বর্ষণ, উদ্ভিদ উৎপাদন',
      },
    ],
    total: '২০',
  },
  {
    title: 'কম্পিউটার সম্পর্কে',
    quiz: false,
    subject: false,
    question: true,
    img: require('../assets/images/computer.png'),
    questionAndAnswer: [
      {
        id: 1,
        questionNo: '১',
        question: 'কম্পিউটারের আবিষ্কারক কে?',
        answer: ' হাওয়ার্ড এ্যাইকিন।',
      },
      {
        id: 2,
        questionNo: '২',
        question: 'কম্পিউটারের স্থায়ী স্মৃতিশক্তিকে কি বলে?',
        answer: 'Rom',
      },
      {
        id: 3,
        questionNo: '৩',
        question: 'কম্পিউটারে কোনটি নেই?',
        answer: 'বুদ্ধি বিবেচনা।',
      },
      {
        id: 4,
        questionNo: '৪',
        question: 'কোনটি কম্পিউটারের সকল কার্যক্রম নিয়ন্ত্রণ করে?',
        answer: 'সেন্ট্রাল প্রসেসিং ইউনিট।',
      },
      {
        id: 5,
        questionNo: '৫',
        question: 'কম্পিউটার শব্দের অর্থ কি?',
        answer: 'গননাকারী যন্ত্র।',
      },
      {
        id: 6,
        questionNo: '৬',
        question: 'ই-মেইল কি?',
        answer: 'ইলেকট্রনিক মেইল।',
      },
      {
        id: 7,
        questionNo: '৭',
        question: 'কম্পিউটারের ব্রেইন বলা হয় কাকে?',
        answer: 'মাইক্রো প্রসেসর।',
      },
      {
        id: 8,
        questionNo: '৮',
        question: 'কম্পিউটারের যন্ত্রাংশ বা যন্ত্রকে কি বলে?',
        answer: 'হার্ডওয়্যার।',
      },
      {
        id: 9,
        questionNo: '৯',
        question: 'বর্তমান কম্পিউটার জগতের কিংবদন্তি কে?',
        answer: 'বিল গেটস।',
      },
      {
        id: 10,
        questionNo: '১০',
        question: 'কম্পিউটার বায়োস (BIOS) কি?',
        answer: 'Basic Input-Output System',
      },
      {
        id: 11,
        questionNo: '১১',
        question: 'কম্পিউটারের প্রধান প্রিন্টেড সার্কিট বোর্ডকে কি বলা হয়?',
        answer: 'মাদারবোর্ড।',
      },
      {
        id: 12,
        questionNo: '১২',
        question: 'কম্পিউটার র‍্যাম কি?',
        answer: 'স্মৃতিশক্তি।',
      },
      {
        id: 13,
        questionNo: '১৩',
        question: 'কম্পিউটারের এই ‘#’ চিহ্ন কে কি বলে?',
        answer: 'হ্যাস চিহ্ন।',
      },
      {
        id: 14,
        questionNo: '১৪',
        question: 'Net অর্থ কি?',
        answer: 'জাল।',
      },
      {
        id: 15,
        questionNo: '১৫',
        question: 'মাইক্রো শব্দের অর্থ কি?',
        answer: 'ক্ষুদ্রাকার।',
      },
      {
        id: 16,
        questionNo: '১৬',
        question:
          'অসংখ্য কম্পিউটারের সমন্বয়য়ে গঠিত বিশ্বব্যাপী কম্পিউটার নেটওয়ার্ককে কি বলা হয়?',
        answer: 'ইন্টারনেট।',
      },
      {
        id: 17,
        questionNo: '১৭',
        question: 'কম্পিউটারের ব্যবহার নয় কোনটি?',
        answer: 'স্বপ্ন দেখা।',
      },
      {
        id: 18,
        questionNo: '১৮',
        question: 'মাউস ক্লিক বলতে কি বুঝায়?',
        answer: 'মাউসের বাম বোতামে চাপা।',
      },
      {
        id: 19,
        questionNo: '১৯',
        question: 'কম্পিউটার শব্দের উৎপত্তি কোন শব্দ থেকে?',
        answer: 'Compute শব্দ থেকে।',
      },
      {
        id: 20,
        questionNo: '২০',
        question: 'কম্পিউটারে কয় ধরনের ড্রাইভ থাকে?',
        answer: '৩ ধরনের।',
      },
    ],
  },
  {
    title: 'বাংলাদেশ বিষয়াবলী',
    quiz: false,
    subject: true,
    question: true,
    img: require('../assets/images/book.png'),
    questionAndAnswer: [
      {
        title: 'সাধারণ জ্ঞান বাংলাদেশ বিষয়াবলী',
      },
      {
        title: 'বিজ্ঞান ও প্রযুক্তি',
      },
      {
        title: 'আন্তর্জাতিক বিষয়াবলী',
      },
    ],
  },
];

export default allQuestionsAndAnswers;

// islamicQuiz