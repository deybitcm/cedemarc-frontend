import { useState, useContext } from 'react'
import ThemeContext from '../../ThemeContext'
// import '../../styles/Contact.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // --- Send to Google Sheets via Apps Script webhook (optional) ---
    // Create an Apps Script Web App that writes POSTed JSON to a Sheet,
    // then deploy it and paste the URL below into `SHEETS_WEBHOOK_URL`.
    const SHEETS_WEBHOOK_URL =
      'https://script.google.com/macros/s/AKfycbxOH3_EVJ7Dy5RVCqRPBUDNQT9BH-TwTloN99htJQMKEMm_wiTr4QIOGnqeh-zYsn7oHw/exec'

    const payload = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      message,
    }

    if (
      SHEETS_WEBHOOK_URL &&
      SHEETS_WEBHOOK_URL !== 'YOUR_SHEETS_WEBHOOK_URL'
    ) {
      try {
        await fetch(SHEETS_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
        })

        // optionally you can show a small success indicator here
      } catch (err) {
        console.error('Error sending to Sheets webhook:', err)
        // don't block WhatsApp opening on error
      }
    }

    // Build WhatsApp message and open chat (fallback/primary)
    const owner_phone = '51921604711' // international format without +
    const lines = [
      `Contacto desde web: ${name || 'Sin nombre'}`,
      `Email: ${email || 'No proporcionado'}`,
      '',
      message || '',
    ]
    const text = encodeURIComponent(lines.join('\n'))
    const url = `https://wa.me/${owner_phone}?text=${text}`
    window.open(url, '_blank', 'noopener')
  }

  const { theme } = useContext(ThemeContext)
  return (
    <section
      id='contacto'
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2
            className={`text-3xl font-extrabold sm:text-4xl ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Contáctanos
          </h2>
          <p
            className={`mt-4 text-xl ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Estamos aquí para atenderte
          </p>
        </div>

        <div className='mt-20 grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div
            className={`${
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
            } p-6 rounded-lg`}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
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
                  <p
                    className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
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
                  <p
                    className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    (+51) 921604711
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
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <div className='ml-4'>
                  <p
                    className={`${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    cedemarc.dist.soluciones@gmail.com
                  </p>
                </div>
              </div>
              {/* Google Maps embed */}
              <div className='mt-6 justify-center items-center'>
                <div className='w-full h-56 sm:h-64 rounded-md overflow-hidden'>
                  <iframe
                    title='Ubicación CEDEMARC'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d550.2449130945269!2d-70.24413788599897!3d-17.997344892290577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acf1aa7f47891%3A0x2ad6a6133c1d051!2sLubricentro%20Cedemarc%20Distribuciones%20y%20Soluciones%20EIRL!5e0!3m2!1ses!2spe!4v1764351137345!5m2!1ses!2spe'
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  />
                </div>
                <div className='mt-3 justify-center text-center'>
                  <a
                    href='https://maps.app.goo.gl/cXtyzM9Nzx6H6yva8'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition'
                    aria-label='Abrir ubicación en Google Maps'
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='name'
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Nombre
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-700 text-white placeholder-gray-400'
                    : 'bg-white border-gray-200 border-2 text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-700 text-white placeholder-gray-400'
                    : 'bg-white border-gray-200 border-2  text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>

            {/* Div para celular */}
            <div>
              <label
                htmlFor='phone'
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Número de Teléfono o Celular
              </label>
              <input
                type='tel'
                id='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-700 text-white placeholder-gray-400'
                    : 'bg-white border-gray-200 border-2  text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Mensaje
              </label>
              <textarea
                id='message'
                rows='4'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-700 text-white placeholder-white'
                    : 'bg-white border-gray-200 border-2  text-gray-900 placeholder-gray-400'
                }`}
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
