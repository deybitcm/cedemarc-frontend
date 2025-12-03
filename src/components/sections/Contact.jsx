import { useState, useContext } from 'react'
import ThemeContext from '../../ThemeContext'
import Notification from '../ui/Notification'
import Section from '../ui/Section'
import Icon from '../ui/Icon'
import Form from '../ui/Form'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')
  const [notification, setNotification] = useState(null) // State for notifications

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{9}$/ // Accepts only 9-digit Peruvian phone numbers
    return phoneRegex.test(phone)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      setNotification({
        type: 'error',
        message: 'Por favor, ingresa un correo electrónico válido.',
      })
      return
    }

    if (!validatePhone(phone)) {
      setNotification({
        type: 'error',
        message: 'Por favor, ingresa un número de teléfono válido.',
      })
      return
    }

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

        setNotification({
          type: 'success',
          message: 'Mensaje enviado exitosamente.',
        })
      } catch (err) {
        console.error('Error sending to Sheets webhook:', err)
        setNotification({
          type: 'error',
          message: 'Ocurrió algún error al enviar el mensaje.',
        })
      }
    }
  }

  const { theme } = useContext(ThemeContext)
  return (
    <Section
      id='contacto'
      className={`py-20 sm:px-6 lg:px-8 `}
      title='Contáctanos'
      subtitle='Estamos aquí para atenderte'
      columnsNumber={2}
      components={[
        <div
          key={0}
          className={`${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          } p-6 mt-12 lg:mx-10 sm:mx-0 rounded-lg`}
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
              <Icon
                name='location_marker'
                className='w-6 h-6 text-blue-600 mt-1'
              />
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
              <Icon name='whatsapp' className='w-6 h-6 text-blue-600 mt-1' />
              <div className='ml-4'>
                <p
                  className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <a
                    href='https://wa.me/51921604711'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    } hover:underline`}
                  >
                    (+51) 921 604 711
                  </a>
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <Icon name='email' className='w-6 h-6 text-blue-600 mt-1' />
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

            <div className='flex items-start'>
              <Icon name='facebook' className='w-6 h-6 text-blue-600 mt-1' />
              <div className='ml-4'>
                <p
                  className={`${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <a
                    href='https://www.facebook.com/people/Cedemarc-Distribuciones-y-Soluciones-EIRL/61551694426305/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    } hover:underline`}
                  >
                    Cedemarc Distribuciones y Soluciones EIRL
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>,
        <div key={1} className='mt-12  sm:mx-0 lg:mx-10'>
          <Form
            fields={[
              {
                id: 'name',
                label: 'Nombre',
                type: 'text',
                value: name,
                onChange: (e) => setName(e.target.value),
              },
              {
                id: 'email',
                label: 'Email',
                type: 'email',
                value: email,
                onChange: (e) => setEmail(e.target.value),
              },
              {
                id: 'phone',
                label: 'Celular',
                type: 'tel',
                value: phone,
                onChange: (e) => setPhone(e.target.value),
              },
              {
                id: 'message',
                label: 'Mensaje',
                type: 'textarea',
                value: message,
                onChange: (e) => setMessage(e.target.value),
              },
            ]}
            onSubmit={handleSubmit}
            buttonText='Enviar Mensaje'
          />
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {notification && (
              <Notification
                type={notification.type}
                message={notification.message}
                onClose={() => setNotification(null)}
              />
            )}
          </div>
        </div>,
      ]}
    ></Section>
  )
}

export default Contact
