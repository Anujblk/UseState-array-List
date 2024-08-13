import React from 'react';
import { useState } from 'react';
import './style.css';

// export default function App() {
//   const [showImage, setShowImage] = useState(true);
//   const [showToggle, SetShowToggle] = useState('red');
//   const [liveText, setText] = useState('');
//   const [Size, setSize] = useState('30');
//   const [color, setColor] = useState('green');
//   const [list, AddList] = useState('');
//   const [value, setValue] = useState([]);

//   const add = () => {
//     if (list.length === 0) {
//       alert('enter the text');
//     } else {
//       setValue([...value, list]);
//     }
//   };
//   return (
//     <div
//       style={{
//         minheight: '100vh',
//         background: 'white',
//       }}
//     >
//       <div
//         style={{
//           padding: 48,
//           width: '50%',
//           margin: '0 auto',
//         }}
//       >
//         <div
//           style={{
//             disply: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             gap: 32,
//           }}
//         >
//           <h1>Hello AntiKe</h1>
//           <p>Start editing to see some magic happen :)</p>
//         </div>

//         <div>
//           <h2> Hide & show app</h2>

//           {showImage && (
//             <img
//               style={{ width: '100%' }}
//               src="https://images.hdqwalls.com/download/porsche-911-gt3-r-kc-1360x768.jpg"
//               alt="car"
//             />
//           )}
//           <button
//             onClick={() => setShowImage(!showImage)}
//             style={{
//               background: 'dodgerblue',
//               color: 'white',
//               padding: '8px 24px',
//               borderRadius: 4,
//               border: 'none',
//             }}
//           >
//             {showImage ? 'Hide' : 'Show'}
//           </button>
//         </div>

//         <div>
//           <h2>Background Toggle Div</h2>

//           <div
//             style={{
//               width: 300,
//               background: showToggle,
//               borderRadius: 16,
//               height: 300,
//             }}
//           />
//           <button
//             onClick={() => SetShowToggle(showToggle === 'red' ? 'blue' : 'red')}
//             style={{
//               background: 'dodgerblue',
//               color: 'white',
//               padding: '8px 24px',
//               borderRadius: 4,
//               border: 'none',
//               marginTop: 15,
//             }}
//           >
//             {showToggle === 'red' ? 'blue' : 'red'}
//           </button>
//         </div>

//         <div>
//           <h2> Live Preview</h2>

//           <input
//             placeholder="Type your text here"
//             style={{
//               border: 'solid',
//               padding: 'auto auto',
//             }}
//             onChange={(e) => setText(e.target.value)}
//           />

//           <h2>{liveText}</h2>
//         </div>

//         <div>
//           <h2>Font Toggler</h2>
//           <p style={{ fontSize: Size }}> Antike</p>
//           <input
//             type="range"
//             min="10"
//             max="200"
//             step="1"
//             onChange={(e) => setSize(Number(e.target.value))}
//           />
//         </div>

//         <div>
//           <h2>Color toggler</h2>
//           <input
//             placeholder="enter color name "
//             value={color}
//             onChange={(e) => setColor(e.target.value)}
//           />

//           <div
//             style={{
//               width: 150,
//               height: 150,
//               background: color,
//               marginTop: 10,
//             }}
//           ></div>
//         </div>

//         <div>
//           <h2>Add List ( Using Usestate & Array)</h2>

//           <input
//             type="text"
//             placeholder="Add List"
//             onChange={(e) => AddList(e.target.value)}
//           />
//           <button onClick={add} style={{ marginLeft: '10px' }}>
//             Add
//           </button>

//           <div>
//             <ul>
//               {value.map((value, index) => (
//                 <li key={index}>{value}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// // export default function App/

const App = () => {
  const [Students, setStudents] = useState([
    'anuj',
    'dhanno',
    'priya',
    'riya',
    'sharmili',
  ]);

  const [value, setValue] = useState('');

  // const [remove,setRemove] = useState([''])

  const del = (index) => {
    const cpyOfArray = [...Students];
    cpyOfArray.splice(index, 1);
    // console.log(cpyOfArray);
    setStudents(cpyOfArray);
  };

  // const addList = ()=>{

  // }

  const createList = () => {
    setStudents([...Students, value]);
  };
  return (
    <div>
      <h2>
        {Students.map((item, index) => (
          <li key={index}>
            {item}

            <button onClick={() => del(index)}>Delete</button>
          </li>
        ))}
      </h2>

      <input
        placeholder="Add students"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={createList}>Add</button>
    </div>
  );
};

export default App;
