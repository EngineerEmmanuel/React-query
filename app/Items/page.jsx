"use client"
import { useQuery } from 'react-query';

const Component = () => {
 const { isLoading, error, data } = useQuery('productData', () =>
    fetch('https://fakestoreapi.com/products').then(res =>
      res.json()
    )
  )

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  
    
  

  return ( 
    <section className="p-2 mt-5">
      
      <div className="grid grid-cols-2 gap-3  md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <div className="border-solid border border-gray-300 p-1 rounded-md" key={item.id}>
           
           <img src={item.image} alt="" className="w-full h-5/6 " /> 
           <p>{item.title.substring(0,10)}</p>
            </div>
          
        ))}
       
      </div>
      
    </section>
  );
};

export default Component;



