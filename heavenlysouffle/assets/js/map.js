// Map initialization and store location display for Heavenly Soufflé website

// Initialize the map when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initMap();
    populateStoreList();
    setupZipCodeSearch();
});

// Initialize the Leaflet map
function initMap() {
    console.log("Initializing map...");
    
    // Create the map centered on the US East Coast
    const map = L.map('map').setView([40.7128, -74.0060], 7);
    
    // Add the tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Create a marker cluster group for better performance with many markers
    const markers = L.markerClusterGroup();
    
    // Add all store locations to the map
    addStoreLocationsToMap(markers);
    
    // Add the markers to the map
    map.addLayer(markers);
    
    // Make the map globally accessible
    window.souffleMap = map;
    window.souffleMarkers = markers;
}

// Add all store locations to the map
function addStoreLocationsToMap(markerGroup) {
    console.log("Adding store locations to map...");
    
    // Add chain stores
    for (const chain in window.storeLocations) {
        const locations = window.storeLocations[chain];
        
        locations.forEach(store => {
            if (store.lat && store.lng) {
                const marker = L.marker([store.lat, store.lng]);
                
                // Create popup content
                let popupContent = `
                    <strong>${store.name}</strong><br>
                    ${store.address}<br>
                    ${store.city}, ${store.state} ${store.zip}<br>
                    <em>Chain: ${chain}</em>
                `;
                
                marker.bindPopup(popupContent);
                marker.chainName = chain;
                marker.storeName = store.name;
                marker.storeAddress = `${store.address}, ${store.city}, ${store.state} ${store.zip}`;
                
                // Add to marker group
                markerGroup.addLayer(marker);
            }
        });
    }
    
    // Add specialty stores
    for (const category in window.specialtyStores) {
        const stores = window.specialtyStores[category];
        
        stores.forEach(store => {
            if (store.lat && store.lng) {
                const marker = L.marker([store.lat, store.lng]);
                
                // Create popup content
                let popupContent = `
                    <strong>${store.name}</strong><br>
                    ${store.address}<br>
                    ${store.city}, ${store.state} ${store.zip}<br>
                    <em>Category: ${category}</em>
                `;
                
                marker.bindPopup(popupContent);
                marker.chainName = category;
                marker.storeName = store.name;
                marker.storeAddress = `${store.address}, ${store.city}, ${store.state} ${store.zip}`;
                
                // Add to marker group
                markerGroup.addLayer(marker);
            }
        });
    }
    
    // Add distributors
    for (const category in window.distributors) {
        const distributors = window.distributors[category];
        
        distributors.forEach(distributor => {
            if (distributor.lat && distributor.lng) {
                const marker = L.marker([distributor.lat, distributor.lng]);
                
                // Create popup content
                let popupContent = `
                    <strong>${distributor.name}</strong><br>
                    ${distributor.address}<br>
                    ${distributor.city}, ${distributor.state} ${distributor.zip}<br>
                    <em>Category: ${category}</em>
                `;
                
                marker.bindPopup(popupContent);
                marker.chainName = category;
                marker.storeName = distributor.name;
                marker.storeAddress = `${distributor.address}, ${distributor.city}, ${distributor.state} ${distributor.zip}`;
                
                // Add to marker group
                markerGroup.addLayer(marker);
            }
        });
    }
    
    console.log("All store locations added to map");
}

// Populate the store list with all chains and store counts
function populateStoreList() {
    console.log("Populating store list...");
    const storeListContainer = document.querySelector('.store-list');
    
    if (!storeListContainer) {
        console.error("Store list container not found");
        return;
    }
    
    // Clear existing content
    storeListContainer.innerHTML = '';
    
    // Create stores section
    const storesSection = document.createElement('div');
    storesSection.className = 'store-category';
    storesSection.innerHTML = '<h3>Stores:</h3>';
    
    const storesList = document.createElement('ul');
    
    // Add retail chains
    for (const chain in window.storeLocations) {
        const storeCount = window.storeLocations[chain].length;
        const listItem = document.createElement('li');
        listItem.textContent = `${chain}`;
        storesList.appendChild(listItem);
    }
    
    // Add specialty stores
    for (const category in window.specialtyStores) {
        const stores = window.specialtyStores[category];
        stores.forEach(store => {
            const listItem = document.createElement('li');
            listItem.textContent = store.name.split(' - ')[0];
            storesList.appendChild(listItem);
        });
    }
    
    storesSection.appendChild(storesList);
    storeListContainer.appendChild(storesSection);
    
    // Create distributors section
    const distributorsSection = document.createElement('div');
    distributorsSection.className = 'store-category';
    distributorsSection.innerHTML = '<h3>Distributors:</h3>';
    
    const distributorsList = document.createElement('ul');
    
    // Add distributors
    for (const category in window.distributors) {
        const distributors = window.distributors[category];
        distributors.forEach(distributor => {
            const listItem = document.createElement('li');
            listItem.textContent = distributor.name;
            distributorsList.appendChild(listItem);
        });
    }
    
    distributorsSection.appendChild(distributorsList);
    storeListContainer.appendChild(distributorsSection);
    
    console.log("Store list populated");
}

// Set up the zip code search functionality
function setupZipCodeSearch() {
    console.log("Setting up zip code search...");
    const searchForm = document.getElementById('zip-search-form');
    const searchResults = document.getElementById('search-results');
    
    if (!searchForm || !searchResults) {
        console.error("Search form or results container not found");
        return;
    }
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const zipCode = document.getElementById('zip-code').value.trim();
        if (!zipCode || !/^\d{5}$/.test(zipCode)) {
            searchResults.innerHTML = '<p class="error">Please enter a valid 5-digit ZIP code</p>';
            return;
        }
        
        // Find nearby stores based on zip code
        findNearbyStores(zipCode, searchResults);
    });
}

// Find stores near the provided zip code
function findNearbyStores(zipCode, resultsContainer) {
    console.log(`Searching for stores near ZIP: ${zipCode}`);
    
    // First, we need to geocode the zip code to get coordinates
    // For this demo, we'll use a simple approximation based on known coordinates
    // In a real implementation, you would use a geocoding service
    
    // Sample coordinates for some zip codes (for demonstration)
    const zipCoordinates = {
        '10001': { lat: 40.7506, lng: -73.9971 }, // NYC
        '07302': { lat: 40.7178, lng: -74.0431 }, // Jersey City
        '19102': { lat: 39.9524, lng: -75.1636 }, // Philadelphia
        '02108': { lat: 42.3581, lng: -71.0636 }, // Boston
        '20001': { lat: 38.9101, lng: -77.0147 }  // Washington DC
    };
    
    // If we don't have the exact zip, use NYC as default for demo
    const coordinates = zipCoordinates[zipCode] || { lat: 40.7128, lng: -74.0060 };
    
    // Find the 5 closest stores
    const closestStores = findClosestStores(coordinates.lat, coordinates.lng, 5);
    
    // Display the results
    displaySearchResults(closestStores, resultsContainer);
    
    // Center the map on the search location and zoom in
    if (window.souffleMap) {
        window.souffleMap.setView([coordinates.lat, coordinates.lng], 10);
        
        // Highlight the markers of the closest stores
        highlightStoreMarkers(closestStores);
    }
}

// Find the closest stores to a given location
function findClosestStores(lat, lng, limit = 5) {
    console.log(`Finding closest stores to ${lat}, ${lng}`);
    
    const stores = [];
    
    // Helper function to calculate distance between two points
    function calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Radius of the earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        const distance = R * c; // Distance in km
        return distance;
    }
    
    // Collect all stores with their distances
    // Chain stores
    for (const chain in window.storeLocations) {
        window.storeLocations[chain].forEach(store => {
            if (store.lat && store.lng) {
                const distance = calculateDistance(lat, lng, store.lat, store.lng);
                stores.push({
                    name: store.name,
                    address: `${store.address}, ${store.city}, ${store.state} ${store.zip}`,
                    chain: chain,
                    distance: distance,
                    lat: store.lat,
                    lng: store.lng
                });
            }
        });
    }
    
    // Specialty stores
    for (const category in window.specialtyStores) {
        window.specialtyStores[category].forEach(store => {
            if (store.lat && store.lng) {
                const distance = calculateDistance(lat, lng, store.lat, store.lng);
                stores.push({
                    name: store.name,
                    address: `${store.address}, ${store.city}, ${store.state} ${store.zip}`,
                    chain: category,
                    distance: distance,
                    lat: store.lat,
                    lng: store.lng
                });
            }
        });
    }
    
    // Sort by distance and return the closest ones
    stores.sort((a, b) => a.distance - b.distance);
    return stores.slice(0, limit);
}

// Display search results in the results container
function displaySearchResults(stores, resultsContainer) {
    console.log(`Displaying ${stores.length} search results`);
    
    // Clear previous results
    resultsContainer.innerHTML = '';
    
    if (stores.length === 0) {
        resultsContainer.innerHTML = '<p>No stores found near this location.</p>';
        return;
    }
    
    // Create results list
    const resultsList = document.createElement('ul');
    resultsList.className = 'search-results-list';
    
    stores.forEach(store => {
        const listItem = document.createElement('li');
        
        // Format distance - convert to miles
        let distanceText = '';
        // Convert km to miles (1 km = 0.621371 miles)
        const distanceMiles = store.distance * 0.621371;
        
        if (distanceMiles < 0.1) {
            // For very short distances, show in feet (1 mile = 5280 feet)
            distanceText = `${Math.round(distanceMiles * 5280)} feet`;
        } else {
            distanceText = `${distanceMiles.toFixed(1)} miles`;
        }
        
        listItem.innerHTML = `
            <strong>${store.name}</strong><br>
            ${store.address}<br>
            <span class="distance">Distance: ${distanceText}</span>
        `;
        
        // Add click handler to zoom to this store
        listItem.addEventListener('click', function() {
            if (window.souffleMap) {
                window.souffleMap.setView([store.lat, store.lng], 14);
                
                // Find and open the marker popup
                if (window.souffleMarkers) {
                    window.souffleMarkers.eachLayer(function(layer) {
                        if (layer.storeName === store.name) {
                            layer.openPopup();
                        }
                    });
                }
            }
        });
        
        resultsList.appendChild(listItem);
    });
    
    resultsContainer.appendChild(resultsList);
}

// Highlight markers of the closest stores
function highlightStoreMarkers(stores) {
    console.log("Highlighting store markers on map");
    
    if (!window.souffleMarkers) return;
    
    // Reset all markers first
    window.souffleMarkers.eachLayer(function(layer) {
        // Reset marker style if needed
    });
    
    // Find and highlight the markers for the closest stores
    stores.forEach(store => {
        window.souffleMarkers.eachLayer(function(layer) {
            if (layer.storeName === store.name) {
                // Open the popup for the first (closest) store
                if (store === stores[0]) {
                    layer.openPopup();
                }
            }
        });
    });
}
