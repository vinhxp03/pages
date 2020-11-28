let arr = [
  {
    'id': 2135,
    'name': 'John'
  },
  {
    'id': 3245,
    'name': 'Sally'
  }
]

arr.sort((a, b) => b.name < a.name ? -1 : (b.name > a.name ? 1 : 0))

console.log('result', arr)