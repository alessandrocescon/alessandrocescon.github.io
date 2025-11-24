const TableRow = ({ item, onUpdate }) => {
  const [year, setYear] = React.useState(item.field_second_hand_year);
  const [isSaving, setIsSaving] = React.useState(false);
  const [status, setStatus] = React.useState(null);

  // Sincronizza lo stato locale quando item cambia dall'esterno
  React.useEffect(() => {
    setYear(item.field_second_hand_year);
  }, [item.field_second_hand_year]);

  const handleYearChange = (e) => {
    setYear(e.target.value);
    setStatus(null);
  };

  const handleSave = () => {
    setIsSaving(true);
    setStatus(null);

    const dataToSend = {
      nid: item.nid,
      title: item.title,
      field_second_hand_year: year,
      Price: item.Price,
      Hour: item.Hour,
      field_second_hand_code: item.field_second_hand_code
    };

    fetch('https://mensa.visa.it/updateitem.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend)
    })
      .then(response => response.text())
      .then(result => {
        setIsSaving(false);
        if (result.trim() === '1') {
          setStatus('success');
          onUpdate(item.nid, { field_second_hand_year: year });
        } else {
          setStatus('error');
        }
      })
      .catch(error => {
        console.error('Errore:', error);
        setIsSaving(false);
        setStatus('error');
      });
  };

  const rowStyle = {
    borderBottom: "1px solid #ddd",
    backgroundColor: status === 'success' ? '#d4edda' : status === 'error' ? '#f8d7da' : 'transparent',
    transition: 'background-color 0.3s'
  };

  const inputStyle = {
    padding: "4px 8px",
    width: "80px",
    marginRight: "8px"
  };

  const buttonStyle = {
    padding: "4px 12px",
    backgroundColor: isSaving ? '#ccc' : '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: isSaving ? 'not-allowed' : 'pointer'
  };

  return React.createElement(
    "tr",
    { style: rowStyle },
    React.createElement("td", { style: { padding: "8px" } }, item.title),
    React.createElement("td", { style: { padding: "8px" } }, `€${item.Price}`),
    React.createElement(
      "td",
      { style: { padding: "8px" } },
      React.createElement("input", {
        type: "text",
        value: year,
        onChange: handleYearChange,
        disabled: isSaving,
        style: inputStyle
      }),
      React.createElement(
        "button",
        {
          onClick: handleSave,
          disabled: isSaving,
          style: buttonStyle
        },
        isSaving ? "Invio..." : "Salva"
      )
    ),
    React.createElement("td", { style: { padding: "8px" } }, item.Hour),
    React.createElement("td", { style: { padding: "8px" } }, item.field_second_hand_code)
  );
};