
const total = (x,y) => { return x*y }

const task = new Vue({
    el: '#task',
    data: {
        guest: 'Rohan',
        firstNumber: 5,
        secondNumber: 4,
    },
    computed: {
        result: function () {
            const i = parseInt(this.firstNumber);
            const j = parseInt(this.secondNumber);
            return `${this.guest},  Total tasks are ${total(i,j)}.`
        }
    }
})
