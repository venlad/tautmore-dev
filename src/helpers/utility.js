const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
export const currentDate = () => {
    const cDate = new Date();
    const mS = months[cDate.getMonth()];
    let daySuffix = '';
    switch (cDate.getDate()) {
        case 1:
        case 21:
        case 31:
            daySuffix = 'st';
            break;
        case 2:
        case 22:
            daySuffix = 'nd';
            break;
        case 3:
        case 23:
            daySuffix = 'rd';
            break;
        default:
            daySuffix = 'th';
            break;
    }

    return `${cDate.getDate()}${daySuffix} ${mS}`;
};

export const formatDate = (dateval) => {
    const dateObj = new Date(dateval);
    const month = months[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    // const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    // const output = `${day} ${month} ${year} - ${time} `;
    const output = `${day} ${month} ${year} `;
    return output;
};
export const formatDateTime = (dateval) => {
    const dateObj = new Date(dateval);
    const month = months[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    const output = `${day} ${month} ${year} - ${time} `;
    // const output = `${day} ${month} ${year} `;
    return output;
};
export const formatTime = (dateval) => {
    const dateObj = new Date(dateval);
    const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
    const output = `${time} `;
    // const output = `${day} ${month} ${year} `;
    return output;
};
export const formatTimeSectoMin = (timeval) => {
    const time = Number(timeval);
    const m = Math.floor(time % 3600);
    const mm = Math.floor(m / 60);
    const s = Math.floor(time % 3600 % 60);
    const ss = Math.floor(s % 60);

    const output = `${mm}:${ss} `;
    // const output = `${day} ${month} ${year} `;
    return output;
};
