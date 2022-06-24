const _ =require('lodash')

  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log('hello');
  });
  greet();
  greet();
  greet();

  //for more
  //https://lodash.com/docs/4.17.15