/**
 * This object has a single responsibility to draw whatever it finds in the database. 
 */
const diagram = {
    sticks: [],
    resetSticks: function () {
       this.sticks = [];
    }
}

module.exports = { diagram }
