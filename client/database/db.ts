// Oh you curious...
// This is not a real database,
// But let's imagine it is one :)
import axios from 'axios'

type GetUsersResponse = {
  data: TProduct[];
};

class Database {
  constructor() {}

  async getAll() {
    const {data} = await axios.get<GetUsersResponse>("https://avocado-nextjs-production.up.railway.app/product/allProducts")
    return data
  }

  async getById(id: string){
    const {data} = await axios.get<GetUsersResponse>(`https://avocado-nextjs-production.up.railway.app/product/productById/${id}`)
    return data
  }
}

export default Database
