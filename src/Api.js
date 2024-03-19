const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export function fetchAPI(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    // Simulate available times
    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }

    // Simulate booked times (you may need to replace this with actual booked times from a backend)
    const bookedTimes = ['18:00', '19:00', '20:30'];

    // Remove booked times from available times
    result = result.filter(time => !bookedTimes.includes(time));

    return result;
};

export function submitAPI(formData) {
    return true;
};
