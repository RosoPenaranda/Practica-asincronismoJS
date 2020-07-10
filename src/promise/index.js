const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!')
    } else {
      reject('Whooops!')
    }
  })
}


somethingWillHappen()
  .then(res => console.log(res))
  .catch(err => console.log(err))

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True')
      }, 2000)
    } else {
      const error = new Error('Whooops!')
      reject(error)
    }

  })
}


somethingWillHappen2()
  .then(res => console.log(res))
  .catch(err => console.error(err))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(resp => {
    console.log('Arrays of results', resp);
  }).catch(err => {
    console.error(err)
  })