import { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const [favLinks, setFavLinks] = useState([])

  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    setFavLinks(prevLinks => prevLinks.filter((_, i) => i !== index))
  }

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
    setFavLinks(prevLinks => [...prevLinks, favLink])
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ color: '#333', textAlign: 'left', marginBottom: '8px', fontSize: '32px', fontWeight: '600' }}>My Favorite Links</h1>
      <p style={{ color: '#666', textAlign: 'left', marginBottom: '40px', fontSize: '16px' }}>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */}
      <Table linkData={favLinks} removeLink={handleRemove} />
      <h3 style={{ color: '#333', marginTop: '0', marginBottom: '24px', fontSize: '24px', fontWeight: '600' }}>Add New</h3>
      {/*TODO - Add Form Component */}
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}


export default LinkContainer
