import React from 'react'
import { connect } from 'react-redux'

const ReduxDemo = (props) => {
  return(
      <div className='container my-3'>
          <h3 className='text-center'>Redux Works !!!</h3>
          <br/>
          <div className='bg-light p-4'>
              <h3>Count values = {props.mycount}</h3>
              <br/>
              <div className='btn-group'>
                  <button className='btn btn-primary' onClick={props.myIncrement}>INC</button>
                  <button className='btn btn-secondary' onClick={props.myDecrement}>DEC</button>
              </div>
          </div>
      </div>
  )
}

// subscribing to store data
const mapStateToProps = (state) => {
    return {
        mycount : state.count
    }
}

// dispatching actions to reducer
const mapDispatchToProps = (dispatch) => {
    return {
        myIncrement: () => {
            dispatch({type: 'INC', payload:5})
        },
        myDecrement:() => {
            dispatch({type: 'DEC', payload:3})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxDemo)


