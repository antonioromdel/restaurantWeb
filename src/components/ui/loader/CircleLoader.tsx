import './loader.css'

export default function CircleLoader() {
  return (
    <>
      <div className='w-full h-full flex justify-center items-center opacity-75 fixed inset-0 bg-white z-50'>
        <div className="spinner">
            <div></div>   
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
        </div>
      </div>
        
    </>
  )
}
