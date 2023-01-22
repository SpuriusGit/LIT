import React, { Component } from 'react'
import { connect } from 'react-redux'
import './select.css'

export class SortSelect extends Component {

    handleChange = (event) => {
        event.preventDefault();
        this.props.sort(event.target.value)
    }
  render() {
    console.log(this.props.posts);
    return (
        <React.Fragment>
            <label for="sort">Sort by:</label>
            <select name="sort" id="sort" onChange={this.handleChange} >
                <option value="" disabled>Choose sort type: </option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
        </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {sort: (sortType) => dispatch({type: 'SORT_POSTS', payload: sortType})};
}

export default connect(mapStateToProps, mapDispatchToProps)(SortSelect)