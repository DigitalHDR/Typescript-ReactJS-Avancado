import React, { useState } from 'react'
import './App.css'

type TypographyProps = {
  children: React.ReactNode
  size?: 'small' | 'large'
}

type ParagraphProps = {
  color: string
}

const Paragraph = ({ children, size, color }: TypographyProps & ParagraphProps) => {
  return (
    <h1 style={{ fontSize: size === 'small' ? '1.5rem' : '5rem', color: color }}>
      {children}
    </h1>
  )
}

const Title = ({
  children,
  size,
}: TypographyProps) => {
  return (
    <h1 style={{ fontSize: size === 'small' ? '1.5rem' : '5rem' }}>
      {children}
    </h1>
  )
}

const titleDefaultProps = {
  size: 'small',
}

Title.defaultProps = titleDefaultProps

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title size='large'>
        <span>
          Hello <b>World</b>
        </span>
      </Title>

      <Paragraph color='red' size='small'>
        Eu sou um parágrafo
      </Paragraph>
    </div>
  )
}

export default App

//! compor types pra mais de um
//! adicioando outra type em um que já tem ficando com 2

//! onde usar isso
//! quando você tem um type que vai servir pra todos
//! e um outro especifico para apenas 1 (isso é chamado de merge de types)
