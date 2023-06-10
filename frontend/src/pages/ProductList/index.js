import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Products from "../Products";
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from "./style";


const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Title>Pizza</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Food:</FilterText>
                    <Select>
                        <Option disabled selected>
                            types
                        </Option>
                        <Option>burger</Option>
                        <Option>pizza</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>large</Option>
                        <Option>small</Option>
                        <Option>midam</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
        </Container>
    );
};

export default ProductList;
