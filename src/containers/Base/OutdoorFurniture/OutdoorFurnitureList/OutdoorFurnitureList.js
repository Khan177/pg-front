import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'
import icon_book from "../../../../img/outdoor_furniture/bx-book.svg"
import breadcrumbs from "../../../../img/outdoor_furniture/breadcrumbs.svg"

const Section = styled.div`
      width: 100%;
      margin: 20px;
`;

const Span = styled(Link)`
        color: #8aa1c1;
        font-size: 13px;
        :hover {
              cursor: pointer;
        }
        margin-right: 2px;
`;

const BreadCrumbs = styled.div`
        width: 203px;
        height: 14px;
        font-size: 11px;
        line-height: 13px;
        margin-bottom: 10px;
`;

const ListHeader = styled.div`
      display: flex;
      justify-content: space-between;
      align-content: center;
`;

const ListTitle = styled.div`
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      width: 203px;
      height: auto;
`;

const TitleLogo = styled.div`
      width: 33px;
      height: 32px;
      background-color: #D42D11;
      border-radius: 4px;
      background-image: url(${icon_book});
      background-repeat: no-repeat;
      background-position: center;
`;

const Title = styled.h1`
        font-size: 24px;
        line-height: 28px;
        color: #003360;
`;

const StyledButton = styled.button`
        width: 200px;
        height: 40px;
        background: #008556;
        border: none;
        font-size: 14px;
        line-height: 14px;
        color: #FFFFFF;
        outline: none;
        box-shadow: none;
        border-radius: 4px;
            :hover {
              cursor: pointer;
              opacity: 0.7;
        }
`;

const Separator = styled.span`
        //font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 13px;
        color: #8AA1C1;
        margin-right: 2px;
`;

class OutdoorFurnitureList extends Component {

    clickHandler = () => {
        console.log("click")
    }

    render() {
        return (
            <Section>
                <BreadCrumbs>
                    <Span>
                        <img src={breadcrumbs} alt=""/>
                    </Span>
                    <Span> Главная</Span>
                    <Separator>
                        /
                    </Separator>
                    <Span to={"/"}> Базы </Span>
                    <Separator>
                        /
                    </Separator>
                    <Span to={"/outdoor_furniture"}>Конструкции</Span>
                </BreadCrumbs>
                <ListHeader>
                    <ListTitle>
                        <TitleLogo/>
                        <Title>
                            Конструкции
                        </Title>
                    </ListTitle>
                    <StyledButton
                    onClick={this.clickHandler}
                    >Создать конструкцию</StyledButton>
                </ListHeader>
            </Section>
        )
    }
}

export default OutdoorFurnitureList
