/**
 * @param {number} baseNum which number to generate the times table for.
 * @returns {number[]} array of the multiples from 1x to 10x baseNum*/
const timesTable = (baseNum) => {
    let results = [];
    for (let i = 1; i <= 10; i++) {
        let multiple = i * baseNum;
        results.push(multiple);
    }
    return results;
};
export { timesTable };