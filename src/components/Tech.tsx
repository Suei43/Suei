type Params = {
  title: string;
  items: any[];
};
export default function Tech({ title, items }: Params) {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-1 justify-center items-center">
        <span className="line"></span>
        <h3 className="text-secondary text-center italic el text-sm mb-2">
          {title}
        </h3>
        <span className="line"></span>
      </div>
      <div className="md:w-9/12 md:mx-auto flex flex-row flex-wrap gap-x-3 gap-y-3 justify-center">
        {items.map((item, index) => {
          return (
            <p
              className="border text-white cursor-pointer border-primary py-1 px-3 text-xs"
              key={index}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
