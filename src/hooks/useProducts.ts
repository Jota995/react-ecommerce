import {useState} from "react"
import { IProduct} from "../components/Product";

const initialProducts:Array<IProduct> = [
    {
        Id:1,
        Name:"Iphone",
        Price:2334,
        Categories:["Electronics"],
        Rate: 42,
        Quantity:0
    },
    {
        Id:2,
        Name:"Samsung Galaxy S5",
        Price:5000,
        Categories:["Electronics"],
        Rate: 23,
        Quantity:0
    },
    {
        Id:3,
        Name:"Huawei",
        Price:5532,
        Categories:["Electronics"],
        Rate: 200,
        Quantity:0
    },
    {
        Id:4,
        Name:"Huawei 2",
        Price:5532,
        Categories:["Electronics", "SmartPhones","Tecnology"],
        Rate: 200,
        Quantity:0
    },
    {
        Id:5,
        Name:"Huawei 3",
        Price:5532,
        Categories:["Electronics"],
        Rate: 200,
        Quantity:0
    },


]

export function useProducts() {
  const [products,setProducts] = useState<Array<IProduct>>(initialProducts)
  
  return [products];
}
