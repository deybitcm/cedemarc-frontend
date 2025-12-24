import PropTypes from 'prop-types'
import Button from './Button'
// import Icon from './Icon'

const Form = ({ fields, onSubmit, buttonText }) => {
  return (
    <form
      className='space-y-6 bg-bg-form border border-border-custom p-6 rounded-lg shadow-md'
      onSubmit={onSubmit}
    >
      {fields.map((field) => {
        const hasPrefix = !!field.prefixContent

        return (
          <div key={field.id} className='relative'>
            {/* CONTENEDOR CON PREFIX + INPUT */}
            {hasPrefix ? (
              <div className='flex items-stretch relative'>
                {/* PREFIX */}
                <div className='flex items-center px-3 border border-border-custom rounded-l-md bg-bg-secondary text-text-primary'>
                  {field.prefixContent}
                </div>

                {/* INPUT CON PREFIX - CONTENEDOR RELATIVO */}
                <div className='relative flex-1'>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      rows='4'
                      placeholder=' '
                      value={field.value}
                      onChange={field.onChange}
                      {...field.attributes}
                      className={`peer block w-full rounded-r-md px-3 pt-5 pb-2 bg-transparent border-t border-r border-b border-border-custom shadow-sm outline-none text-text-primary
                        ${field.attributes?.className || ''}`}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder=' '
                      {...field.attributes}
                      className={`peer block w-full rounded-r-md px-3 pt-5 pb-2 bg-transparent border-t border-r border-b border-border-custom shadow-sm outline-none text-text-primary
                        ${field.attributes?.className || ''}`}
                    />
                  )}

                  {/* LABEL FLOTANTE PARA INPUT CON PREFIX */}
                  <label
                    htmlFor={field.id}
                    className={`absolute left-3 top-4 text-sm transition-all pointer-events-none
                      peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                      peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 
                      peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs 
                      text-text-secondary`}
                  >
                    {field.label}
                  </label>
                </div>
              </div>
            ) : (
              /* INPUT SIN PREFIX */
              <>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    rows='4'
                    placeholder=' '
                    value={field.value}
                    onChange={field.onChange}
                    {...field.attributes}
                    className={`peer block w-full rounded-md px-3 pt-5 pb-2 bg-transparent border border-border-custom shadow-sm outline-none text-text-primary
                      ${field.attributes?.className || ''}`}
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder=' '
                    {...field.attributes}
                    className={`peer block w-full rounded-md px-3 pt-5 pb-2 bg-transparent border border-border-custom shadow-sm outline-none text-text-primary
                      ${field.attributes?.className || ''}`}
                  />
                )}

                {/* LABEL FLOTANTE PARA INPUT SIN PREFIX */}
                <label
                  htmlFor={field.id}
                  className={`absolute left-3 top-4 text-sm transition-all pointer-events-none
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 
                    peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 
                    peer-[&:not(:placeholder-shown)]:top-1 peer-[&:not(:placeholder-shown)]:text-xs 
                    text-text-secondary`}
                >
                  {field.label}
                </label>
              </>
            )}
          </div>
        )
      })}

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
      prefixContent: PropTypes.node, // Contenido antes del input (ej: código de país)
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default Form
