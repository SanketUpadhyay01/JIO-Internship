const obj = { firstname: 'John', lastname: 'Doe', age: 25, mobile: 1234567890,
 email: 'john.doe@gmail.com', salary: 0, address: { street: '123 Main St', 
 city: 'New York', state: 'NY', zip: '12345' }, friends: ['Jane', 'Bob', 'Mary'],
  education: [ { name: 'High School', year: '2010' }, { name: 'Bachelor', year: '2014' }, ],
   interset: { work: { code: 'JavaScript', company: 'JIO', salary: '$100k' }, 
   home: { food: 'Pizza', music: 'Jazz' } } };


    

  const getObjValues = (obj) => (obj && typeof obj === 'object')? Object
    .values(obj)
    .map(getObjValues)
    .reduce((a, b) => a.concat(b), [])
  : [obj]


  const recursiveSearch = (obj, searchKey, results = []) => {
    let r = results;

    Object.keys(obj).forEach(key => {

       const value = obj[key];
       if(key === searchKey && typeof value !== 'object'){
          r.push(value);
          
       }else if(typeof value === 'object'){
          recursiveSearch(value, searchKey, r);
       }
     
    
    });

    if(r.length==0){
       r = (getObjValues(obj.address));
       }

    return r;
