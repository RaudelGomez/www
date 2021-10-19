import React from 'react'
import { connect } from 'react-redux'


const Saludo = ({bienvenido, despedida, cambiarBienvenida}) => {
    return (
        <div>
            <input type="text" onChange={(e) => cambiarBienvenida(e.target.value)}/>
            <h1>Bienvenido: {bienvenido}</h1>
            
            <h1>Despedida: {despedida}</h1>
        </div>
    )
}

const mapStateToProps = state =>({
    bienvenido: state.saludo.bienvenido,
    despedida: state.saludo.despedida
})

const mapDispatchToProps = dispatch =>({
    cambiarBienvenida(e) {
        dispatch({
            type: "CAMBIAR_BIENVENIDA",
            e 
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Saludo)
