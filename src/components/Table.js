import React from 'react'

const TableHeader = () => {
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th style={{ padding: '16px 0', textAlign: 'left', borderBottom: '1px solid #e0e0e0', backgroundColor: 'transparent', fontWeight: '600', color: '#666', fontSize: '14px' }}>Name</th>
        <th style={{ padding: '16px 0', textAlign: 'left', borderBottom: '1px solid #e0e0e0', backgroundColor: 'transparent', fontWeight: '600', color: '#666', fontSize: '14px' }}>URL</th>
        <th style={{ padding: '16px 0', textAlign: 'left', borderBottom: '1px solid #e0e0e0', backgroundColor: 'transparent', fontWeight: '600', color: '#666', fontSize: '14px' }}>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props
  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td style={{ padding: '16px 0', textAlign: 'left', borderBottom: '1px solid #e0e0e0', color: '#333', fontSize: '14px' }}>{row.name}</td>
        <td style={{ padding: '16px 0', textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>
          <a href={row.URL} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none', fontSize: '14px' }}>{row.URL}</a>
        </td>
        <td style={{ padding: '16px 0', textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>
          <button onClick={() => props.removeLink(index)} style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>Delete</button>
        </td>
      </tr>
    )
  })
  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  {
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    return (
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px', backgroundColor: 'white' }}>
        <TableHeader />
        <TableBody linkData={props.linkData} removeLink={props.removeLink} />
      </table>
    )
  }
}

export default Table
