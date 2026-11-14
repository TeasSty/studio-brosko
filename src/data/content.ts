const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export type ProjectCategory = 'residential' | 'commercial'

export type Project = {
  id: string
  title: string
  type: string
  category: ProjectCategory
  image: string
  alt: string
}

export const projects: Project[] = [
  {
    id: 'mediterranean',
    title: 'Средиземноморская шкатулка',
    type: 'Квартира',
    category: 'residential',
    image: asset('images/mediterranean-07.jpg'),
    alt: 'Интерьер проекта «Средиземноморская шкатулка»',
  },
  {
    id: 'inner-balance',
    title: 'INNER — BALANCE',
    type: 'Йога-студия',
    category: 'commercial',
    image: asset('images/yoga-01.jpg'),
    alt: 'Проект йога-студии INNER — BALANCE',
  },
  {
    id: 'archive-living',
    title: 'Гостиная из архива',
    type: 'Квартира',
    category: 'residential',
    image: asset('images/mediterranean-06.jpg'),
    alt: 'Гостиная из портфолио студии BROSKO',
  },
  {
    id: 'archive-detail',
    title: 'Детали пространства',
    type: 'Квартира',
    category: 'residential',
    image: asset('images/mediterranean-08.jpg'),
    alt: 'Детали интерьера из портфолио BROSKO',
  },
  {
    id: 'archive-room',
    title: 'Жилая комната',
    type: 'Квартира',
    category: 'residential',
    image: asset('images/project-03.jpg'),
    alt: 'Жилой интерьер из архива дизайнеров',
  },
  {
    id: 'yoga-space',
    title: 'Зал практики',
    type: 'Йога-студия',
    category: 'commercial',
    image: asset('images/yoga-02.jpg'),
    alt: 'Зал практики в проекте INNER — BALANCE',
  },
]

export const solutions = [
  {
    title: 'Свет',
    image: asset('images/solution-light.jpg'),
    caption: 'Светотехника и сценарии освещения',
  },
  {
    title: 'Отделка',
    image: asset('images/solution-finish.jpg'),
    caption: 'Образцы материалов в салоне',
  },
  {
    title: 'Текстиль',
    image: asset('images/solution-textile.jpg'),
    caption: 'Ткани, обивка, мягкие поверхности',
  },
  {
    title: 'Планировка',
    image: asset('images/solution-plan.jpg'),
    caption: 'Концепция, чертежи, документация',
  },
]

export const processSteps = [
  {
    num: '01',
    title: 'Идея и задача',
    text: 'Разбираем привычки, ритм жизни и бюджет — фиксируем, что важно именно вам.',
  },
  {
    num: '02',
    title: 'Планировка и концепция',
    text: 'Собираем планировочное решение и характер будущего пространства.',
  },
  {
    num: '03',
    title: 'Визуализация и чертежи',
    text: '3D и рабочая документация, чтобы результат был понятен до ремонта.',
  },
  {
    num: '04',
    title: 'Материалы и реализация',
    text: 'Подбор отделки в салоне и ведение проекта до готового интерьера.',
  },
]

export const designers = [
  {
    name: 'Юлия Шадрина',
    role: 'Дизайнер интерьера',
    image: asset('images/designer-01.jpg'),
  },
  {
    name: 'Алёна Бертяева',
    role: 'Дизайнер интерьера',
    image: asset('images/designer-02.jpg'),
  },
  {
    name: 'Светлана Некрасова',
    role: 'Дизайнер интерьера',
    image: asset('images/designer-03.jpg'),
  },
  {
    name: 'Светлана Долгобородова',
    role: 'Дизайнер интерьера',
    image: asset('images/designer-04.jpg'),
  },
]

export const contacts = {
  phones: [
    { label: '46-08-84', href: 'tel:+78182460884' },
    { label: '+7 921 600-98-71', href: 'tel:+79216009871' },
  ],
  address: 'Архангельск, пр-т Новгородский, 32, объект «А»',
  hours: 'Пн–Пт 11:00–19:00 · Сб 11:00–16:00',
  email: 'i.d.studio@mail.ru',
  vk: 'https://vk.ru/studio_brosko',
}

export const heroImage = asset('images/mediterranean-07.jpg')
export const salonImage = asset('images/mediterranean-06.jpg')
