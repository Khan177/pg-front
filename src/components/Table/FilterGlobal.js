// import React from "react";// import {useAsyncDebounce} from "react-table";// import {InputWrapper, StyledInput} from "../Styles/ControlToolbarStyle";//// export default function GlobalFilter({//                           preGlobalFilteredRows,//                           globalFilter,//                           setGlobalFilter,//                       }) {//     const count = preGlobalFilteredRows.length//     const [value, setValue] = React.useState(globalFilter)//     console.log(value)//     const onChange = useAsyncDebounce(value => {//         setGlobalFilter(value || undefined)//     }, 200)//     console.log('1', preGlobalFilteredRows,'2', globalFilter, '3',  setGlobalFilter,)////     return (//         <InputWrapper>//             <StyledInput//                 value={value || ""}//                 onChange={e => {//                     console.log(e.target.value)//                     setValue(e.target.value);//                     onChange(e.target.value);//                 }}//                 placeholder={`Быстрый поиск, ${count}  записей...`}//             />//         </InputWrapper>//     )// }