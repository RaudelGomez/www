const initialState = {
  bienvenido: "HOLA",
  despedida: "CHAO"
}

export default function saludo(state = initialState, action) {
    switch (action.type) {
      case 'CAMBIAR_BIENVENIDA':
        console.log(action)
        return {
          ...state,
          bienvenido: action.e       
        };
      case 'CHAO':
        return state 
      default:
        return state
    }
  }