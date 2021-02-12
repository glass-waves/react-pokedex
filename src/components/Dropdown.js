import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        const filterList = this.props.filterList;
        const keyNameVar = this.props.keyName;
        const dropdownList = filterList.map(listItem => <option value={listItem} key={listItem}> {listItem}</option>)
        return (
            <div>
                <label for={keyNameVar}>{keyNameVar}</label>
                <select
                    id={keyNameVar}
                    onChange={this.props.handleChange}>
                    <option value=''>None</option>
                    {dropdownList}
                </select>
            </div>

        )
    }

}