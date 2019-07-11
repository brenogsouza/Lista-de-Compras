import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// STYLE
import "./CreateList.css";

//CUSTOM COMPONENT
import Form from "../../common/forms";
import ListItemCard from "../listItemcard";
import { Creators as ListActions } from "../../store/actions/List";

class CreateList extends Component {

  addProduct = (product, list) => {
    this.props.addProduct(product, list)
  }

  render() {
    return (
      <div className="page-container">
        <Form 
          addProduct={this.addProduct} 
          updateProduct={this.props.updateProduct}
        />

        <div className="list-items-container">
          {this.props.list.items.map(item => 
            <ListItemCard 
              item={item}
              toggleProduct={this.props.toggleProduct}
              deleteProduct={this.props.deleteProduct} 
              key={item.id}
            />
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);