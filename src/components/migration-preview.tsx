// Illustrative rows in the format of the compare.mjs report; not real results.
const rows = [
  { path: '/', status: '200' },
  { path: '/brindes/canecas-e-copos', status: '200' },
  { path: '/brinde/1234-caneca-personalizada', status: '200' },
  { path: '/brindes/garrafas/30/60', status: '200' },
  { path: '/home', status: '308 → /', redirect: true },
]

function Same({ redirect }: { redirect?: boolean }) {
  return redirect ? <>—</> : <span className="chip chip-ok">igual</span>
}

export function MigrationPreview() {
  return (
    <div className="mock">
      <div className="mock-bar" aria-hidden="true">
        <span className="mock-logo">compare.mjs</span>
      </div>
      <div className="mock-main">
        <div className="mock-head">
          <div>
            <p className="mock-title">Site antigo × site novo</p>
            <p>A mesma URL pedida aos dois sites, 4 por vez</p>
          </div>
          <span className="chip">Exemplo</span>
        </div>
        <div
          className="mock-table-wrap"
          tabIndex={0}
          role="group"
          aria-label="Exemplo de comparação entre o site antigo e o novo"
        >
          <table className="mock-table">
            <thead>
              <tr>
                <th>Caminho</th>
                <th>Status</th>
                <th className="mock-hide-xs">Title</th>
                <th className="mock-hide-xs">Canonical</th>
                <th>H1</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.path}>
                  <td>{row.path}</td>
                  <td>
                    {row.redirect ? (
                      <span className="chip chip-lime">{row.status}</span>
                    ) : (
                      row.status
                    )}
                  </td>
                  <td className="mock-hide-xs">
                    <Same redirect={row.redirect} />
                  </td>
                  <td className="mock-hide-xs">
                    <Same redirect={row.redirect} />
                  </td>
                  <td>
                    <Same redirect={row.redirect} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
