import React from 'react'
import { connect } from 'react-redux'

const Carro = ({counterZapatos, descontarZapatos}) => {
    return (
        <div>
            <h1>{counterZapatos}</h1>
            <button onClick={(e) => descontarZapatos(e)}>descontar zapatos</button>
        </div>
    )
}



const mapStateToProps = state => ({
    counterZapatos: state.counter.zapatos,
    
    
})

const mapStateToDispatch = dispatch => ({
    descontarZapatos(e) {
        dispatch({
            type: 'DECREMENT_ZAPATOS'
        });
        
    },

})

export default connect(mapStateToProps, mapStateToDispatch) (Carro)
