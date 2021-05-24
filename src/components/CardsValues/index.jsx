import './styles.css';

export function CardsValues({ title, value, type }) {
  const boaderTeste = {
    deposit: 'green',
    spent: 'red',
    total: '#121314',
  };

  return (
    <div
      className="container-cards-values"
      style={{ borderLeft: `5px solid ${boaderTeste[type]}` }}
    >
      <h2>{title}</h2>
      <span>{`R$ ${value}`}</span>
    </div>
  );
}
