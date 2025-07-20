import pizza from "../assets/pizza.jpg"
import order from "../assets/fast_food_order.jpg"

export default function HomePage() {
  return (
      <div className='flex flex-col gap-12'>
          <div className='bg-white rounded-lg shadow-2xl py-8 flex flex-col gap-5 text-center -mt-16'>
              <h1 className='text-2xl font-bold tracking-tight text-black'>
                  Welcome to SUISSAVOUR!
              </h1>
              <span className='text-xl'>Order your meal here.</span>
          </div>
          <div className='grid md:grid-cols-2 gap-5'>
              <img src={pizza} alt="pizza pic" />
              <div className='flex flex-col items-center justify-center gap-4 text-center'>
                  <span className='font-bold text-2xl tracking-tighter'>
                      Free Home Delivery!
                  </span>
                  <span>
                      Oder from wide range of restaurants across your city.
                  </span>
                  <img src={order} alt="ordering pic" />
              </div>
          </div>
    </div>
  )
}
