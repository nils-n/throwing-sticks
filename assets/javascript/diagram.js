/**
 * This object has a single responsibility to draw whatever it finds in the database. 
 */
const diagram = {
    sticks: [],
    resetSticks: function () {
       console.log('resetSticks : entering function')
       this.sticks = [];
    },
    initDiagram: function () {
        document.getElementById('hero-reset').addEventListener('click', () => {
            this.resetSticks();
        })
    },
}

module.exports = { diagram }
