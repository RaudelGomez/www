
import { connect } from 'react-redux'


const Counter = ({counterZapatos, counterSandalias, incrementarZapatos, meGustaSandalias, color, c}) => {

        return (
        <div>
            <div id="b"></div>
            <h1>Zapatos: {counterZapatos}</h1>
            <button id="botonD" onClick={(e) => incrementarZapatos(e)}>Agregar Zapatos</button>
            <h1>Sandalias: {counterSandalias}</h1>
            <button style={{backgroundColor: color, color: c}} onClick={() => meGustaSandalias()}>Me Gusta</button>
        </div>
    )
}

function Prueba(e) {

    function cssfunction() {

      
        e.target.style.backgroundColor = "red"
        e.target.style.color = "white"
        
        
    }
    //e.target.style.backgroundColor = "red"
   // e.target.style.color = "white"
  //  e.target.disabled = "true"
  e.target.addEventListener('click', cssfunction())
  
    
}

const mapStateToProps = state => ({
    counterZapatos: state.counter.zapatos,
    counterSandalias: state.counter.sandaliasNoMeGusta,
    color: state.counter.color1,
    c: state.counter.c1
    
})

const mapStateToDispatch = dispatch => ({
    incrementarZapatos(e) {
        dispatch({
            type: 'INCREMENT_ZAPATOS'
        });
        Prueba(e)
    },
    meGustaSandalias() {
        dispatch({
            type: 'MEGUSTA_SANDALIAS'
        })
    }
})
export default connect(mapStateToProps, mapStateToDispatch) (Counter)

