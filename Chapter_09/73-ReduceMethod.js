const scores = [10, 20, 60, 40, 70, 90, 30];

const result = scores.reduce((acc, curr) => {
    if (curr > 50) {
        acc++;
    }
    return acc;
}, 0);

console.log(result);


const objScores = [
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'crystal', score: 60 },
    { player: 'mario', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'ryu', score: 70 },
    { player: 'crystal', score: 60 },
    { player: 'andre', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'crystal', score: 60 },
    { player: 'carlo', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'crystal', score: 60 },
    { player: 'drible', score: 50 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 6 },
    { player: 'crystal', score: 60 },
    { player: 'mario', score: 0 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 70 },
    { player: 'crystal', score: 60 },
    { player: 'mario', score: 80 },
    { player: 'yoshi', score: 30 },
    { player: 'mario', score: 10 },
    { player: 'crystal', score: 60 }
];

const marioTotal = objScores.reduce((acc, curr) => {
    if (curr.player === 'mario') {
        acc += curr.score;
    }
    return acc;
}, 0)

console.log(marioTotal);