import Card from "./Comp/Card";

function App() {
  const cardData = [
    {
      imageUrl: '/path/to/image1.jpg',
      title: 'Card 1',
      description: 'This is the description for card 1.',
    },
    {
      imageUrl: '/path/to/image2.jpg',
      title: 'Card 2',
      description: 'This is the description for card 2.',
    },
    {
      imageUrl: '/path/to/image3.jpg',
      title: 'Card 3',
      description: 'This is the description for card 3.',
    },
  ];
  
  return <>

  <h1 className="bg-red-800">Hello there</h1>
    {/* <div className="text-orange-500">Hello there</div>
      {cardData.map((card,index) => {
        return (
          <Card
          key = {index}
          imageUrl= {card.imageUrl}
          title= {card.title}
          description= {card.description}
          />
        )
      })} */}
  </>
}

export default App
