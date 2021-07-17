function canDrive(usr) {
    console.log('user is', usr.name);
    if (usr.age >= 16) {
        console.log('allowed to drive');
    }
    else {
        console.log('not allowed to drive');
    }
}
var tom = {
    name: 'tom',
    age: 16
};
canDrive(tom);
