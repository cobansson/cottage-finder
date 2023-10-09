import { totalReviews, populateUser, showProperties } from "./src/utils";
import { properties } from "./src/properties";
import { reviews } from "./src/reviews";
import { user } from "./src/user";
import { getPosition, errorPositionFetch } from "./src/footer";
import { showTopTwoReviews } from "./src/showreviews";

const showPropertiesBtn = document.querySelector(
  ".show-properties"
) as HTMLButtonElement;

navigator.geolocation.getCurrentPosition(getPosition, errorPositionFetch);
showProperties(properties);
totalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(user.userName.firstName, user.userName.lastName, user.isReturning);
showPropertiesBtn.addEventListener("click", showTopTwoReviews);
