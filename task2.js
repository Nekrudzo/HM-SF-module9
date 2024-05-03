const jsonString =`{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name":"Vova",
      "age":"60",
      "prof":"pilot"
     }
   ]
   }`;
   
   const data = JSON.parse(jsonString);
   //console.log('data', data);
   const list = data.list;
   //console.log('list', list);
   
   const result = {
     list
   }
   console.log('result', result)