// champ name arrays by position

const allChampNames = [
	{ kor: '가렌', eng: 'Garen' },
	{ kor: '갈리오', eng: 'Galio' },
	{ kor: '갱플랭크', eng: 'Gangplank' },
	{ kor: '그라가스', eng: 'Gragas' },
	{ kor: '그레이브즈', eng: 'Graves' },
	{ kor: '그웬', eng: 'Gwen' },
	{ kor: '나르', eng: 'Gnar' },
	{ kor: '나미', eng: 'Nami' },
	{ kor: '나서스', eng: 'Nasus' },
	{ kor: '나피리', eng: 'Naafiri' },
	{ kor: '노틸러스', eng: 'Nautilus' },
	{ kor: '녹턴', eng: 'Nocturne' },
	{ kor: '누누와 윌럼프', eng: 'Nunu' },
	{ kor: '니달리', eng: 'Nidalee' },
	{ kor: '니코', eng: 'Neeko' },
	{ kor: '닐라', eng: 'Nilah' },
	{ kor: '다리우스', eng: 'Darius' },
	{ kor: '다이애나', eng: 'Diana' },
	{ kor: '드레이븐', eng: 'Draven' },
	{ kor: '라이즈', eng: 'Ryze' },
	{ kor: '라칸', eng: 'Rakan' },
	{ kor: '람머스', eng: 'Rammus' },
	{ kor: '럭스', eng: 'Lux' },
	{ kor: '럼블', eng: 'Rumble' },
	{ kor: '레나타 글라스크', eng: 'Renata' },
	{ kor: '레넥톤', eng: 'Renekton' },
	{ kor: '레오나', eng: 'Leona' },
	{ kor: '렉사이', eng: 'RekSai' },
	{ kor: '렐', eng: 'Rell' },
	{ kor: '렝가', eng: 'Rengar' },
	{ kor: '루시안', eng: 'Lucian' },
	{ kor: '룰루', eng: 'Lulu' },
	{ kor: '르블랑', eng: 'Leblanc' },
	{ kor: '리 신', eng: 'LeeSin' },
	{ kor: '리븐', eng: 'Riven' },
	{ kor: '리산드라', eng: 'Lissandra' },
	{ kor: '릴리아', eng: 'Lillia' },
	{ kor: '마스터 이', eng: 'MasterYi' },
	{ kor: '마오카이', eng: 'Maokai' },
	{ kor: '말자하', eng: 'Malzahar' },
	{ kor: '말파이트', eng: 'Malphite' },
	{ kor: '모데카이저', eng: 'Mordekaiser' },
	{ kor: '모르가나', eng: 'Morgana' },
	{ kor: '문도 박사', eng: 'DrMundo' },
	{ kor: '미스 포츈', eng: 'MissFortune' },
	{ kor: '밀리오', eng: 'Milio' },
	{ kor: '바드', eng: 'Bard' },
	{ kor: '바루스', eng: 'Varus' },
	{ kor: '바이', eng: 'Vi' },
	{ kor: '베이가', eng: 'Veigar' },
	{ kor: '베인', eng: 'Vayne' },
	{ kor: '벡스', eng: 'Vex' },
	{ kor: '벨베스', eng: 'Belveth' },
	{ kor: '벨코즈', eng: 'Velkoz' },
	{ kor: '볼리베어', eng: 'Volibear' },
	{ kor: '브라움', eng: 'Braum' },
	{ kor: '브라이어', eng: 'Briar' },
	{ kor: '브랜드', eng: 'Brand' },
	{ kor: '블라디미르', eng: 'Vladimir' },
	{ kor: '블리츠크랭크', eng: 'Blitzcrank' },
	{ kor: '비에고', eng: 'Viego' },
	{ kor: '빅토르', eng: 'Viktor' },
	{ kor: '뽀삐', eng: 'Poppy' },
	{ kor: '사미라', eng: 'Samira' },
	{ kor: '사이온', eng: 'Sion' },
	{ kor: '사일러스', eng: 'Sylas' },
	{ kor: '샤코', eng: 'Shaco' },
	{ kor: '세나', eng: 'Senna' },
	{ kor: '세라핀', eng: 'Seraphine' },
	{ kor: '세주아니', eng: 'Sejuani' },
	{ kor: '세트', eng: 'Sett' },
	{ kor: '소나', eng: 'Sona' },
	{ kor: '소라카', eng: 'Soraka' },
	{ kor: '쉔', eng: 'Shen' },
	{ kor: '쉬바나', eng: 'Shyvana' },
	{ kor: '스몰더', eng: 'Smolder' },
	{ kor: '스웨인', eng: 'Swain' },
	{ kor: '스카너', eng: 'Skarner' },
	{ kor: '시비르', eng: 'Sivir' },
	{ kor: '신짜오', eng: 'XinZhao' },
	{ kor: '신드라', eng: 'Syndra' },
	{ kor: '신지드', eng: 'Singed' },
	{ kor: '쓰레쉬', eng: 'Thresh' },
	{ kor: '아리', eng: 'Ahri' },
	{ kor: '아무무', eng: 'Amumu' },
	{ kor: '아우렐리온 솔', eng: 'AurelionSol' },
	{ kor: '아이번', eng: 'Ivern' },
	{ kor: '아지르', eng: 'Azir' },
	{ kor: '아칼리', eng: 'Akali' },
	{ kor: '아크샨', eng: 'Akshan' },
	{ kor: '아트록스', eng: 'Aatrox' },
	{ kor: '아펠리오스', eng: 'Aphelios' },
	{ kor: '알리스타', eng: 'Alistar' },
	{ kor: '애니', eng: 'Annie' },
	{ kor: '애니비아', eng: 'Anivia' },
	{ kor: '애쉬', eng: 'Ashe' },
	{ kor: '야스오', eng: 'Yasuo' },
	{ kor: '에코', eng: 'Ekko' },
	{ kor: '엘리스', eng: 'Elise' },
	{ kor: '오공', eng: 'MonkeyKing' },
	{ kor: '오른', eng: 'Ornn' },
	{ kor: '오리아나', eng: 'Orianna' },
	{ kor: '올라프', eng: 'Olaf' },
	{ kor: '요네', eng: 'Yone' },
	{ kor: '요릭', eng: 'Yorick' },
	{ kor: '우디르', eng: 'Udyr' },
	{ kor: '우르곳', eng: 'Urgot' },
	{ kor: '워윅', eng: 'Warwick' },
	{ kor: '유미', eng: 'Yuumi' },
	{ kor: '이렐리아', eng: 'Irelia' },
	{ kor: '이블린', eng: 'Evelynn' },
	{ kor: '이즈리얼', eng: 'Ezreal' },
	{ kor: '일라오이', eng: 'Illaoi' },
	{ kor: '자르반 4세', eng: 'JarvanIV' },
	{ kor: '자야', eng: 'Xayah' },
	{ kor: '자이라', eng: 'Zyra' },
	{ kor: '자크', eng: 'Zac' },
	{ kor: '잔나', eng: 'Janna' },
	{ kor: '잭스', eng: 'Jax' },
	{ kor: '제드', eng: 'Zed' },
	{ kor: '제라스', eng: 'Xerath' },
	{ kor: '제리', eng: 'Zeri' },
	{ kor: '제이스', eng: 'Jayce' },
	{ kor: '조이', eng: 'Zoe' },
	{ kor: '직스', eng: 'Ziggs' },
	{ kor: '진', eng: 'Jhin' },
	{ kor: '질리언', eng: 'Zilean' },
	{ kor: '징크스', eng: 'Jinx' },
	{ kor: '초가스', eng: 'Chogath' },
	{ kor: '카르마', eng: 'Karma' },
	{ kor: '카밀', eng: 'Camille' },
	{ kor: '카사딘', eng: 'Kassadin' },
	{ kor: '카서스', eng: 'Karthus' },
	{ kor: '카시오페아', eng: 'Cassiopeia' },
	{ kor: '카이사', eng: 'Kaisa' },
	{ kor: '카직스', eng: 'Khazix' },
	{ kor: '카타리나', eng: 'Katarina' },
	{ kor: '칼리스타', eng: 'Kalista' },
	{ kor: '케넨', eng: 'Kennen' },
	{ kor: '케이틀린', eng: 'Caitlyn' },
	{ kor: '케인', eng: 'Kayn' },
	{ kor: '케일', eng: 'Kayle' },
	{ kor: '코그모', eng: 'KogMaw' },
	{ kor: '코르키', eng: 'Corki' },
	{ kor: '퀸', eng: 'Quinn' },
	{ kor: '크산테', eng: 'KSante' },
	{ kor: '클레드', eng: 'Kled' },
	{ kor: '키아나', eng: 'Qiyana' },
	{ kor: '킨드레드', eng: 'Kindred' },
	{ kor: '타릭', eng: 'Taric' },
	{ kor: '탈론', eng: 'Talon' },
	{ kor: '탈리야', eng: 'Taliyah' },
	{ kor: '탐 켄치', eng: 'TahmKench' },
	{ kor: '트런들', eng: 'Trundle' },
	{ kor: '트리스타나', eng: 'Tristana' },
	{ kor: '트린다미어', eng: 'Tryndamere' },
	{ kor: '트위스티드 페이트', eng: 'TwistedFate' },
	{ kor: '트위치', eng: 'Twitch' },
	{ kor: '티모', eng: 'Teemo' },
	{ kor: '파이크', eng: 'Pyke' },
	{ kor: '판테온', eng: 'Pantheon' },
	{ kor: '피들스틱', eng: 'Fiddlesticks' },
	{ kor: '피오라', eng: 'Fiora' },
	{ kor: '피즈', eng: 'Fizz' },
	{ kor: '하이머딩거', eng: 'Heimerdinger' },
	{ kor: '헤카림', eng: 'Hecarim' },
	{ kor: '흐웨이', eng: 'Hwei' },
];

const topChampNames = [
	{ kor: '아트록스', eng: 'Aatrox' },
	{ kor: '아칼리', eng: 'Akali' },
	{ kor: '카밀', eng: 'Camille' },
	{ kor: '초가스', eng: 'Chogath' },
	{ kor: '다리우스', eng: 'Darius' },
	{ kor: '문도 박사', eng: 'DrMundo' },
	{ kor: '피오라', eng: 'Fiora' },
	{ kor: '갱플랭크', eng: 'Gangplank' },
	{ kor: '가렌', eng: 'Garen' },
	{ kor: '나르', eng: 'Gnar' },
	{ kor: '그라가스', eng: 'Gragas' },
	{ kor: '그웬', eng: 'Gwen' },
	{ kor: '일라오이', eng: 'Illaoi' },
	{ kor: '이렐리아', eng: 'Irelia' },
	{ kor: '잭스', eng: 'Jax' },
	{ kor: '제이스', eng: 'Jayce' },
	{ kor: '케일', eng: 'Kayle' },
	{ kor: '케넨', eng: 'Kennen' },
	{ kor: '클레드', eng: 'Kled' },
	{ kor: '릴리아', eng: 'Lillia' },
	{ kor: '말파이트', eng: 'Malphite' },
	{ kor: '모데카이저', eng: 'Mordekaiser' },
	{ kor: '나서스', eng: 'Nasus' },
	{ kor: '올라프', eng: 'Olaf' },
	{ kor: '오른', eng: 'Ornn' },
	{ kor: '퀸', eng: 'Quinn' },
	{ kor: '레넥톤', eng: 'Renekton' },
	{ kor: '리븐', eng: 'Riven' },
	{ kor: '럼블', eng: 'Rumble' },
	{ kor: '세주아니', eng: 'Sejuani' },
	{ kor: '세트', eng: 'Sett' },
	{ kor: '쉔', eng: 'Shen' },
	{ kor: '쉬바나', eng: 'Shyvana' },
	{ kor: '신지드', eng: 'Singed' },
	{ kor: '사이온', eng: 'Sion' },
	{ kor: '탐 켄치', eng: 'TahmKench' },
	{ kor: '티모', eng: 'Teemo' },
	{ kor: '트린다미어', eng: 'Tryndamere' },
	{ kor: '우르곳', eng: 'Urgot' },
	{ kor: '베인', eng: 'Vayne' },
	{ kor: '볼리베어', eng: 'Volibear' },
	{ kor: '오공', eng: 'MonkeyKing' },
	{ kor: '야스오', eng: 'Yasuo' },
	{ kor: '요네', eng: 'Yone' },
	{ kor: '요릭', eng: 'Yorick' },
];

const jungleChampNames = [
	{ kor: '아무무', eng: 'Amumu' },
	{ kor: '벨베스', eng: 'Belveth' },
	{ kor: '다이애나', eng: 'Diana' },
	{ kor: '에코', eng: 'Ekko' },
	{ kor: '엘리스', eng: 'Elise' },
	{ kor: '이블린', eng: 'Evelynn' },
	{ kor: '피들스틱', eng: 'Fiddlesticks' },
	{ kor: '그레이브즈', eng: 'Graves' },
	{ kor: '헤카림', eng: 'Hecarim' },
	{ kor: '아이번', eng: 'Ivern' },
	{ kor: '자르반 4세', eng: 'JarvanIV' },
	{ kor: '카서스', eng: 'Karthus' },
	{ kor: '케인', eng: 'Kayn' },
	{ kor: '카직스', eng: 'Khazix' },
	{ kor: '킨드레드', eng: 'Kindred' },
	{ kor: '리 신', eng: 'LeeSin' },
	{ kor: '릴리아', eng: 'Lillia' },
	{ kor: '마스터 이', eng: 'MasterYi' },
	{ kor: '니달리', eng: 'Nidalee' },
	{ kor: '녹턴', eng: 'Nocturne' },
	{ kor: '누누와 윌럼프', eng: 'Nunu' },
	{ kor: '판테온', eng: 'Pantheon' },
	{ kor: '뽀삐', eng: 'Poppy' },
	{ kor: '람머스', eng: 'Rammus' },
	{ kor: '렉사이', eng: 'RekSai' },
	{ kor: '렝가', eng: 'Rengar' },
	{ kor: '세주아니', eng: 'Sejuani' },
	{ kor: '샤코', eng: 'Shaco' },
	{ kor: '쉬바나', eng: 'Shyvana' },
	{ kor: '스카너', eng: 'Skarner' },
	{ kor: '탈리야', eng: 'Taliyah' },
	{ kor: '탈론', eng: 'Talon' },
	{ kor: '트런들', eng: 'Trundle' },
	{ kor: '우디르', eng: 'Udyr' },
	{ kor: '바이', eng: 'Vi' },
	{ kor: '비에고', eng: 'Viego' },
	{ kor: '볼리베어', eng: 'Volibear' },
	{ kor: '워윅', eng: 'Warwick' },
	{ kor: '오공', eng: 'MonkeyKing' },
	{ kor: '신짜오', eng: 'XinZhao' },
	{ kor: '자크', eng: 'Zac' },
	{ kor: '제드', eng: 'Zed' },
];

const midChampNames = [
	{ kor: '아리', eng: 'Ahri' },
	{ kor: '아칼리', eng: 'Akali' },
	{ kor: '아크샨', eng: 'Akshan' },
	{ kor: '애니비아', eng: 'Anivia' },
	{ kor: '애니', eng: 'Annie' },
	{ kor: '아우렐리온 솔', eng: 'AurelionSol' },
	{ kor: '아지르', eng: 'Azir' },
	{ kor: '카시오페아', eng: 'Cassiopeia' },
	{ kor: '코르키', eng: 'Corki' },
	{ kor: '에코', eng: 'Ekko' },
	{ kor: '피즈', eng: 'Fizz' },
	{ kor: '갈리오', eng: 'Galio' },
	{ kor: '갱플랭크', eng: 'Gangplank' },
	{ kor: '하이머딩거', eng: 'Heimerdinger' },
	{ kor: '이렐리아', eng: 'Irelia' },
	{ kor: '카사딘', eng: 'Kassadin' },
	{ kor: '카타리나', eng: 'Katarina' },
	{ kor: '르블랑', eng: 'Leblanc' },
	{ kor: '리산드라', eng: 'Lissandra' },
	{ kor: '럭스', eng: 'Lux' },
	{ kor: '말자하', eng: 'Malzahar' },
	{ kor: '니코', eng: 'Neeko' },
	{ kor: '오리아나', eng: 'Orianna' },
	{ kor: '키아나', eng: 'Qiyana' },
	{ kor: '라이즈', eng: 'Ryze' },
	{ kor: '스웨인', eng: 'Swain' },
	{ kor: '사일러스', eng: 'Sylas' },
	{ kor: '신드라', eng: 'Syndra' },
	{ kor: '탈리야', eng: 'Taliyah' },
	{ kor: '탈론', eng: 'Talon' },
	{ kor: '트위스티드 페이트', eng: 'TwistedFate' },
	{ kor: '베이가', eng: 'Veigar' },
	{ kor: '벡스', eng: 'Vex' },
	{ kor: '빅토르', eng: 'Viktor' },
	{ kor: '블라디미르', eng: 'Vladimir' },
	{ kor: '제라스', eng: 'Xerath' },
	{ kor: '야스오', eng: 'Yasuo' },
	{ kor: '요네', eng: 'Yone' },
	{ kor: '제드', eng: 'Zed' },
	{ kor: '직스', eng: 'Ziggs' },
	{ kor: '조이', eng: 'Zoe' },
];

const adcChampNames = [
	,
	{ kor: '아펠리오스', eng: 'Aphelios' },
	{ kor: '애쉬', eng: 'Ashe' },
	{ kor: '케이틀린', eng: 'Caitlyn' },
	{ kor: '드레이븐', eng: 'Draven' },
	{ kor: '이즈리얼', eng: 'Ezreal' },
	{ kor: '진', eng: 'Jhin' },
	{ kor: '징크스', eng: 'Jinx' },
	{ kor: '카이사', eng: 'Kaisa' },
	{ kor: '칼리스타', eng: 'Kalista' },
	{ kor: '코그모', eng: 'KogMaw' },
	{ kor: '루시안', eng: 'Lucian' },
	{ kor: '미스 포츈', eng: 'MissFortune' },
	{ kor: '닐라', eng: 'Nilah' },
	{ kor: '사미라', eng: 'Samira' },
	{ kor: '시비르', eng: 'Sivir' },
	{ kor: '스몰더', eng: 'Smolder' },
	{ kor: '트리스타나', eng: 'Tristana' },
	{ kor: '트위치', eng: 'Twitch' },
	{ kor: '바루스', eng: 'Varus' },
	{ kor: '베인', eng: 'Vayne' },
	{ kor: '자야', eng: 'Xayah' },
	{ kor: '야스오', eng: 'Yasuo' },
	{ kor: '제리', eng: 'Zeri' },
	{ kor: '직스', eng: 'Ziggs' },
];

const supportChampNames = [
	{ kor: '알리스타', eng: 'Alistar' },
	{ kor: '아무무', eng: 'Amumu' },
	{ kor: '애쉬', eng: 'Ashe' },
	{ kor: '바드', eng: 'Bard' },
	{ kor: '블리츠크랭크', eng: 'Blitzcrank' },
	{ kor: '브랜드', eng: 'Brand' },
	{ kor: '브라움', eng: 'Braum' },
	{ kor: '잔나', eng: 'Janna' },
	{ kor: '카르마', eng: 'Karma' },
	{ kor: '레오나', eng: 'Leona' },
	{ kor: '룰루', eng: 'Lulu' },
	{ kor: '럭스', eng: 'Lux' },
	{ kor: '마오카이', eng: 'Maokai' },
	{ kor: '미스 포츈', eng: 'MissFortune' },
	{ kor: '모르가나', eng: 'Morgana' },
	{ kor: '나미', eng: 'Nami' },
	{ kor: '노틸러스', eng: 'Nautilus' },
	{ kor: '판테온', eng: 'Pantheon' },
	{ kor: '파이크', eng: 'Pyke' },
	{ kor: '라칸', eng: 'Rakan' },
	{ kor: '렐', eng: 'Rell' },
	{ kor: '레나타 글라스크', eng: 'Renata' },
	{ kor: '세나', eng: 'Senna' },
	{ kor: '세라핀', eng: 'Seraphine' },
	{ kor: '소나', eng: 'Sona' },
	{ kor: '소라카', eng: 'Soraka' },
	{ kor: '스웨인', eng: 'Swain' },
	{ kor: '타릭', eng: 'Taric' },
	{ kor: '쓰레쉬', eng: 'Thresh' },
	{ kor: '벨코즈', eng: 'Velkoz' },
	{ kor: '제라스', eng: 'Xerath' },
	{ kor: '유미', eng: 'Yuumi' },
	{ kor: '질리언', eng: 'Zilean' },
	{ kor: '자이라', eng: 'Zyra' },
];
