import React, { Component } from 'react'
import { connect } from 'react-redux'
class GlassItem extends Component {
    render() {
        let { item } = this.props;
        return (
            <div className="glass-item">
                <button onClick={() => this.props.show(item)}><img src={item.url} /></button>
            </div>

        )
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        show: (glass) => {
            const action = {
                type: 'SHOW_GLASS',
                glass: glass
            }
            //Dùng hàm dispatch để đưa dữ liệu lên redux
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchtoProps)(GlassItem);
