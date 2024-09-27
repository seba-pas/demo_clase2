
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
    const navigate = useNavigate()

    function goToCards() {
        navigate('/cards')
    }
  return (
    <div className='bg-dark d-flex justify-content-center align-items-center h-100 w-100'>
          <Button variant="secondary" onClick={goToCards}>Cards</Button>
    </div>
  )
}
