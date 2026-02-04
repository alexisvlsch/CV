const hexagonSize = 75;
const hexagonMargin = 3;
const hexagonWidth = hexagonSize;
const hexagonHeight = hexagonSize * 1.1;
const rowSpacing = hexagonSize * 0.8;
const baseMarginTop = -36 - 0.275 * (hexagonSize - 100);
const computedMarginTop = baseMarginTop + hexagonMargin;
const oddRowMarginLeft = -(hexagonSize / 2) - 10;
const evenRowMarginLeft = hexagonMargin / 2 - 10;

function createHexagonBackground() {
  const container = document.getElementById('hexagon-background');
  if (!container) return;

  const rows = Math.ceil(window.innerHeight / rowSpacing);
  const columns = Math.ceil(window.innerWidth / hexagonWidth) + 1;

  container.innerHTML = '';

  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row = document.createElement('div');
    row.className = 'hexagon-row';
    row.style.marginTop = computedMarginTop + 'px';
    row.style.marginLeft = ((rowIndex + 1) % 2 === 0 ? evenRowMarginLeft : oddRowMarginLeft) + 'px';

    for (let colIndex = 0; colIndex < columns; colIndex++) {
      const hexagon = document.createElement('div');
      hexagon.className = 'hexagon';
      hexagon.style.width = hexagonWidth + 'px';
      hexagon.style.height = hexagonHeight + 'px';
      hexagon.style.marginLeft = hexagonMargin + 'px';
      row.appendChild(hexagon);
    }

    container.appendChild(row);
  }
}

createHexagonBackground();
window.addEventListener('resize', createHexagonBackground);