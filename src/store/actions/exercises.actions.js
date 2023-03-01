import { exercisesTypes } from '../types/index';

const { REGISTER_DAY } = exercisesTypes;

export const registerDay = () => {
    console.warn("DATA BASEEE");
    return async() => {
        try{
            await fetch(`${URL_REALTIME_DATABASE}/days.json`, 
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json'}
                },
                {
                    body: JSON.stringify({
                        date: Date.now()
                    })
                }
                );

                dispatch({
                    type: REGISTER_DAY
                })

        }catch(error){console.warn("ERROR:" , error);}
    }
};
