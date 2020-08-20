import React, { useState } from 'react';
import { LeftBar, StyledButton } from '../../../styles/styles';
import PanelDesign from './PanelDesign';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import { TitleLogo } from '../../../components/Styles/ComponentsStyles';
import { JobTitle } from '../../../components/Styles/StyledBlocks';
import { ButtonGroup } from '../../../components/Styles/ButtonStyles';
import SearchBtn from '../../Base/Partners/LeftBar/SearchBtn';
import FilterBar from '../../Base/OutdoorFurniture/OutdoorFurnitureList/FilterBar/FilterBar';

const Design = () => {
  const [block, setBlock] = useState(0);

  const links = [
    { id: 'home', value: 'Главная' },
    { id: 'installation', value: 'Базы' },
    { id: 'constructions', value: 'Конструкции' },
  ];

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <LeftBar className="left-bar">
        <SearchBtn />
      </LeftBar>
      <div style={{ width: '100%' }}>
        <BreadCrumbs links={links} />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '2vw 2vw 2vw 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <TitleLogo />
            <JobTitle>Проект - FF5800</JobTitle>
          </div>
          <ButtonGroup>
            {block === 0 ? (
              <>
                <StyledButton backgroundColor="#D42D11">Повторное размещение</StyledButton>
                <StyledButton backgroundColor="#2C5DE5">Выгрузка снарядки</StyledButton>
                <StyledButton backgroundColor="#FF5800">Смета</StyledButton>
              </>
            ) : (
              <>
                <StyledButton backgroundColor="#2C5DE5">Создать дизайн</StyledButton>
              </>
            )}
          </ButtonGroup>
        </div>
        <div style={{ display: 'flex', margin: '0 2vw 0 0' }}>
          <div className="project-info">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>
                <h3 style={{ fontSize: '16px' }}>Информация о проекте</h3>
              </div>
              <div style={{ borderBottom: '1px solid #d3dff0' }}>
                <div style={{ margin: '4% 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px' }}>Код проекта</span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>#20202023123</span>
                </div>
                <div style={{ margin: '4% 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px' }}>Дата создания</span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>21.05.2020</span>
                </div>
                <div style={{ margin: '4% 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px' }}>Менеджер по продажам</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', textAlign: 'right' }}>
                    Иван Иванович Иванов
                  </span>
                </div>
                <div style={{ margin: '4% 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px' }}>Ответственный менеджер</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', textAlign: 'right' }}>
                    Иванов Иван
                  </span>
                </div>
              </div>
            </div>
            <div style={{ margin: '4% 0', display: 'flex', flexDirection: 'column' }}>
              <div>
                <h3 style={{ fontSize: '16px' }}>Информация о бренде</h3>
              </div>
              <div style={{ borderBottom: '1px solid #d3dff0' }}>
                <div style={{ margin: '4% 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px' }}>Бренд</span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>Coca Cola</span>
                </div>
                <div style={{ margin: '4% 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px' }}>Сектор деятельности</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', textAlign: 'right' }}>
                    Безалкогольные напитки
                  </span>
                </div>
              </div>
            </div>
            <div style={{ margin: '4% 0', display: 'flex', flexDirection: 'column' }}>
              <div>
                <h3 style={{ fontSize: '16px' }}>Рекламодатель</h3>
              </div>
              <div style={{ borderBottom: '1px solid #d3dff0' }}>
                <div style={{ margin: '4% 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px' }}>Рекламодатель</span>
                  <span style={{ fontSize: '14px', fontWeight: '600' }}>Агентство</span>
                </div>
                <div style={{ margin: '4% 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '14px' }}>Рекламное агентство</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', textAlign: 'right' }}>-</span>
                </div>
              </div>
            </div>
          </div>
          <PanelDesign style={{ flex: '0 1 50vw' }} setBlock={setBlock} />
        </div>
      </div>
      {block === 0 ? null : <FilterBar />}
      <style>
        {`
          .left-bar {
            margin: 0 2vw 0 0;
          }
          .project-info {
            border-radius: 8px;
            border: 1px solid #d3dff0;
            height: 100%;
            padding: 1.5%;
            flex: 0 1 30vw;
            margin: 0 2vw 0 0;
          }
          .project-info p {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Design;
