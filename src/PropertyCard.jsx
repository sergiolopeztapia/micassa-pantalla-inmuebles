import "./App.css";
import { useRotation } from "./RotationContext";
import logo from "./assets/micassa-logo.png";
import { FaBed, FaCar, FaRulerCombined, FaShower } from "react-icons/fa";
import { FaPlay, FaRegClock } from "react-icons/fa6";

function RotationClock({ durationMs, paused, onToggle }) {
  const radius = 27;
  return (
    <button
      type="button"
      className="rotation-clock"
      style={{ "--duration": `${durationMs}ms` }}
      onClick={onToggle}
      aria-pressed={paused}
      aria-label={paused ? "Reanudar rotación" : "Pausar rotación"}
    >
      <svg className="rotation-clock__ring" viewBox="0 0 64 64">
        <circle className="rotation-clock__track" cx="32" cy="32" r={radius} />
        <circle
          className={
            paused
              ? "rotation-clock__progress rotation-clock__progress--paused"
              : "rotation-clock__progress"
          }
          cx="32"
          cy="32"
          r={radius}
        />
      </svg>
      <span className="rotation-clock__icon">
        {paused ? <FaPlay /> : <FaRegClock />}
      </span>
    </button>
  );
}

function RotationCounter({ current, total }) {
  return (
    <div className="rotation-counter">
      <span className="rotation-counter__current">{current}</span>
      <span className="rotation-counter__sep">/</span>
      <span className="rotation-counter__total">{total}</span>
    </div>
  );
}

// Deterministic fake QR pattern, purely decorative (not a scannable code).
function FakeQrCode({ className = "", seedValue = 42 }) {
  const size = 21;
  const finder = (row, col) =>
    row < 7 && col < 7
      ? true
      : row < 7 && col >= size - 7
        ? true
        : row >= size - 7 && col < 7
          ? true
          : null;

  // Pure index-based pseudo-random generator (no mutation across calls).
  const pseudoRandomAt = (index) => {
    const value = Math.sin(seedValue + index * 12.9898) * 43758.5453;
    return value - Math.floor(value);
  };

  const cells = [];
  let cellIndex = 0;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const inFinder = finder(row, col);
      if (inFinder !== null) continue;
      if (pseudoRandomAt(cellIndex) > 0.55) {
        cells.push({ row, col });
      }
      cellIndex += 1;
    }
  }

  const finderSquare = (top, left) => (
    <g key={`${top}-${left}`} transform={`translate(${left} ${top})`}>
      <rect width="7" height="7" fill="#000" />
      <rect x="1" y="1" width="5" height="5" fill="#fff" />
      <rect x="2" y="2" width="3" height="3" fill="#000" />
    </g>
  );

  return (
    <svg
      className={`fake-qr ${className}`}
      viewBox={`0 0 ${size} ${size}`}
      shapeRendering="crispEdges"
    >
      <rect width={size} height={size} fill="#fff" />
      {cells.map(({ row, col }) => (
        <rect
          key={`${row}-${col}`}
          x={col}
          y={row}
          width="1"
          height="1"
          fill="#000"
        />
      ))}
      {finderSquare(0, 0)}
      {finderSquare(0, size - 7)}
      {finderSquare(size - 7, 0)}
    </svg>
  );
}

function PropertyCard({
  location,
  propertyType,
  operation,
  subtitle,
  mainImage,
  sideImages,
  description,
  reference,
  price,
  beds,
  baths,
  size,
  garages,
  qrSeed,
}) {
  const { current, total, durationMs, paused, togglePause } = useRotation();

  return (
    <div className="screen">
      <div className="card">
        <header className="card__header">
          <div className="header__clock-col">
            <RotationClock
              durationMs={durationMs}
              paused={paused}
              onToggle={togglePause}
            />
          </div>
          <div className="header__info">
            <div className="badge badge--title">{location}</div>
            <div className="badge-stack">
              <div className="badge badge--small">{propertyType}</div>
              <div className="badge badge--small">{operation}</div>
            </div>
          </div>
        </header>

        <h1 className="card__subtitle">{subtitle}</h1>

        <div className="card__body">
          <div className="gallery">
            <div className="gallery__main">
              <img className="gallery__img" src={mainImage} alt={subtitle} />
              <span className="ribbon">DISPONIBLE</span>
            </div>
            <div className="gallery__side">
              {sideImages.map((src) => (
                <img key={src} className="gallery__img" src={src} alt="" />
              ))}
            </div>
          </div>

          <aside className="details">
            <p className="details__text">{description}</p>
            <FakeQrCode className="qr" seedValue={qrSeed} />
            <span className="ref">Ref: {reference}</span>
            <div className="price">{price}</div>
          </aside>
        </div>

        <div className="features">
          <div className="feature">
            <FaBed className="feature__icon" />
            <span className="feature__value">{beds}</span>
          </div>
          <div className="feature">
            <FaShower className="feature__icon" />
            <span className="feature__value">{baths}</span>
          </div>
          <div className="feature">
            <FaRulerCombined className="feature__icon" />
            <span className="feature__value">{size} m²</span>
          </div>
          <div className="feature">
            <FaCar className="feature__icon" />
            <span className="feature__value">{garages}</span>
          </div>
          <div className="features__counter">
            <RotationCounter current={current} total={total} />
          </div>
        </div>

        <footer className="card__footer">
          <img className="logo" src={logo} alt="Micassa Grupo Inmobiliario" />
          <span className="url">www.micassa.net</span>
        </footer>

        <p className="legal">
          LOPD: Le informamos que cualquier dato de carácter personal que
          incluye esta comunicación, está incorporado en un fichero de nuestra
          responsabilidad, pudiendo ejercer sus derechos ARCO por correo postal
          adjuntando copia de su DNI a: AV. DE LOS EMPRESARIOS S/N, EDIFICIO
          AZABACHE, LOCAL 10, 11379 LOS BARRIOS (CÁDIZ). El contenido de este
          correo es estrictamente confidencial.
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
