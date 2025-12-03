import Section from '../ui/Section'
import Card from '../ui/Card'
import CardGrid from '../ui/CardGrid'
import Icon from '../ui/Icon'

const Services = () => {
  const services = [
    {
      title: 'Diagnóstico rápido de tu vehículo',
      description:
        'Revisión express de niveles de aceite, filtros y estado general de tu vehículo',
      icon: 'diagnostic',
    },
    {
      title: 'Mantenimiento vehicular',
      description:
        'Cambio de aceite, filtros y otros servicios para mantener tu vehículo en óptimas condiciones',
      icon: 'maintenance',
    },
    {
      title: 'Distribución al por mayor y menor',
      description:
        'Suministro de lubricantes y filtros para todo tipo de vehículos a precios competitivos',
      icon: 'distribution',
    },
    {
      title: 'Asesoría personalizada',
      description:
        'Te guiamos para escoger la mejor solución a partir de las necesidades de tu vehículo',
      icon: 'advice',
    },
  ]
  return (
    <Section
      id='servicios'
      variant='secondary'
      className='py-20'
      title='Nuestros Servicios'
      subtitle='Soluciones integrales para el cuidado de tu vehículo'
      components={[
        <CardGrid key={0} rows={2} columns={2} className='mt-20 lg:mx-40'>
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              subtitle={service.description}
              className='flex flex-col items-center'
              externalComponent={
                <Icon name={service.icon} width='w-12' height='h-12'></Icon>
              }
            ></Card>
          ))}
        </CardGrid>,
      ]}
    ></Section>
  )
}

export default Services
