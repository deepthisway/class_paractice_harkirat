export default function Card({ imageUrl, title, description }) {
    return (
        
      <div className=" bg-red-600 shadow-lg font-serif">
        <div className="mb-4">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <h2 className="text-black text-xl font-semibold mb-2 bg-blue-100 p-2 rounded">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }
  