export function conceptAction(data) {
    return {
        type: 'SELECT_CONCEPT',
        payload: data,
    };
}

export function topicAction(data) {
    return {
        type: 'SELECT_TOPIC',
        payload: data,
    };
}

export function chapterAction(data) {
    return {
        type: 'SELECT_CHAPTER',
        payload: data,
    };
}
