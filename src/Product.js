import React from 'react';
import Records from "./products.json";
import Knex from 'knex'

const Products = Records.Product

const ProductComponent = () => {
    const knex1 = Knex({
        client: 'mysql',
        connection: {
          host : '127.0.0.1',
          port : 3306,
          user : 'root',
          password : 'ecommerceREDO',
          database : 'xx'
        }
      });
    let products = knex1.select().table('Products')
    let test = Products.map((value, index)=> {
        let indexInc = index+1 
        let classnameWithIOndexvalue = "griditem" + indexInc
        console.log(classnameWithIOndexvalue)

        return (
            <>
            <div className={classnameWithIOndexvalue}>
            <h1 key={value}>{value.title}</h1>
            <img key={value} src={value.image} alt={value.title}/>
            <h3 key={value} >{value.title}</h3> 
            <p key={value} >{value.price}</p>
            <p key={value} >{value.description}</p>
            <button>Buy Now!</button>
            </div>
            </>
            )
    })
    return <section className="grid-container">{test}</section>
}

export default ProductComponent
