import { LoyaltyLevel } from "./reviews";
import { Properties } from "./interfaces";

const reviewTotalDisplay = document.querySelector(
  "#reviews"
) as HTMLHeadingElement;
const userNameDisplay = document.querySelector("#user") as HTMLSpanElement;
const propertiesDisplay = document.querySelector(
  ".properties"
) as HTMLDivElement;

const makeMultiple = (value: number): string => {
  return value == 0 || value > 1 ? "s" : "";
};

const totalReviews = (
  value: number,
  reviewer: string,
  isLoyal: LoyaltyLevel
) => {
  reviewTotalDisplay.innerHTML =
    value.toString() +
    ` review${makeMultiple(value)}` +
    " | Last reviewed by " +
    (isLoyal === "GOLD" ? reviewer + " " + "⭐" : reviewer + " ");
};

const populateUser = (
  firstName: string,
  lastName: string,
  isReturning: boolean
) => {
  userNameDisplay.innerHTML =
    (isReturning ? "back " : "") + firstName + " " + lastName;
};

const showProperties = (props: Properties[]) => {
  const list = props
    .map((prop) => {
      return prop.isAvailable
        ? `
         <div class="card">
            <img src="${prop.image}" />
            <h1>${prop.title}</h1>
            <h5>$${prop.price}</h5>
            <h4>${prop.location.city} / ${prop.location.country}</h4>
            <p>${prop.location.firstLine}</p>
            <p>${prop.location.postcode}</p>
            <h2>+${prop.contact[0]}</h2>
            <h2>${prop.contact[1]}</h2>
            <h6>Available</h6>
          </div>
        `
        : `
        <div class="card">
           <img src="${prop.image}" />
           <h1>${prop.title}</h1>
           <h5>$${prop.price}</h5>
           <h4>${prop.location.city} / ${prop.location.country}</h4>
           <p>${prop.location.firstLine}</p>
           <p>${prop.location.postcode}</p>
           <h2>+${prop.contact[0]}</h2>
           <h2>${prop.contact[1]}</h2>
           <h6>Not Available</h6>
         </div>
       `;
    })
    .join("");
  propertiesDisplay.innerHTML = list;
};

export { totalReviews, populateUser, showProperties };
