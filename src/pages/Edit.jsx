import React, { useState , createRef} from 'react'
import Button from 'react-bootstrap/Button';
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Taxt';
import { exportComponentAsJPEG } from 'react-component-export-image'
function EditPage() {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const memeRef = createRef()

  const addText = () => {
    setCount(count + 1);
  }

  return (
    <div>
    <div style={{width:"700px", border: '1px solid'}} ref={memeRef} className='meme mt-5 mb-5'>
      <img src={params.get("url")} alt='img' width="250px" />
      {
        Array(count).fill(0).map(e => <Text/>)
      }
    </div>
    <Button style={{ marginTop:'10px' }} onClick={addText}>Add Text</Button>
    <Button style={{ marginTop:'10px' }} variant='success' onClick={(e) => exportComponentAsJPEG(memeRef)}>Save</Button>
    </div>
  )
}

export default EditPage