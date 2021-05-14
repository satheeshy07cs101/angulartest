import {Action,createAction,props, createReducer ,on } from '@ngrx/store';

import { Data } from "../data.model";


const defaultState:Data = { 
    content:'',
    header:'',
    display:false
};
 
export const process = createAction('process');
export const benifits = createAction('benifits');
export const health = createAction('health');
export const risks = createAction('risks' );
export const questions = createAction('questions' ); 
 
 
 
const reducer = createReducer(defaultState,  on(process, (state) => ({header:'Process' , content:'Living up to the motto of Healthy Conscious Living, ORGANIC Oil Store’S certified organic and nutrition-rich healthy foods come with natural benefits and are packed into the highest quality bottles. The liquids are cold pressed to retain MUFA & PUFA properties and high Omega 3 and Omega 6 content, and are preservative-free. From the cholesterol-friendly ground nut oil,  coconut super oil and sesame oil, to the organic desi sesame oil, this range is a must-try. ' , display:true})),
                                             on(benifits, (state)=>({header:'Benifits' , content:'To bring you healthy and natural cooking oils, we digged the roots of Ayurveda. After studying the mechanism of human body we concluded our process to prepare organic oils.As per the process suggested in Ayurveda, we have prepared our oils to provide you most pure and rejuvenating cooking oils which helps to balance “vata” “Pita” and “Kaph” in our body. Replace your cooking oils with our pure oils. ', display:true} )),
                                             on(health, (state)=>({header:'Health', content:'We at Organic oils are bound to provide you 100% pure unfiltered cooking oils. Considering today’s life style, it has become necessary to use pure and chemicals free oils in daily cooking. Edible oil is a very important and necessary in our everyday cooking. Everyone of us uses cooking oils at least 3 times a day. So this ingredient has to be pure and chemical free! All the refined and filtered oils available in market are not pure and mixed with harmful chemicals. We have brought you all new concept of unrefined, unfiltered cooking oil based on india’s ancient Ayurveda. Our oils are cold pressed and best in quality! Organic oils oils balances “Vaata” in our body and saves you from wide range of Vaata imbalance diseases. Replace your refined cooking oils with Organic oils unrefined pure oils. Explore our variety of healthy oils and order it now.', display:true})),
                                             on(risks, (state)=>({header:'Risks', content:'Most of us were taught to use refined oils at a young age. Unfortunately, this has resulted in the worst epidemic of chronic disease in history, with global explosions of heart disease, type 2 diabetes and obesity (or what I call diabesity) and cancer.Replace these cooking oils with organic pure oils', display:true})),
                                             on(questions, (state)=>({header:'Shipment' , content:'All the orders are shipped only after confirmation over a call. In case, if we cannot verify your order, it will be cancelled.', display:true})),
                             );

 export function dataReducer(state: Data | undefined, action: Action){
     console.log(state  +'------'+action.type);
     
        return reducer(state, action);
 }