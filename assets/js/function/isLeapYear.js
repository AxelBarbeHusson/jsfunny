function isLeapYear(year) {
    if (!isNaN(year) && year >= 1579) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
            return true;
        }
    } else {
        return false;
    }
}