import React, { useEffect, useRef, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './MarketplaceNetwork.module.css';

/**
 * A small force-directed network that visualizes the marketplace the lab
 * studies. Buyers on the left, human and AI sellers on the right, a
 * central "warrant" node between them. Edges represent offered claims.
 *
 * Rendered only in the browser because the force simulation needs a
 * running animation loop. On the server we fall back to an accessible
 * static fallback so the hero space is never empty.
 */

const NODES = [
  { id: 'b1', kind: 'buyer', label: 'Buyer' },
  { id: 'b2', kind: 'buyer', label: 'Buyer' },
  { id: 'b3', kind: 'buyer', label: 'Buyer' },
  { id: 'b4', kind: 'buyer', label: 'Buyer' },
  { id: 'b5', kind: 'buyer', label: 'Buyer' },
  { id: 'w',  kind: 'warrant', label: 'Truth warrant' },
  { id: 's1', kind: 'seller', label: 'Human seller' },
  { id: 's2', kind: 'seller', label: 'Human seller' },
  { id: 's3', kind: 'seller', label: 'Human seller' },
  { id: 's4', kind: 'seller', label: 'Human seller' },
  { id: 'a1', kind: 'ai',     label: 'AI seller' },
  { id: 'a2', kind: 'ai',     label: 'AI seller' },
  { id: 'a3', kind: 'ai',     label: 'AI seller' },
];

const LINKS = [
  { source: 'b1', target: 'w' },
  { source: 'b2', target: 'w' },
  { source: 'b3', target: 'w' },
  { source: 'b4', target: 'w' },
  { source: 'b5', target: 'w' },
  { source: 'w',  target: 's1' },
  { source: 'w',  target: 's2' },
  { source: 'w',  target: 's3' },
  { source: 'w',  target: 's4' },
  { source: 'w',  target: 'a1' },
  { source: 'w',  target: 'a2' },
  { source: 'w',  target: 'a3' },
  { source: 's1', target: 'b1' },
  { source: 'a1', target: 'b3' },
  { source: 's3', target: 'b4' },
];

const NODE_RADIUS = {
  buyer: 14,
  seller: 16,
  ai: 17,
  warrant: 34,
};

const NODE_FILL = {
  buyer: '#e6f0fa',
  seller: '#dcece2',
  ai: '#e8dff5',
  warrant: '#0a0a0a',
};

const NODE_STROKE = {
  buyer: '#8fb8d6',
  seller: '#76a88e',
  ai: '#9b7cc9',
  warrant: '#0075c0',
};

function LiveNetwork() {
  const svgRef = useRef(null);
  const [nodes, setNodes] = useState(null);
  const [links, setLinks] = useState(null);
  const [hoverId, setHoverId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let simulation;
    let frame;

    async function run() {
      const d3 = await import('d3-force');
      if (cancelled) return;

      const width = 560;
      const height = 440;

      // Seed left/right initial positions so the simulation settles quickly
      // into the buyer-left / seller-right layout the page needs.
      const seeded = NODES.map((n, i) => {
        let x;
        if (n.kind === 'buyer') x = 90;
        else if (n.kind === 'warrant') x = width / 2;
        else x = width - 90;
        // stagger vertical seed so the simulation has something to spread from
        return { ...n, x, y: 60 + ((i * 71) % (height - 120)) };
      });
      const linkObjs = LINKS.map((l) => ({ ...l }));

      simulation = d3.forceSimulation(seeded)
        .force('link', d3.forceLink(linkObjs).id((d) => d.id).distance((l) => {
          if (l.source.kind === 'warrant' || l.target.kind === 'warrant') return 140;
          return 200;
        }).strength(0.35))
        .force('charge', d3.forceManyBody().strength(-280))
        .force('center', d3.forceCenter(width / 2, height / 2).strength(0.05))
        .force('x', d3.forceX((d) => {
          if (d.kind === 'buyer') return 95;
          if (d.kind === 'warrant') return width / 2;
          return width - 95;
        }).strength(0.28))
        .force('y', d3.forceY((d) => {
          // Group sellers (top half) and AI sellers (bottom half) subtly.
          if (d.kind === 'seller') return height * 0.35;
          if (d.kind === 'ai') return height * 0.75;
          return height / 2;
        }).strength(0.09))
        .force('collision', d3.forceCollide().radius((d) => NODE_RADIUS[d.kind] + 8))
        .alpha(1)
        .alphaDecay(0.028);

      const tick = () => {
        setNodes(seeded.map((n) => ({ ...n })));
        setLinks(linkObjs.map((l) => ({
          source: { ...l.source },
          target: { ...l.target },
        })));
        frame = requestAnimationFrame(tick);
      };
      tick();

      // Stop the heavy simulation after it settles, then keep a gentle drift
      // so the graph feels alive without being distracting.
      setTimeout(() => {
        if (cancelled) return;
        simulation.alphaTarget(0.02).restart();
      }, 4000);
    }

    run();

    return () => {
      cancelled = true;
      if (frame) cancelAnimationFrame(frame);
      if (simulation) simulation.stop();
    };
  }, []);

  if (!nodes || !links) {
    return <StaticFallback />;
  }

  return (
    <svg
      ref={svgRef}
      viewBox='0 0 560 440'
      className={styles.network}
      role='img'
      aria-label='A marketplace network showing buyers, human sellers, AI sellers, and a central truth warrant'
    >
      {/* Always-visible group labels anchor the layout even before a
          visitor hovers. Positioned at the top and bottom of each column. */}
      <g className={styles.groupLabels}>
        <text x='90' y='28' textAnchor='middle' className={styles.groupLabel}>
          BUYERS
        </text>
        <text x='465' y='28' textAnchor='middle' className={styles.groupLabel}>
          SELLERS
        </text>
        <text x='465' y='420' textAnchor='middle' className={styles.groupLabel}>
          AI AGENT SELLERS
        </text>
      </g>
      <g className={styles.edges}>
        {links.map((l, i) => {
          const active = hoverId && (l.source.id === hoverId || l.target.id === hoverId);
          return (
            <line
              key={i}
              x1={l.source.x}
              y1={l.source.y}
              x2={l.target.x}
              y2={l.target.y}
              stroke={active ? '#0075c0' : '#cfcdc8'}
              strokeWidth={active ? 1.4 : 0.9}
              strokeDasharray={l.source.kind === 'warrant' || l.target.kind === 'warrant' ? '0' : '3 4'}
              opacity={active ? 0.9 : 0.55}
            />
          );
        })}
      </g>

      <g className={styles.nodes}>
        {nodes.map((n) => {
          const r = NODE_RADIUS[n.kind];
          const isWarrant = n.kind === 'warrant';
          return (
            <g
              key={n.id}
              transform={`translate(${n.x}, ${n.y})`}
              onMouseEnter={() => setHoverId(n.id)}
              onMouseLeave={() => setHoverId(null)}
              className={styles.nodeGroup}
            >
              <circle
                r={r}
                fill={NODE_FILL[n.kind]}
                stroke={NODE_STROKE[n.kind]}
                strokeWidth={isWarrant ? 2 : 1.25}
              />
              {isWarrant && (
                <>
                  <text
                    y={-3}
                    textAnchor='middle'
                    fill='#ffffff'
                    fontSize='9'
                    fontWeight='700'
                    letterSpacing='0.05em'
                  >
                    TRUTH
                  </text>
                  <text
                    y={9}
                    textAnchor='middle'
                    fill='#ffffff'
                    fontSize='9'
                    fontWeight='700'
                    letterSpacing='0.05em'
                  >
                    WARRANT
                  </text>
                </>
              )}
              {hoverId === n.id && !isWarrant && (
                <text
                  y={-r - 6}
                  textAnchor='middle'
                  fontSize='10'
                  fill='#1a1a1a'
                  fontWeight='600'
                >
                  {n.label}
                </text>
              )}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/**
 * Static fallback for the initial server-rendered HTML and for the split
 * second before d3 has loaded. Shows the same topology without motion.
 */
function StaticFallback() {
  const positions = {
    b1: [95, 75],  b2: [95, 145], b3: [95, 215], b4: [95, 285], b5: [95, 355],
    w:  [280, 220],
    s1: [465, 70], s2: [465, 130], s3: [465, 190], s4: [465, 250],
    a1: [465, 320], a2: [465, 370], a3: [465, 415],
  };
  return (
    <svg viewBox='0 0 560 440' className={styles.network} role='img' aria-label='Marketplace network'>
      <text x='90' y='28' textAnchor='middle' fill='#7a7a7a' fontSize='10' fontWeight='700' letterSpacing='0.12em'>BUYERS</text>
      <text x='465' y='28' textAnchor='middle' fill='#7a7a7a' fontSize='10' fontWeight='700' letterSpacing='0.12em'>SELLERS</text>
      <text x='465' y='435' textAnchor='middle' fill='#7a7a7a' fontSize='10' fontWeight='700' letterSpacing='0.12em'>AI AGENT SELLERS</text>
      {LINKS.map((l, i) => (
        <line
          key={i}
          x1={positions[l.source][0]} y1={positions[l.source][1]}
          x2={positions[l.target][0]} y2={positions[l.target][1]}
          stroke='#cfcdc8' strokeWidth={0.9} opacity={0.55}
        />
      ))}
      {NODES.map((n) => {
        const [x, y] = positions[n.id];
        const r = NODE_RADIUS[n.kind];
        return (
          <g key={n.id} transform={`translate(${x},${y})`}>
            <circle r={r} fill={NODE_FILL[n.kind]} stroke={NODE_STROKE[n.kind]} strokeWidth={n.kind === 'warrant' ? 2 : 1.25} />
            {n.kind === 'warrant' && (
              <>
                <text y={-3} textAnchor='middle' fill='#ffffff' fontSize='9' fontWeight='700' letterSpacing='0.05em'>TRUTH</text>
                <text y={9} textAnchor='middle' fill='#ffffff' fontSize='9' fontWeight='700' letterSpacing='0.05em'>WARRANT</text>
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function MarketplaceNetwork() {
  return (
    <div className={styles.wrapper}>
      <BrowserOnly fallback={<StaticFallback />}>
        {() => <LiveNetwork />}
      </BrowserOnly>
      <div className={styles.legend}>
        <span className={`${styles.swatch} ${styles.swatchBuyer}`} />
        Buyers
        <span className={`${styles.swatch} ${styles.swatchSeller}`} />
        Sellers
        <span className={`${styles.swatch} ${styles.swatchAI}`} />
        AI sellers
      </div>
    </div>
  );
}
