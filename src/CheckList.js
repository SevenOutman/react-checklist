import React, { Component } from 'react';

const Checkbox = props => (
    <input
        type="checkbox"
        {...props}
    />
)

class CheckList extends Component {
    state = {
        checkedData: []
    }


    handleToggleCheckAll = (e) => {
        const { checked } = e.target;
        checked ? this.handleCheckAll() : this.handleClear()
    }

    handleToggleCheckEntry = (e, entry) => {
        const { checked } = e.target;
        const { checkedData } = this.state;

        const index = checkedData.indexOf(entry)

        if (checked && index === -1) {
            this.setState({ checkedData: [...checkedData, entry] })
        } else if (!checked && index !== -1) {
            this.setState({ checkedData: [...checkedData.slice(0, index), ...checkedData.slice(index + 1)] })
        }
    }

    handleCheckAll = () => {
        const { data } = this.props;
        this.setState({ checkedData: data })
    }

    handleClear = () => {
        this.setState({ checkedData: [] })
    }

    render() {
        const { data = [], children: createItem, ...props } = this.props;
        const { checkedData } = this.state;

        return (
            <table
                {...props}
            >
                <thead>
                <tr>
                    <th>
                        <Checkbox
                            checked={checkedData.length === data.length}
                            onChange={this.handleToggleCheckAll}
                        />
                    </th>
                    <th>
                        全选
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map(entry => (
                        <tr>
                            <td>
                                <Checkbox
                                    checked={checkedData.includes(entry)}
                                    onChange={e => this.handleToggleCheckEntry(e, entry)}
                                />
                            </td>
                            <td>
                                {createItem(entry)}
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }
}

export default CheckList
