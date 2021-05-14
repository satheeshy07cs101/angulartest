import {Action,createAction,props, createReducer ,on } from '@ngrx/store';
import { Order } from "../order.model";


const defaultState:Order = { 
    name:'your name!',
    contact:'XXXXXXX',
    coconutoil:0,
    flaxseedoil:0,
    groundnutoil:0,
    sesameoil:0
};
 
export const addcoconutoil = createAction('addcoconutoil');
export const addflaxseedoil = createAction('addflaxseedoil');
export const addgroundnutoil = createAction('addgroundnutoil');
export const addsasameoil = createAction('addsasameoil' );

export const removecoconutoil = createAction('removecoconutoil');
export const removeflaxseedoil = createAction('removeflaxseedoil');
export const removegroundnutoil = createAction('removegroundnutoil');
export const removesasameoil = createAction('removesasameoil');

export const reset = createAction('reset');
 
 
 
 const reducer = createReducer(defaultState,  on(addcoconutoil, (state) => ({name:state.name,contact:state.contact, coconutoil:state.coconutoil+1,flaxseedoil:state.flaxseedoil,groundnutoil:state.groundnutoil,sesameoil:state.sesameoil})),
                                             on(addflaxseedoil, (state)=>({name:state.name,contact:state.contact, coconutoil:state.coconutoil,flaxseedoil:state.flaxseedoil+1,groundnutoil:state.groundnutoil,sesameoil:state.sesameoil} )),
                                             on(addgroundnutoil, (state)=>({name:state.name,contact:state.contact, coconutoil:state.coconutoil,flaxseedoil:state.flaxseedoil,groundnutoil:state.groundnutoil+1,sesameoil:state.sesameoil})),
                                             on(addsasameoil, (state)=>({name:state.name,contact:state.contact, coconutoil:state.coconutoil,flaxseedoil:state.flaxseedoil,groundnutoil:state.groundnutoil,sesameoil:state.sesameoil+1})),
                                             on(removecoconutoil, (state)=>({name:state.name,contact:state.contact, coconutoil: state.coconutoil==0? 0  :state.coconutoil-1,flaxseedoil:state.flaxseedoil,groundnutoil:state.groundnutoil,sesameoil:state.sesameoil})),
                                             on(removeflaxseedoil, (state)=>({name:state.name,contact:state.contact, coconutoil:state.coconutoil,flaxseedoil:state.flaxseedoil==0?0:state.flaxseedoil-1,groundnutoil:state.groundnutoil,sesameoil:state.sesameoil})),
                                             on(removegroundnutoil, (state)=>({name:state.name,contact:state.contact, coconutoil:state.coconutoil,flaxseedoil:state.flaxseedoil,groundnutoil:state.groundnutoil==0?0 :state.groundnutoil-1,sesameoil:state.sesameoil})),
                                             on(removesasameoil, (state)=>({name:state.name,contact:state.contact, coconutoil:state.coconutoil,flaxseedoil:state.flaxseedoil,groundnutoil:state.groundnutoil,sesameoil:state.sesameoil==0?0:state.sesameoil-1})),
                                             on(reset, (state)=>({name:'',contact:'', coconutoil:0,flaxseedoil:0,groundnutoil:0,sesameoil:0}))
                                              );

 export function orderReducer(state: Order | undefined, action: Action){
     console.log(state  +'------'+action.type);
     
        return reducer(state, action);
 }