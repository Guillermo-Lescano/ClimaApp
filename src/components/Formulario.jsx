import React from 'react'

const Formulario = () => {
  return (
   <div className='contenedor'>
    <form action="">
      <div className='campo'>
        <label htmlFor="ciudad">Ciudad</label>
        <input type="text" id='ciudad' name='ciudad' />
      </div>
      <div className='campo'>
        <label htmlFor="ciudad">Ciudad</label>
        <select
          id='pais'
          name='pais'>
            <option value="">Seleccione un pais</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica </option>
            <option value="ES">España</option>
            <option value="PE">Peru</option>
        </select>
      </div>
      <input type="submit" value='Consulta Clima'/>
    </form>
   </div>
   
  )
}

export default Formulario