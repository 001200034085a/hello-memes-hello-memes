import React, { useContext } from "react";
import ProductCart from "./ProductCart";
import { ProductContext } from "./CartApp";

export default function MainCart(){
    const { products,onAdd}= useContext(ProductContext);
    
    return(
        <main className="block col-2">
            <h2>products</h2>
            <div className="row">
                {products.map((product)=>(
                    <ProductCart key={product.id} product={product}  onAdd={onAdd} />
                ))}
            </div>
        </main>
    )
}