
let diagram = {
    stickCountTotal: 0,
    stickCountTouching: 0,
    stickCountNotTouching: 0,
}

function resetStickCounters(){
        diagram.stickCountTotal = 0;
    }

module.exports = { diagram, resetStickCounters }
