const obj = {
    firstname: 'John',
    lastname: 'Doe',
    age: 25,
    mobile: 1234567890,
    email: 'john.doe@gmail.com',
    salary: 0,
    address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '12345'
    },
    friends: ['Jane', 'Bob', 'Mary'],
    eduction: [
    { name: 'High School', year: '2010' },
    { name: 'Bachelor', year: '2014' },
    ],
    interset: {
    work:
    {
    code: 'JavaScript',
    company: 'JIO',
    salary: '$100k'
    },
    home: {
    food: 'Pizza',
    music: 'Jazz'
    }
    }
    };
     const myfunc = (obj,k)=>{

        Object.entries(obj).forEach(([key,value])=>{

            if(key == k){
                console.log(value);
            }
            else if(typeof(value) == "object"){
                myfunc(value,k);
            }
        })
     }
     var s = 'code';
     myfunc(obj,s);
