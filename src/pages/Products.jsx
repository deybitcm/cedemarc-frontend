// import { useState, useMemo } from 'react'
// import productsData from '../data/products'
// import ProductCard from '../components/ProductCard'

const Products = () => {
  // const [category, setCategory] = useState('All')
  // const [subcategory, setSubcategory] = useState('All')
  // const [brand, setBrand] = useState('All')
  // const [viscosity, setViscosity] = useState('All')

  // Banner "Próximamente"
  const ComingSoonBanner = () => (
    <div className='bg-yellow-200 text-yellow-900 text-center py-4 rounded mb-6 shadow'>
      <span className='font-bold text-lg'>¡Próximamente!</span>{' '}
      <span>La sección de productos estará disponible muy pronto.</span>
    </div>
  )

  // const categories = useMemo(() => {
  //   const set = new Set(productsData.map((p) => p.category))
  //   return ['All', ...Array.from(set)]
  // }, [])

  // const subcategories = useMemo(() => {
  //   const filtered =
  //     category === 'All'
  //       ? productsData
  //       : productsData.filter((p) => p.category === category)
  //   const set = new Set(filtered.map((p) => p.subcategory))
  //   return ['All', ...Array.from(set)]
  // }, [category])

  // const brands = useMemo(() => {
  //   const set = new Set(productsData.map((p) => p.brand).filter(Boolean))
  //   return ['All', ...Array.from(set)]
  // }, [])

  // const viscosities = useMemo(() => {
  //   const set = new Set(productsData.map((p) => p.viscosity).filter(Boolean))
  //   return ['All', ...Array.from(set)]
  // }, [])

  // const filtered = productsData.filter((p) => {
  //   if (category !== 'All' && p.category !== category) return false
  //   if (subcategory !== 'All' && p.subcategory !== subcategory) return false
  //   if (brand !== 'All' && p.brand !== brand) return false
  //   if (viscosity !== 'All' && p.viscosity !== viscosity) return false
  //   return true
  // })

  return (
    <div className='pt-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <ComingSoonBanner />
        {/* <h1 className='text-3xl font-extrabold text-gray-900 my-6'>
          Productos
        </h1>

        <div className='mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Categoría
            </label>
            <select
              className='mt-1 block w-full rounded-md'
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
                setSubcategory('All')
              }}
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Subcategoría
            </label>
            <select
              className='mt-1 block w-full rounded-md'
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
            >
              {subcategories.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Marca
            </label>
            <select
              className='mt-1 block w-full rounded-md'
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Viscosidad
            </label>
            <select
              className='mt-1 block w-full rounded-md'
              value={viscosity}
              onChange={(e) => setViscosity(e.target.value)}
            >
              {viscosities.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div className='sm:col-span-4 flex justify-end'>
            <button
              className='mt-4 sm:mt-6 bg-gray-100 px-4 py-2 rounded-md'
              onClick={() => {
                setCategory('All')
                setSubcategory('All')
                setBrand('All')
                setViscosity('All')
              }}
            >
              Limpiar
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className='mt-8 text-gray-600'>
            No se encontraron productos con esos filtros.
          </p>
        )} */}
      </div>
    </div>
  )
}

export default Products
