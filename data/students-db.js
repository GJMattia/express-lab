const students = [
    {id: 0, name: 'Josh', grade: 'A', number: '544-9412'},
    {id: 1, name: 'Thomas', grade: 'C', number: '904-9412'},
    {id: 2, name: 'Paul', grade: 'B+', number: '532-9999'},
    {id: 3, name: 'Randy', grade: 'D-', number: '542-8888'},
    {id: 4, name: 'Jenna', grade: 'D+', number: '112-9442'},
    {id: 5, name: 'Sara', grade: 'F', number: '945-9582'},
    {id: 6, name: 'Vinny', grade: 'C-', number: '111-3332'},
    {id: 7, name: 'Valerie', grade: 'A-', number: '578-5423'},
    {id: 8, name: 'Julian', grade: 'B-', number: '004-5178'},
    {id: 9, name: 'Victoria', grade: 'D', number: '909-5566'},
    {id: 10, name: 'Kale', grade: 'A+', number: '112-4456'},
];

module.exports = {
    getAll: function(){
        return students;
    },
    getOne: function(id){
        return students[id];
    }
};