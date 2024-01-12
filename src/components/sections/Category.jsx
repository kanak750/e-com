import heroBg from "../../images/hero.jpg"

const Category = (props) => {
  const { category } = props
  
  return (
    <div className="bg-contain h-56" style={{backgroundImage: `url(${heroBg})`}}>
      <div className="h-full bg-slate-800 bg-opacity-40 text-center p-2">
      <h1 className="text-white text-4xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">What are you shopping for today?</h1>
      <div className="flex flex-row justify-evenly my-4">
       { category.map(c => <div className="flex flex-col">
          <img src={c.cat_img} className="rounded-full w-24 max-h-24 hover:border-4 border-orange-300 " />
          <span className="font-bold text-white text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{c.cat_name}</span>
          </div>)}
      </div>
      
      </div>
    </div>
  )
}

export default Category