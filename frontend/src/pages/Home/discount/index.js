import React from "react";
import "./style.js";
import bag2 from '../../../assets/images/checkien.jpg'
import clothes from '../../../assets/images/dolma.jpg'
import shop from '../../../assets/images/hamburger.jpg'
import sofa from '../../../assets/images/lamb.jpg'
import OneItem from "./OneItem/index.js";
import { Container, Title, Flex } from "./style.js";

const Discount = () => {
    return (
        <Container>
            <Title>Get Up To 70% Off</Title>
            <Flex>
                <OneItem
                    num={"$29"}
                    img={sofa}
                    color={"#CB9917"}
                    backgroundColor={"#C2DEDC"}
                />

                <OneItem
                    num={"$70"}
                    img={shop}
                    color={"#961F1F"}
                    backgroundColor={"#ECE5C7"}
                />

                <OneItem
                    num={"$50"}
                    img={clothes}
                    color={"#94623C"}
                    backgroundColor={"#CDC2AE"}
                />

                <OneItem
                    num={"$100"}
                    color={"#003D29"}
                    img={bag2}
                    backgroundColor={"#116A7B"}
                />
            </Flex>
        </Container>
    );
};

export default Discount;
