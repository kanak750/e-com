import { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CategoryCarousel = (props) => {
  const { cat } = props;
  const [selectedCat, setSelectedCat] = useState(0)
  

  return (
    <section className="h-34 px-10 py-3 bg-slate-200 flex flex-col items-center">
      <h1 className="text-4xl font-semibold capitalize self-start">{cat.cat_name}</h1>
      <div className="flex items-center">
      <ul className="flex flex-row  bg-white space-x-3">
        {cat.cat_sublist.map((sub,index) => (
          <li>
            <div className={`w-24 h-20 flex flex-col ${index === selectedCat ? "bg-slate-900" : "bg-white"} items-center
             text-slate-500 space-y-2 px-4 py-2 text-center`} onClick={()=> setSelectedCat(index)}>
            <span className="text-xl">{sub.avatar}</span>
              <span className="text-xs font-bold ">{sub.sub_title}</span>
            </div>
          </li>
        ))}
      </ul>
      </div>
      <div className="my-3">
          {
            cat.cat_sublist.map((sub,index) => {
              if(index === selectedCat) {
             return (
              <div className="grid grid-cols-4 gap-3">
                {sub.sub_items.map((item,index)=> (
                <div style={{backgroundImage: `url(${item.item_img})`}} className="w-52 h-72 rounded-lg bg-center bg-cover">
                  <div className="w-full h-full bg-gray-900 bg-opacity-30 rounded-lg flex items-end justify-center p-7 text-white font-bold hover:bg-opacity-70 duration-500">
                  {item.item_name}
                  <span className="animate-pulse ms-1 text-lg"><IoIosArrowDroprightCircle /></span>
                  </div>
                  </div>
                ))}
              </div>
            )}})
          }
      </div>
    </section>
  );
};

export default CategoryCarousel;
