const currentDate = () => {
    const cDate = new Date();
    const mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][cDate.getMonth()];
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
export default currentDate;
