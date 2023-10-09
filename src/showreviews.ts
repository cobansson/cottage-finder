import { reviews } from "./reviews";
const revealedTopTwoReviewsEl = document.getElementById(
  "revealed-reviews"
) as HTMLUListElement;

export function showTopTwoReviews() {
  const reviewsSorted = reviews.sort((a, b) => {
    return b.stars - a.stars;
  });
  const firstTwoReviews = [...reviewsSorted.slice(0, 2)];
  const revealedReviews = firstTwoReviews
    .map((review) => {
      return review.stars > 1 || review.stars == 0
        ? `
        <li>${review.stars} stars from ${review.name}</li>
        `
        : `
        <li>${review.stars} star from ${review.name}</li>
        `;
    })
    .join("");
  revealedTopTwoReviewsEl.innerHTML = revealedReviews.toString();
}
