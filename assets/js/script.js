var area = document.getElementById('appData');
var cityList = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"]
console.log(cityList)
let city_name = 'texas'
var cityArrayUI = document.querySelector('.city_list')
var text = document.getElementById('text')
const api_key = '7beade074d53bf1fb3085db67e13a668'

let baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
// let city_name = prompt("Enter city name : ")
let urlAlt = baseUrl + "appid=" + api_key + "&q=" + city_name
let coorURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city_name + '&limit=10&appid=7beade074d53bf1fb3085db67e13a668'

// fetch(coorURL)
// .then((response) => {
//     return response.json()
// })
// .then( (data) => {
//     let latitude = data[0].lat
//     let longitude = data[0].lon

//     let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=7beade074d53bf1fb3085db67e13a668'
//     let city_name = prompt("Enter city name : ")
//     let urlAlt = baseUrl + "appid=" + api_key + "&q=" + city_name

//     fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then( (data) => {
//         let info = data.list[0]

//         const kelvin = info.main.temp;

//         // Celsius is 273 degrees less than Kelvin
//         const celsius = kelvin - 273;

//         // Calculating Fahrenheit temperature to the nearest integer
//         let fahrenheit = Math.floor(celsius * (9/5) + 32);

//         document.getElementById('city_name').textContent = data.city.name
//         document.getElementById('temp').textContent ="Temp: " + kelvin + " °K " + fahrenheit + " °F " + celsius.toFixed(2) + " °C"
//         document.getElementById('wind').textContent = "Wind: " + info.wind.speed + " mph"
//         document.getElementById('humidity').textContent = "Humidity: " + info.main.humidity + "%"
        
        
//         console.log(data)
//     })
    
// })

// fetch(urlAlt)
// .then((response) => {
//     return response.json();
// }).then((data) => {
//     console.log(data)
// })

// 39.751533072303324, -104.89482462339029
let num = 0;
function addToList() {
    var i = num;
    const to = num+10
    for(i; i < to; i++){
        var liItem = document.createElement('li')
        liItem.textContent = cityList[i]
        liItem.addEventListener('click', (e) => {
            text.textContent = e.value
            console.log(text)
        })
        cityArrayUI.append(liItem)
        console.log(i)
    }
    num += 10
    console.log(num)
}
addToList()

let lastScrollTop = 0;
cityArrayUI.onscroll = (e)=>{
if (cityArrayUI.scrollTop < lastScrollTop){
      // upscroll 
      return;
   } 
   lastScrollTop = cityArrayUI.scrollTop <= 0 ? 0 : cityArrayUI.scrollTop;
    if (cityArrayUI.scrollTop + cityArrayUI.offsetHeight>= cityArrayUI.scrollHeight ){
       addToList()
    }
}

function ac(value){

    city_name = value
    urlAlt = baseUrl + "appid=" + api_key + "&q=" + city_name


    fetch(urlAlt)
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data)
        let info = data.list[0]

            const kelvin = info.main.temp;
    
            // Celsius is 273 degrees less than Kelvin
            const celsius = kelvin - 273;
    
            // Calculating Fahrenheit temperature to the nearest integer
            let fahrenheit = Math.floor(celsius * (9/5) + 32);
    
            document.getElementById('city_name').textContent = data.city.name
            document.getElementById('temp').textContent ="Temp: " + kelvin + " °K " + fahrenheit + " °F " + celsius.toFixed(2) + " °C"
            document.getElementById('wind').textContent = "Wind: " + info.wind.speed + " mph"
            document.getElementById('humidity').textContent = "Humidity: " + info.main.humidity + "%"
})
}
