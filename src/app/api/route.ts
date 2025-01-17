export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const fakeData = {
    id: '1',
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345',
    },
  }
  const id = searchParams.get('id')
  if (id !== fakeData.id) {
    return new Response('Not Found', { status: 404 })
  }

  return new Response(JSON.stringify(fakeData), {
    headers: { 'Content-Type': 'application/json' },
  })
}
