var names = ['John', 'Chris','Jen'];

names.forEach(function(name){
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});
