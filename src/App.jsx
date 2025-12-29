import { useEffect, useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true);
  const [investments, setInvestments] = useState([]);

const API_BASE = 'https://staging.api.s1nc.com.br/api/concept_beta/';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTA2NTE1MCwicmVzb3VyY2VfdHlwZSI6IkNsaWVudCIsImNvbnN1bHRhbnRfaWQiOjkyOTcsImF1ZCI6ImNvbmNlcHQtYXBpIiwiZXhwIjoxNzY3MTA2MzczfQ.0uqQegZG9VCimTzfIu4AApIHFFKOe0uG73f6B1xv64o'

const mockData = [
  {
    "id": 4763,
    "name": "Teste investimento 1",
    "broker": "C6 Bank",
    "balanceAmount": 0,
    "modality": {
      "name": "CDB"
    },
    "liquidity": 0
  },
  {
    "id": 4764,
    "name": "Teste investimento 2",
    "broker": "Bradesco",
    "balanceAmount": 1090,
    "modality": {
      "name": "Poupança"
    },
    "liquidity": 0
  }
];

useEffect(() => {
fetch(`${API_BASE}/investments`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
    'application-origin': 'W1 Client App 1.0'
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    setInvestments(data.investments);
    setLoading(false);
  })
  .catch(() => {
    console.log('Usando dados mockados');
    setInvestments(mockData);
    setLoading(false);
  });
}, [])

if(loading){
  return(
    <div>Loading...</div>
  )
}

  let total = 0;
  investments.forEach(inv => {
    total += parseFloat(inv.balanceAmount) || 0;
  });

  return (<>
<div style={{display: 'flex', width: '100vw', height: '100vh'}}>
  <div style={{background: '#022028', width: '200px', display: 'flex', flexDirection: 'column', color: 'white', padding: '10px', justifyContent: 'space-between'}}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '20px'}}>
      <p>W1</p>
      <p>Painel</p>
      <p>Extrato</p>
      <p>Objetivos</p>
      <p>Planejamentos</p>
      <p>Investimentos</p>
      <p>Sincronizar Contas</p>
      <p>Ver mais</p>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '20px', borderTop: '1px solid #444', paddingTop: '20px'}}>
      <p>Nosso Conceito</p>
      <p>Sair</p>
    </div>
  </div>

  <div style={{display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden'}}>
    <div style={{background: 'white', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', borderBottom: '1px solid #e0e0e0', boxSizing: 'border-box'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px'}}>
        <span style={{color: '#999'}}>Painel</span>
        <span style={{color: '#999'}}>{'>'}</span>
        <span style={{fontWeight: '500', color: '#333'}}>Investimentos</span>
      </div>
      <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
        <button style={{background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px'}}>
          🔔
        </button>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <div style={{width: '32px', height: '32px', borderRadius: '50%', background: '#3498db', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '600'}}>
            J
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <span style={{color: '#333', fontSize: '13px', fontWeight: '500'}}>João da Silva</span>
            <span style={{color: '#999', fontSize: '11px'}}>joao@email.com</span>
          </div>
        </div>
      </div>
    </div>
    <div style={{background: '#F4F5F5', flex: 1, padding: '24px', overflow: 'auto'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
      <h1 style={{color: 'black', fontSize: '32px', fontWeight: '600', margin: 0, display: 'flex', alignItems: 'center', gap: '12px'}}>
        <span style={{cursor: 'pointer'}}>←</span> Investimentos
      </h1>
      <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
        <div style={{background: '#D1F4E0', padding: '10px 16px', borderRadius: '8px'}}>
          <span style={{fontSize: '13px', color: '#666'}}>Investimentos ({investments.length})</span>
          <div style={{fontSize: '16px', fontWeight: '600', color: '#000', marginTop: '2px'}}>
            R$ {total.toFixed(2)}
          </div>
        </div>
        <button style={{background: '#022028', color: 'white', border: 'none', padding: '12px 20px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '500'}}>
          <span style={{fontSize: '18px'}}>+</span> Adicionar investimento
        </button>
      </div>
    </div>

    <div style={{display: 'flex', gap: '16px', marginBottom: '24px'}}>
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '6px'}}>
        <label style={{fontSize: '13px', color: '#666', fontWeight: '500'}}>Busca</label>
        <input
          type="text"
          placeholder="Busque por nome"
          style={{padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', background: 'white'}}
        />
      </div>
      <div style={{minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '6px'}}>
        <label style={{fontSize: '13px', color: '#666', fontWeight: '500'}}>Instituição</label>
        <select style={{padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', background: 'white', color: '#999'}}>
          <option value="">Selecione</option>
        </select>
      </div>
      <div style={{minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '6px'}}>
        <label style={{fontSize: '13px', color: '#666', fontWeight: '500'}}>Alocação</label>
        <select style={{padding: '12px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', background: 'white', color: '#999'}}>
          <option value="">Selecione</option>
        </select>
      </div>
    </div>

    <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px'}}>
{investments.map((investment) => (
  <div style={{display: 'flex', flexDirection: 'column', background: 'white', color: 'black', borderRadius: '12px', padding: '16px', boxShadow: '0 2px 4px #ccc', width: '300px'}} key={investment.id}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
        <span style={{fontSize: '13px', color: '#666'}}>{investment.modality.name}</span>
      </div>
      <button style={{background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '18px', padding: '0'}}>⋮</button>
    </div>

    <div style={{marginBottom: '4px'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
        <div style={{width: '32px', height: '32px', borderRadius: '50%', background: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '600'}}>
          {investment.broker?.charAt(0) || 'B'}
        </div>
        <span style={{fontSize: '16px', fontWeight: '600'}}>{investment.broker || 'Banco'}</span>
      </div>
      <p style={{margin: '0 0 12px 0', fontSize: '13px', color: '#666'}}>{investment.name}</p>
    </div>

    <div style={{borderTop: '1px solid #f0f0f0', paddingTop: '12px', marginTop: 'auto'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
        <span style={{fontSize: '12px', color: '#666'}}>Liquidez:</span>
        <span style={{fontSize: '12px', fontWeight: '500', color: investment.liquidity > 0 ? '#10b981' : '#666'}}>
          D+{investment.liquidity}
        </span>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <span style={{fontSize: '12px', color: '#666'}}>Posição:</span>
        <span style={{fontSize: '13px', fontWeight: '600'}}>
          {(investment.balanceAmount || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
      </div>
    </div>

    <div style={{marginTop: '12px'}}>
      <button style={{width: '100%', background: 'transparent', border: 'none', color: '#0891b2', cursor: 'pointer', fontSize: '13px', fontWeight: '500', padding: '8px'}}>
        Ver mais
      </button>
    </div>
  </div>

  ))}  </div>  </div></div></div></>)}

export default App
