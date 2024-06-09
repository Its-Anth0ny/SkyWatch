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
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        reject(
                            new Error(
                                "User denied the request for Geolocation."
                            )
                        );
                        break;
                    case error.POSITION_UNAVAILABLE:
                        reject(
                            new Error("Location information is unavailable.")
                        );
                        break;
                    case error.TIMEOUT:
                        reject(
                            new Error(
                                "The request to get user location timed out."
                            )
                        );
                        break;
                    case error.UNKNOWN_ERROR:
                    default:
                        reject(new Error("An unknown error occurred."));
                        break;
                }
            }
        );
    });
}

export default getCurrLocation;
