const baseURL = "https://orange-disco-jj96gpxw645q2qqpq-3000.app.github.dev";

const endpoints = {
    facilities: "/totalfacilities",
    nuclear_devices: "/totaldevices",
    materials: "/totalmaterials",
    components: "/totalcomponents",
    personnel: "/totalpersonnel",
    maintenance_logs: "/totalmaintenance_logs",
    audits: "/totalaudits",
    security_incidents: "/totalsecurity_incidents",
    treaty_compliance: "/totaltreaty_compliance",
    device_movements: "/totaldevice_movements"


};

// Load single count
function loadCount(key) {
    fetch(baseURL + endpoints[key])
        .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch ${key}`);
            return response.json();
        })
        .then(data => {
            // Expecting: { count: "6" }
            if (!data || typeof data.count === "undefined") {
                throw new Error(`Invalid response structure for ${key}`);
            }
            document.getElementById(key).innerText = data.count;
        })
        .catch(err => {
            document.getElementById(key).innerText = "Error";
            console.error(err.message);
        });
}

// Load all counts
function loadAllCounts() {
    Object.keys(endpoints).forEach(loadCount);
}

// Hide counts
function hideCount(key) {
    document.getElementById(key).innerText = "--";
}

// Hide all count
function hideAllCounts() {
    Object.keys(endpoints).forEach(hideCount);
}