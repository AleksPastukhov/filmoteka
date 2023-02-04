const getFilmCardInnerHTMLString = ({ poster_path, release_date, title, genre_ids, id, vote_average }) => {
    
    const formatted_release_date = new Date(release_date).getFullYear();

    return `
        <div class="film-card">
            <img
                src="${poster_path}"
                alt="${title}"
                loading="lazy"
                class="film-card__photo"
            />

            <div class="info">
                <p class="info__title">${title}</p>
                <p class="info__genres">${genre_ids}</p>
                <p class="info__year">${formatted_release_date}</p>
                <p class="info__raiting">${vote_average}</p>
            </div>
        </div>
`
}

const createFilmCardElement = (item, options) => {

    const onClick = options?.onClick

    const filmCardInnerHtml = getFilmCardInnerHTMLString(item)

    const $filmCard = document.createElement('div')

    if (onClick) {
        $filmCard.addEventListener('click', () => onClick(item))
    }
    $filmCard.innerHTML = filmCardInnerHtml
    return $filmCard
}

const renderFilmCards = (results, options) => {

    const containerQuerySelector = options?.containerQuerySelector ?? '#container'
    const onCardClick = options?.onCardClick

    const $container = document.querySelector(containerQuerySelector)
    $container.innerHTML = ''

    if (!$container) {
        throw new Error('Cannot find container')
    }

    results.forEach((movie) => {
        const $movieCard = createFilmCardElement(movie, { onClick: onCardClick})
        $container.append($movieCard) 
    })
} 

const test = renderFilmCards([
    {
            "adult": false,
            "backdrop_path": "/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
            "genre_ids": [
                28,
                12,
                878
            ],
            "id": 284054,
            "original_language": "en",
            "original_title": "Black Panther",
            "overview": "Після того, як у Ваканді були виявлені поклади металу, який може поглинати вібрацію, над жителями цієї країни нависла загроза. Бажаючі збагатитися несли руйнування і смерть. За легендою, таємничий воїн — Чорна Пантера — оберігав ці місця від непрошених гостей. Тепер принцу Т’Чаллу доведеться стати Чорною Пантерою, щоби врятувати свій народ.",
            "popularity": 251.082,
            "poster_path": "/iA1SIInNM3mU2w9BgD6VIOUOk7i.jpg",
            "release_date": "2018-02-13",
            "title": "Чорна Пантера",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 20244
    },
    {
            "adult": false,
            "backdrop_path": "/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg",
            "genre_ids": [
                28,
            12,
                878
            ],
            "id": 284054,
            "original_language": "en",
            "original_title": "Black Panther",
            "overview": "Після того, як у Ваканді були виявлені поклади металу, який може поглинати вібрацію, над жителями цієї країни нависла загроза. Бажаючі збагатитися несли руйнування і смерть. За легендою, таємничий воїн — Чорна Пантера — оберігав ці місця від непрошених гостей. Тепер принцу Т’Чаллу доведеться стати Чорною Пантерою, щоби врятувати свій народ.",
            "popularity": 251.082,
            "poster_path": "/iA1SIInNM3mU2w9BgD6VIOUOk7i.jpg",
            "release_date": "3033-02-13",
            "title": "Чорна Пантера",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 20244
    },
])

console.log(test)


