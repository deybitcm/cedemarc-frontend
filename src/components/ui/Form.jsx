import PropTypes from 'prop-types'
import { useContext } from 'react'
import ThemeContext from '../../ThemeContext'
import Button from './Button'
import Icon from './Icon'

const Form = ({ fields, onSubmit, buttonText }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <form
      className={`space-y-6 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      } p-6 rounded-lg shadow-md`}
      onSubmit={onSubmit}
    >
      {fields.map((field) => (
        <div key={field.id} className='relative'>
          {/* === TEL INPUT CON +51 === */}
          {field.type === 'tel' ? (
            <div className='relative'>
              <div
                className={`absolute inset-y-0 left-0 flex items-center pl-3 pr-2 border-r content-center 
                ${
                  theme === 'dark'
                    ? 'text-white border-gray-600'
                    : 'text-gray-700 border-gray-300'
                }`}
              >
                <Icon name='peru_flag' size='w-6' />
                +51
              </div>

              <input
                type='tel'
                id={field.id}
                value={field.value}
                onChange={field.onChange}
                placeholder=' '
                {...field.attributes}
                className={`peer block w-full rounded-md pl-20 pr-3 pt-5 pb-2 bg-transparent border shadow-sm 
                  focus:border-blue-500 focus:ring-blue-500
                  ${
                    theme === 'dark'
                      ? 'border-gray-700 text-white'
                      : 'border-gray-300 text-gray-900'
                  }`}
              />

              <label
                htmlFor={field.id}
                className={`absolute left-20 top-3 text-sm transition-all
                  peer-placeholder-shown:top-4 
                  peer-placeholder-shown:text-gray-400 
                  peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500
                  peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs
                  ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {field.label}
              </label>
            </div>
          ) : /* === TEXTAREA === */
          field.type === 'textarea' ? (
            <textarea
              id={field.id}
              rows='4'
              placeholder=' '
              value={field.value}
              onChange={field.onChange}
              {...field.attributes}
              className={`peer block w-full rounded-md px-3 pt-5 pb-2 bg-transparent border shadow-sm  
                  focus:border-blue-500 focus:ring-blue-500
                  ${
                    theme === 'dark'
                      ? 'border-gray-700 text-white'
                      : 'border-gray-300 text-gray-900'
                  }
                  ${field.attributes?.className || ''}`}
            />
          ) : (
            /* === INPUTS NORMALES === */
            <input
              type={field.type}
              id={field.id}
              value={field.value}
              onChange={field.onChange}
              placeholder=' '
              {...field.attributes}
              className={`peer block w-full rounded-md px-3 pt-5 pb-2 bg-transparent border shadow-sm 
                  focus:border-blue-500 focus:ring-blue-500
                  ${
                    theme === 'dark'
                      ? 'border-gray-700 text-white'
                      : 'border-gray-300 text-gray-900'
                  }
                  ${field.attributes?.className || ''}`}
            />
          )}

          {/* LABEL PARA CAMPOS NORMALES */}
          {field.type !== 'tel' && (
            <label
              htmlFor={field.id}
              className={`absolute left-3 top-3 text-sm transition-all
                peer-placeholder-shown:top-4 
                peer-placeholder-shown:text-gray-400 
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 
                peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs
                ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            >
              {field.label}
            </label>
          )}
        </div>
      ))}

      <Button type='submit' className='w-full'>
        {buttonText}
      </Button>
    </form>
  )
}

Form.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      onChange: PropTypes.func.isRequired,
      attributes: PropTypes.object,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default Form
