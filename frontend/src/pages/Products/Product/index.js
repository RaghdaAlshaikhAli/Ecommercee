import './style.js'
import { Container, Icon, Image, Info, Text } from './style.js';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

const Product = ({ src, text }) => {
    return (
        <Container>
            <Image src={src} />
            <Text>{text}</Text>
            <Info>
                <Icon>
                    <AiOutlineShoppingCart />
                </Icon>
                <Icon>
                    <AiOutlineSearch />
                </Icon>
                <Icon>
                    <MdOutlineFavoriteBorder />
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;
