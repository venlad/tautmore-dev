import React from 'react';
import MathJax from 'react-mathjax-preview';
import ReactHtmlParser from 'react-html-parser';

export const renderText = (text) => {
    const mathtype = <MathJax math={String.raw`${text}`} />;
    const texttype = ReactHtmlParser(text);

    let textType = '';

    const loop = (string) => string.forEach((item) => {
        if (item?.type !== 'math') {
            if (item?.props?.children?.length > 0) {
                return loop(item?.props?.children);
            }
        } else {
            textType = 'math';
        }
    });

    loop(texttype);

    if (textType !== 'math') {
        return texttype;
    }
    return mathtype;
};

export default {};
