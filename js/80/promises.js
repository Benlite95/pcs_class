(async function () {
  'use strict';

  function doSomethingOne(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(n + 1);
      }, 1000);
    });
  }

  function doSomethingTwo(n) {
    return new Promise((resolve, reject) => {
      resolve(n + 2);
      //failureCallback(n+2);
    });
  }

  function doSomethingThree(n) {
    return new Promise((resolve, reject) => {
      resolve(n + 3);
      //failureCallback(n + 3);
    });
  }

  //doSomethingOne(1, r => doSomethingTwo(r, r2 => doSomethingThree(r2, r3 => console.log(r3))));

  /*doSomethingOne(1, r => {
    doSomethingTwo(r, r2 => {
      doSomethingThree(r2, r3 => {
        console.log(r3);
      }, e => console.error('error3', e));
    }, e => console.error('error2', e));
  }, e => console.error('error1', e));*/

  doSomethingOne(1)
    .then(r => doSomethingTwo(r))
    .then(r => doSomethingThree(r))
    .then(r => console.log(r))
    .catch(e => console.error(e));

  try {
    let r = await doSomethingOne(1);
    r = await doSomethingTwo(r);
    r = await doSomethingThree(r);
    console.log(r);
  } catch (e) {
    console.error(e);
  }


  const myPromise = new Promise((resolve, reject) => {
    // do some work
    let fetchedText = 'This text was fetched using ajax';

    // if success call resolve
    //setTimeout(()=> {
    resolve(fetchedText);
    //}, 1000);

    // if failure call reject
    //reject('oops. didnt work');
  });

  console.log('before promise');
  myPromise
    .then(r => console.log(r))
    .catch(e => console.error(e));
  console.log('after promise');

  console.log('before promise');
  try {
    const r = await myPromise;
    console.log(r);
  } catch (e) {
    console.error(e);
  }
  console.log('after promise');

  function someFunction() {
    setTimeout(() => {
      console.log('hello');
    }, 1000);
  }

  console.log('before calling someFunction');
  someFunction();
  console.log('after calling someFunction');
}());
