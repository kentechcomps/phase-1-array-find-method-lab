const record = [
    {
        year : '2023',
        result : 'Win'
    }
    ,
    {
        year : '2022',
        result : 'N/A'
    }
]

const recordwin = record.find(ourfun);

console.log(recordwin);


function ourfun(value) {
    return value.result === 'Win'
}