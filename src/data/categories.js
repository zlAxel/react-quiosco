
import { axiosInstance } from "../config/axios";

export async function getCategories() {
    try {
        const { data } = await axiosInstance( '/api/categorias' )
        
        return data.data
    } catch (error) {
        console.log( error )
    }
}

// export const categories = [
//     {
//         icon: "cafe",
//         name: "Café",
//         id:1
//       },
//       {
//         icon: "hamburguesa",
//         name: "Hamburguesas",
//         id: 2
//       },
//       {
//         icon: "pizza",
//         name: "Pizzas",
//         id: 3
//       },
//       {
//         icon: "dona",
//         name: "Donas",
//         id: 4
//       },
//       {
//         icon: "pastel",
//         name: "Pasteles",
//         id: 5
//       },
//       {
//         icon: "galletas",
//         name: "Galletas",
//         id: 6
//       }
// ]
