// Import necessário para Next.js
import { notFound } from 'next/navigation'

// Suponha que você está usando uma API ou arquivo JSON local
const fetchProjectData = async (id: string) => {
  // Exemplo de dados de uma API ou JSON local
  const response = await fetch(`http://localhost:3000/api?id=${id}`)

  if (!response.ok) {
    return null // Retorna null se o projeto não for encontrado
  }

  return response.json()
}

export default async function ProjetoPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = params

  // Busca os dados do projeto
  const projeto = await fetchProjectData(id)
  // Caso o projeto não seja encontrado, renderiza a página 404
  if (!projeto) {
    notFound()
  }

  return (
    <div>
      <h1>{projeto.name}</h1>
      <p>{projeto.age}</p>
      <p>Status: {projeto.email}</p>
    </div>
  )
}
