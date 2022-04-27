export function fetchGrades(data) {
    return {
        type: 'FETCH_GRADES',
        payload: data,
    };
}

export function fetchSubjects(data) {
    return {
        type: 'FETCH_SUBJECTS',
        payload: data,
    };
}

export function fetchBoards(data) {
    return {
        type: 'FETCH_BOARDS',
        payload: data,
    };
}

export function fetchChapters(data) {
    return {
        type: 'FETCH_CHAPTERS',
        payload: data,
    };
}

export function fetchNavbar(data) {
    return {
        type: 'FETCH_NAVBAR',
        payload: data,
    };
}

export function fetchFooter(data) {
    return {
        type: 'FETCH_FOOTER',
        payload: data,
    };
}

export function fetchHome(data) {
    return {
        type: 'FETCH_HOME',
        payload: data,
    };
}

export function fetchTeacher(data) {
    return {
        type: 'FETCH_TEACHER',
        payload: data,
    };
}

export function fetchParent(data) {
    return {
        type: 'FETCH_PARENT',
        payload: data,
    };
}
