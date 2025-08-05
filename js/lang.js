const translations = {
  RU: {
    'nav.home': 'Главная',
    'nav.about': 'О Нас',
    'nav.services': 'Услуги',
    'nav.catalog': 'Каталог',
    'nav.contact': 'Контакт',
    'about.prefix': 'О компании',
    'home.line1': 'предоставляет профессиональные услуги.',
    'home.line2': 'Мы работаем, чтобы вы могли сосредоточиться на главном.',
    'home.button': 'Услуги',
    'about.title': 'О компании Adera Group',
    'about.line1': 'Adera Group – команда профессионалов с опытом в строительстве жилых зданий и инженерных систем. Мы реализуем проекты любой сложности, обеспечивая качество, безопасность и современные решения.',
    'about.line2': 'Широкий спектр услуг – Наши специалисты разрабатывают и внедряют системы водоснабжения, отопления и кондиционирования воздуха, а также предлагают полный комплекс работ под ключ.',
    'about.line3': 'Индивидуальный подход – Мы внимательно учитываем требования каждого клиента и подбираем оптимальные решения для каждого объекта.',
  },
  KZ: {
    'nav.home': 'Басты бет',
    'nav.about': 'Біз туралы',
    'nav.services': 'Қызметтер',
    'nav.catalog': 'Каталог',
    'nav.contact': 'Байланыс',
    'about.prefix': 'Компания туралы',
    'home.line1': 'кәсіби қызметтерді ұсынады.',
    'home.line2': 'Сіз маңыздыға назар аудара алуыңыз үшін біз жұмыс істейміз.',
    'home.button': 'Қызметтер',
    'about.title': 'Adera Group компаниясы туралы',
    'about.line1': 'Adera Group – тұрғын үйлер мен инженерлік жүйелерді салуда тәжірибесі бар кәсіби мамандар командасы. Біз сапа, қауіпсіздік және заманауи шешімдерге кепілдік бере отырып, кез келген күрделіліктегі жобаларды жүзеге асырамыз.',
    'about.line2': 'Қызметтердің кең спектрі – Біздің мамандар сумен жабдықтау, жылыту және ауа баптау жүйелерін әзірлеп, орнатады, сонымен қатар жобаларды толықтай жүзеге асырады.',
    'about.line3': 'Жеке көзқарас – Біз әр клиенттің талаптарын ескеріп, әр нысан үшін ең тиімді шешімдерді ұсынамыз.',
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Обновим заголовок кнопки языка
  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = lang + ' ▾';

  localStorage.setItem('language', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'RU';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-menu li').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);

      document.querySelectorAll('.lang-menu li').forEach(li => li.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});
