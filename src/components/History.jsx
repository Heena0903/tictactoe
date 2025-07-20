const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {
          //curly brackets to interpolate javascript into jsx
          history.map((_, index) => (
            <li key={index}>
              <button
                type="button"
                className={`btn-move ${currentMove === index ? "active" : ""}`}
                onClick={() => moveTo(index)}
              >
                {index === 0 ? "Go to Game Start" : `Go to move #${index}`}
              </button>
            </li>
          )) //from dot map callback we also returning jsx markup
        }
      </ul>
    </div>
  );
};

export default History;
