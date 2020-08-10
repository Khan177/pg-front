import React, { useState } from 'react';
import { BlockBody, BlockTitle, BlockTitleText, Large } from '../../../../Styles/StyledBlocks';
import { BtnSuccess } from '../../../../Styles/ButtonStyles';
import ExtraRow from './Extras/ExtraRow';
import { sendContragentValues } from '../../../../../store/actions';
import { useSelector } from 'react-redux';

export default function ContactPerson() {
  const initialList = [ExtraRow];
  const [theList, setTheList] = useState(initialList);
  const state = useSelector((state) => state.contragents.currentContragent);
  console.log(JSON.stringify(state) === '{}');
  const removeClickHandler = (e, index) => {
    e.preventDefault();
    let newList = [...theList];

    if (index > -1) {
      newList.splice(index, 1);
    }
    setTheList(newList);
  };

  const addClickHandler = (e) => {
    e.preventDefault();
    setTheList([...theList, ExtraRow]);
  };

  return (
    <Large>
      <BlockTitle style={{ padding: '10px 26px 15px 24px' }}>
        <BlockTitleText>Контактное лицо</BlockTitleText>
        <BtnSuccess onClick={addClickHandler}>Добавить еще</BtnSuccess>
      </BlockTitle>
      <BlockBody>
        {JSON.stringify(state) !== '{}'
          ? state.phoneContact.map((contact) => {
              return (
                <div key={contact._id}>
                  <ExtraRow
                    sendContragentValues={sendContragentValues}
                    state={contact}
                    removeClickHandler={(e) => removeClickHandler(e, contact._id)}
                  />
                </div>
              );
            })
          : theList.map((row, index) => {
              return (
                <div key={index}>
                  {<ExtraRow removeClickHandler={(e) => removeClickHandler(e, index)} />}
                </div>
              );
            })}
      </BlockBody>
    </Large>
  );
}