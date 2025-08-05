import { useState } from 'react'

const Form = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    URL: ''
  })

  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
    if (formData.name && formData.URL) {
      props.handleSubmit(formData)
      setFormData({ name: '', URL: '' })
    }
  }

  return (
    <div onSubmit={onFormSubmit}>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333', fontSize: '14px' }}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="URL" style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#333', fontSize: '14px' }}>URL</label>
        <input
          type="url"
          id="URL"
          name="URL"
          value={formData.URL}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }}
        />
      </div>
      <button type="button" onClick={onFormSubmit} style={{ backgroundColor: '#007bff', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>Submit</button>
    </div>
  )
}

export default Form
