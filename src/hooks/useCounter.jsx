import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useCounter = (initialValue=1) => {
   const navigate = useNavigate()
    const [count, setCount] = useState(initialValue);

    const handleSumar = () => {
        setCount(count + 1);
      };
    
      const handleRestar = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };

      const handleRedirect = () => navigate('/carrito')


  return {
        count,
        handleSumar,
        handleRestar,
        handleRedirect
    }
}

export default useCounter