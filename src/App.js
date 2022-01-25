 import { useState } from 'react'
 import { data} from './Birthday-data'

 function App(){
   const [people, setPeople] = useState(data)

   const removePerson= (id) => {
     let newPerson=people.filter((person)=> person.id !==id)
     setPeople(newPerson)
   }
   return (
     <>
     <h3 
     style={{
       backgroundColor: 'red',
       color: 'yellow',
       textAlign: 'left',
       fontSize: '36px',
       marginTop: '70px'
     }}
     >
     {people.length} birthdays today
     </h3>
     {people.map((person) => {
       const {id,name,image}=person

       return (
         <div className='container' key=
         {id}>
           <div className='avatar'>
             <img src={image} alt={name}/>
             <h3>{id}</h3>
             <h3>{name}</h3>
             </div>
             <div className='button'>
               <button button className='btn'
               onClick={() => removePerson(id)}>
                 Dismiss
                 </button>
                 </div>
                 </div>
       )
     })}
     </>
   )
 }
 export default App