// Trigger re-check
// AthleteSidePanel (no changes, provided for copying)
import React, { useEffect } from 'react';
import styles from './AthleteSidePanel.module.css';
import { useOutsideClick } from './useOutsideClick';
import { Athlete, AthleteMetric } from './types';

export interface AthleteSidePanelProps {
  athlete: Athlete | null;
  isOpen: boolean;
  loading?: boolean;
  onClose: () => void;
  onEdit?: (athlete: Athlete) => void;
  onSelectTag?: (tag: string) => void;
}

export const AthleteSidePanel: React.FC<AthleteSidePanelProps> = ({
  athlete,
  isOpen,
  loading = false,
  onClose,
  onEdit,
  onSelectTag
}) => {
  const ref = useOutsideClick<HTMLDivElement>(() => {
    if (isOpen) onClose();
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} aria-hidden={!isOpen}>
      <aside ref={ref} className={styles.panel} role="complementary" aria-label="Athlete details">
        <header className={styles.header}>
          <h2 className={styles.title}>
            {loading ? 'Loading...' : athlete ? athlete.name : 'No Athlete Selected'}
          </h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close panel">×</button>
        </header>
        <div className={styles.content}>
          {loading && <div className={styles.skeleton}>Loading athlete data...</div>}
          {!loading && !athlete && (
            <div className={styles.empty}>Select an athlete to view details.</div>
          )}
          {!loading && athlete && (
            <>
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Profile</h3>
                <ul className={styles.list}>
                  <li><span>Age:</span> {athlete.age}</li>
                  <li><span>Country:</span> {athlete.country}</li>
                  <li><span>Sport:</span> {athlete.sport}</li>
                  {athlete.rank && <li><span>Rank:</span> {athlete.rank}</li>}
                </ul>
              </section>
              {athlete.metrics && (
                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>Recent Metrics</h3>
                  <ul className={styles.list}>
                    {athlete.metrics.map((m: AthleteMetric) => (
                      <li key={m.label}>
                        <span>{m.label}:</span> {m.value}{m.unit ? ` ${m.unit}` : ''}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {athlete.tags && athlete.tags.length > 0 && (
                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>Tags</h3>
                  <div className={styles.tags}>
                    {athlete.tags.map((tag: string) => (
                      <button
                        key={tag}
                        className={styles.tag}
                        onClick={() => onSelectTag?.(tag)}
                        type="button"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </section>
              )}
              {athlete.notes && (
                <section className={styles.section}>
                  <h3 className={styles.sectionTitle}>Notes</h3>
                  <p className={styles.notes}>{athlete.notes}</p>
                </section>
              )}
            </>
          )}
        </div>
        <footer className={styles.footer}>
          <button
            className={styles.actionBtn}
            disabled={!athlete || loading}
            onClick={() => athlete && onEdit?.(athlete)}
          >
            Edit
          </button>
        </footer>
      </aside>
    </div>
  );
};
