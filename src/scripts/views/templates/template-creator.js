import CONFIG from '../../globals/config';

const createRestDetailTemplate = (Rest) => `
<div class="movie-item">
<div class="movie-item__header">
  <img class="movie-item__header__poster" alt="${Rest.name}"
      <source type="image/webp" srcset=${CONFIG.BASE_IMAGE_URL}${Rest.pictureId}>
    <div class="movie-item__header__rating">
  </div>
</div>
<div class="movie-item__content">
  <h3 class ="h3lur">${Rest.name}</h3>
  <p>City : ${Rest.city}</p>
  <p>Address : ${Rest.address}</p>
  <p>⭐️ : <span class="movie-item__header__rating__score">${Rest.rating}</span></p>
  <div class="info__categories">
  <h4>CATEGORIES :&nbsp </h4>
  <span>${Rest.categories[0].name} &nbsp</span>
  ${
  Rest.categories.length > 1
    ? `<span>${Rest.categories[1].name}</span>`
    : ''
}
</div>
  <p>Description : ${Rest.description}</p>
    <div class ="infocontainer">
    <div class="info__food">
    <h4>FOOD</h4>
    <ul>
      ${Rest.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
      
    </ul>
    </div>
    <div class="info__drinks">
    <h4>DRINKS</h4>
    <ul>
    ${Rest.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}
    </ul>
  </div>
  </div>
  <h3 class="title-review">Reviews</h3>
  <div class="detail-review">
  ${Rest.customerReviews
    .map(
      (review) => `
        <div class="detail-review-item">
          <div class="review-header">
            <p class="review-name">${review.name}</p>
            <p class="review-date">${review.date}</p>
          </div>
          <div class="review-body">
            ${review.review}
          </div>
        </div>
      `,
    )
    .join('')}
  </div>
  </div>
</div>
`;

const createRestItemTemplate = (Rest) => `
<div class="movie-item">
<div class="movie-item__header">
  <p>${Rest.city}</p>
  <img class="movie-item__header__posters" alt="${Rest.city}"
      <source type="image/webp" srcset=${CONFIG.BASE_IMAGE_URL}${Rest.pictureId}>
    <div class="movie-item__header__rating">
    <p>⭐️<span class="movie-item__header__rating__score">${Rest.rating}</span></p>
  </div>
</div>
<div class="movie-item__content">
  <h3><a class="monkey" href="/#/detail/${Rest.id}">${Rest.name}</a></h3>
  <p>${Rest.description}</p>
</div>
</div>
`;const createLikeDishButtonTemplate = () => `
<button aria-label="Favorite this dish" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
</button>
`;

const createUnlikeDishButtonTemplate = () => `
<button aria-label="Unfavourite this dish" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

export {
  createRestItemTemplate, createRestDetailTemplate, createLikeDishButtonTemplate,
  createUnlikeDishButtonTemplate,
};
