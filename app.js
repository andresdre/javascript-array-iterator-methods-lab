// Inventors
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
  ];

// People
const people = [
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William',
  ];

// Travel Methods
const travelMethods = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
  ];

// Devs
  const devs = [
    { name: 'Alex', year: 1988 },
    { name: 'Dani', year: 1986 },
    { name: 'Matt', year: 1970 },
    { name: 'Wes', year: 2015 },
  ];

  // Comments
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
  ];


 /* ================================================================
    ================================================================
    ================================================================
    ================================================================ */


// Exercise 1: Array.prototype.filter()
let veryOldInventors = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1600);

console.log('Exercise 1 my result: ', veryOldInventors);


// Exercise 2: Array.prototype.map()
let inventorNames = inventors.map(inventor => `First Name: ${inventor.first} Last Name: ${inventor.last}`);

console.log(inventorNames)


// Exercise 3: Array.prototype.sort()
let sortedByBirthyear = inventors.sort((a, b) => a.year - b.year);
let sortedYear = sortedByBirthyear.map(inventor => `${inventor.first} ${inventor.last} (${inventor.year})`)

console.log(sortedYear)


// Exercise 4: Array.prototype.find()
let inventorNmaedAda = inventors.find(inventor => inventor.first === 'Ada' && inventor.last === 'Lovelace')

console.log(inventorNmaedAda)


// Exercise 5: Array.prototype.map()
let firstLast = inventors.map(inventor => {
    return {
        fullName: inventor.first + ' ' + inventor.last,
        first: inventor.first,
        last: inventor.last,
        year: inventor.year,
        passed: inventor.passed
    };
})

.sort((a, b) => {
    const nameA = a.first + ' ' + a.last;
    const nameB = b.first + ' ' + b.last;

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
})

console.log(firstLast)


// Exercise 6: Array.prototype.some()
let currentYear = new Date().getFullYear();
let isAdultPresent = devs.some(dev => currentYear - dev.year >= 18);

console.log(isAdultPresent);


// Exercise 7: Array.prototype.every()
let yearEl = new Date().getFullYear();
let isEveryone19OrOlder = devs.every(dev => yearEl - dev.year >= 19);

console.log(isEveryone19OrOlder);


// Exercise 8: Array.prototype.find()
let commentById = comments.find(comment => comment.id === 823423);

console.log(commentById)


// Exercise 9: Array.prototype.findIndex()
let idx = comments.findIndex(comment => comment.id === 123523);

console.log(idx)
