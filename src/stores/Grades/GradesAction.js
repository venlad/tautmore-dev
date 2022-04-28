export default function selectFooterLinkAction(data) {
    return {
        type: 'SELECT_FOOTER_LINK',
        payload: data,
    };
}

export function selectBoardAction(data) {
    return {
        type: 'SELECT_BOARD',
        payload: data,
    };
}
