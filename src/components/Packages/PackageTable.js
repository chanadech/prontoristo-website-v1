import React, { Component } from 'react'

class Table extends Component {
   constructor(props) {
      super(props)
      this.state = {
         students: [
            { package: "Package A", detail: "Meat Lover Set", price: "$19.99" },
            { package: "Package B", detail: "Veggie Set", price: "$9.99" },
            {package: "Package C", detail: "Child Set", price: "$12.99"}
         ]
      }
   }
}
export default Table