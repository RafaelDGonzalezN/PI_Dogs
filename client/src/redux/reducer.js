import { 
    GET_DOGS, 
    GET_BY_NAME, 
    GET_DETAIL, 
    GET_TEMPERAMENT, 
    POST_DOG,
    EMPTY,
    ORDER_BY_NAME,
    ORDER_WEIGHT,
    FILTER_BY_TEMPERAMENT,
    FILTER_CREATED } from "./actions_Types";


let initialState = {allDogs:[], dogs:[], temperament: [], dogDetail: {}, newDog: {}, createdFiler: null};


const calcuteWeightAverage = (weight) =>{
    if (!weight){
        return -1
    }

    const [min,max] = weight.split(' - ').map(parseFloat);

    if(isNaN(min) || isNaN(max)){
        return -1
    }

    const average = (min + max) / 2;

    return isNaN(average) ? -1 : average;
} 

function rootReducer(state =initialState,action){
    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                allDogs:action.payload,
                dogs:action.payload
            };
        case GET_BY_NAME:
            return{
                ...state,
                dogs: action.payload,
            }
        case GET_DETAIL:
            return{
                ...state,
                dogDetail: action.payload,
            }
        case GET_TEMPERAMENT:
            return{
                ...state,
                temperament: action.payload
            }
        case POST_DOG:
            return{ 
                ...state,
                newDog: action.payload
                
            }
        case EMPTY:
            return {
                ...state,
                  allDogs: [],
                  dogDetail: {},
                  error: false,
            };
        case ORDER_BY_NAME:
                //Ordenar los perros por nombre
        const filterDogs = action.payload === "A-Z" ? state.dogs.sort((a,b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;                return 0
            })
            : state.dogs.sort((a, b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            return 0
            });
            return{
            ...state,
            dogs: filterDogs,
            };
        case FILTER_CREATED:
                    //filtro por api o db
        const allDogs = state.allDogs;
        const filterCreated = action.payload === "true" ? allDogs.filter(dog => dog.created) : allDogs.filter(dog => !dog.created)
        
        return {
            ...state,
            dogs: action.payload === "all" ? state.allDogs : filterCreated
        };

        case ORDER_WEIGHT:
            const isDescending = action.payload === 'desc'

            const sortedDogs = state.dogs.slice().sort((a,b) => {
                const weightA = calcuteWeightAverage(a.weight);
                const weightB = calcuteWeightAverage(b.weight);

                return isDescending ? weightB - weightA : weightA - weightB;
            })

            return{
                ...state,
                dogs: sortedDogs
            }
        case FILTER_BY_TEMPERAMENT:
                        //filtrar x temperamento
                        const allDogs2 = state.allDogs;
                        const filteredTemp = action.payload === "all" ? allDogs2 : allDogs2.filter(element => {
                            return element.temperament?.includes(action.payload)
                        })
            
                        return{
                            ...state,
                            dogs: filteredTemp
                        }
            
        default:
            return state
    }
}

export default rootReducer;