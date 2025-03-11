# enedis-browser-data-by-hours

Simple script to get all your data from enedis website, by half hour

# How

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
 
# Sample 

```
[
    {
        "dateDebut": "2023-02-19T00:00",
        "dateFin": "2023-02-19T00:30",
        "valeur": "0.088"
    }, ...
]
```
* valeur is a value in kwh (kilo watt per hour)
* 
