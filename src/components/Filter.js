import React, { useEffect, useState } from 'react'
import { Properties } from '../data'



const Filter = () => {


  const [properties,SetProperties] = useState([])
  const [date,setDate] = useState('')
  const [location,setLocation] = useState('')
  const [type,setType] = useState('')
  const [lessRent,setLessRent] = useState('')
  const [moreRent,setMoreRent] = useState('')
  const [rent,setRent] = useState('')

  useEffect(()=>{
    SetProperties(Properties)
   
  },[])

  useEffect(()=>{

  },[properties])

  function onClickSearch(e) {
    console.log(e)
    if (location || type || date || rent) {
        console.log('click')
        let Prop = []
        let Data = []
         properties.forEach(ele => {
            // if (ele.location == location || ele.moveIn == date || ele.type == type ) {
            //     Prop.push(ele)
            // }
            if (location && type && date && rent) {
                if (ele.location == location && ele.moveIn == date && ele.type == type && rent) {
                    
                    if (moreRent && ele.rent>=2000) {
                        Prop.push(ele)
                    }
                    if (lessRent && ele.rent<=2000) {
                        Prop.push(ele)
                    }
                }
            }else if(location && type && rent){
                if (ele.location == location && ele.type == type ) {
                      
                    if (moreRent && ele.rent>=2000) {
                        Prop.push(ele)
                    }
                    if (lessRent && ele.rent<=2000) {
                        Prop.push(ele)
                    }
                }
            }else if(location && date && rent){
                if (ele.location == location && ele.moveIn == date ) {
                      
                    if (moreRent && ele.rent>=2000) {
                        Prop.push(ele)
                    }
                    if (lessRent && ele.rent<=2000) {
                        Prop.push(ele)
                    }
                }
            }
            else if(location && date && rent){
                if (ele.location == location && ele.moveIn == date ) {
                      
                    if (moreRent && ele.rent>=2000) {
                        Prop.push(ele)
                    }
                    if (lessRent && ele.rent<=2000) {
                        Prop.push(ele)
                    }
                }
            }else if(type && date && rent){
                if ( ele.type == type && ele.moveIn == date ) {
                     
                    if (moreRent && ele.rent>=2000) {
                        Prop.push(ele)
                    }
                    if (lessRent && ele.rent<=2000) {
                        Prop.push(ele)
                    }
                }
            }
            else if(location && date ){
                if (ele.location == location && ele.moveIn == date ) {
                      
                   
                        Prop.push(ele)
                   
                }
            }
            else if(type && date ){
                if ( ele.type == type && ele.moveIn == date ) {
                     
                  
                        Prop.push(ele)
            
                }
            } 
            else if(type && rent){
                if (ele.type == type ) {
                      
                    if (moreRent && ele.rent>=2000) {
                        Prop.push(ele)
                    }
                    if (lessRent && ele.rent<=2000) {
                        Prop.push(ele)
                    }
                }
            }else if( date && rent){
                if ( ele.moveIn == date ) {
                      
                    if (moreRent && ele.rent>=2000) {
                        Prop.push(ele)
                    }
                    if (lessRent && ele.rent<=2000) {
                        Prop.push(ele)
                    }
                }
            }
            else if(location && type ){
                if (ele.location == location && ele.type == type ) {
                                   
                        Prop.push(ele)
                }
            }
            else if(location && rent){
                if (ele.location == location  ) {
                      
                    if (moreRent && ele.rent>=2000) {
                        Prop.push(ele)
                    }
                    if (lessRent && ele.rent<=2000) {
                        Prop.push(ele)
                    }
                }
            }
            
            else if(location){
                if ( ele.location == location ) {
                    Prop.push(ele)
                }
            }else if(date){
                if ( ele.moveIn == date) {
                    Prop.push(ele)
                }
            }
            else if(type){
                if ( ele.type == type) {
                    Prop.push(ele)
                }
            }
         });
        // if (rent) {           
        //  properties.forEach(ele => {
        //     if (moreRent && ele.rent>=2000) {
        //         Data.push(ele)
        //     }
        //     if (lessRent && ele.rent<=2000) {
        //         Data.push(ele)
        //     }
        //  });
        
        //  SetProperties(Data)
        //  console.log(properties,Data)
        //  return
        //   }
          SetProperties(Prop) 
          console.log(properties,Prop)      
    }
   
  }

  function onClickLocation(e) {
      setLocation("New York, USA")
  }

  function onClickMoveBeforeDate(e) {
   
    setDate('before 15')
}
function onClickMoveAfterDate(e) {
    
    setDate('after 15')
}

function onClickMorePrice(e) {
    
    setMoreRent('more 2000')
    setRent('more than $2000')
}
function onClickLessPrice(e) {
    setRent('less than $2000')
    setLessRent('less 2000')
}
function onPropertyHouse(e) {
  setType('house')
}
function onPropertyApp(e) {
    setType('apartment')
  }

  return (
    <>
    <div className='d-flex justify-content-between align-items-center mt-3 data'>
        <div className='mt-1'>
            <div >
                Location
            </div>
            <button onClick={onClickLocation} type="button" className={location?'btn btn-secondary':'btn btn-outline-secondary'}>
                New York, USA
            </button>  
        </div>
        <div>
            <div>
                When
            </div>
            <div className="btn-group">
            <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {date?date:'Select Move in Date'}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" type="button" onClick={onClickMoveBeforeDate} >{'before 15'}</button></li>
                <li><button className="dropdown-item" type="button" onClick={onClickMoveAfterDate}>{'after 15'}</button></li>
            </ul>
            </div>
        </div>
        <div>
            <div>
                Price
            </div>
            <div className="btn-group">
            <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {rent?rent:'select price range'}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" type="button" onClick={onClickLessPrice}>{'less than $2000'}</button></li>
                <li><button className="dropdown-item" type="button" onClick={onClickMorePrice}>{'more than $2000'}</button></li>
            </ul>
            </div>
        </div>
        <div>
            <div>
                Property Type
            </div>
            <div className="btn-group">
            <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              {type?type:'Select Property Type'}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" type="button" onClick={onPropertyHouse}> House</button></li>
                <li><button className="dropdown-item" type="button" onClick={onPropertyApp}>Apartment</button></li>
            </ul>
            </div>
        </div>
        <div>
        <button type="button" className="btn btn-primary mt-1 " onClick={onClickSearch}>Search</button>
        </div>
    </div>
      
        
    <div className='row p-2 d-flex justify-content-between '>
    {properties.map(property=>(
        <div className="card mt-2 col-2 ml-1" >
        <img style={{height:'140px',width:'160px'}} src={property.image} class="card-img-top" alt="..."/>
        <div className="card-body">
            <p className="card-text">${property.rent}/month </p>
            <h5 className="card-title">{property.name}</h5>
            <p className="card-text">{property.address}</p>
             <div className='d-flex justify-content-between mt-1 mb-1'>
                <span className=''>{property.details.bed}</span>
                <span className=''>{property.details.bathrooms}</span>
                <span className=''>{property.details.area}*m</span>
             </div>
           
        </div>
        </div>
    ))}
    </div>
    



    </>
  )
}

export default Filter