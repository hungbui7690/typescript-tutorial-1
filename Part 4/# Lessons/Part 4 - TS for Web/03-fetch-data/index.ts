/*
  Fetching Data
  1. services/DataResource.ts
  2. index.ts


*/

import { Pizza } from './models/Pizza'

document.addEventListener('DOMContentLoaded', async () => {
  // load the pizzas data
  const pizzas = await Pizza.loadAll()

  console.log(pizzas)
})
