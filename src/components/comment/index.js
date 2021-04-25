import React from 'react'

export default function Comments(props) {
  console.log('Comments -> props', props)
  return (
    <div>
      <h3>Commnets</h3>
      {Object.values(props.data).map((item, index) => {
        return Object.keys(item).map((key, index) => {
          if (key == 'body' || key == 'email')
            return (
              <div style={{ marginTop: '10px' }}>
                <div>
                  {key} {item[key]}
                </div>
              </div>
            )
        })
      })}
    </div>
  )
}
