const movie = {
id: 41,
title:"Orbit",
genre:"Sci-Fi",
rating: 8.4
};
const{title,genre,rating}=movie;
console.log(`| ${movie.title}|${movie.genre}|${movie.rating }`);
const recommendedMovies = ["Orbit", "Ocean", "Skyline"];
const [firstMovie, secondMovie] = recommendedMovies;
console.log(firstMovie, secondMovie);//orbit ocean

//23
const user = {
  id: 7,
  name: "Dana Levi",
  email: "dana@example.com",
  isActive: true
};
const formatUser = ({name ,email})=>{
    return `${name}-${email}`;
}
console.log(formatUser(user));//*

const getUserStatus=({name, isActive})=>{
    if(isActive)
        return ` ${name} is active`;
    else return `${name} not active`;
}
console.log(getUserStatus(user));



