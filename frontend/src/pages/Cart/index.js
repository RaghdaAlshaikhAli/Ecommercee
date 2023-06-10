import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import Announcement from "../../components/Announcement";
import {
    Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, Product,
    ProductAmount, ProductAmountContainer, ProductColor,
    ProductDetail, ProductId, ProductName, ProductPrice, ProductSize,
    Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle,
    Title, Top, TopButton, Wrapper
} from './style';

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Wrapper>
                <Title>YOUR Order</Title>
                <Top>
                    <TopButton>CONTINUE ORDERING</TopButton>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/564x/ef/16/81/ef16819c574a0cbe05633dded4c75dda.jpg" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> beaf
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 93813718293
                                    </ProductId>
                                    <ProductSize>
                                        <b>Size:</b> small
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <IoIosAddCircleOutline style={{ fontSize: '25px', cursor: 'pointer' }} />
                                    <ProductAmount>2</ProductAmount>
                                    <IoIosRemoveCircleOutline style={{ fontSize: '25px', cursor: 'pointer' }} />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://i.pinimg.com/564x/5f/1d/23/5f1d23e02f7b191b66ac1cc91eaf1116.jpg" />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b>  Pizza
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 93813718293
                                    </ProductId>
                                    <ProductSize>
                                        <b>Size:</b> large
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <IoIosAddCircleOutline />
                                    <ProductAmount>1</ProductAmount>
                                    <IoIosRemoveCircleOutline />
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    );
};

export default Cart;
