'use strict';

class Human {
  anatomy = {
    head: {
      inStock: true,
      nameLatin: '',
      nameRussian: 'голова',
      description: '',
      pathImg: 'img/small/smile.png',
      brain: {
        quantity: null,
        medullaOblongata: {
          substantiaGrisea: [] //серое вещество
        }, //Продолговатый мозг
      },
      cranium: {
        inStock: true,
        nameLatin: 'cranium',
        nameRussian: 'Череп',
        description: 'Состоит из двадцати восьми костей. Защищает мозг и ограны чувств от повреждений.',
        pathImg: 'img/small/smile.png',
        pathFullImg: 'img/fullimg/smile.png',
        osFrontale: {
          inStock: true,
          nameLatin: 'os frontale',
          nameRussian: 'лобная кость',
          description: 'Образует лоб и верхние стенки глазниц. При рождении состоит из двух половин, которые затем срастаются между собой.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        suturaСoronalis: {
          inStock: true,
          nameLatin: 'sutura coronalis',
          nameRussian: 'венечный шов',
          description: 'Сочленение лобной кости с теменными костями.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        osParietale: {
          inStock: true,
          nameLatin: 'os parietale',
          nameRussian: 'теменная кость',
          description: 'Одна из двух парных костей, образующих крышку и боковые стенки черепа.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        calvaria: {
          inStock: true,
          nameLatin: 'calvaria',
          nameRussian: 'свод черепа',
          description: 'Свод, прикрывающий сверху головной мозг.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        glabella: {
          inStock: true,
          nameLatin: 'glabella',
          nameRussian: 'надпереносье',
          description: 'Место соединения носовых костей с лобными отростками верхних челюстей.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        incisuraFrontalis: {
          inStock: true,
          nameLatin: 'incisura frontalis',
          nameRussian: 'Лобная вырезка',
          description: 'Отверстие или канавка в верхнем крае глазницы; место выхода кровеносных сосудов и нервов.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        sinusFrontales: {
          inStock: true,
          nameLatin: 'sinus frontales',
          nameRussian: 'Лобные пазухи',
          description: 'Воздухоносные полости, сообщаются с носовой полостью; их функция не вполне ясна, но считается, что они придают опреденную форму глазницам, чем помогают обеспечивать бинокулярное зрение.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        orbita: {
          inStock: true,
          nameLatin: 'orbita',
          nameRussian: 'Глазница',
          description: 'Полость, содержащая глазное яблоко, наружные мышца глаза, нервы и кровеносные сосуды.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        osLacrimale: {
          inStock: true,
          nameLatin: 'os lacrimale',
          nameRussian: 'Слезная кость',
          description: 'Самая маленькая кость лицевого черепа. Является частью стенки глазницы.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        nazion: {
          inStock: true,
          nameLatin: 'nazion',
          nameRussian: 'назион',
          description: 'Точка соединения носовых костей с лобной костью.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        osNasale: {
          inStock: true,
          nameLatin: 'os nasale',
          nameRussian: 'Носовая кость',
          description: 'Парная кость, носовые кости образуют верхнюю часть спинки носа - переносицу.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        cristaGalli: {
          inStock: true,
          nameLatin: 'crista galli',
          nameRussian: 'Петушистый гребень',
          description: 'Гребневидный отросток решётчатой кости.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        cellulaeEthmoidales: {
          inStock: true,
          nameLatin: 'cellulae ethmoidales',
          nameRussian: 'Решётчатые ячейки',
          description: '8-10 небольших воздухоносных ячеек в наружном слое решётчатой кости.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        septumNasi: {
          inStock: true,
          nameLatin: 'septum nasi',
          nameRussian: 'перегородка носа',
          description: 'Костное образование, разделяющее носовую полость на правый и левый носовые ходы.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        conchaNasalis: {
          inStock: true,
          nameLatin: 'concha nasalis',
          nameRussian: 'носовая раковина',
          description: 'Похожее формой на раковину костное образование, выступающее в носовую полость.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        conchaNasalisInferior: {
          inStock: true,
          nameLatin: 'concha nasalis inferior',
          nameRussian: 'Нижняя носовая раковина',
          description: 'Увеличивает площадь поверхности полоса носа.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        pterion: {
          inStock: true,
          nameLatin: 'pterion',
          nameRussian: 'птерион',
          description: 'Место, где сочленяются теменная и лобная кости, чешуйчатая часть височной кости и большое крыло клиновидной кости.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        osTemporale: {
          inStock: true,
          nameLatin: 'os temporale',
          nameRussian: 'височная кость',
          description: 'Одная из парных костей, образующих боковые области свода черепа и боковые участки основания черепа.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        parsSquamosaOssisTemporalis: {
          inStock: true,
          nameLatin: 'pars squamosa ossis temporalis',
          nameRussian: 'Чешуйчатая часть височной кости',
          description: 'Образует часть боковой стенки черепа.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        osSphenoidale: {
          inStock: true,
          nameLatin: 'os sphenoidale',
          nameRussian: 'клиновидная кость',
          description: 'Позади глазниц принимает участие в образовании основания черепа.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        alaMinorOssisSphenoidalis: {
          inStock: true,
          nameLatin: 'ala minor ossis sphenoidalis',
          nameRussian: 'Малое крыло клиновидной кости',
          description: 'Один из парных боковых отростков тела клиновидной кости.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        alaMajorOssisSphenoidalis: {
          inStock: true,
          nameLatin: 'ala majnor ossis sphenoidalis',
          nameRussian: 'Большое крыло клиновидной кости',
          description: 'Один из симметричных отростков, отходящих в обе стороны из тела клиновидной кости.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        fissuraSuperiorOrbitae: {
          inStock: true,
          nameLatin: 'fissura superior orbitae',
          nameRussian: 'Верхняя щель глазницы',
          description: 'Пространство между верхней и внутренней стенками глазницы, через которое проходят кровеносные сосуды и нервы.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        osZygomaticum: {
          inStock: true,
          nameLatin: 'os zygomaticum',
          nameRussian: 'cкуловая кость',
          description: 'Одна из парных костей, образующих скулу и боковую (латеральную) стенку глазницы.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        arcusZygomaticum: {
          inStock: true,
          nameLatin: 'arcus zygomaticum',
          nameRussian: 'cкуловая дуга',
          description: 'Костный отросток, соединяющий височную и скуловую кости.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        margoOrbitaeInferior: {
          inStock: true,
          nameLatin: 'margo orbitae inferior',
          nameRussian: 'нижний край глазницы',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        foramenInfraorbitale: {
          inStock: true,
          nameLatin: 'foramen infraorbitale',
          nameRussian: 'подглазничное отверстие',
          description: 'Через это отверстие выходят кровеносные сосуды и подглазничный нерв.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        maxila: {
          inStock: true,
          nameLatin: 'maxila',
          nameRussian: 'верхняя челюсть',
          description: 'Одна из парных костей, образующих верхнюю челюсть.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        sinusMaxillaris: {
          inStock: true,
          nameLatin: 'sinus maxillaris',
          nameRussian: 'верхнечелюстная пазуха',
          description: 'Полость пирамидаидальной формы, расположенная внутри верхней челюсти (гайморова пазуха).',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        ramusMandibulae: {
          inStock: true,
          nameLatin: 'ramus mandibulae',
          nameRussian: 'ветвь нижней челюсти',
          description: 'Костные отростки, отходящие от тела нижней челюсти позади зубов. Служит местом прикрепления мышц нижней челюсти.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        corpusMandibulae: {
          inStock: true,
          nameLatin: 'corpus mandibulae',
          nameRussian: 'тело нижней челюсти',
          description: 'Подковообразная часть нижней челюсти.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        caputMandibulae: {
          inStock: true,
          nameLatin: 'caput mandibulae',
          nameRussian: 'головка нижней челюсти',
          description: 'Участвует в образовании височно-нижнечелюстного сустава.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        processusStyloideusOssisTemporalis: {
          inStock: true,
          nameLatin: 'processus styloideus ossis temporalis',
          nameRussian: 'шиловидный отросток височной кости',
          description: 'Тонкая продолговатая кость, к которой крепятся мышцы и связки.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        meatusAcusticusExternus: {
          inStock: true,
          nameLatin: 'meatus acusticus externus',
          nameRussian: 'наружный слуховой проход',
          description: 'Канал, ведущий в среднее и внутреннее ухо.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        processusMastoideusOssisTemporalis: {
          inStock: true,
          nameLatin: 'processus mastoideus ossis temporalis',
          nameRussian: 'сосцевидный отросток',
          description: 'Выпуклость височной кости, находящаяся за ухом. Место прикрепления шейных мышц.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        osOccipitale: {
          inStock: true,
          nameLatin: 'os occipitale',
          nameRussian: 'затылочная кость',
          description: 'Блюдцеобразная кость, образующая заднюю стенку и часть основания черепа.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        suturaLambdoidea: {
          inStock: true,
          nameLatin: 'sutura lambdoidea',
          nameRussian: 'ламбовидный шов',
          description: 'Шов, соединяющий теменные кости с затылочной костью.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        foramenMentale: {
          inStock: true,
          nameLatin: 'foramen mentale',
          nameRussian: 'подбородочное отверстие',
          description: 'Отверстие, через которое нервы и кровеносные сосуды направляются от корней зубов к нижней губе и подбородку.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        fossaHypophysialis: {
          inStock: true,
          nameLatin: 'fossa hypophysialis',
          nameRussian: 'гипофизарная ямка',
          description: 'Углубление в котором располагается гипофиз.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        parsOrbitalisOssisFrontalis: {
          inStock: true,
          nameLatin: 'pars orbitalis ossis frontalis',
          nameRussian: 'глазничная часть лобной кости',
          description: 'Учавствует в образовании стенок глазницы.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        sinusFrontalis: {
          inStock: true,
          nameLatin: 'sinus frontalis',
          nameRussian: 'лобная пазуха',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        sinusSphenoidalis: {
          inStock: true,
          nameLatin: 'sinus sphenoidalis',
          nameRussian: 'клиновидная пазуха',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        laminaPerpendicularisOssisEthmoidalis: {
          inStock: true,
          nameLatin: 'lamina perpendicularis ossis ethmoidalis',
          nameRussian: 'перпендикулярная пластинка из решётчатой кости',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        vomer: {
          inStock: true,
          nameLatin: 'vomer',
          nameRussian: 'сошник',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        processusPalatinusMaxillae: {
          inStock: true,
          nameLatin: 'processus palatinus maxillae',
          nameRussian: 'нёбный отросток верхней челюсти',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        hamulusPterygoideus: {
          inStock: true,
          nameLatin: 'hamulus pterygoideus',
          nameRussian: 'крыловидный крючок',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        angulusMandibulae: {
          inStock: true,
          nameLatin: 'angulus mandibulae',
          nameRussian: 'угол нижней челюсти',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        margoForaminisMagni: {
          inStock: true,
          nameLatin: 'margo foraminis magni',
          nameRussian: 'край большого затылочного отверстия',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        protuberantiaOccipitalisExterna: {
          inStock: true,
          nameLatin: 'protuberantia occipitalis externa',
          nameRussian: 'наружный затылочный выступ',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        canalisAuditivusInternusInPartemPetrosamOssisTemporalisDucens: {
          inStock: true,
          nameLatin: 'canalis auditivus internus in partem petrosam ossis temporalis ducens',
          nameRussian: 'внутренний слуховой проход, вещущий в каменистую часть височной кости',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        sulciArteriaeMeningeaeMediae: {
          inStock: true,
          nameLatin: 'sulci arteriae meningeae mediae',
          nameRussian: 'борозды средней менингеальной артерии',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        suturaSagittalis: {
          inStock: true,
          nameLatin: 'sutura sagittalis',
          nameRussian: 'сагиттальный шов',
          description: 'Сочленяет между собой теменные кости.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        osPlanum: {
          inStock: true,
          nameLatin: 'os planum',
          nameRussian: 'плоская кость',
          description: 'Состоит из трех слоев - внутренней пластинки, слоя губчатого вещества и наружной пластинки.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        sulciAtrteriaeMeningealisMediae: {
          inStock: true,
          nameLatin: 'sulci atrteriae meningealis mediae',
          nameRussian: 'борозды средней мозговой артерии',
          description: 'В этом месте пролегает средняя менингеальная артерия, снабжающая кровью мозговые оболчки.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        cristaFrontalis: {
          inStock: true,
          nameLatin: 'crista frontalis',
          nameRussian: 'лобный гребень',
          description: 'Выступ лобной кости, вдающийся в полость черепа.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        vertex: {
          inStock: true,
          nameLatin: 'vertex',
          nameRussian: 'вертекс',
          description: 'Макушка головы.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        tuberositasOssisParietalis: {
          inStock: true,
          nameLatin: 'tuberositas ossis parietalis',
          nameRussian: 'бугристость теменной кости',
          description: 'Бугорки на поверхности теменной кости.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        canalisIncisivus: {
          inStock: true,
          nameLatin: 'canalis incisivus',
          nameRussian: 'резцовый канал',
          description: 'Углубление верхнего нёба, идущее к резцам.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        raphePlatinum: {
          inStock: true,
          nameLatin: 'raphe platinum',
          nameRussian: 'срединный нёбный шов',
          description: 'Проходит между нёбными отростками верхних челюстей.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        foramenSpinosum: {
          inStock: true,
          nameLatin: 'foramen spinosum',
          nameRussian: 'остистое отверстие',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        tuberculumPharyngeum: {
          inStock: true,
          nameLatin: 'tuberculum pharyngeum',
          nameRussian: 'глоточный бугорок',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        foramenStylomastoideum: {
          inStock: true,
          nameLatin: 'foramen stylomastoideum',
          nameRussian: 'шилососцевидное отверстие',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        foramenMagnum: {
          inStock: true,
          nameLatin: 'foramen magnum',
          nameRussian: 'большое затылочное отверстие',
          description: 'Отверстие, через которое спинной мозг соединяется со стволом головного мозга.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        foramenMastoideum: {
          inStock: true,
          nameLatin: 'foramen mastoideum',
          nameRussian: 'сосцевидное отверстие',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        cristaOccipitalisExterna: {
          inStock: true,
          nameLatin: 'crista occipitalis externa',
          nameRussian: 'наружный затылочный гребень',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        incisuraMastoidea: {
          inStock: true,
          nameLatin: 'incisura mastoidea',
          nameRussian: 'сосцевидная вырезка',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        foramenJugulare: {
          inStock: true,
          nameLatin: 'foramen jugulare',
          nameRussian: 'ярёмное отверстие',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        canalisCarotis: {
          inStock: true,
          nameLatin: 'canalis carotis',
          nameRussian: 'каротидный канал',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        foramenLacerum: {
          inStock: true,
          nameLatin: 'foramen lacerum',
          nameRussian: 'рваное отверстие',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        foramenOvale: {
          inStock: true,
          nameLatin: 'foramen ovale',
          nameRussian: 'овальное отверстие',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        laminaHorizontalisOssisPalatini: {
          inStock: true,
          nameLatin: 'lamina horizontalis ossis palatini',
          nameRussian: 'горизонтальная пластинка нёбной кости',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
      },
      tegumentaCranii: {
        inStock: true,
        nameLatin: 'tegumenta cranii',
        nameRussian: 'покровы черепа',
        description: '',
        pathImg: 'img/small/smile.png',
        pathFullImg: 'img/fullimg/smile.png',
        cutis: {
          inStock: true,
          nameLatin: 'cutis',
          nameRussian: 'кожа',
          description: 'Наружный слой покровов головы; содержит множество волосяных фоликулов, потовых и сальных желёз.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        diploe: {
          inStock: true,
          nameLatin: 'diploe',
          nameRussian: 'губчатое вещество',
          description: 'Cетчатая ткань, расположенная между наружной и внутренней поверхностями крыши черепа.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        faciesСerebri: {
          inStock: true,
          nameLatin: 'facies cerebri',
          nameRussian: 'поверхность головного мозга',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        arahnoidea: {
          inStock: true,
          nameLatin: 'arahnoidea',
          nameRussian: 'паутинная оболочка',
          description: '',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        duraMater: {
          inStock: true,
          nameLatin: 'dura mater',
          nameRussian: 'твёрдая мозговая оболочка',
          description: 'Слой плотной и прочной соединительной ткани, выстилающий изнутри костный череп.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        venaDiplocia: {
          inStock: true,
          nameLatin: 'vena diplocia',
          nameRussian: 'dена губчатого вещества',
          description: 'Находится внутри губчатой кости свода черепа.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        textusConnectivusDensus: {
          inStock: true,
          nameLatin: 'textus connectivus densus',
          nameRussian: 'плотная соединительная ткань',
          description: 'Второй слой, связывает кожу с апоневрозом и содержит множество кровеносных сосудов.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        aponeurosisEpicranialis: {
          inStock: true,
          nameLatin: 'aponeurosis epicranialis',
          nameRussian: 'сухожильный шлем',
          description: 'Листок фиброзной ткани, соединяющий затылочную мышцу с лобной мышцей.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        musculusTemporalis: {
          inStock: true,
          nameLatin: 'musculus temporalis',
          nameRussian: 'височная мышца',
          description: 'Парная мышца, расположенная на боковой поверхности головы.\
           Эта мышца прикрепляется к нижней челюсти. Ее можно прощупать в височной области, если стиснуть зубы.\
           При сокращении поднимает нижнюю челюсть, и поддерживает её в покое.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        textusСonnectivuslaxus: {
          inStock: true,
          nameLatin: 'textus connectivus laxus',
          nameRussian: 'рыхлая соединительная ткань',
          description: 'Этот слой позволяет коже достаточно свободно смещаться относительно надкостницы черепа.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        pericranium: {
          inStock: true,
          nameLatin: 'pericranium',
          nameRussian: 'надкостница черепа',
          description: 'Самый глубокий слой покровов черепа. Этот слой располагается непосредственно на костях черепа.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        musculusOccipitalisGasterOccipitalisMusculusOccipitofrontalis: {
          inStock: true,
          nameLatin: 'musculus occipitalis, gaster occipitalis musculus occipitofrontalis',
          nameRussian: 'затылочная мышца, затылочное брюшко затылочно-лобной мышцы',
          description: 'Начинается в области затылочной кости и прикрепляется к сухожильному шрему. При сокращении смещает кожу и мягкие ткани головы.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        musculusFrontalis: {
          inStock: true,
          nameLatin: 'musculus frontalis',
          nameRussian: 'лобная мышца',
          description: 'Начинается в мягких тканях лба и прикрепляются к сухожильному шлему на своде черепа. При сокращении поднимает брови сморщивает лоб.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        musculusOrbicularisOculi: {
          inStock: true,
          nameLatin: 'musculus orbicularis oculi',
          nameRussian: 'круговая мышца',
          description: 'Плоская мышца, окружающая глаз.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
        musculusOrbicularisOris: {
          inStock: true,
          nameLatin: 'musculus orbicularis oris',
          nameRussian: 'круговая мышца рта',
          description: 'Мышца, окружающая ротовую щель, при сокращении смыкает губы.',
          pathImg: 'img/small/smile.png',
          pathFullImg: 'img/fullimg/smile.png',
        },
      },
      eyes: {},
      mouth: {},
      nose: {},
    },
    //центральная нервная система
    centralNervousSystem: {

      // нейроны
      neurons: [
        {
          quantity: null,

          cellBody: {}, // тело клетки
          dendrites: [{}], // дендриты
          axon: {}, // аксон

          /**
           * приём информации из вне
           */
          resivingInformationFromOutside() { },

          /**
           * обработка информации
           */
          dataProcessing() { },

          /**
           *хранение информации
           */
          dataStorage() { },

          /**
           * передача информации
           */
          transferOfInformation() { },

          /**
           * вывод информации вовне
           */
          outputOfInformationToOutside() {
            let electricalSignal;
            let chemicalSignal;
          },

          /**
           *объединение нейронов 
           */
          connect() {

          }
        },
      ]
    }

  };
  typesFamily = [
    'программисты', 'инженеры', 'врачи', 'повара', 'дизайнеры', 'парикмахеры',
    'агрономы', 'ветеренары', 'cтроители', 'ювелиры', 'писатели', 'музыканты', 'певцы', 'танцоры'
  ];
  typesFamilyHTMLEl;
  inputTypesFamilyHTMLEl;
  relatives; // связи
  siblings = []; //родственники 
  dateBirth;
  coordinatesBirth;
  firstName;
  firstNameHTMLEl;
  inputFirstNameHTMLEl;
  surName;
  surNameHTMLEl;
  patronymic;
  patronymicHTMLEl;
  idHuman;
  quantityDaysLife = 43800;
  numberDayLife = 1;
  numberDayLifeHTMLEl;
  inputNumberDayLifeHTMLEl;
  acquiredHabbits = []; //привычки          
  experience = []; //опыт
  skills = []; //навыки
  beliefs = []; //убеждения
  fears = [];//страхи
  emotions = []; //эмоции
  currentEmotion;

  headEl;
  craniumEl;

  constructor(dateBirth, coordinatesBirth, firstName, surname, patronymic, idHuman) {
    this.dateBirth = dateBirth;
    this.coordinatesBirth = coordinatesBirth;
    this.firstName = firstName;
    this.surname = surname;
    this.patronymic = patronymic;
    this.idHuman = idHuman;
  }

  getiDHuman() {
    return this.idHuman;
  }

  setAnatomy(anatomy) {
    this.anatomy = anatomy;
  }

  setRelatives(relatives) {
    this.relatives = relatives;
  }

  getRelatives() {
    return this.relatives;
  }

  getAnatomy() {
    return this.anatomy;
  }

  getDateBirth() {
    return this.dateBirth;
  }

  getCoordinatesBirth() {
    return this.coordinatesBirth;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  getFirstName() {
    return this.firstName;
  }

  setSurnName(surName) {
    this.suRname = surName;
  }

  getSurnName() {
    return this.suRname;
  }

  setPatronymic(patronymic) {
    this.patronymic = patronymic;
  }

  getPatronymic() {
    return this.patronymic;
  }

  setSiblings(siblings) {
    this.siblings = siblings;
  }

  getSiblings() {
    return this.siblings;
  }

  setAcquiredHabbits(acquiredHabbits) {
    this.acquiredHabbits = acquiredHabbits;
  }

  getAcquiredHabbits() {
    return this.acquiredHabbits;
  }

  setExperience(experience) {
    this.experience = this.experience;
  }

  getExperience() {
    return this.experience;
  }

  setSkills(skills) {
    this.skills = skills;
  }

  getSkills() {
    return this.skills;
  }

  getBeliefs() {
    return this.beliefs;
  }

  setBeliefs(beliefs) {
    this.beliefs = beliefs;
  }

  setEmotions(emotions) {
    this.emotions = emotions;
  }

  getEmotions() {
    return this.emotions;
  }

  setCurrentEmotion(currentEmotion) {
    this.currentEmotion = currentEmotion;
  }

  getCurrentEmotion() {
    return this.currentEmotion;
  }

  think() { } //думать
  analyzeSubject(subject) { } // анализировать предмет
  analyzePhenomen(phenomen) { } // анализировать явление
  synthesize() { }//синтезировать
  classify() { }//классифицировать
  generalize() { }//обобщать
  specify() { }//специализировать
  abstract() { }//абстрагировать
  remember(data) { } //запоминать
  watch() { } //видеть
  look() { } //смотреть
  choose() { } //выбирать
  hear() { } //слышать
  listen() { }//слушать
  feel() { } //ощущать
  speak() { } //говорить
  stand() { }//стоять
  sit() { }//сидеть
  lie() { }//лежать
  go(targetPosition) { }//идти
  run() { }//бежать
  //...
  speakForTarget() { }
  smileSimple() { }
  smileForTarget() { }

  createFirtNameHTMLEl() {
    this.firstNameHTMLEl = document.createElement('div');
    let headerFirstNameHTMLEl = document.createElement('h4');
    headerFirstNameHTMLEl.textContent = 'имя';
    this.inputFirstNameHTMLEl = document.createElement('input');
    this.inputFirstNameHTMLEl.name = 'firstName';

    this.firstNameHTMLEl.appendChild(headerFirstNameHTMLEl);
    this.firstNameHTMLEl.appendChild(this.inputFirstNameHTMLEl);

    return this.firstNameHTMLEl;
  }

  createNumberDayLifeHTMLEl() {
    this.numberDayLifeHTMLEl = document.createElement('div');
    let headerNumberDayLifeHTMLEl = document.createElement('h4');
    headerNumberDayLifeHTMLEl.textContent = 'день жизни';
    this.inputNumberDayLifeHTMLEl = document.createElement('input');
    this.inputNumberDayLifeHTMLEl.name = 'numberDayLife';
    this.inputNumberDayLifeHTMLEl.type = 'number';
    this.inputNumberDayLifeHTMLEl.min = 1;
    this.inputNumberDayLifeHTMLEl.value = this.numberDayLife;

    this.numberDayLifeHTMLEl.appendChild(headerNumberDayLifeHTMLEl);
    this.numberDayLifeHTMLEl.appendChild(this.inputNumberDayLifeHTMLEl);

    return this.numberDayLifeHTMLEl;
  }

  createTypesFamilyHTMLEl() {
    this.typesFamilyHTMLEl = document.createElement('div');
    let headerTypesFamilyHTMLEl = document.createElement('h4');
    headerTypesFamilyHTMLEl.textContent = 'семья';
    this.inputTypesFamilyHTMLEl = document.createElement('input');
    this.inputTypesFamilyHTMLEl.name = 'inputTypesFamily';
    // this.inputTypesFamilyHTMLEl.list = 'typesFamily';
    this.inputTypesFamilyHTMLEl.type = 'search';
    for (let typeFamily of this.typesFamily) {
      let optionEl = document.createElement('option');

    }

    this.typesFamilyHTMLEl.appendChild(headerTypesFamilyHTMLEl);
    this.typesFamilyHTMLEl.appendChild(this.inputTypesFamilyHTMLEl);

    return this.typesFamilyHTMLEl;
  }

  setNumberDayLife(numberDayLife) {
    this.numberDayLife = numberDayLife;
  }

  getNumberDayLife() {
    return this.numberDayLife;
  }

  createHeadEl() {
    this.headEl = document.createElement('section');
    this.headEl.appendChild(this.createCraniumHTMLEl());

    return this.headEl
  }

  getHeadEl() {
    return this.headEl;
  }

  createCraniumHTMLEl() {
    this.craniumEl = document.createElement('section');
    let { cranium } = this.anatomy.head;

    if (cranium.inStock) {

      let headerCraniumEl = document.createElement('h4');
      headerCraniumEl.textContent = cranium.nameRussian;

      let headerDecriptionEl = document.createElement('p');
      headerDecriptionEl.textContent = cranium.description;

      let craniumCheckBoxEl = document.createElement('input');
      craniumCheckBoxEl.type = 'checkbox';
      craniumCheckBoxEl.checked = true;

      let craniumWrapForImgEl = document.createElement('p');
      let craniumImgEl = new Image();
      craniumImgEl.src = cranium.pathImg;
      craniumImgEl.dataset.pathFullImg = cranium.pathFullImg;
      craniumWrapForImgEl.appendChild(craniumImgEl);

      this.craniumEl.appendChild(headerCraniumEl);
      this.craniumEl.appendChild(craniumWrapForImgEl);
      this.craniumEl.appendChild(headerDecriptionEl);
      this.craniumEl.appendChild(craniumCheckBoxEl);

      for (let craniumKey in cranium) {
        if (typeof cranium[craniumKey] !== 'object' && !cranium[craniumKey].inStock) {
          continue;
        }

        let craniumPartEl = document.createElement('section');

        let headerCraniumPartEl = document.createElement('h5');
        headerCraniumPartEl.textContent = cranium[craniumKey].nameRussian;

        let craniumPartDecriptionEl = document.createElement('p');
        craniumPartDecriptionEl.textContent = cranium[craniumKey].description;

        let craniumPartCheckBoxEl = document.createElement('input');
        craniumPartCheckBoxEl.type = 'checkbox';
        craniumPartCheckBoxEl.checked = true;

        let craniumPartWrapForImgEl = document.createElement('p');
        let craniumPartImgEl = new Image();
        craniumPartImgEl.src = cranium[craniumKey].pathImg;
        craniumImgEl.dataset.pathFullImg = cranium[craniumKey].pathFullImg;
        craniumPartWrapForImgEl.appendChild(craniumPartImgEl);

        craniumPartEl.appendChild(headerCraniumPartEl);
        craniumPartEl.appendChild(craniumPartWrapForImgEl);
        craniumPartEl.appendChild(craniumPartDecriptionEl);
        craniumPartEl.appendChild(craniumPartCheckBoxEl);
        this.craniumEl.appendChild(craniumPartEl);
      }
    }
    return this.craniumEl;
  }


}