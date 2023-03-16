import React,{useState} from 'react'


const Section = ({title,  description, isVisible, setVisible}) => {

  // const[isVisible, setIsVisible] = useState(false);

  // let displayContent = () => {
  //   setIsVisible(!isVisible)
  // }

  // let hideContent = () => {
  //   setIsVisible(false)
  // }

  return (
    <div className="border border-black p-3 mb-2">
      <h3 className='text-l font-bold'>{title}</h3>

      {
        isVisible ? (<button className='cursor-pointer p-2 border-black' onClick={()=> setVisible(false)}> hide </button>) : (<button className='cursor-pointer p-2 border-black' onClick={() => setVisible(true)}> Show </button>)
      }

      {isVisible && <p>{description}</p>}
      
    </div>
  )
}



const instamart = () => {

  const [visibleSection, setIsVisibleSection] = useState('')

  return (

    <div>
      <h2 className='text-3xl p-2 m-2 font-bold'>instamart</h2>
      <Section 
        title={'About instamart:'}
        description= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti iste tenetur facere voluptates odit incidunt delectus iure nisi! Dolores, neque? Non corrupti nihil molestias, maxime aliquam voluptate corporis ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti iste tenetur facere voluptates odit incidunt delectus iure nisi! Dolores, neque? Non corrupti nihil molestias, maxime aliquam voluptate corporis ea.'}

        isVisible = {visibleSection === 'about'}
        setVisible={() => {
          setIsVisibleSection('about')
        }}
      />

      <Section 
        title={'Team instamart:'}
        description= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti iste tenetur facere voluptates odit incidunt delectus iure nisi! Dolores, neque? Non corrupti nihil molestias, maxime aliquam voluptate corporis ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti iste tenetur facere voluptates odit incidunt delectus iure nisi! Dolores, neque? Non corrupti nihil molestias, maxime aliquam voluptate corporis ea.'}

        isVisible = {visibleSection === 'team'}
        setVisible={() => {
          setIsVisibleSection('team')
        }}
      />

      <Section 
        title={'Carriers:'}
        description= {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti iste tenetur facere voluptates odit incidunt delectus iure nisi! Dolores, neque? Non corrupti nihil molestias, maxime aliquam voluptate corporis ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti iste tenetur facere voluptates odit incidunt delectus iure nisi! Dolores, neque? Non corrupti nihil molestias, maxime aliquam voluptate corporis ea.'}

        isVisible = {visibleSection === 'carriers'}
        setVisible={() => {
          setIsVisibleSection('carriers')
        }}
      />
    </div>
  )
}

export default instamart;