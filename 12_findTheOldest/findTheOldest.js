const findTheOldest = function(people) {
  let oldest = people[0];

  for (let i = 1; i < people.length; i++) {
    oldest = getAge(oldest) < getAge(people[i]) ? people[i] : oldest;
  }

  return oldest;
};

const getAge = function(person) {
  return person.yearOfDeath != null ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
