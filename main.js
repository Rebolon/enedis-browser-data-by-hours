/**
 * Got to https://mon-compte-particulier.enedis.fr/visualiser-vos-mesures-consommation
 * Open the devtools from your browser (usually F12 key from your keyboard)
 * Select "Energie Consommée"
 * Select "Hours"
 * Select "Tableau"
 * Click on "Visualiser"
 * Have a look at Network Tab from the devtools to find personId and prms strings used in Ajax call to alex.microapplications.enedis.fr
 * Use those 2 strings and store them in personId and prms constants
 * Run this script in the devtools console (just copy paste the content script ;-) ) and copy the content doing a right click and then Copy Object
 * Do what you want with the json content :-)
 */
// init your ids from enedis website
const personId = "";
const prms = "";

// build dates for last 2 years
let dates = [];
let today = new Date();
today.setFullYear(today.getFullYear()-2);
while (today < new Date()) {
    dates.push(today.toISOString().split('T').shift());
    today.setDate(today.getDate()+7);
}
console.log(dates);

// call enedis website
const uri = `https://alex.microapplications.enedis.fr/mes-mesures-prm/api/private/v1/personnes/${personId}/prms/${prms}/donnees-energetiques?mesuresTypeCode=COURBE&mesuresCorrigees=false&typeDonnees=CONS&dateDebut=`;
const jsons = [];
const sleep = (ms) => {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Busy-wait loop
  }
};
dates.forEach(async (date) => {
    const data = await fetch(uri + date);
    const json = await data.json();
    jsons.push(json);
    sleep(10);
})
console.log(jsons);

// build hours stack
let hours = [];
jsons.forEach((week) => {
    if (week.cons.aggregats.heure.unite !== "kW") {
        console.warn("Probleme d'unite");
        return;
    }
    hours.push(...week.cons.aggregats.heure.donnees)
})
console.log(hours);
