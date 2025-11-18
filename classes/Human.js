class Human {
  anatomy = {
    head: {
      inStock: true,
      nameLatin: '',
      nameRussian: 'голова',
      description: '',
      pathImg: '',
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
        pathImg: '',
        osFrontale: {
          inStock: true,
          nameLatin: 'os frontale',
          nameRussian: 'лобная кость',
          description: 'Образует лоб и верхние стенки глазниц. При рождении состоит из двух половин, которые затем срастаются между собой.',
          pathImg: ''
        },
        suturaСoronalis: {
          inStock: true,
          nameLatin: 'sutura coronalis',
          nameRussian: 'венечный шов',
          description: 'Сочленение лобной кости с теменными костями.',
          pathImg: ''
        },
        osParietale: {
          inStock: true,
          nameLatin: 'os parietale',
          nameRussian: 'теменная кость',
          description: 'Одна из двух парных костей, образующих крышку и боковые стенки черепа.',
          pathImg: ''
        },
        calvaria: {
          inStock: true,
          nameLatin: 'calvaria',
          nameRussian: 'свод черепа',
          description: 'Свод, прикрывающий сверху головной мозг.',
          pathImg: ''
        },
        glabella: {
          inStock: true,
          nameLatin: 'glabella',
          nameRussian: 'надпереносье',
          description: 'Место соединения носовых костей с лобными отростками верхних челюстей.',
          pathImg: ''
        },
        incisuraFrontalis: {
          inStock: true,
          nameLatin: 'incisura frontalis',
          nameRussian: 'Лобная вырезка',
          description: 'Отверстие или канавка в верхнем крае глазницы; место выхода кровеносных сосудов и нервов.',
          pathImg: ''
        },
        sinusFrontales: {
          inStock: true,
          nameLatin: 'sinus frontales',
          nameRussian: 'Лобные пазухи',
          description: 'Воздухоносные полости, сообщаются с носовой полостью; их функция не вполне ясна, но считается, что они придают опреденную форму глазницам, чем помогают обеспечивать бинокулярное зрение.',
          pathImg: ''
        },
        orbita: {
          inStock: true,
          nameLatin: 'orbita',
          nameRussian: 'Глазница',
          description: 'Полость, содержащая глазное яблоко, наружные мышца глаза, нервы и кровеносные сосуды.',
          pathImg: ''
        },
        osLacrimale: {
          inStock: true,
          nameLatin: 'os lacrimale',
          nameRussian: 'Слезная кость',
          description: 'Самая маленькая кость лицевого черепа. Является частью стенки глазницы.',
          pathImg: ''
        },
        nazion: {
          inStock: true,
          nameLatin: 'nazion',
          nameRussian: 'назион',
          description: 'Точка соединения носовых костей с лобной костью.',
          pathImg: ''
        },
        osNasale: {
          inStock: true,
          nameLatin: 'os nasale',
          nameRussian: 'Носовая кость',
          description: 'Парная кость, носовые кости образуют верхнюю часть спинки носа - переносицу.',
          pathImg: ''
        },
        cristaGalli: {
          inStock: true,
          nameLatin: 'crista galli',
          nameRussian: 'Петушистый гребень',
          description: 'Гребневидный отросток решётчатой кости.',
          pathImg: ''
        },
        cellulaeEthmoidales: {
          inStock: true,
          nameLatin: 'cellulae ethmoidales',
          nameRussian: 'Решётчатые ячейки',
          description: '8-10 небольших воздухоносных ячеек в наружном слое решётчатой кости.',
          pathImg: ''
        },
        septumNasi: {
          inStock: true,
          nameLatin: 'septum nasi',
          nameRussian: 'перегородка носа',
          description: 'Костное образование, разделяющее носовую полость на правый и левый носовые ходы.',
          pathImg: ''
        },
        conchaNasalis: {
          inStock: true,
          nameLatin: 'concha nasalis',
          nameRussian: 'носовая раковина',
          description: 'Похожее формой на раковину костное образование, выступающее в носовую полость.',
          pathImg: ''
        },
        conchaNasalisInferior: {
          inStock: true,
          nameLatin: 'concha nasalis inferior',
          nameRussian: 'Нижняя носовая раковина',
          description: 'Увеличивает площадь поверхности полоса носа.',
          pathImg: ''
        },
        pterion: {
          inStock: true,
          nameLatin: 'pterion',
          nameRussian: 'птерион',
          description: 'Место, где сочленяются теменная и лобная кости, чешуйчатая часть височной кости и большое крыло клиновидной кости.',
          pathImg: ''
        },
        osTemporale: {
          inStock: true,
          nameLatin: 'os temporale',
          nameRussian: 'височная кость',
          description: 'Одная из парных костей, образующих боковые области свода черепа и боковые участки основания черепа.',
          pathImg: ''
        },
        parsSquamosaOssisTemporalis: {
          inStock: true,
          nameLatin: 'pars squamosa ossis temporalis',
          nameRussian: 'Чешуйчатая часть височной кости',
          description: 'Образует часть боковой стенки черепа.',
          pathImg: ''
        },
        osSphenoidale: {
          inStock: true,
          nameLatin: 'os sphenoidale',
          nameRussian: 'клиновидная кость',
          description: 'Позади глазниц принимает участие в образовании основания черепа.',
          pathImg: ''
        },
        alaMinorOssisSphenoidalis: {
          inStock: true,
          nameLatin: 'ala minor ossis sphenoidalis',
          nameRussian: 'Малое крыло клиновидной кости',
          description: 'Один из парных боковых отростков тела клиновидной кости.',
          pathImg: ''
        },
        alaMajorOssisSphenoidalis: {
          inStock: true,
          nameLatin: 'ala majnor ossis sphenoidalis',
          nameRussian: 'Большое крыло клиновидной кости',
          description: 'Один из симметричных отростков, отходящих в обе стороны из тела клиновидной кости.',
          pathImg: ''
        },
        fissuraSuperiorOrbitae: {
          inStock: true,
          nameLatin: 'fissura superior orbitae',
          nameRussian: 'Верхняя щель глазницы',
          description: 'Пространство между верхней и внутренней стенками глазницы, через которое проходят кровеносные сосуды и нервы.',
          pathImg: ''
        },
        osZygomaticum: {
          inStock: true,
          nameLatin: 'os zygomaticum',
          nameRussian: 'cкуловая кость',
          description: 'Одна из парных костей, образующих скулу и боковую (латеральную) стенку глазницы.',
          pathImg: ''
        },
        arcusZygomaticum: {
          inStock: true,
          nameLatin: 'arcus zygomaticum',
          nameRussian: 'cкуловая дуга',
          description: 'Костный отросток, соединяющий височную и скуловую кости.',
          pathImg: ''
        },
        margoOrbitaeInferior: {
          inStock: true,
          nameLatin: 'margo orbitae inferior',
          nameRussian: 'нижний край глазницы',
          description: '',
          pathImg: ''
        },
        foramenInfraorbitale: {
          inStock: true,
          nameLatin: 'foramen infraorbitale',
          nameRussian: 'подглазничное отверстие',
          description: 'Через это отверстие выходят кровеносные сосуды и подглазничный нерв.',
          pathImg: ''
        },
        maxila: {
          inStock: true,
          nameLatin: 'maxila',
          nameRussian: 'верхняя челюсть',
          description: 'Одна из парных костей, образующих верхнюю челюсть.',
          pathImg: ''
        },
        sinusMaxillaris: {
          inStock: true,
          nameLatin: 'sinus maxillaris',
          nameRussian: 'верхнечелюстная пазуха',
          description: 'Полость пирамидаидальной формы, расположенная внутри верхней челюсти (гайморова пазуха).',
          pathImg: ''
        },
        ramusMandibulae: {
          inStock: true,
          nameLatin: 'ramus mandibulae',
          nameRussian: 'ветвь нижней челюсти',
          description: 'Костные отростки, отходящие от тела нижней челюсти позади зубов. Служит местом прикрепления мышц нижней челюсти.',
          pathImg: ''
        },
        corpusMandibulae: {
          inStock: true,
          nameLatin: 'corpus mandibulae',
          nameRussian: 'тело нижней челюсти',
          description: 'Подковообразная часть нижней челюсти.',
          pathImg: ''
        },
        caputMandibulae: {
          inStock: true,
          nameLatin: 'caput mandibulae',
          nameRussian: 'головка нижней челюсти',
          description: 'Участвует в образовании височно-нижнечелюстного сустава.',
          pathImg: ''
        },
        processusStyloideusOssisTemporalis: {
          inStock: true,
          nameLatin: 'processus styloideus ossis temporalis',
          nameRussian: 'шиловидный отросток височной кости',
          description: 'Тонкая продолговатая кость, к которой крепятся мышцы и связки.',
          pathImg: ''
        },
        meatusAcusticusExternus: {
          inStock: true,
          nameLatin: 'meatus acusticus externus',
          nameRussian: 'наружный слуховой проход',
          description: 'Канал, ведущий в среднее и внутреннее ухо.',
          pathImg: ''
        },
        processusMastoideusOssisTemporalis: {
          inStock: true,
          nameLatin: 'processus mastoideus ossis temporalis',
          nameRussian: 'сосцевидный отросток',
          description: 'Выпуклость височной кости, находящаяся за ухом. Место прикрепления шейных мышц.',
          pathImg: ''
        },
        osOccipitale: {
          inStock: true,
          nameLatin: 'os occipitale',
          nameRussian: 'затылочная кость',
          description: 'Блюдцеобразная кость, образующая заднюю стенку и часть основания черепа.',
          pathImg: ''
        },
        suturaLambdoidea: {
          inStock: true,
          nameLatin: 'sutura lambdoidea',
          nameRussian: 'ламбовидный шов',
          description: 'Шов, соединяющий теменные кости с затылочной костью.',
          pathImg: ''
        },
        foramenMentale: {
          inStock: true,
          nameLatin: 'foramen mentale',
          nameRussian: 'подбородочное отверстие',
          description: 'Отверстие, через которое нервы и кровеносные сосуды направляются от корней зубов к нижней губе и подбородку.',
          pathImg: ''
        },
        fossaHypophysialis: {
          inStock: true,
          nameLatin: 'fossa hypophysialis',
          nameRussian: 'гипофизарная ямка',
          description: 'Углубление в котором располагается гипофиз.',
          pathImg: ''
        },
        parsOrbitalisOssisFrontalis: {
          inStock: true,
          nameLatin: 'pars orbitalis ossis frontalis',
          nameRussian: 'глазничная часть лобной кости',
          description: 'Учавствует в образовании стенок глазницы.',
          pathImg: ''
        },
        sinusFrontalis: {
          inStock: true,
          nameLatin: 'sinus frontalis',
          nameRussian: 'лобная пазуха',
          description: '',
          pathImg: ''
        },
        sinusSphenoidalis: {
          inStock: true,
          nameLatin: 'sinus sphenoidalis',
          nameRussian: 'клиновидная пазуха',
          description: '',
          pathImg: ''
        },
        laminaPerpendicularisOssisEthmoidalis: {
          inStock: true,
          nameLatin: 'lamina perpendicularis ossis ethmoidalis',
          nameRussian: 'перпендикулярная пластинка из решётчатой кости',
          description: '',
          pathImg: ''
        },
        vomer: {
          inStock: true,
          nameLatin: 'vomer',
          nameRussian: 'сошник',
          description: '',
          pathImg: ''
        },
        processusPalatinusMaxillae: {
          inStock: true,
          nameLatin: 'processus palatinus maxillae',
          nameRussian: 'нёбный отросток верхней челюсти',
          description: '',
          pathImg: ''
        },
        hamulusPterygoideus: {
          inStock: true,
          nameLatin: 'hamulus pterygoideus',
          nameRussian: 'крыловидный крючок',
          description: '',
          pathImg: ''
        },
        angulusMandibulae: {
          inStock: true,
          nameLatin: 'angulus mandibulae',
          nameRussian: 'угол нижней челюсти',
          description: '',
          pathImg: ''
        },
        margoForaminisMagni: {
          inStock: true,
          nameLatin: 'margo foraminis magni',
          nameRussian: 'край большого затылочного отверстия',
          description: '',
          pathImg: ''
        },
        protuberantiaOccipitalisExterna: {
          inStock: true,
          nameLatin: 'protuberantia occipitalis externa',
          nameRussian: 'наружный затылочный выступ',
          description: '',
          pathImg: ''
        },
        canalisAuditivusInternusInPartemPetrosamOssisTemporalisDucens: {
          inStock: true,
          nameLatin: 'canalis auditivus internus in partem petrosam ossis temporalis ducens',
          nameRussian: 'внутренний слуховой проход, вещущий в каменистую часть височной кости',
          description: '',
          pathImg: ''
        },
        sulciArteriaeMeningeaeMediae: {
          inStock: true,
          nameLatin: 'sulci arteriae meningeae mediae',
          nameRussian: 'борозды средней менингеальной артерии',
          description: '',
          pathImg: ''
        },
        suturaSagittalis: {
          inStock: true,
          nameLatin: 'sutura sagittalis',
          nameRussian: 'сагиттальный шов',
          description: 'Сочленяет между собой теменные кости.',
          pathImg: ''
        },
        osPlanum: {
          inStock: true,
          nameLatin: 'os planum',
          nameRussian: 'плоская кость',
          description: 'Состоит из трех слоев - внутренней пластинки, слоя губчатого вещества и наружной пластинки.',
          pathImg: ''
        },
        sulciAtrteriaeMeningealisMediae: {
          inStock: true,
          nameLatin: 'sulci atrteriae meningealis mediae',
          nameRussian: 'борозды средней мозговой артерии',
          description: 'В этом месте пролегает средняя менингеальная артерия, снабжающая кровью мозговые оболчки.',
          pathImg: ''
        },
        cristaFrontalis: {
          inStock: true,
          nameLatin: 'crista frontalis',
          nameRussian: 'лобный гребень',
          description: 'Выступ лобной кости, вдающийся в полость черепа.',
          pathImg: ''
        },
        vertex: {
          inStock: true,
          nameLatin: 'vertex',
          nameRussian: 'вертекс',
          description: 'Макушка головы.',
          pathImg: ''
        },
        tuberositasOssisParietalis: {
          inStock: true,
          nameLatin: 'tuberositas ossis parietalis',
          nameRussian: 'бугристость теменной кости',
          description: 'Бугорки на поверхности теменной кости.',
          pathImg: ''
        },
        canalisIncisivus: {
          inStock: true,
          nameLatin: 'canalis incisivus',
          nameRussian: 'резцовый канал',
          description: 'Углубление верхнего нёба, идущее к резцам.',
          pathImg: ''
        },
        raphePlatinum: {
          inStock: true,
          nameLatin: 'raphe platinum',
          nameRussian: 'срединный нёбный шов',
          description: 'Проходит между нёбными отростками верхних челюстей.',
          pathImg: ''
        },
        foramenSpinosum: {
          inStock: true,
          nameLatin: 'foramen spinosum',
          nameRussian: 'остистое отверстие',
          description: '',
          pathImg: ''
        },
        tuberculumPharyngeum: {
          inStock: true,
          nameLatin: 'tuberculum pharyngeum',
          nameRussian: 'глоточный бугорок',
          description: '',
          pathImg: ''
        },
        foramenStylomastoideum: {
          inStock: true,
          nameLatin: 'foramen stylomastoideum',
          nameRussian: 'шилососцевидное отверстие',
          description: '',
          pathImg: ''
        },
        foramenMagnum: {
          inStock: true,
          nameLatin: 'foramen magnum',
          nameRussian: 'большое затылочное отверстие',
          description: 'Отверстие, через которое спинной мозг соединяется со стволом головного мозга.',
          pathImg: ''
        },
        foramenMastoideum: {
          inStock: true,
          nameLatin: 'foramen mastoideum',
          nameRussian: 'сосцевидное отверстие',
          description: '',
          pathImg: ''
        },
        cristaOccipitalisExterna: {
          inStock: true,
          nameLatin: 'crista occipitalis externa',
          nameRussian: 'наружный затылочный гребень',
          description: '',
          pathImg: ''
        },
        incisuraMastoidea: {
          inStock: true,
          nameLatin: 'incisura mastoidea',
          nameRussian: 'сосцевидная вырезка',
          description: '',
          pathImg: ''
        },
        foramenJugulare: {
          inStock: true,
          nameLatin: 'foramen jugulare',
          nameRussian: 'ярёмное отверстие',
          description: '',
          pathImg: ''
        },
        canalisCarotis: {
          inStock: true,
          nameLatin: 'canalis carotis',
          nameRussian: 'каротидный канал',
          description: '',
          pathImg: ''
        },
        foramenLacerum: {
          inStock: true,
          nameLatin: 'foramen lacerum',
          nameRussian: 'рваное отверстие',
          description: '',
          pathImg: ''
        },
        foramenOvale: {
          inStock: true,
          nameLatin: 'foramen ovale',
          nameRussian: 'овальное отверстие',
          description: '',
          pathImg: ''
        },
        laminaHorizontalisOssisPalatini: {
          inStock: true,
          nameLatin: 'lamina horizontalis ossis palatini',
          nameRussian: 'горизонтальная пластинка нёбной кости',
          description: '',
          pathImg: ''
        },

      },
      tegumentaCranii: {
        inStock: true,
        nameLatin: 'tegumenta cranii',
        nameRussian: 'покровы черепа',
        description: '',
        pathImg: '',
        cutis: {
          inStock: true,
          nameLatin: 'cutis',
          nameRussian: 'кожа',
          description: 'Наружный слой покровов головы; содержит множество волосяных фоликулов, потовых и сальных желёз.',
          pathImg: ''
        },
        diploe: {
          inStock: true,
          nameLatin: 'diploe',
          nameRussian: 'губчатое вещество',
          description: 'Cетчатая ткань, расположенная между наружной и внутренней поверхностями крыши черепа.',
          pathImg: ''
        },
        faciesСerebri: {
          inStock: true,
          nameLatin: 'facies cerebri',
          nameRussian: 'поверхность головного мозга',
          description: '',
          pathImg: ''
        },
        arahnoidea: {
          inStock: true,
          nameLatin: 'arahnoidea',
          nameRussian: 'паутинная оболочка',
          description: '',
          pathImg: ''
        },
        duraMater: {
          inStock: true,
          nameLatin: 'dura mater',
          nameRussian: 'твёрдая мозговая оболочка',
          description: 'Слой плотной и прочной соединительной ткани, выстилающий изнутри костный череп.',
          pathImg: ''
        },
        venaDiplocia: {
          inStock: true,
          nameLatin: 'vena diplocia',
          nameRussian: 'dена губчатого вещества',
          description: 'Находится внутри губчатой кости свода черепа.',
          pathImg: ''
        },
        textusConnectivusDensus: {
          inStock: true,
          nameLatin: 'textus connectivus densus',
          nameRussian: 'плотная соединительная ткань',
          description: 'Второй слой, связывает кожу с апоневрозом и содержит множество кровеносных сосудов.',
          pathImg: ''
        },
        aponeurosisEpicranialis: {
          inStock: true,
          nameLatin: 'aponeurosis epicranialis',
          nameRussian: 'сухожильный шлем',
          description: 'Листок фиброзной ткани, соединяющий затылочную мышцу с лобной мышцей.',
          pathImg: ''
        },
        musculusTemporalis: {
          inStock: true,
          nameLatin: 'musculus temporalis',
          nameRussian: 'височная мышца',
          description: 'Парная мышца, расположенная на боковой поверхности головы.\
           Эта мышца прикрепляется к нижней челюсти. Ее можно прощупать в височной области, если стиснуть зубы.\
           При сокращении поднимает нижнюю челюсть, и поддерживает её в покое.',
          pathImg: ''
        },
        textusСonnectivuslaxus: {
          inStock: true,
          nameLatin: 'textus connectivus laxus',
          nameRussian: 'рыхлая соединительная ткань',
          description: 'Этот слой позволяет коже достаточно свободно смещаться относительно надкостницы черепа.',
          pathImg: ''
        },
        pericranium: {
          inStock: true,
          nameLatin: 'pericranium',
          nameRussian: 'надкостница черепа',
          description: 'Самый глубокий слой покровов черепа. Этот слой располагается непосредственно на костях черепа.',
          pathImg: ''
        },
        musculusOccipitalisGasterOccipitalisMusculusOccipitofrontalis: {
          inStock: true,
          nameLatin: 'musculus occipitalis, gaster occipitalis musculus occipitofrontalis',
          nameRussian: 'затылочная мышца, затылочное брюшко затылочно-лобной мышцы',
          description: 'Начинается в области затылочной кости и прикрепляется к сухожильному шрему. При сокращении смещает кожу и мягкие ткани головы.',
          pathImg: ''
        },
        musculusFrontalis: {
          inStock: true,
          nameLatin: 'musculus frontalis',
          nameRussian: 'лобная мышца',
          description: 'Начинается в мягких тканях лба и прикрепляются к сухожильному шлему на своде черепа. При сокращении поднимает брови сморщивает лоб.',
          pathImg: ''
        },
        musculusOrbicularisOculi: {
          inStock: true,
          nameLatin: 'musculus orbicularis oculi',
          nameRussian: 'круговая мышца',
          description: 'Плоская мышца, окружающая глаз.',
          pathImg: ''
        },
        musculusOrbicularisOris: {
          inStock: true,
          nameLatin: 'musculus orbicularis oris',
          nameRussian: 'круговая мышца рта',
          description: 'Мышца, окружающая ротовую щель, при сокращении смыкает губы.',
          pathImg: ''
        },
      },
      eyes: {},
      mouth: {},
      nose: {},
      nurse: {},
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
  relatives; // связи
  siblings = []; //родственники 
  dateBirth;
  coordinatesBirth;
  firstName;
  surname;
  patronymic;
  quantityDaysLife = 43800;
  numberDayLife = 1;
  acquiredHabbits = []; //привычки          
  experience = []; //опыт
  skills = []; //навыки
  beliefs = []; //убеждения
  fears = [];//страхи
  emotions = []; //эмоции
  currentEmotion;

  headEl;

  constructor(dateBirth, coordinatesBirth, firstName, surname, patronymic) {
    this.dateBirth = dateBirth;
    this.coordinatesBirth = coordinatesBirth;
    this.firstName = firstName;
    this.surname = surname;
    this.patronymic = patronymic;
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

  getcoordinatesBirth() {
    return this.coordinatesBirth;
  }

  getfirstName() {
    return this.firstName;
  }

  getSurnName() {
    return this.surname;
  }

  getPatronymic() {
    return this.patronymic;
  }

  setNumberDayLife(numberDayLife) {
    this.numberDayLife = numberDayLife;
  }

  getNumberDayLife() {
    return this.numberDayLife;
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

  setBeliefs(beliefs) {
    this.beliefs = beliefs;
  }

  getBeliefs() {
    return this.beliefs;
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
  watch() { } //видеть
  choose() { } //выбирать
  hear() { } //слышать
  feel() { } //ощущать
  remember(data) { } //запоминать
  speak() { }
  speakForTarget() { }
  smileSimple() { }
  smileForTarget() { }
  go(targetPosition) { }


  createHeadEl(idHeadEl) {
    this.headEl = document.createElement('section');
    this.headEl.id = idHeadEl;
    this.renderCranium(this.headEl);
  }

  getHeadEl() {
    return this.headEl;
  }

  renderHead(parentEl) {
    parentEl.appendChild(this.getHeadEl());
  }

  renderCranium(parentEl) {
    let craniumEl = document.createElement('section');
    craniumEl.id = `cranium${parentEl.id}`;
    let { cranium } = this.anatomy.head;

    if (!cranium.inStock) {
      return
    }

    let headerCraniumEl = document.createElement('h4');
    headerCraniumEl.textContent = cranium.nameRussian;

    let headerDecriptionEl = document.createElement('p');
    headerDecriptionEl.textContent = cranium.description;

    craniumEl.appendChild(headerCraniumEl);
    craniumEl.appendChild(headerDecriptionEl);

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

      craniumPartEl.appendChild(headerCraniumPartEl);
      craniumPartEl.appendChild(craniumPartDecriptionEl);
      craniumPartEl.appendChild(craniumPartCheckBoxEl);
      craniumEl.appendChild(craniumPartEl);
    }

    parentEl.appendChild(craniumEl);
  }


}