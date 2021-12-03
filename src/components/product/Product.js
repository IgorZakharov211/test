import React from "react";
import './Product.scss';
import Select from '../select/Select';
import Overview from "../overview/Overview";

function Product(props){
  return(
    <section className={`product ${props.className}__product`}>
      <Select className="product"/>
      <Overview />
    </section>
  )
}

export default Product;