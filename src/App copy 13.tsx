// import React, { useState } from 'react'
// import './App.css'

// type TypographyProps = {
//   children: React.ReactNode
//   size?: 'small' | 'large'
// }

// type ParagraphProps = {
//   color: string
// }

// const Paragraph = ({
//   children,
//   size,
//   color,
// }: TypographyProps & ParagraphProps) => {
//   return (
//     <h1
//       style={{ fontSize: size === 'small' ? '1.5rem' : '5rem', color: color }}
//     >
//       {children}
//     </h1>
//   )
// }

// const Title = ({ children, size }: TypographyProps) => {
//   return (
//     <h1 style={{ fontSize: size === 'small' ? '1.5rem' : '5rem' }}>
//       {children}
//     </h1>
//   )
// }

// const titleDefaultProps = {
//   size: 'small',
// }

// Title.defaultProps = titleDefaultProps

// const user = {
//   id: 1,
//   nome: 'John Doe',
//   age: 30,
//   isAdmin: true,
//   birthDate: new Date('1900-01-01'),
// }

// type UseAttributes = typeof user

// const mary: UseAttributes = {
//   id: 2,
//   nome: 'Mary Doe',
//   age: 25,
//   isAdmin: false,
//   birthDate: new Date('2000-01-01'),
// }

//* function sunNumbers(a: number, b: number) {
//*   return a + b
//* }

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <Title size="large">
//         <span>
//           Hello <b>World</b>
//         </span>
//       </Title>

//       <Paragraph color="red" size="small">
//         Eu sou um parágrafo
//       </Paragraph>
//     </div>
//   )
// }

// export default App

//! inferência de tipos
//* function sunNumbers(a: number, b: number) {
//*   return a + b
//* }

//! não precisa colocar na frente da função 