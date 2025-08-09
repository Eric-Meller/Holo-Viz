// Store locations data for Heavenly Soufflé website
// This file contains all store chains and their locations

// Chain-based region centers
const chainRegions = {
    "ShopRite": {
        "NJ": { lat: 40.8559, lng: -74.1687 },  // Northern NJ center
        "NY": { lat: 41.1129, lng: -74.0351 },  // NY ShopRite region
        "PA": { lat: 40.6843, lng: -75.2242 }   // PA ShopRite region
    },
    "Whole Foods": {
        "NJ": { lat: 40.7178, lng: -74.2140 },  // NJ Whole Foods center
        "NY": { lat: 40.7831, lng: -73.9712 },  // NYC Whole Foods center
        "CT": { lat: 41.3082, lng: -72.9282 }   // CT Whole Foods center
    },
    "Wegmans": {
        "NJ": { lat: 40.3573, lng: -74.5543 },  // Central NJ
        "NY": { lat: 42.9538, lng: -77.4373 },  // Rochester area
        "PA": { lat: 40.2454, lng: -75.1962 }   // PA Wegmans region
    },
    "Balducci's": {
        "NY": { lat: 40.9679, lng: -73.7654 },  // NY Balducci's region
        "CT": { lat: 41.0834, lng: -73.5447 },  // CT Balducci's region
        "MD": { lat: 39.0189, lng: -77.1209 },  // MD Balducci's region
        "VA": { lat: 38.9230, lng: -77.1323 }   // VA Balducci's region
    },
    "Kings": {
        "NJ": { lat: 40.7878, lng: -74.3845 },  // NJ Kings center
        "NY": { lat: 40.7278, lng: -73.6353 }   // NY Kings center
    }
};

// Store locations with exact coordinates and addresses
const storeLocations = {
    "ShopRite": [
        { 
            name: "ShopRite of Bayonne", 
            lat: 40.666884, 
            lng: -74.119191,
            address: "550 Broadway",
            city: "Bayonne",
            state: "NJ",
            zip: "07002"
        },
        { 
            name: "ShopRite of Clark", 
            lat: 40.6224, 
            lng: -74.3107,
            address: "80 Central Ave",
            city: "Clark",
            state: "NJ",
            zip: "07066"
        },
        { 
            name: "ShopRite of Emerson", 
            lat: 40.978355530269305, 
            lng: -74.02499532351625,
            address: "1 Kinderkamack Rd",
            city: "Emerson",
            state: "NJ",
            zip: "07630"
        },
        { 
            name: "ShopRite of Fair Lawn", 
            lat: 40.923034408251624, 
            lng: -74.1303270553865,
            address: "22-00 Route 208 South",
            city: "Fair Lawn",
            state: "NJ",
            zip: "07410"
        },
        { 
            name: "ShopRite of Garnerville", 
            lat: 41.2000558, 
            lng: -74.0089589,
            address: "320 Route 202",
            city: "Garnerville",
            state: "NY",
            zip: "10923"
        },
        { 
            name: "ShopRite of Hackensack", 
            lat: 40.8624398, 
            lng: -74.0342631,
            address: "450 Hackensack Ave",
            city: "Hackensack",
            state: "NJ",
            zip: "07601"
        },
        { 
            name: "ShopRite of Hillsdale", 
            lat: 41.012753, 
            lng: -74.041369,
            address: "303 Hillsdale Ave",
            city: "Hillsdale",
            state: "NJ",
            zip: "07642"
        },
        { 
            name: "ShopRite of Hoboken", 
            lat: 40.7493889, 
            lng: -74.03646183470757,
            address: "900 Madison St",
            city: "Hoboken",
            state: "NJ",
            zip: "07030"
        },
        { 
            name: "ShopRite of Jersey City", 
            lat: 40.72278675, 
            lng: -74.04005750137392,
            address: "300 Marin Blvd",
            city: "Jersey City",
            state: "NJ",
            zip: "07302"
        },
        { 
            name: "ShopRite of Lyndhurst", 
            lat: 40.812020450000006, 
            lng: -74.11871010793521,
            address: "1 New Jersey Ave",
            city: "Lyndhurst",
            state: "NJ",
            zip: "07071"
        },
        { 
            name: "ShopRite of New City", 
            lat: 41.1492495, 
            lng: -73.9876195,
            address: "120 N Main St",
            city: "New City",
            state: "NY",
            zip: "10956"
        },
        { 
            name: "ShopRite of New Milford", 
            lat: 40.9281545, 
            lng: -74.02603875,
            address: "100 River Rd",
            city: "New Milford",
            state: "NJ",
            zip: "07646"
        },
        { 
            name: "ShopRite of Northvale", 
            lat: 41.0119134, 
            lng: -73.9450128,
            address: "200 Livingston St",
            city: "Northvale",
            state: "NJ",
            zip: "07647"
        },
        { 
            name: "ShopRite of Palisades Park", 
            lat: 40.851335015625, 
            lng: -74.003052375,
            address: "500 Bergen Blvd",
            city: "Palisades Park",
            state: "NJ",
            zip: "07650"
        },
        { 
            name: "ShopRite of Ramsey", 
            lat: 41.06838015332334, 
            lng: -74.13809546789102,
            address: "1000 Route 17",
            city: "Ramsey",
            state: "NJ",
            zip: "07446"
        },
        { 
            name: "ShopRite of Stony Point", 
            lat: 41.225249927794366, 
            lng: -73.98532562418409,
            address: "5 Holt Dr",
            city: "Stony Point",
            state: "NY",
            zip: "10980"
        },
        { 
            name: "ShopRite of West Milford", 
            lat: 41.1328614, 
            lng: -74.3657055,
            address: "100 Marshall Hill Rd",
            city: "West Milford",
            state: "NJ",
            zip: "07480"
        },
        { 
            name: "ShopRite of West Nyack", 
            lat: 41.0927749, 
            lng: -73.9589405,
            address: "100 Palisades Center Dr",
            city: "West Nyack",
            state: "NY",
            zip: "10994"
        },
        { 
            name: "ShopRite of Wallington", 
            lat: 40.8445181, 
            lng: -74.1063532,
            address: "1 Main Ave",
            city: "Wallington",
            state: "NJ",
            zip: "07057"
        },
        { 
            name: "ShopRite of Wayne", 
            lat: 40.9541698, 
            lng: -74.2208823,
            address: "1000 Route 23",
            city: "Wayne",
            state: "NJ",
            zip: "07470"
        },
        { 
            name: "ShopRite of Wyckoff", 
            lat: 41.0130384, 
            lng: -74.16911188799901,
            address: "1000 Wyckoff Ave",
            city: "Wyckoff",
            state: "NJ",
            zip: "07481"
        },
        { name: "ShopRite of Aberdeen", lat: 40.399071140873616, lng: -74.22765748359852, address: "1 Highway 35", city: "Aberdeen", state: "NJ", zip: "07747" },
        { name: "ShopRite of Bayville", lat: 39.91841113482135, lng: -74.15781042912278, address: "343 Atlantic City Blvd", city: "Bayville", state: "NJ", zip: "08721" },
        { name: "ShopRite of Belmar", lat: 40.17784308827148, lng: -74.04000222348846, address: "1801 NJ-35", city: "Belmar", state: "NJ", zip: "07719" },
        { name: "ShopRite of Bordentown", lat: 40.127967, lng: -74.7056332, address: "260 Route 130", city: "Bordentown", state: "NJ", zip: "08505" },
        { name: "ShopRite of Bound Brook", lat: 40.5676675, lng: -74.5435514, address: "601 W Union Ave", city: "Bound Brook", state: "NJ", zip: "08805" },
        { name: "ShopRite of Branchburg", lat: 40.60135525801642, lng: -74.68808774763502, address: "3166 US-22", city: "Branchburg", state: "NJ", zip: "08876" },
        { name: "ShopRite of Bricktown", lat: 40.077959, lng: -74.094962, address: "2200 NJ-88", city: "Brick", state: "NJ", zip: "08724" },
        { name: "ShopRite of East Brunswick", lat: 40.46382135269192, lng: -74.40491420229476, address: "277 NJ-18", city: "East Brunswick", state: "NJ", zip: "08816" },
        { name: "ShopRite of East Windsor", lat: 40.25373243823917, lng: -74.55730762579402, address: "319 Route 130", city: "East Windsor", state: "NJ", zip: "08520" },
        { name: "ShopRite of Edison", lat: 40.5021975, lng: -74.3890405, address: "2303 Woodbridge Ave", city: "Edison", state: "NJ", zip: "08817" },
        { name: "ShopRite of Ewing", lat: 40.249432150000004, lng: -74.76921623529167, address: "1750 N Olden Ave", city: "Ewing", state: "NJ", zip: "08638" },
        { name: "ShopRite of Fischer Bay", lat: 40.039392, lng: -74.223254, address: "860 Fischer Blvd", city: "Toms River", state: "NJ", zip: "08753" },
        { name: "ShopRite of Freehold", lat: 40.24916901566926, lng: -74.28526188897067, address: "3585 US-9", city: "Freehold", state: "NJ", zip: "07728" },
        { name: "ShopRite of Hadley Commons", lat: 40.546554900000004, lng: -74.4274273, address: "1600 Stelton Rd", city: "Piscataway", state: "NJ", zip: "08854" },
        { name: "ShopRite of Hamilton Marketplace", lat: 40.1919311, lng: -74.64239682598404, address: "130 Marketplace Blvd", city: "Hamilton", state: "NJ", zip: "08691" },
        { name: "ShopRite of Hazlet", lat: 40.420672377095315, lng: -74.18439080379065, address: "3120 NJ-35", city: "Hazlet", state: "NJ", zip: "07730" },
        { name: "ShopRite of Howell", lat: 40.14172155160706, lng: -74.22521556323144, address: "4571 US-9", city: "Howell", state: "NJ", zip: "07731" },
        { name: "ShopRite of Jackson", lat: 40.111974, lng: -74.344153, address: "2 W Veterans Hwy", city: "Jackson", state: "NJ", zip: "08527" },
        { name: "ShopRite of Lacey", lat: 39.8522773, lng: -74.1836143, address: "344 US-9", city: "Lanoka Harbor", state: "NJ", zip: "08734" },
        { name: "ShopRite of Manahawkin", lat: 39.67947680459773, lng: -74.27162488184283, address: "641 US-9", city: "Manahawkin", state: "NJ", zip: "08050" },
        { name: "ShopRite of Manchester", lat: 40.0142938, lng: -74.2995597, address: "1001 NJ-70", city: "Manchester", state: "NJ", zip: "08759" },
        { name: "ShopRite of Middletown", lat: 40.40068000855017, lng: -74.12009233600534, address: "1553 NJ-35", city: "Middletown", state: "NJ", zip: "07748" },
        { name: "ShopRite of Montgomery", lat: 40.4053245, lng: -74.6469933, address: "1325 NJ-206", city: "Skillman", state: "NJ", zip: "08558" },
        { name: "ShopRite of North Brunswick", lat: 40.52008065, lng: -74.55112425503154, address: "2424 US-1", city: "North Brunswick", state: "NJ", zip: "08902" },
        { name: "ShopRite of Pennington", lat: 40.31055020989249, lng: -74.78699552366508, address: "2555 Pennington Rd", city: "Pennington", state: "NJ", zip: "08534" },
        { name: "ShopRite of Parlin", lat: 40.464558000000004, lng: -74.31380277777778, address: "3 Parlin Blvd", city: "Parlin", state: "NJ", zip: "08859" },
        { name: "ShopRite of Route 37", lat: 39.970364814383764, lng: -74.23424877988859, address: "2 NJ-37", city: "Toms River", state: "NJ", zip: "08753" },
        { name: "ShopRite of Shrewsbury", lat: 40.31267569343874, lng: -74.06560790837068, address: "1151 NJ-35", city: "Shrewsbury", state: "NJ", zip: "07702" },
        { name: "ShopRite of Somerville", lat: 40.567881549999996, lng: -74.61515511238971, address: "1 S Davenport St", city: "Somerville", state: "NJ", zip: "08876" },
        { name: "ShopRite of South Brunswick", lat: 40.3823921, lng: -74.573934, address: "4180 US-1", city: "Monmouth Junction", state: "NJ", zip: "08852" },
        { name: "ShopRite of South Plainfield", lat: 40.546554900000004, lng: -74.4274273, address: "1600 Stelton Rd", city: "Piscataway", state: "NJ", zip: "08854" },
        { name: "ShopRite of Trenton", lat: 40.2495605, lng: -74.7693746, address: "1750 N Olden Ave", city: "Ewing", state: "NJ", zip: "08638" },
        { name: "ShopRite of Waretown", lat: 39.79974, lng: -74.197527, address: "395 NJ-9", city: "Waretown", state: "NJ", zip: "08758" },
        { name: "ShopRite of West Long Branch", lat: 40.2912931, lng: -74.0345836, address: "145 NJ-36", city: "West Long Branch", state: "NJ", zip: "07764" },
        { name: "ShopRite of Woodbridge", lat: 40.564915462546885, lng: -74.29875674292207, address: "877 US-1", city: "Woodbridge", state: "NJ", zip: "07095" },
        { name: "ShopRite of Bethlehem", lat: 40.6512675, lng: -75.29332312066379, address: "4701 Freemansburg Ave", city: "Bethlehem", state: "PA", zip: "18020" },
        { name: "ShopRite of Flemington", lat: 40.49519831281345, lng: -74.85902727044211, address: "272 NJ-202", city: "Flemington", state: "NJ", zip: "08822" },
        { name: "ShopRite of Greenwich", lat: 40.680126900000005, lng: -75.14344995394026, address: "1207 US-22", city: "Phillipsburg", state: "NJ", zip: "08865" },
        { name: "ShopRite of Yardley", lat: 40.1982448, lng: -74.8632774, address: "1603 Big Oak Rd", city: "Yardley", state: "PA", zip: "19067" },
        { name: "ShopRite of Rochelle Park", lat: 40.915181, lng: -74.0805254, address: "220 W Passaic St", city: "Rochelle Park", state: "NJ", zip: "07662" },
        { name: "ShopRite of Englewood", lat: 40.895668531249996, lng: -73.97539440625, address: "40 Nathaniel Pl", city: "Englewood", state: "NJ", zip: "07631" },
        { name: "ShopRite of Linden", lat: 40.62676763265306, lng: -74.26693757142857, address: "651 N Stiles St", city: "Linden", state: "NJ", zip: "07036" },
        { name: "ShopRite of Pearl River", lat: 41.060734749999995, lng: -74.01163223607145, address: "26 N Middletown Rd", city: "Pearl River", state: "NY", zip: "10965" },
        { name: "ShopRite of Brooklyn", lat: 40.6267325, lng: -73.97712097154695, address: "1080 McDonald Ave", city: "Brooklyn", state: "NY", zip: "11230" },
        { name: "ShopRite of Newark", lat: 40.73668085, lng: -74.18613542110458, address: "206 Springfield Ave", city: "Newark", state: "NJ", zip: "07103" },
        { name: "ShopRite of Brookdale", lat: 40.83752414999999, lng: -74.18351950135633, address: "1409 Broad St", city: "Bloomfield", state: "NJ", zip: "07003" },
        { name: "ShopRite of College Point", lat: 40.7816821, lng: -73.84231014981114, address: "13205 20th Ave", city: "College Point", state: "NY", zip: "11356" }
    ],
    "Whole Foods": [
        { 
            name: "Whole Foods Market Tribeca", 
            lat: 40.7156017, 
            lng: -74.0114667,
            address: "270 Greenwich St",
            city: "New York",
            state: "NY",
            zip: "10007"
        },
        { 
            name: "Whole Foods Market One Wall Street", 
            lat: 40.7070866, 
            lng: -74.0119141,
            address: "1 Wall St",
            city: "New York",
            state: "NY",
            zip: "10005"
        },
        { 
            name: "Whole Foods Market Manhattan West", 
            lat: 40.7530239, 
            lng: -73.99951380079614,
            address: "450 10th Ave",
            city: "New York",
            state: "NY",
            zip: "10018"
        },
        { 
            name: "Whole Foods Market Cherry Hill", 
            lat: 39.91645558720528, 
            lng: -75.00733403888616,
            address: "1558 North Kings Highway",
            city: "Cherry Hill",
            state: "NJ",
            zip: "08034"
        },
        { 
            name: "Whole Foods Market Greenwich", 
            lat: 41.03678754452053, 
            lng: -73.60213624529122,
            address: "90 E Putnam Ave",
            city: "Greenwich",
            state: "CT",
            zip: "06830"
        },
        { 
            name: "Whole Foods Market Stamford", 
            lat: 41.0749763, 
            lng: -73.5503031,
            address: "110 High Ridge Rd",
            city: "Stamford",
            state: "CT",
            zip: "06905"
        },
        { 
            name: "Whole Foods Market Danbury", 
            lat: 41.34699658717619, 
            lng: -73.46892869613859,
            address: "5 Sugar Hollow Rd",
            city: "Danbury",
            state: "CT",
            zip: "06810"
        },
        { 
            name: "Whole Foods Market Edgewater", 
            lat: 40.824737400000004, 
            lng: -73.97405095467067,
            address: "905 River Rd",
            city: "Edgewater",
            state: "NJ",
            zip: "07020"
        },
        { 
            name: "Whole Foods Market Jersey City", 
            lat: 40.7179153, 
            lng: -74.0369334,
            address: "479 Washington Blvd",
            city: "Jersey City",
            state: "NJ",
            zip: "07310"
        },
        { 
            name: "Whole Foods Market Metuchen", 
            lat: 40.53984125, 
            lng: -74.36594346066137,
            address: "420 Middlesex Ave",
            city: "Metuchen",
            state: "NJ",
            zip: "08840"
        },
        { 
            name: "Whole Foods Market Newark", 
            lat: 40.7401408, 
            lng: -74.1701743,
            address: "513 Bloomfield Ave",
            city: "Newark",
            state: "NJ",
            zip: "07107"
        },
        { 
            name: "Whole Foods Market Ridgewood", 
            lat: 40.97840385000001, 
            lng: -74.12251444823869,
            address: "44 Godwin Ave",
            city: "Ridgewood",
            state: "NJ",
            zip: "07450"
        },
        { 
            name: "Whole Foods Market Wall", 
            lat: 40.1615781, 
            lng: -74.05316264999999,
            address: "2800 Route 138",
            city: "Wall",
            state: "NJ",
            zip: "07719"
        },
        { 
            name: "Whole Foods Market Wayne", 
            lat: 40.9305884, 
            lng: -74.2268245,
            address: "1000 Route 23",
            city: "Wayne",
            state: "NJ",
            zip: "07470"
        },
        { 
            name: "Whole Foods Market Weehawken", 
            lat: 40.7614198, 
            lng: -74.0224261,
            address: "400 Park Ave",
            city: "Weehawken",
            state: "NJ",
            zip: "07086"
        },
        { 
            name: "Whole Foods Market West Orange", 
            lat: 40.8042805, 
            lng: -74.2490941,
            address: "235 Prospect Ave",
            city: "West Orange",
            state: "NJ",
            zip: "07052"
        },
        { name: "Whole Foods Market Albany", lat: 42.7091394, lng: -73.8188949, address: "1425 Central Ave", city: "Albany", state: "NY", zip: "12205" },
        { name: "Whole Foods Market Amherst", lat: 42.98058334375, lng: -78.817068, address: "3139 Sheridan Dr", city: "Amherst", state: "NY", zip: "14226" },
        { name: "Whole Foods Market Brooklyn (Ashland)", lat: 40.6860974, lng: -73.9785902, address: "292 Ashland Pl", city: "Brooklyn", state: "NY", zip: "11217" },
        { name: "Whole Foods Market Brooklyn (Bedford)", lat: 40.7161062, lng: -73.9597389, address: "238 Bedford Ave", city: "Brooklyn", state: "NY", zip: "11249" },
        { name: "Whole Foods Market Brooklyn (3rd St)", lat: 40.674874599999995, lng: -73.98878260316653, address: "214 3rd St", city: "Brooklyn", state: "NY", zip: "11215" },
        { name: "Whole Foods Market Chappaqua", lat: 41.1774816, lng: -73.7512709, address: "480 N Bedford Rd", city: "Chappaqua", state: "NY", zip: "10514" },
        { name: "Whole Foods Market Commack", lat: 40.8380287, lng: -73.2839502, address: "120 Veterans Memorial Hwy", city: "Commack", state: "NY", zip: "11725" },
        { name: "Whole Foods Market Garden City", lat: 40.7426536, lng: -73.607834, address: "867 E Gate Blvd", city: "Garden City", state: "NY", zip: "11530" },
        { name: "Whole Foods Market Jericho", lat: 40.7889122, lng: -73.5345987, address: "429 N Broadway", city: "Jericho", state: "NY", zip: "11753" },
        { name: "Whole Foods Market Lake Grove", lat: 40.8705836, lng: -73.12728393926108, address: "120 New Moriches Rd", city: "Lake Grove", state: "NY", zip: "11755" },
        { name: "Whole Foods Market Manhattan (57th St)", lat: 40.7594206, lng: -73.9660348, address: "10 Columbus Cir", city: "New York", state: "NY", zip: "10019" },
        { name: "Whole Foods Market Manhattan (7th Ave)", lat: 40.7449895, lng: -73.9937553, address: "250 7th Ave", city: "New York", state: "NY", zip: "10001" },
        { name: "Whole Foods Market Manhattan (Bowery)", lat: 40.7258576, lng: -73.9925551, address: "95 E Houston St", city: "New York", state: "NY", zip: "10002" },
        { name: "Whole Foods Market Manhattan (Bryant Park)", lat: 40.7544255, lng: -73.9845526, address: "1095 6th Ave", city: "New York", state: "NY", zip: "10036" },
        { name: "Whole Foods Market Manhattan (Chelsea)", lat: 40.7421962, lng: -73.9958181, address: "250 7th Ave", city: "New York", state: "NY", zip: "10001" },
        { name: "Whole Foods Market Manhattan (Columbus Circle)", lat: 40.7687474, lng: -73.9826694, address: "10 Columbus Cir", city: "New York", state: "NY", zip: "10019" },
        { name: "Whole Foods Market Manhattan (Midtown East)", lat: 40.7580212, lng: -73.9635598, address: "226 E 57th St", city: "New York", state: "NY", zip: "10022" },
        { name: "Whole Foods Market Manhattan (Tribeca)", lat: 40.7156017, lng: -74.0114667, address: "270 Greenwich St", city: "New York", state: "NY", zip: "10007" },
        { name: "Whole Foods Market Manhattan (Union Square)", lat: 40.7348884, lng: -73.9910835, address: "4 Union Square S", city: "New York", state: "NY", zip: "10003" },
        { name: "Whole Foods Market Manhattan (Upper East Side)", lat: 40.7794802, lng: -73.9501779, address: "1551 3rd Ave", city: "New York", state: "NY", zip: "10128" },
        { name: "Whole Foods Market Manhattan (Upper West Side)", lat: 40.7799342, lng: -73.9808905, address: "808 Columbus Ave", city: "New York", state: "NY", zip: "10025" },
        { name: "Whole Foods Market Manhasset", lat: 40.7963, lng: -73.6693, address: "2101 Northern Blvd", city: "Manhasset", state: "NY", zip: "11030" },
        { name: "Whole Foods Market Nanuet", lat: 41.0962, lng: -74.0237, address: "4 Mountain View Ave", city: "Nanuet", state: "NY", zip: "10954" },
        { name: "Whole Foods Market Port Chester", lat: 41.0018, lng: -73.6657, address: "575 Boston Post Rd", city: "Port Chester", state: "NY", zip: "10573" },
        { name: "Whole Foods Market Scarsdale", lat: 40.9886, lng: -73.7868, address: "1 Ridge Hill Blvd", city: "Yonkers", state: "NY", zip: "10710" },
        { name: "Whole Foods Market White Plains", lat: 41.0332, lng: -73.7625, address: "110 Bloomingdale Rd", city: "White Plains", state: "NY", zip: "10605" },
        { name: "Whole Foods Market Yonkers", lat: 40.9557, lng: -73.8649, address: "15 Ridge Hill Blvd", city: "Yonkers", state: "NY", zip: "10710" }
    ],
    "Wegmans": [
        { 
            name: "Wegmans - Bridgewater", 
            lat: 40.5839, 
            lng: -74.6301,
            address: "724 US-202",
            city: "Bridgewater",
            state: "NJ",
            zip: "08807"
        },
        { 
            name: "Wegmans - Hanover", 
            lat: 40.8249, 
            lng: -74.4249,
            address: "34 Sylvan Way",
            city: "Hanover",
            state: "NJ",
            zip: "07054"
        },
        { 
            name: "Wegmans - Montvale", 
            lat: 41.0546, 
            lng: -74.0451,
            address: "100 Farm View",
            city: "Montvale",
            state: "NJ",
            zip: "07645"
        },
        { 
            name: "Wegmans - Ocean", 
            lat: 40.2234, 
            lng: -74.0336,
            address: "1104 Highway 35",
            city: "Ocean",
            state: "NJ",
            zip: "07712"
        },
        { 
            name: "Wegmans - Princeton", 
            lat: 40.3573, 
            lng: -74.6184,
            address: "240 Nassau Park Blvd",
            city: "Princeton",
            state: "NJ",
            zip: "08540"
        },
        { 
            name: "Wegmans - Woodbridge", 
            lat: 40.5553, 
            lng: -74.2995,
            address: "15 Woodbridge Center Dr",
            city: "Woodbridge",
            state: "NJ",
            zip: "07095"
        },
        { 
            name: "Wegmans - Brooklyn", 
            lat: 40.6923, 
            lng: -73.9921,
            address: "21 Flushing Ave",
            city: "Brooklyn",
            state: "NY",
            zip: "11205"
        },
        { 
            name: "Wegmans - Harrison", 
            lat: 41.0118, 
            lng: -73.7187,
            address: "106 Corporate Park Dr",
            city: "Harrison",
            state: "NY",
            zip: "10604"
        },
        { name: "Wegmans - Albany", lat: 42.6925, lng: -73.8496, address: "579 Troy Schenectady Rd", city: "Albany", state: "NY", zip: "12110" },
        { name: "Wegmans - Buffalo", lat: 42.9758, lng: -78.6975, address: "675 Alberta Dr", city: "Buffalo", state: "NY", zip: "14226" },
        { name: "Wegmans - Canandaigua", lat: 42.8738, lng: -77.2542, address: "345 Eastern Blvd", city: "Canandaigua", state: "NY", zip: "14424" },
        { name: "Wegmans - Dewitt", lat: 43.0352, lng: -76.0488, address: "6789 E Genesee St", city: "Dewitt", state: "NY", zip: "13057" },
        { name: "Wegmans - Fairport", lat: 43.1012, lng: -77.4432, address: "745 Calkins Rd", city: "Fairport", state: "NY", zip: "14450" },
        { name: "Wegmans - Hornell", lat: 42.3316, lng: -77.6982, address: "1000 State Route 36", city: "Hornell", state: "NY", zip: "14843" },
        { name: "Wegmans - Ithaca", lat: 42.4396, lng: -76.5185, address: "500 S Meadow St", city: "Ithaca", state: "NY", zip: "14850" },
        { name: "Wegmans - Johnson City", lat: 42.1112, lng: -75.9647, address: "650 Harry L Dr", city: "Johnson City", state: "NY", zip: "13790" },
        { name: "Wegmans - Niagara Falls", lat: 43.0895, lng: -79.0169, address: "1577 Military Rd", city: "Niagara Falls", state: "NY", zip: "14304" },
        { name: "Wegmans - Pittsford", lat: 43.0911, lng: -77.5496, address: "3195 Monroe Ave", city: "Pittsford", state: "NY", zip: "14618" },
        { name: "Wegmans - Rochester", lat: 43.1610, lng: -77.6109, address: "1955 Empire Blvd", city: "Rochester", state: "NY", zip: "14622" },
        { name: "Wegmans - Syracuse", lat: 43.0481, lng: -76.1474, address: "4256 James St", city: "Syracuse", state: "NY", zip: "13219" },
        { name: "Wegmans - Allentown", lat: 40.5929, lng: -75.5327, address: "3900 Tilghman St", city: "Allentown", state: "PA", zip: "18104" },
        { name: "Wegmans - Bethlehem", lat: 40.6512, lng: -75.2933, address: "3791 Easton Nazareth Hwy", city: "Bethlehem", state: "PA", zip: "18045" },
        { name: "Wegmans - Collegeville", lat: 40.1685, lng: -75.4545, address: "600 Commerce Dr", city: "Collegeville", state: "PA", zip: "19426" },
        { name: "Wegmans - Downingtown", lat: 40.0329, lng: -75.6903, address: "1056 E Lancaster Ave", city: "Downingtown", state: "PA", zip: "19335" },
        { name: "Wegmans - Erie", lat: 42.0639, lng: -80.0817, address: "6143 Peach St", city: "Erie", state: "PA", zip: "16509" },
        { name: "Wegmans - Harrisburg", lat: 40.2805, lng: -76.6564, address: "6416 Carlisle Pike", city: "Mechanicsburg", state: "PA", zip: "17050" },
        { name: "Wegmans - King of Prussia", lat: 40.0891, lng: -75.3936, address: "1 Village Dr", city: "King of Prussia", state: "PA", zip: "19406" },
        { name: "Wegmans - Lancaster", lat: 40.0691, lng: -76.3076, address: "2000 Crossings Blvd", city: "Lancaster", state: "PA", zip: "17601" },
        { name: "Wegmans - Malvern", lat: 40.0631, lng: -75.5267, address: "50 Foundry Way", city: "Malvern", state: "PA", zip: "19355" },
        { name: "Wegmans - Mechanicsburg", lat: 40.2149, lng: -76.9758, address: "6416 Carlisle Pike", city: "Mechanicsburg", state: "PA", zip: "17050" },
        { name: "Wegmans - Warrington", lat: 40.2491, lng: -75.1330, address: "1405 Main St", city: "Warrington", state: "PA", zip: "18976" }
    ],
    "Kings Market": [
        { 
            name: "Kings - Bedminster", 
            lat: 40.6742, 
            lng: -74.6431,
            address: "450 US-206",
            city: "Bedminster",
            state: "NJ",
            zip: "07921"
        },
        { 
            name: "Kings - Bernardsville", 
            lat: 40.7184, 
            lng: -74.5702,
            address: "100 Morristown Rd",
            city: "Bernardsville",
            state: "NJ",
            zip: "07924"
        },
        { 
            name: "Kings - Boonton", 
            lat: 40.9034, 
            lng: -74.4071,
            address: "115 Hawkins Pl",
            city: "Boonton",
            state: "NJ",
            zip: "07005"
        },
        { 
            name: "Kings - Chatham", 
            lat: 40.7401, 
            lng: -74.3835,
            address: "641 Shunpike Rd",
            city: "Chatham",
            state: "NJ",
            zip: "07928"
        },
        { 
            name: "Kings - Cresskill", 
            lat: 40.9394, 
            lng: -73.9614,
            address: "70 Union Ave",
            city: "Cresskill",
            state: "NJ",
            zip: "07626"
        },
        { 
            name: "Kings - Gillette", 
            lat: 40.6742, 
            lng: -74.4701,
            address: "977 Valley Rd",
            city: "Gillette",
            state: "NJ",
            zip: "07933"
        },
        { 
            name: "Kings - Hoboken", 
            lat: 40.7453, 
            lng: -74.0323,
            address: "1212 Shipyard Ln",
            city: "Hoboken",
            state: "NJ",
            zip: "07030"
        },
        { 
            name: "Kings - Maplewood", 
            lat: 40.7314, 
            lng: -74.2754,
            address: "159 Maplewood Ave",
            city: "Maplewood",
            state: "NJ",
            zip: "07040"
        },
        { name: "Kings - Mendham", lat: 40.7703, lng: -74.6001, address: "86 E Main St", city: "Mendham", state: "NJ", zip: "07945" },
        { name: "Kings - Montclair", lat: 40.8258, lng: -74.2090, address: "650 Valley Rd", city: "Montclair", state: "NJ", zip: "07043" },
        { name: "Kings - Morristown", lat: 40.7879, lng: -74.4804, address: "191 South St", city: "Morristown", state: "NJ", zip: "07960" },
        { name: "Kings - Short Hills", lat: 40.7395, lng: -74.3282, address: "778 Morris Turnpike", city: "Short Hills", state: "NJ", zip: "07078" },
        { name: "Kings - Summit", lat: 40.7144, lng: -74.3646, address: "784 Springfield Ave", city: "Summit", state: "NJ", zip: "07901" },
        { name: "Kings - Verona", lat: 40.8319, lng: -74.2434, address: "271 Grove Ave", city: "Verona", state: "NJ", zip: "07044" },
        { name: "Kings - Warren", lat: 40.6348, lng: -74.5016, address: "64 Mountain Blvd", city: "Warren", state: "NJ", zip: "07059" },
        { name: "Kings - Westfield", lat: 40.6509, lng: -74.3474, address: "300 South Ave", city: "Westfield", state: "NJ", zip: "07090" },
        { name: "Kings - Ridgewood", lat: 40.9784, lng: -74.1225, address: "112 N Maple Ave", city: "Ridgewood", state: "NJ", zip: "07450" },
        { name: "Kings - Garden City", lat: 40.7265, lng: -73.6429, address: "870 Franklin Ave", city: "Garden City", state: "NY", zip: "11530" },
        { name: "Kings - Eastchester", lat: 40.9550, lng: -73.8083, address: "1 Eastchester Rd", city: "Eastchester", state: "NY", zip: "10709" }
    ],
    "Balducci's": [
        { 
            name: "Balducci's - Scarsdale", 
            lat: 40.9886, 
            lng: -73.7868,
            address: "15 Palmer Ave",
            city: "Scarsdale",
            state: "NY",
            zip: "10583"
        },
        { 
            name: "Balducci's - Rye Brook", 
            lat: 41.0183, 
            lng: -73.6931,
            address: "142 S Ridge St",
            city: "Rye Brook",
            state: "NY",
            zip: "10573"
        },
        { 
            name: "Balducci's - Greenwich", 
            lat: 41.0262, 
            lng: -73.6282,
            address: "1050 E Putnam Ave",
            city: "Greenwich",
            state: "CT",
            zip: "06878"
        },
        { 
            name: "Balducci's - Westport", 
            lat: 41.1417, 
            lng: -73.3648,
            address: "1385 Post Rd E",
            city: "Westport",
            state: "CT",
            zip: "06880"
        },
        { name: "Balducci's - Alexandria", lat: 38.8048, lng: -77.0469, address: "600 Franklin St", city: "Alexandria", state: "VA", zip: "22314" },
        { name: "Balducci's - Bethesda", lat: 38.9807, lng: -77.0947, address: "10323 Old Georgetown Rd", city: "Bethesda", state: "MD", zip: "20814" },
        { name: "Balducci's - McLean", lat: 38.9341, lng: -77.1776, address: "6655 Old Dominion Dr", city: "McLean", state: "VA", zip: "22101" },
        { name: "Balducci's - Reston", lat: 38.9586, lng: -77.3570, address: "1871 Fountain Dr", city: "Reston", state: "VA", zip: "20190" }
    ],
    "Dave's Market-Rhode Island": [
        { 
            name: "Dave's Marketplace - East Greenwich", 
            lat: 41.6535, 
            lng: -71.4848,
            address: "1000 Division St",
            city: "East Greenwich",
            state: "RI",
            zip: "02818"
        },
        { 
            name: "Dave's Marketplace - Smithfield", 
            lat: 41.8734, 
            lng: -71.5149,
            address: "371 Putnam Pike",
            city: "Smithfield",
            state: "RI",
            zip: "02917"
        },
        { 
            name: "Dave's Marketplace - Cumberland", 
            lat: 41.9645, 
            lng: -71.4326,
            address: "2077 Diamond Hill Rd",
            city: "Cumberland",
            state: "RI",
            zip: "02864"
        },
        { 
            name: "Dave's Marketplace - Warwick", 
            lat: 41.7026, 
            lng: -71.4674,
            address: "2687 West Shore Rd",
            city: "Warwick",
            state: "RI",
            zip: "02889"
        },
        { 
            name: "Dave's Marketplace - Cranston", 
            lat: 41.7512, 
            lng: -71.4370,
            address: "550 Pontiac Ave",
            city: "Cranston",
            state: "RI",
            zip: "02910"
        },
        { name: "Dave's Marketplace - North Kingstown", lat: 41.5763, lng: -71.4801, address: "125 Tower Hill Rd", city: "North Kingstown", state: "RI", zip: "02852" },
        { name: "Dave's Marketplace - Coventry", lat: 41.6882, lng: -71.5643, address: "2 Coventry Shoppers Park", city: "Coventry", state: "RI", zip: "02816" },
        { name: "Dave's Marketplace - Quonset", lat: 41.5896, lng: -71.4097, address: "4157 Quaker Ln", city: "North Kingstown", state: "RI", zip: "02852" },
        { name: "Dave's Marketplace - Westerly", lat: 41.3762, lng: -71.8273, address: "91 Franklin St", city: "Westerly", state: "RI", zip: "02891" }
    ],
    "IGA Markets": [
        { 
            name: "IGA Marketplace - Southold", 
            lat: 41.0639, 
            lng: -72.4267,
            address: "44765 NY-25",
            city: "Southold",
            state: "NY",
            zip: "11971"
        },
        { 
            name: "IGA Marketplace - Greenport", 
            lat: 41.1034, 
            lng: -72.3604,
            address: "44 Front St",
            city: "Greenport",
            state: "NY",
            zip: "11944"
        },
        { 
            name: "IGA Marketplace - Mattituck", 
            lat: 40.9887, 
            lng: -72.5468,
            address: "10095 Main Rd",
            city: "Mattituck",
            state: "NY",
            zip: "11952"
        },
        { 
            name: "IGA Marketplace - Center Moriches", 
            lat: 40.7992, 
            lng: -72.7989,
            address: "546 Montauk Hwy",
            city: "Center Moriches",
            state: "NY",
            zip: "11934"
        },
        { 
            name: "IGA Marketplace - East Hampton", 
            lat: 40.9634, 
            lng: -72.1855,
            address: "5 Newtown Ln",
            city: "East Hampton",
            state: "NY",
            zip: "11937"
        },
        { name: "IGA Marketplace - Amagansett", lat: 40.9767, lng: -72.1414, address: "122 Main St", city: "Amagansett", state: "NY", zip: "11930" },
        { name: "IGA Marketplace - Montauk", lat: 41.0359, lng: -71.9545, address: "805 Montauk Hwy", city: "Montauk", state: "NY", zip: "11954" },
        { name: "IGA Marketplace - Shelter Island", lat: 41.0689, lng: -72.3459, address: "45 N Ferry Rd", city: "Shelter Island", state: "NY", zip: "11964" },
        { name: "IGA Marketplace - Southampton", lat: 40.8842, lng: -72.3895, address: "5 Main St", city: "Southampton", state: "NY", zip: "11968" },
        { name: "IGA Marketplace - Sag Harbor", lat: 41.0015, lng: -72.2926, address: "120 Main St", city: "Sag Harbor", state: "NY", zip: "11963" }
    ],
    "Uncle Giuseppe's": [
        { 
            name: "Uncle Giuseppe's - Smithtown", 
            lat: 40.8562, 
            lng: -73.1982,
            address: "77 Route 111",
            city: "Smithtown",
            state: "NY",
            zip: "11787"
        },
        { 
            name: "Uncle Giuseppe's - Port Jefferson Station", 
            lat: 40.9276, 
            lng: -73.0473,
            address: "1108 Route 112",
            city: "Port Jefferson Station",
            state: "NY",
            zip: "11776"
        },
        { 
            name: "Uncle Giuseppe's - East Meadow", 
            lat: 40.7242, 
            lng: -73.5568,
            address: "2330 Hempstead Turnpike",
            city: "East Meadow",
            state: "NY",
            zip: "11554"
        },
        { 
            name: "Uncle Giuseppe's - Massapequa", 
            lat: 40.6795, 
            lng: -73.4502,
            address: "4934 Sunrise Highway",
            city: "Massapequa",
            state: "NY",
            zip: "11762"
        },
        { 
            name: "Uncle Giuseppe's - Melville", 
            lat: 40.7927, 
            lng: -73.4154,
            address: "890 Walt Whitman Road",
            city: "Melville",
            state: "NY",
            zip: "11747"
        },
        { name: "Uncle Giuseppe's - Ramsey", lat: 41.0684, lng: -74.1381, address: "10 Triangle Plaza", city: "Ramsey", state: "NJ", zip: "07446" },
        { name: "Uncle Giuseppe's - North Babylon", lat: 40.7372, lng: -73.3212, address: "1170 Deer Park Ave", city: "North Babylon", state: "NY", zip: "11703" },
        { name: "Uncle Giuseppe's - Yorktown Heights", lat: 41.2711, lng: -73.7783, address: "380 Downing Dr", city: "Yorktown Heights", state: "NY", zip: "10598" }
    ]
};

// Specialty stores
const specialtyStores = {
    "Specialty Stores": [
        { 
            name: "Staubitz Market - Brooklyn", 
            lat: 40.6865, 
            lng: -73.9965,
            address: "222 Court St",
            city: "Brooklyn",
            state: "NY",
            zip: "11201"
        },
        { 
            name: "Cub Market - Bearsville NY", 
            lat: 42.0405, 
            lng: -74.1271,
            address: "231 Tinker St",
            city: "Woodstock",
            state: "NY",
            zip: "12498"
        },
        { 
            name: "Delicious Orchards - Colts Neck NY", 
            lat: 40.2843, 
            lng: -74.1701,
            address: "320 Route 34",
            city: "Colts Neck",
            state: "NJ",
            zip: "07722"
        },
        { 
            name: "Zabars NYC", 
            lat: 40.7845, 
            lng: -73.9801,
            address: "2245 Broadway",
            city: "New York",
            state: "NY",
            zip: "10024"
        },
        { 
            name: "Ouri's Market NYC", 
            lat: 40.7505, 
            lng: -73.9934,
            address: "138 W 31st St",
            city: "New York",
            state: "NY",
            zip: "10001"
        },
        { 
            name: "Carnegie Market NYC", 
            lat: 40.7651, 
            lng: -73.9816,
            address: "231 W 56th St",
            city: "New York",
            state: "NY",
            zip: "10019"
        },
        { 
            name: "Bedford Gourmet - Bedford NY", 
            lat: 41.2044, 
            lng: -73.6478,
            address: "652 Old Post Rd",
            city: "Bedford",
            state: "NY",
            zip: "10506"
        },
        { 
            name: "Food Cellar Market - Long Island City", 
            lat: 40.7461, 
            lng: -73.9571,
            address: "4-85 47th Rd",
            city: "Long Island City",
            state: "NY",
            zip: "11101"
        },
        { 
            name: "Gary's Wine and Marketplace - Wayne NJ", 
            lat: 40.9253, 
            lng: -74.2765,
            address: "1308 NJ-23",
            city: "Wayne",
            state: "NJ",
            zip: "07470"
        },
        { 
            name: "Door Dash", 
            lat: 40.7128, 
            lng: -74.0060,
            address: "Online Delivery Service",
            city: "Various",
            state: "NY/NJ",
            zip: "Various"
        }
    ]
};

// Distributors
const distributors = {
    "Distributors": [
        { 
            name: "McMahon Farms", 
            lat: 40.9253, 
            lng: -74.5765,
            address: "1 Distributors Way",
            city: "Morristown",
            state: "NJ",
            zip: "07960"
        },
        { 
            name: "Ace Endico", 
            lat: 41.2953, 
            lng: -73.6765,
            address: "80 International Blvd",
            city: "Brewster",
            state: "NY",
            zip: "10509"
        },
        { 
            name: "Chefs Warehouse", 
            lat: 40.7253, 
            lng: -74.0060,
            address: "100 East Ridge Rd",
            city: "Ridgefield",
            state: "CT",
            zip: "06877"
        }
    ]
};

// Make all store data globally available
window.storeLocations = storeLocations;
window.specialtyStores = specialtyStores;
window.distributors = distributors;
