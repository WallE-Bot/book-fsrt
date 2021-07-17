interface User {
  name: string;
  age: number;
}

function canDrive(usr: User) {
  console.log('user is', usr.name);

  if(usr.age >= 16) {
    console.log('allowed to drive');
  } else {
    console.log('not allowed to drive');
  }
}

const tom: User = {
  name: 'tom',
  age: 16,
}

canDrive(tom);
