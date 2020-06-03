import axios from 'axios';
import URL from '../../assets/js/ApiEndpoints'
 export const FetchImages =()=>dispatch=>{
     
    axios.get(URL.imagesAPI)
         .then(response=>{
              dispatch({
                        type:'IMAGESLIST' ,
                        payload:response.data
                    })
         })
         .catch(err=>{
             console.log(err)
         })
    
 }