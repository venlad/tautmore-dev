import { v4 as uuid } from 'uuid';
import dashtableimg from '../../../../assets/images/dashtableimg.png';

const leaderboard = {
    heading: [
        'RANK',
        'NAME',
        'ACCURACY',
        'OVERALL TIME',
        'ANSWER',
        'COINS',
        'SMART SCORE',
    ],
    data: [
        {
            key: uuid(),
            rank: 1,
            imageURL: dashtableimg,
            name: 'Oli Bob',
            accuracy: '100%',
            overalltime: '15:20min',
            answer: '96/100',
            coins: '444',
            smartscore: '347',
        },
        {
            key: uuid(),
            rank: 2,
            imageURL: dashtableimg,
            name: 'Max',
            accuracy: '90%',
            overalltime: '12:40min',
            answer: '90/100',
            coins: '400',
            smartscore: '250',
        },
        {
            key: uuid(),
            rank: 3,
            imageURL: dashtableimg,
            name: 'John',
            accuracy: '80%',
            overalltime: '10:00min',
            answer: '92/100',
            coins: '360',
            smartscore: '300',
        },
        {
            key: uuid(),
            rank: 4,
            imageURL: dashtableimg,
            name: 'Paul',
            accuracy: '98%',
            overalltime: '16:50min',
            answer: '100/100',
            coins: '500',
            smartscore: '600',
        },
        {
            key: uuid(),
            rank: 5,
            imageURL: dashtableimg,
            name: 'Ali',
            accuracy: '97%',
            overalltime: '11:40min',
            answer: '100/100',
            coins: '200',
            smartscore: '480',
        },
    ],
};

export default leaderboard;
