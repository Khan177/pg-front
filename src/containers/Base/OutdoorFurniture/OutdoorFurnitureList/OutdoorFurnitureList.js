import React, {Component} from "react";
import styled from 'styled-components'
import icon_book from "../../../../img/outdoor_furniture/bx-book.svg"
import breadcrumbs from "../../../../img/outdoor_furniture/bx-breadcrumbs.svg"
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

const Section = styled.div`
      width: 100%;
      margin: 20px;
`;

const BreadCrumbs = styled(Breadcrumbs)`
        width: 250px;
        height: 14px;
        font-size: 11px;
        line-height: 13px;
`;

const ListHeader = styled.div`
      display: flex;
      justify-content: space-between;
      align-content: center;
      margin-top: 30px;
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


class OutdoorFurnitureList extends Component {

    clickHandler = () => {
        console.log("click")
    }

    render() {
        return (



            <Section>
                <BreadCrumbs aria-label="breadcrumb"
                             style={{color: '#8aa1c1', fontSize: 13}}
                >
                    <Link>
                        <img src={breadcrumbs} alt=""/>
                    </Link>
                    <Link  href="/"
                                 style={{color: '#8aa1c1', fontSize: 13}}
                    >
                        Главная
                    </Link>
                    <Link href="/installation/"
                                style={{color: '#8aa1c1', fontSize: 13}}
                    >
                        Базы
                    </Link>

                    <Link href="/outdoor_furniture"
                                style={{color: '#8aa1c1', fontSize: 13}}
                    >
                        Конструкции
                    </Link>
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
