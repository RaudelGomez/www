const estadoInicial = {
  zapatos: 30,
  sandaliasMegusta: 1,
  sandaliasNoMeGusta: 0,
  color1: 'transparent',  
  color2: 'red',
  c1: 'black',
  c2: 'white'
};

export default function counter(state = estadoInicial, action) {
  switch (action.type) {
    case "INCREMENT_ZAPATOS":
      console.log(action);
      return {
        ...state,
        zapatos: state.zapatos + 1,
      };
    case "DECREMENT_ZAPATOS":
      return {
        ...state,
        zapatos: state.zapatos - 1,
      };
    case "MEGUSTA_SANDALIAS":
      return {
        ...state,
        sandaliasNoMeGusta: state.sandaliasMegusta,
        sandaliasMegusta: state.sandaliasNoMeGusta,
        color1: state.color2,
        color2: state.color1,
        c1: state.c2,
        c2: state.c1
      };

    default:
      return state;
  }
}
