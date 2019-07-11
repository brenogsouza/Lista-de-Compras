import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// STYLE
import './NewItem.css'
 
// CUSTOM COMPONENT
import CustomCard from '../../common/customCard'
import { Creators as FormActions } from '../../store/actions/Form'


const NewItem = () => (
  <CustomCard link='#' containerClass='list-item'>
    <p className='title'>Novo Produto</p>
    <FontAwesomeIcon 
      icon={ faPlusCircle } 
      color='#E4E4e4' 
      size='8x' 
    />
  </CustomCard>
)

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch);

export default connect(null, mapDispatchToProps)(NewItem) 