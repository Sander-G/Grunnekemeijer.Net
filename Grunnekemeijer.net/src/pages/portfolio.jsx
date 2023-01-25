import React from 'react'
import { StyledImage, Header, Container, Text} from './Portfolio.styled'


const data = [
    {
      image: 'src/assets/pix/transformerindex.png',
      text: 'Text for image 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur est atque in fugiat quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium illum id, ex tempora iste quae deleniti? Ducimus excepturi dicta et delectus aut numquam saepe, voluptates tempore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur est atque in fugiat quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium illum id, ex tempora iste quae deleniti? Ducimus excepturi dicta et delectus aut numquam saepe, voluptates tempore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur est atque in fugiat quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium illum id, ex tempora iste quae deleniti? Ducimus excepturi dicta et delectus aut numquam saepe, voluptates tempore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.'
    },
    {
      image: 'src/assets/pix/pietsweerbericht.png',
      text: 'Text for image 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur est atque in fugiat quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium illum id, ex tempora iste quae deleniti? Ducimus excepturi dicta et delectus aut numquam saepe, voluptates tempore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur est atque in fugiat quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium illum id, ex tempora iste quae deleniti? Ducimus excepturi dicta et delectus aut numquam saepe, voluptates tempore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur est atque in fugiat quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium illum id, ex tempora iste quae deleniti? Ducimus excepturi dicta et delectus aut numquam saepe, voluptates tempore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.'
    },
    {
      image: 'src/assets/pix/skippyskateboards.png',
      text: 'Text for image 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur est atque in fugiat quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium illum id, ex tempora iste quae deleniti? Ducimus excepturi dicta et delectus aut numquam saepe, voluptates tempore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur est atque in fugiat quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium illum id, ex tempora iste quae deleniti? Ducimus excepturi dicta et delectus aut numquam saepe, voluptates tempore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis quis nesciunt sapiente sequi consequatur est atque in fugiat quia tenetur reprehenderit provident, cum, ab voluptatibus accusantium illum id, ex tempora iste quae deleniti? Ducimus excepturi dicta et delectus aut numquam saepe, voluptates tempore dolore animi atque temporibus id? Ad veritatis veniam labore modi ab iusto sed quia vero praesentium.'
    }
    
  ];



export default function Portfolio() {


    return (
        <>
        <Header><h2>Portfolio</h2></Header>
        <Container>
        {data.map((item, i) => (
         <React.Fragment key={i}>
            <StyledImage src={item.image} alt={`Image ${i + 1}`} index={i}/>
            <Text index={i}>{item.text}</Text>
         </React.Fragment>
       ))}

                </Container>

        </>
    )
}
