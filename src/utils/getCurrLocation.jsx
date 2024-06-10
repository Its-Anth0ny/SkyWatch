function getCurrLocation() {
    if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by your browser");
    }

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                resolve({ lat, long });
            },
            (error) => {
                reject(error);
            }
        );
    });
}

export default getCurrLocation;
