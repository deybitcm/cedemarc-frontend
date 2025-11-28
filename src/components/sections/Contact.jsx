const Contact = () => {
  return (
    <section id='contacto' className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Contáctanos
          </h2>
          <p className='mt-4 text-xl text-gray-600'>
            Estamos aquí para atenderte
          </p>
        </div>

        <div className='mt-20 grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='bg-gray-100 p-6 rounded-lg'>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>
              Información de Contacto
            </h3>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <svg
                  className='w-6 h-6 text-blue-600 mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <div className='ml-4'>
                  <p className='text-gray-700'>
                    Av. Industrial #1759
                    <br />
                    Tacna, Perú
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <svg
                  className='w-6 h-6 text-blue-600 mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <div className='ml-4'>
                  <p className='text-gray-700'>(+51) 921604711</p>
                </div>
              </div>

              <div className='flex items-start'>
                <svg
                  className='w-6 h-6 text-blue-600 mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <div className='ml-4'>
                  <p className='text-gray-700'>
                    cedemarc.dist.soluciones@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className='space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Nombre
              </label>
              <input
                type='text'
                id='name'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'
              >
                Mensaje
              </label>
              <textarea
                id='message'
                rows='4'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
              ></textarea>
            </div>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
