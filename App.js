const App = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [resetKey, setResetKey] = React.useState(0);

  React.useEffect(() => {
    fetch('https://mensa.visa.it/secondhand.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Errore nel caricamento dei dati');
        }
        return response.json();
      })
      .then(data => {
        const itemsArray = Array.isArray(data) ? data : [data];
        setItems(itemsArray);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Funzione per aggiornare un singolo item
  const updateItem = (nid, updatedData) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.nid === nid ? { ...item, ...updatedData } : item
      )
    );
  };

  // Funzione per inviare tutti i dati
  const sendAllData = () => {
    console.log('Dati completi da inviare:', items);
    // Qui puoi fare una fetch per inviare tutti i dati
    fetch('https://mensa.visa.it/updateall.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(items)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Risposta:', result);
    });
  };
  // Funzione per resettare tutti gli anni a "2024"
const resetAllYears = () => {
  setItems(prevItems => 
    prevItems.map(item => ({
      ...item,
      field_second_hand_year: "2024"
    }))
  );
  // Forza il re-mount dei componenti TableRow
  setResetKey(prev => prev + 1);
};
  if (loading) {
    return React.createElement("div", {}, "Caricamento...");
  }

  if (error) {
    return React.createElement("div", {}, `Errore: ${error}`);
  }
  const buttonContainerStyle = {
    marginBottom: "20px",
    display: "flex",
    gap: "10px"
  };

  const buttonStyle = {
    padding: "10px 20px",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px"
  };
  return React.createElement(
    "div",
    { style: { padding: "20px" } },
    React.createElement("h1", {}, "Pixel Perfect Pizzas"),
    React.createElement(
      "button",
      {
        onClick: sendAllData,
        style: {
          marginBottom: "20px",
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px"
        }
      },
      "Invia tutti i dati"
    ),      React.createElement(
        "button",
        {
          onClick: resetAllYears,
          style: { ...buttonStyle, backgroundColor: "#ffc107", color: "#000" }
        },
        "Reset anni a 2024"
      ),
    React.createElement(
      "table",
      { style: { width: "100%", borderCollapse: "collapse" } },
      React.createElement(
        "thead",
        {},
        React.createElement(
          "tr",
          {},
          React.createElement("th", {}, "Titolo"),
          React.createElement("th", {}, "Prezzo"),
          React.createElement("th", {}, "Anno"),
          React.createElement("th", {}, "Ore"),
          React.createElement("th", {}, "Codice")
        )
      ),
      React.createElement(
        "tbody",
        {},
        items.map(item => 
        React.createElement(TableRow, { 
            key: `${item.nid}-${resetKey}`, // Key dinamica
            item: item,
            onUpdate: updateItem
        })
        )
      )
    )
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));