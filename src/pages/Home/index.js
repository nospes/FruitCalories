import { useState, useEffect } from 'react'
import { Container } from './styles'
import dadosApi from '../../utils/api'

import Header from '../../components/Header'
import List from '../../components/List'
import Footer from '../../components/Footer'

export default function Home () {
  const [dados, setDados] = useState([])

  useEffect(() => { dadosApi.get('fruits.json').then((res) => setDados(res.data)).catch((err) => { console.log(err) }) }, [dadosApi])

  return (
    <Container>
      <Header />
      <section>
        {dados.map((item) => (
          <List key={item.name} name={item.name} img={item.photo} />
        ))}
      </section>
      <Footer />
    </Container>
  )
}
