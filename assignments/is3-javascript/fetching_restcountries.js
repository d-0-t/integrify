import fetch from "node-fetch";

class WorldWiki {

  // Search for a country by full name
  searchByName(name) {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("\nThe official name of " + name + " is: ");
        data.map((country) => {
          if (country.name.common === name) {
            console.log(country.name.official);
          }
        });
      });
  }

  // Get list of all countries
  getAllCountries() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        let allCountryNames = [];
        data.forEach( country => allCountryNames.push(country.name.common) );
        
        console.log("\nList of all countries: ");
        console.log(allCountryNames);
      });
  }

  // Given a country name, find out what other countries it's bordering with
  getBorderingCountries(name) {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("\nThe bordering countries of " + name + " are: ");
        data.map((country) => {
          if (country.name.common === name) {
            console.log(country.borders);
          }
        });
      });
    }

    // Given a population (in millions), find out what countries have more people than that
    populationMoreThan(num) {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          let countriesWithBiggerPopulation = [];
          data.map((country) => {
            if (country.population > num*1000000) {
              countriesWithBiggerPopulation.push(country.name.common);
            }
          });
          console.log("\nCountries with a population over " + num + " million: ");
          console.log(countriesWithBiggerPopulation);
        });
    }
}

const obj = new WorldWiki();

obj.searchByName("Sweden");
obj.getAllCountries();
obj.getBorderingCountries("Hungary");
obj.populationMoreThan(1000);
